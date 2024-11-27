import type { ExperienceCardProps, ProjectCardProps } from "@/types";
import StudiNotion from "@/public/img/image.png";

export const projects: ProjectCardProps[] = [
  {
    title: "Aura - Video Posting Application",
    description:
      "User-Friendly Interface: Easily upload and share videos with a few taps. Dynamic Browsing: Showcase featured content in an engaging horizontal carousel format.",
    technologies: ["React Native", "Nativewind", "Appwrite", "Typescript"],
    links: [
      { href: "https://github.com/aniimessh/aura-expo", label: "github" },
      {
        href: "https://www.upload-apk.com/en/ngs56UWmSnG6MnR",
        label: "apk link",
      },
    ],
    image: StudiNotion,
  },
  {
    title: "Threads - Social Media Platform",
    description:
      "Developed a social media platform similar to Threads, enabling users to create and engage in threaded discussions. Implemented user authentication using Clerk for secure and seamless login and account management.",
    technologies: ["Next.Js", "TailwindCSS", "Clerk", "MongoDB"],
    links: [
      { href: "https://github.com/aniimessh/StudyNotion", label: "github" },
      { href: "https://threads-one-phi.vercel.app/", label: "live" },
    ],
    image: StudiNotion,
  },
];


export const experiences: ExperienceCardProps[] = [
    {
      company: "Centum World",
      location: "Onsite, Kolkata",
      role: "Software Developer",
      duration: "July 2023 - December 2023",
      responsibilities: [
        "Utilized comprehensive skills in both front-end (React.js, MUI, Tailwind CSS) and back-end development (Node.js, Python) to contribute effectively to multiple projects.",
        "Actively collaborated with cross-functional teams, enhancing communication and ensuring efficient project delivery through Agile methodologies.",
      ],
    },
  ];