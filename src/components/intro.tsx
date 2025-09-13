"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

// Animation
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/useInView";
import { useActiveSectionContext } from "@/containers/active-section";

export default function Intro() {
  const { ref } = useSectionInView("#home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  // Update active section and time of last click when section is in view
  useEffect(() => {
    // Set active section when the section is in view
    setActiveSection("#home");

    // Set time of last click (or update it based on your logic)
    setTimeOfLastClick(Date.now());
  }, [setActiveSection, setTimeOfLastClick]);

  return (
    <section ref={ref} id="home" className="mb-28 max-w-[75rem] text-center sm:mb-0">
      <div className="flex item-center justify-center">
        <div className="relative">
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 125, damping: 10, duration: 0.2 }}>
            <Image src="/images/about/wiki.jpg" width="400" height="400" alt="portrait" quality="100" priority={true} className="rounded-full object-cover shadow-xl" />
          </motion.div>
        </div>
      </div>
      <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
        <h1 className="mb-10 mt-4 px-4 text-2xl sm:text-4xl">
          <span className="font-medium !leading-[1.5] ">Hello, I&apos;m Wikidotexe</span> <p className="text-[14px]">My journey in the realm of technology has been marked by diverse experience in IT Support and System Engineer.</p>
        </h1>
      </Fade>
      <motion.div className="flex sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <Link
          href="https://drive.wikiarlianm.com/d/s/13Ear4AbgKsWlXshuwpIQaa2u4n9IgbN/UJUxp9qMAlQo_CPy7-wy1WoeaSciU2BY-nLAgL2eGRww"
          target="_blank"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 dark:bg-white/10 active:scale-105 transition"
        >
          Resume
        </Link>
        <a
          className="bg-gray-900 p-4 text-white flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-[1.05] transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/dwiki-arlian-maulana-852b14209/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-gray-900 p-4 text-white flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/wikidotexe"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
