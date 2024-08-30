export interface WorkExperienceItemProps {
  logoSrc: string;
  logoAlt: string;
  company: string;
  role: string;
  period: string;
  id: string;
}

import Image from "next/image";
import { cn } from "@/utils";
import { motion } from "framer-motion";

export function WorkExperienceItem({
  logoSrc,
  logoAlt,
  company,
  role,
  period,
  id,
}: WorkExperienceItemProps) {
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
        <motion.div layoutId={`${id}-logo`}>
          <Image
            src={logoSrc}
            alt={logoAlt}
            width={36}
            height={36}
            className="rounded-lg w-12 h-12 border-2 border-imageBorder"
          />
        </motion.div>
        <div className="flex flex-col gap-0.5">
          <motion.h3
            className="text-lg font-medium text-header"
            layoutId={`${id}-company`}
          >
            {company}
          </motion.h3>
          <motion.p className="text-md text-secondary" layoutId={`${id}-role`}>
            {role}
          </motion.p>
        </div>
      </div>

      <p className="text-md text-secondary font-jetBrainsMono">{period}</p>
    </div>
  );
}
