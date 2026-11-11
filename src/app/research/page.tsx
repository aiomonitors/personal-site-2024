import Link from "next/link";

const documents = [
  {
    title: "Claude sports debrief",
    description:
      "A research debrief on sports card collecting, selling, and the hobby.",
    author: "Claude",
    href: "/claude-sports-debrief.html",
  },
  {
    title: "Luna sports debrief",
    description:
      "A research report on the baseball and football card collector economy.",
    author: "Luna",
    href: "/luna-sports-debrief.html",
  },
  {
    title: "Bargain hunting playbook",
    description: "A playbook for finding value in sports card deals.",
    author: "Claude",
    href: "/bargain-hunting-playbook.html",
  },
  {
    title: "Ripping playbook 2026",
    description: "A 2026 playbook for sports card pack ripping.",
    author: "Claude",
    href: "/ripping-playbook-2026.html",
  },
  {
    title: "Ripping economics report 2026",
    description: "An analysis of the economics of sports card pack ripping.",
    author: "Luna",
    href: "/ripping-economics-report-2026.html",
  },
  {
    title: "Value bin flipping report 2026",
    description: "A report on flipping low-cost cards from value bins.",
    author: "Luna",
    href: "/value-bin-flipping-report-2026.html",
  },
  {
    title: "eBay sell-through playbook",
    description: "A playbook for improving sports card sales on eBay.",
    author: "Claude",
    href: "/ebay-sell-through-playbook.html",
  },
  {
    title: "Home bulking guide for skinny builds",
    description: "A home workout and nutrition guide for gaining muscle.",
    author: "Claude",
    href: "/home-bulking-guide-skinny-builds.html",
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
              <div className="flex items-start justify-between gap-4">
                <h2 className="font-jetBrainsMono text-lg font-medium text-header">
                  {document.title}
                </h2>
                <span className="shrink-0 rounded-full border border-imageBorder px-3 py-1 text-xs text-secondary">
                  {document.author}
                </span>
              </div>
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
