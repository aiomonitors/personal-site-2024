export interface WorkExperienceItemProps {
  logoSrc: string;
  logoAlt: string;
  company: string;
  role: string;
  period: string;
}

import Image from "next/image";
import { cn } from "@/utils";

export function WorkExperienceItem({ logoSrc, logoAlt, company, role, period }: WorkExperienceItemProps) {
  const itemClassName = cn(
    "flex flex-col gap-4 flex-1 justify-between items-start max-w-72 bg-white/10 p-4 rounded-lg border border-imageBorder min-w-64",
    "md:max-w-full md:bg-transparent md:p-0 md:rounded-none md:border-none md:flex-row md:items-center md:justify-between"
  );

  const itemLeftClassName = cn(
    "flex gap-4 items-start flex-col",
    "md:flex-row md:items-center"
  );

  return (
    <div className={itemClassName}>
      <div className={itemLeftClassName}>
        <Image
          src={logoSrc}
          alt={logoAlt}
          width={36}
          height={36}
          className="rounded-lg w-12 h-12 border-2 border-imageBorder"
        />
        <div className="flex flex-col gap-0.5">
          <h3 className="text-lg font-medium text-header">{company}</h3>
          <p className="text-md text-secondary">{role}</p>
        </div>
      </div>

      <p className="text-md text-secondary font-jetBrainsMono">{period}</p>
    </div>
  );
}
