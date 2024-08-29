import { cn } from "@/utils";
import Image from "next/image";

export default function Home() {
  const itemClassName = cn(
    "flex flex-col gap-4 flex-1 justify-start items-start max-w-72 bg-white/10 p-4 rounded-lg border border-imageBorder min-w-64",
    "md:max-w-full md:bg-transparent md:p-0 md:rounded-none md:border-none md:flex-row md:items-center md:justify-between"
  );

  const itemLeftClassName = cn(
    "flex gap-4 items-start flex-col",
    "md:flex-row md:items-center"
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 bg-background md:p-24">
      <div className="flex flex-col justify-center w-full max-w-3xl">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-medium font-jetBrainsMono text-header">
            Shihab Chowdhury is a software engineer
          </h1>
          <p className="text-primary">
            Currently working at{" "}
            <a
              href="https://prudential.com"
              target="_blank"
              className="underline decoration-dotted text-primary hover:text-blue-500 transition-colors duration-100 ease-in-out visited:text-primary"
            >
              Prudential Financial
            </a>
            , building better web experience for our advisors and partners that
            sell our life insurance products. Previously worked at{" "}
            <a
              href="https://prismtechnologies.io"
              target="_blank"
              className="underline decoration-dotted text-primary hover:text-purple-500 transition-colors duration-100 ease-in-out visited:text-primary"
            >
              Prism
            </a>
            , where I helped lead a full abstraction of the desktop app, so that
            we could maintain two separate products at once. I&apos;m passionate
            about building modern applications, both on the web and mobile.
          </p>
        </div>

        {/* Work Section */}
        <div className="flex flex-col gap-4 mt-8">
          <h2 className="text-xl font-medium font-jetBrainsMono text-secondary">
            ~/work
          </h2>

          <div className="flex flex-row gap-4 overflow-x-auto md:flex-col">
            {/* Item 1 */}
            <div className={itemClassName}>
              <div className={itemLeftClassName}>
                <Image
                  src="/pru.png"
                  alt="Prudential"
                  width={36}
                  height={36}
                  className="rounded-lg w-12 h-12 border-2 border-imageBorder"
                />
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-lg font-medium text-header">
                    Prudential Financial
                  </h3>
                  <p className="text-md text-secondary">
                    Senior Software Engineer
                  </p>
                </div>
              </div>

              <p className="text-md text-secondary font-jetBrainsMono">
                2022 - 20??
              </p>
            </div>

            {/* Item 2 */}
            <div className={itemClassName}>
              <div className={itemLeftClassName}>
                <Image
                  src="/prism.png"
                  alt="Prism Technologies"
                  width={36}
                  height={36}
                  className="rounded-lg w-12 h-12 border-2 border-imageBorder"
                />
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-lg font-medium text-header">Prism</h3>
                  <p className="text-md text-secondary">Software Engineer</p>
                </div>
              </div>

              <p className="text-md text-secondary font-jetBrainsMono">
                2021 - 2022
              </p>
            </div>

            {/* Item 3 */}
            <div className={itemClassName}>
              <div className={itemLeftClassName}>
                <Image
                  src="/scout.png"
                  alt="Scout"
                  width={36}
                  height={36}
                  className="rounded-lg w-12 h-12 border-2 border-imageBorder"
                />
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-lg font-medium text-header">Scout</h3>
                  <p className="text-md text-secondary">Software Engineer</p>
                </div>
              </div>

              <p className="text-md text-secondary font-jetBrainsMono">
                2020 - 2021
              </p>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="flex flex-col gap-4 mt-8">
          <h2 className="text-xl font-medium font-jetBrainsMono text-secondary">
            ~/side projects
          </h2>

          <div className="flex flex-row gap-4 overflow-x-auto md:flex-col">
            {/* Item 1 */}
            <div className={itemClassName}>
              <div className={itemLeftClassName}>
                <div className="rounded-lg w-12 h-12 border-2 border-imageBorder flex items-center justify-center">
                  <span className="text-2xl">?</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-lg font-medium text-header">
                    MusicBridge
                  </h3>
                  <p className="text-md text-secondary">
                    A mobile app to de-fragment music lovers
                  </p>
                </div>
              </div>

              <div className="flex gap-2 rounded-lg px-2 py-1 bg-white/10 items-center border border-imageBorder">
                <span className="bg-yellow rounded-full w-2 h-2 shadow-yellow"></span>
                <span className="text-secondary text-sm">soon</span>
              </div>
            </div>

            {/* Item 2 */}
            <div className={itemClassName}>
              <div className={itemLeftClassName}>
                <Image
                  src="/vision.png"
                  alt="Vision"
                  width={36}
                  height={36}
                  className="rounded-lg w-12 h-12 border-2 border-imageBorder"
                />
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-lg font-medium text-header">Vision</h3>
                  <p className="text-md text-secondary">
                    a nft rarity and collection tracking platform
                  </p>
                </div>
              </div>

              <div className="flex gap-2 rounded-lg px-2 py-1 bg-white/10 items-center border border-imageBorder">
                <span className="bg-green rounded-full w-2 h-2 shadow-green"></span>
                <span className="text-secondary text-sm">acquired</span>
              </div>
            </div>

            {/* Item 3 */}
            <div className={itemClassName}>
              <div className={itemLeftClassName}>
                <Image
                  src="/discoders.jpg"
                  alt="Discoders"
                  width={36}
                  height={36}
                  className="rounded-lg w-12 h-12 border-2 border-imageBorder"
                />
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-lg font-medium text-header">Discoders</h3>
                  <p className="text-md text-secondary">
                    web scraping and monitoring solution for sneaker communities
                  </p>
                </div>
              </div>

              <div className="flex gap-2 rounded-lg px-2 py-1 bg-white/10 items-center border border-imageBorder">
                <span className="bg-red rounded-full w-2 h-2 shadow-red"></span>
                <span className="text-secondary text-sm">past</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
