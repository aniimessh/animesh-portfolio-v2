import type { StaticImageData } from "next/image";

export type ExperienceCardProps = {
  company: string;
  location: string;
  role: string;
  duration: string;
  responsibilities: string[];
};

export type BadgeProps = {
  text: string;
};

export type ProjectLinkProps = {
  href: string;
  label: string;
};

export type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  links: { href: string; label: string }[];
  image: StaticImageData; // Using StaticImageData for Next.js Image
};
