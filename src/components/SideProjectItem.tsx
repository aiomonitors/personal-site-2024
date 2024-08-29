import Image from "next/image";
import { cn } from "@/utils";

export interface SideProjectItemProps {
  logoSrc?: string;
  logoAlt?: string;
  projectName: string;
  description: string;
  status: "soon" | "acquired" | "past";
}

export function SideProjectItem({ logoSrc, logoAlt, projectName, description, status }: SideProjectItemProps) {
  const itemClassName = cn(
    "flex flex-col gap-4 flex-1 justify-between items-start max-w-72 bg-white/10 p-4 rounded-lg border border-imageBorder min-w-64",
    "md:max-w-full md:bg-transparent md:p-0 md:rounded-none md:border-none md:flex-row md:items-center md:justify-between"
  );

  const itemLeftClassName = cn(
    "flex gap-4 items-start flex-col",
    "md:flex-row md:items-center"
  );

  const statusColors = {
    soon: "bg-yellow shadow-yellow",
    acquired: "bg-green shadow-green",
    past: "bg-red shadow-red",
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
          <h3 className="text-lg font-medium text-header">{projectName}</h3>
          <p className="text-md text-secondary">{description}</p>
        </div>
      </div>

      <div className="flex gap-2 rounded-lg px-2 py-1 bg-white/10 items-center border border-imageBorder">
        <span className={`rounded-full w-2 h-2 ${statusColors[status]}`}></span>
        <span className="text-secondary text-sm">{status}</span>
      </div>
    </div>
  );
}