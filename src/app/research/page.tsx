import Link from "next/link";

const documents = [
  {
    title: "Claude sports debrief",
    description:
      "A research debrief on sports card collecting, selling, and the hobby.",
    href: "/claude-sports-debrief.html",
  },
  {
    title: "Luna sports debrief",
    description:
      "A research report on the baseball and football card collector economy.",
    href: "/luna-sports-debrief.html",
  },
];

export default function ResearchPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-6 py-12 md:px-10">
      <Link
        href="/"
        className="text-sm text-secondary underline decoration-dotted hover:text-primary"
      >
        ← Home
      </Link>

      <h1 className="mt-8 font-jetBrainsMono text-3xl font-medium text-header">
        Research
      </h1>
      <p className="mt-3 text-primary">
        Sports card research and reports.
      </p>

      <ul className="mt-8 flex flex-col gap-4">
        {documents.map((document) => (
          <li key={document.href}>
            <a
              href={document.href}
              className="block rounded-xl border border-imageBorder bg-white/60 p-5 transition-colors hover:bg-white"
            >
              <h2 className="font-jetBrainsMono text-lg font-medium text-header">
                {document.title}
              </h2>
              <p className="mt-2 text-sm text-primary">
                {document.description}
              </p>
              <span className="mt-4 inline-block text-sm underline decoration-dotted">
                Read report
              </span>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
