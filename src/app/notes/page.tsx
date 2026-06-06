import type { Metadata } from "next";
import { NoteListItem } from "@/components/NoteListItem";
import { getPublishedNotes } from "@/lib/notes";

export const metadata: Metadata = {
  title: "Notes",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function NotesPage() {
  const notes = await getPublishedNotes();

  return (
    <main className="flex min-h-screen flex-col items-center bg-background p-6 pb-24 md:p-24">
      <div className="flex w-full max-w-3xl flex-col justify-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-medium font-jetBrainsMono text-header">
            ~/notes
          </h1>
          <p className="text-primary">
            A hidden collection of notes and writing.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          {notes.length > 0 ? (
            notes.map((note) => <NoteListItem key={note.slug} {...note} />)
          ) : (
            <p className="text-secondary">No notes published yet.</p>
          )}
        </div>
      </div>
    </main>
  );
}
