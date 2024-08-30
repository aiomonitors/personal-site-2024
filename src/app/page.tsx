import { cn } from "@/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  WorkExperienceItem,
  WorkExperienceItemProps,
} from "@/components/WorkExperienceItem";
import {
  SideProjectItem,
  SideProjectItemProps,
} from "@/components/SideProjectItem";
import { Carousel } from "@/components/Carousel";
import Instagram from "@/components/icons/instagram";
import Linkedin from "@/components/icons/linkedin";
import Github from "@/components/icons/github";
import Email from "@/components/icons/email";
import X from "@/components/icons/x";

export default function Home() {
  const workExperiences: WorkExperienceItemProps[] = [
    {
      logoSrc: "/pru.png",
      logoAlt: "Prudential",
      company: "Prudential Financial",
      role: "Senior Software Engineer",
      period: "2022 - 20??",
    },
    {
      logoSrc: "/prism.png",
      logoAlt: "Prism Technologies",
      company: "Prism",
      role: "Software Engineer",
      period: "2021 - 2022",
    },
    {
      logoSrc: "/scout.png",
      logoAlt: "Scout",
      company: "Scout",
      role: "Software Engineer",
      period: "2020 - 2021",
    },
  ];

  const sideProjects: SideProjectItemProps[] = [
    {
      projectName: "MusicBridge",
      description: "A mobile app to de-fragment music lovers",
      status: "soon",
    },
    {
      logoSrc: "/vision.png",
      logoAlt: "Vision",
      projectName: "Vision",
      description: "a nft rarity and collection tracking platform",
      status: "acquired",
    },
    {
      logoSrc: "/discoders.jpg",
      logoAlt: "Discoders",
      projectName: "Discoders",
      description:
        "web scraping and monitoring solution for sneaker communities",
      status: "past",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 bg-background pb-24 md:p-24">
      <div className="flex flex-col justify-center w-full max-w-3xl">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-medium font-jetBrainsMono text-header">
            Shihab Chowdhury is a software engineer
          </h1>
          <p className="text-primary">
            Currently working at{" "}
            <a
              href="https://pru.com"
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
          <div className="md:hidden">
            <Carousel
              items={workExperiences.map((experience, index) => (
                <WorkExperienceItem key={index} {...experience} />
              ))}
            />
          </div>

          <div className="hidden md:flex flex-col gap-4 overflow-x-auto">
            {workExperiences.map((experience, index) => (
              <WorkExperienceItem key={index} {...experience} />
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="flex flex-col gap-4 mt-8">
          <h2 className="text-xl font-medium font-jetBrainsMono text-secondary">
            ~/side projects
          </h2>

          <div className="md:hidden">
            <Carousel
              items={sideProjects.map((project, index) => (
                <SideProjectItem key={index} {...project} />
              ))}
            />
          </div>

          <div className="hidden md:flex flex-col gap-4 overflow-x-auto">
            {sideProjects.map((project, index) => (
              <SideProjectItem key={index} {...project} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-8 bg-white/80 p-4 rounded-xl items-center justify-center border border-imageBorder flex-row fixed bottom-4 md:relative md:inset-0 md:bg-white/10">
        <a
          className="flex flex-1 items-center justify-center"
          href="https://instagram.com/shihabch"
          target="_blank"
        >
          <Instagram size={18} />
        </a>
        <a
          className="flex flex-1 items-center justify-center"
          href="https://linkedin.com/in/shihabch"
          target="_blank"
        >
          <Linkedin size={18} />
        </a>
        <a
          className="flex flex-1 items-center justify-center"
          href="https://x.com/aiomonitors"
          target="_blank"
        >
          <X size={18} />
        </a>
        <a
          className="flex flex-1 items-center justify-center"
          href="mailto:hi@shihab.dev"
        >
          <Email size={18} />
        </a>
        <a
          className="flex flex-1 items-center justify-center"
          href="https://github.com/aiomonitors"
          target="_blank"
        >
          <Github size={18} />
        </a>
      </div>
    </main>
  );
}
