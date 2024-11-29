import type { ProjectCardProps, ProjectLinkProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../badge/badge";

const ProjectLink: React.FC<ProjectLinkProps> = ({ href, label }) => (
  <Link href={href} className="hover:underline text-xs">
    {label}
  </Link>
);

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  links,
  image,
}) => (
  <div className="border border-white/20 p-2 rounded-lg mt-4">
    <div className="flex items-center gap-5 md:flex-row flex-col">
      <div className="md:w-3/4 w-full">
        <p className="font-semibold text-xl tracking-wide">{title}</p>
        <p className="text-xs text-justify">{description}</p>
        <div className="mt-1">
          {technologies.map((tech) => (
            <Badge key={tech} text={tech} />
          ))}
        </div>
        <div className="mt-4 flex gap-4">
          {links.map((link) => (
            <ProjectLink key={link.href} href={link.href} label={link.label} />
          ))}
        </div>
      </div>
      <div className="md:w-1/4 w-full border rounded-lg border-white/20 overflow-hidden">
        <Image
          src={image}
          alt={`${title}-image`}
          className="rounded-lg hover:scale-105 h-28 transition-all duration-200 ease-in-out object-contain"
        />
      </div>
    </div>
  </div>
);
