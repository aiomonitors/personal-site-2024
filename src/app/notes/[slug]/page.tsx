import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { formatNoteDate, getAllNoteSlugs, getNoteBySlug } from "@/lib/notes";

interface NotePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = await getAllNoteSlugs();

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: NotePageProps): Promise<Metadata> {
  const note = await getNoteBySlug(params.slug);

  return {
    title: note?.title ?? "Note",
    description: note?.subtitle,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function NotePage({ params }: NotePageProps) {
  const note = await getNoteBySlug(params.slug);

  if (!note) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background p-6 pb-24 md:p-24">
      <article className="mx-auto flex w-full max-w-3xl flex-col">
        <Link
          href="/notes"
          className="mb-8 text-secondary underline decoration-dotted transition-colors duration-100 ease-in-out hover:text-header"
        >
          ← notes
        </Link>

        <header className="mb-10 flex flex-col gap-3">
          <p className="font-jetBrainsMono text-sm text-secondary">
            {formatNoteDate(note.date)}
          </p>
          <h1 className="text-4xl font-medium font-jetBrainsMono text-header">
            {note.title}
          </h1>
          {note.subtitle ? (
            <p className="text-lg text-secondary">{note.subtitle}</p>
          ) : null}
        </header>

        <div className="prose prose-neutral max-w-none prose-headings:font-jetBrainsMono prose-headings:text-header prose-p:text-primary prose-a:text-primary prose-a:decoration-dotted prose-strong:text-header prose-code:text-header prose-pre:border prose-pre:border-imageBorder prose-pre:bg-white/10 prose-blockquote:border-imageBorder prose-blockquote:text-secondary">
          <MDXRemote source={note.content} />
        </div>
      </article>
    </main>
  );
}
