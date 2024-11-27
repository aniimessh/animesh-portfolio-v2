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
    <div className="flex items-start">
      <div className="w-3/4">
        <p className="font-semibold text-xl tracking-wide">{title}</p>
        <p className="text-xs">{description}</p>
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
      <div className="w-1/4">
        <Image src={image} alt={`${title}-image`} className="rounded-lg" />
      </div>
    </div>
  </div>
);
