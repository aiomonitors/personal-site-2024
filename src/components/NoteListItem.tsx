import Link from "next/link";
import { cn } from "@/utils";
import { formatNoteDate } from "@/lib/notes";

export interface NoteListItemProps {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
}

export function NoteListItem({
  slug,
  title,
  subtitle,
  date,
}: NoteListItemProps) {
  const itemClassName = cn(
    "flex flex-col gap-4 flex-1 justify-between items-start bg-white/10 p-4 rounded-lg border border-imageBorder transition-colors duration-100 ease-in-out hover:bg-white/20",
    "md:max-w-full md:bg-transparent md:p-0 md:rounded-none md:border-none md:flex-row md:items-center md:justify-between md:hover:bg-transparent"
  );

  return (
    <Link href={`/notes/${slug}`} className={itemClassName}>
      <div className="flex flex-col gap-0.5">
        <h3 className="text-lg font-medium text-header">{title}</h3>
        {subtitle ? <p className="text-md text-secondary">{subtitle}</p> : null}
      </div>

      <p className="text-md text-secondary font-jetBrainsMono">
        {formatNoteDate(date)}
      </p>
    </Link>
  );
}
