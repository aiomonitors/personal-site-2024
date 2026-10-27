import Image from "next/image";
import { cn } from "@/utils";

export interface SideProjectItemProps {
  logoSrc?: string;
  logoAlt?: string;
  projectName: string;
  projectUrl?: string;
  description: string;
  status: "soon" | "released" | "acquired" | "past" | "in dev";
}

export function SideProjectItem({
  logoSrc,
  logoAlt,
  projectName,
  projectUrl,
  description,
  status,
}: SideProjectItemProps) {
  const itemClassName = cn(
    "flex h-full flex-col justify-between gap-6 rounded-xl border border-imageBorder bg-white/10 p-5"
  );

  const itemLeftClassName = "flex flex-col gap-4";

  const statusColors = {
    soon: "bg-yellow shadow-yellow",
    released: "bg-green shadow-green",
    acquired: "bg-green shadow-green",
    past: "bg-red shadow-red",
    "in dev": "bg-yellow shadow-yellow",
  };

  return (
    <div className={itemClassName}>
      <div className={itemLeftClassName}>
        {logoSrc ? (
          <Image
            src={logoSrc}
            alt={logoAlt || projectName}
            width={36}
            height={36}
            className="rounded-lg w-12 h-12 border-2 border-imageBorder"
          />
        ) : (
          <div className="rounded-lg w-12 h-12 border-2 border-imageBorder flex items-center justify-center">
            <span className="text-2xl">?</span>
          </div>
        )}
        <div className="flex flex-col gap-0.5">
          <h3 className="text-lg font-medium text-header">
            {projectUrl ? (
              <a href={projectUrl} target="_blank" rel="noreferrer" className="hover:underline">
                {projectName}
              </a>
            ) : (
              projectName
            )}
          </h3>
          <p className="text-md text-secondary">{description}</p>
        </div>
      </div>

      <div className="flex w-fit shrink-0 gap-2 whitespace-nowrap rounded-lg px-2 py-1 bg-white/10 items-center border border-imageBorder">
        <span className={`rounded-full w-2 h-2 ${statusColors[status]}`}></span>
        <span className="text-secondary text-sm">{status}</span>
      </div>
    </div>
  );
}
