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
                    With 3 years of experience in IT Support and Systems Engineering, I have built strong skills in troubleshooting, system configuration, and delivering effective technical support. I’m passionate about exploring new
                    technologies and frameworks, always staying updated with the latest tools. My diverse skill set enables me to manage IT systems, solve complex challenges, and deliver impactful solutions.
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
