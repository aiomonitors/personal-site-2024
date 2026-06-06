import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const notesDirectory = path.join(process.cwd(), "src/content/notes");

export interface NoteMetadata {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  published: boolean;
}

export interface Note extends NoteMetadata {
  content: string;
}

interface NoteFrontmatter {
  title?: unknown;
  subtitle?: unknown;
  date?: unknown;
  published?: unknown;
}

async function getNoteFilenames() {
  try {
    const entries = await fs.readdir(notesDirectory);
    return entries.filter((entry) => entry.endsWith(".mdx"));
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      return [];
    }

    throw error;
  }
}

function filenameToSlug(filename: string) {
  return filename.replace(/\.mdx$/, "");
}

function validateFrontmatter(
  frontmatter: NoteFrontmatter,
  slug: string
): Omit<NoteMetadata, "slug"> {
  if (typeof frontmatter.title !== "string" || !frontmatter.title.trim()) {
    throw new Error(`Note "${slug}" is missing required frontmatter: title`);
  }

  if (typeof frontmatter.date !== "string" || !frontmatter.date.trim()) {
    throw new Error(`Note "${slug}" is missing required frontmatter: date`);
  }

  if (Number.isNaN(Date.parse(frontmatter.date))) {
    throw new Error(`Note "${slug}" has invalid date frontmatter`);
  }

  if (typeof frontmatter.published !== "boolean") {
    throw new Error(
      `Note "${slug}" is missing required boolean frontmatter: published`
    );
  }

  if (
    frontmatter.subtitle !== undefined &&
    typeof frontmatter.subtitle !== "string"
  ) {
    throw new Error(`Note "${slug}" has invalid subtitle frontmatter`);
  }

  return {
    title: frontmatter.title,
    subtitle: frontmatter.subtitle,
    date: frontmatter.date,
    published: frontmatter.published,
  };
}

function sortNotesByDateDesc<T extends NoteMetadata>(notes: T[]) {
  return notes.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

async function readNote(filename: string): Promise<Note> {
  const slug = filenameToSlug(filename);
  const filePath = path.join(notesDirectory, filename);
  const source = await fs.readFile(filePath, "utf8");
  const { content, data } = matter(source);
  const metadata = validateFrontmatter(data, slug);

  return {
    slug,
    ...metadata,
    content,
  };
}

export async function getAllNotes(): Promise<NoteMetadata[]> {
  const filenames = await getNoteFilenames();
  const notes = await Promise.all(filenames.map(readNote));

  return sortNotesByDateDesc(
    notes.map(({ content: _content, ...metadata }) => metadata)
  );
}

export async function getPublishedNotes(): Promise<NoteMetadata[]> {
  const notes = await getAllNotes();
  return notes.filter((note) => note.published);
}

export async function getNoteBySlug(slug: string): Promise<Note | null> {
  const filename = `${slug}.mdx`;

  try {
    return await readNote(filename);
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      return null;
    }

    throw error;
  }
}

export async function getAllNoteSlugs(): Promise<string[]> {
  const filenames = await getNoteFilenames();
  return filenames.map(filenameToSlug);
}

export function formatNoteDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}
