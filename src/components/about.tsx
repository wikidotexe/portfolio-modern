"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { Fade } from "react-awesome-reveal";
import { useSectionInView } from "@/lib/useInView";

export default function About() {
  const { ref } = useSectionInView("#about");

  return (
    <motion.section className="max-w-[45rem] text-center mt-32 leading-8 mb-28 sm:mb-40 scroll-mt-28" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.175 }} ref={ref} id="about">
      <div className="container mx-auto">
        <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
          <SectionHeading>About Me</SectionHeading>
        </Fade>

        <div className="lg:text-center">
          <div className="flex-1">
            {/* Content */}
            <div className="text-lg mt-12 xl:mt-3">
              <div className="flex justify-start flex-col">
                <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce={true}>
                  <p className="mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70">
                    With over three years of experience, I have dedicated myself to learning and excelling in the fields of IT Support and Systems Engineering. My journey has been driven by a passion for exploring new technologies and
                    frameworks, constantly pushing the boundaries of my technical expertise. During this time, I have gained valuable hands-on experience in troubleshooting, system configuration, and providing effective technical support to
                    meet diverse challenges. I am continually experimenting with cutting-edge technologies and tools to stay updated in this ever-evolving industry. My commitment to learning and adapting has allowed me to acquire a diverse
                    skill set, which you can explore in more detail below. Whether It&apos;s managing IT systems, solving complex issues, or testing emerging technologies, I strive to deliver impactful solutions and consistently improve my
                    knowledge base.
                  </p>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
