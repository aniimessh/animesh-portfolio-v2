import type { ExperienceCardProps, ProjectCardProps } from "@/types";
import MosaicUI from "@/public/img/mosaic-bg.png";
import Threads from "@/public/img/threads-bg.png";
import Aura from "@/public/img/aura.png";
import Yoom from "@/public/img/yoom.png";

export const projects: ProjectCardProps[] = [
  {
    title: "Mosaic UI - A UI Component Library",
    description:
      "Mosaic is a versatile UI component library that provides free, ready-to-use code snippets for a wide range of components. Designed for developers, Mosaic simplifies the process of creating elegant and responsive interfaces.",
    technologies: ["Next.Js", "TailwindCSS", "gSap", "Framer Motion"],
    links: [
      {
        href: "https://github.com/aniimessh/mosaic-ui",
        label: "github (pvt repo)",
      },
      { href: "https://ui-mosaic.vercel.app/", label: "live" },
    ],
    image: MosaicUI,
  },
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
    image: Aura,
  },
  {
    title: "Threads - Social Media Platform",
    description:
      "Developed a social media platform similar to Threads, enabling users to create and engage in threaded discussions. Implemented user authentication using Clerk for secure and seamless login and account management.",
    technologies: ["Next.Js", "TailwindCSS", "Clerk", "MongoDB"],
    links: [
      { href: "https://github.com/aniimessh/threads", label: "github" },
      { href: "https://threads-one-phi.vercel.app/", label: "live" },
    ],
    image: Threads,
  },
  {
    title: "Yoom - Online Video Calling Application",
    description:
      "It offers features such as real-time video and audio communication, screen sharing, chat, and meeting scheduling, providing a seamless and interactive experience for users to connect and collaborate remotely.",
    technologies: ["Next.Js", "TailwindCSS", "Clerk", "MongoDB"],
    links: [
      { href: "https://github.com/aniimessh/zoom_clone", label: "github" },
      { href: "https://zoom-clone-five-swart.vercel.app/", label: "live" },
    ],
    image: Yoom,
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
  {
    company: "Jivandeep Health Services",
    location: "Onsite, Raipur",
    role: "Frontend Developer",
    duration: "June 2024 - Janurary 2025",
    responsibilities: [
      "Managed both frontend and backend development to deliver end-to-end solutions, ensuring seamless integration and optimal performance across all application layers.",
      "Gained hands-on experience working on real-life projects, enhancing problem-solving skills and understanding of practical development workflows",
    ],
  },
];
