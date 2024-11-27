import React from "react";
import { AiOutlineSpotify } from "react-icons/ai";
import { SlEarphones } from "react-icons/sl";
import { FaGithub } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import CTAButton from "@/components/Button";
import Link from "next/link";

const LeftContent = () => {
  return (
    <div>
      <Link href="/" className="font-host underline">
        animesh.dev
      </Link>
      <p className="mt-6 text-4xl font-semibold -tracking-wider">
        Animesh Gupta
      </p>
      <div className="flex items-center mt-2">
        <p className="text-base">
          When I&apos;m stuck on a coding problem, I find solace in sleep.
        </p>
        <AiOutlineSpotify className="ml-2" size={20} />
        <SlEarphones className="ml-2" size={18} />
      </div>
      <div className="flex items-center mt-6">
        <p className="text-base">
          Hey 👨‍💻 Animesh here! I am a frontend developer <br /> at Jivandeep
          Health Services. I build web applications & mobile application.
        </p>
      </div>
      <div className="mt-6">
        <div className="flex gap-2">
          <Link
            href={
              "https://drive.google.com/file/d/1eBvqMEToA2qzSHZeS7ZuOrYIyamC63nK/view?usp=drive_link"
            }
            target="_blank"
          >
            <CTAButton title="Resume" />
          </Link>
          <Link href={"https://github.com/aniimessh"}>
            <CTAButton Icon={FaGithub} />
          </Link>
          <Link href={"mailto:officialannimesshgupta@gmail.com"}>
            <CTAButton Icon={MdMailOutline} />
          </Link>
          <Link href={"https://www.linkedin.com/in/aniimessh-gupta"}>
            <CTAButton Icon={CiLinkedin} />
          </Link>
          <Link href={"https://twitter.com/aniimessh_1209"}>
            <CTAButton Icon={FaXTwitter} />
          </Link>
        </div>
      </div>

      <div className="mt-16 space-y-3 border-l-2 pl-4 py-2 border-white/40 rounded-md">
        <p>
          <span className="text-white/50 font-semibold">Languages:</span> C++,
          JavaScript, TypeScript{" "}
        </p>
        <p>
          <span className="text-white/50 font-semibold">Frontend:</span>
          React, React native, TailwindCss, Next.js, Shadcn, MUI
        </p>
        <p>
          <span className="text-white/50 font-semibold">Backend:</span>
          Node.js, Express.js, MongoDB
        </p>
        <p>
          <span className="text-white/50 font-semibold">Tools:</span> Git,
          Terminal
        </p>
      </div>
    </div>
  );
};

export default LeftContent;
