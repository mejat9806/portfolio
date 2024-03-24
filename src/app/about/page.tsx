/* eslint-disable react/no-unescaped-entities */
"use client";

import Blob from "@/components/Blob";
import Brain from "@/components/Brain";
import Experince from "@/components/Experince";
import SignatureAmer from "@/components/SignatureAmer";
import Skill from "@/components/Skill";
import SvgButtonDown from "@/components/SvgButtonDown";
import { motion as m, useInView, useScroll } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

function About() {
  const containerRef = React.useRef<HTMLInputElement>(null);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const { scrollYProgress } = useScroll({ container: containerRef });
  // const isSkillRefInView = useInView(skillRef, { once: true });
  const skillRef = useRef<HTMLDivElement>(null);
  const isSkillRefInView = useInView(skillRef);
  const experinceRef = useRef<HTMLDivElement>(null);
  const isExperinceRefInView = useInView(experinceRef);

  return (
    <m.div
      className="h-full   "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* COntainer */}
      <div
        className="h-full overflow-scroll overflow-x-hidden flex justify-center w-svw"
        ref={containerRef}
      >
        {/* TextContianer */}
        <div className=" px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 gap-24 md:gap-32 lg:gap-48 xl:gap-64 w-2/3 lg:pr-0">
          {/* BIO */}
          <div className="flex flex-col gap-12 justify-center h-svh">
            <h1 className="text-4xl font-bold">Biography</h1>
            <p className="text-lg mb-1">
              At 25 years young, I found myself at a crossroads. After
              experiencing a layoff from my previous company, I embarked on a
              journey of self-discovery and skill enhancement. Faced with six
              months of job search challenges, I made a bold decision to take
              control of my destiny. It was then that I immersed myself in the
              world of web development.
            </p>
            <p className="text-lg">
              I am willing to learn anything because keep learing new stuff is
              part of working in IT unless you want to be leftout of the current
              technologies and trend
            </p>
            <span className="italic">
              " Through setbacks, you become stronger"
            </span>
            <div className="flex justify-end flex-col items-end">
              <SignatureAmer />
            </div>
            <SvgButtonDown section={"Skill"} />
          </div>
          {/* SKill */}
          <div id="Skill">
            <Skill skillRef={skillRef} isSkillRefInView={isSkillRefInView} />
          </div>
          <div
            className="flex flex-col gap-12 justify-center pb-8"
            id="Experince"
          >
            <div className="pb-2 flex flex-col gap-9 w-full" ref={experinceRef}>
              <m.h1
                className="text-4xl font-bold "
                initial={{ x: "-100px" }}
                animate={isExperinceRefInView ? { x: 0 } : ""}
                transition={{ delay: 0.1, ease: "easeInOut" }}
              >
                Experince
              </m.h1>
              <div className="h-[500px]">
                <Experince
                  compName="Jobless"
                  date="2022-2024"
                  desc="learn webDev and hoping to get job soon "
                  title="Study"
                  experinceRef={experinceRef}
                  isExperinceRefInView={isExperinceRefInView}
                />
                <Experince
                  compName="matc"
                  date="2022-2022"
                  desc="help manage the company network and system "
                  title="IT support"
                  position="right"
                  isItbottom={true}
                  experinceRef={experinceRef}
                  isExperinceRefInView={isExperinceRefInView}
                />
              </div>
            </div>
          </div>
        </div>
        {/* SVG Contantairt */}
        <div className="hidden lg:block h-full   w-1/3 lg:w-1/2 sticky top-0">
          {/*           <Brain scrollYProgress={scrollYProgress} />
           */}{" "}
          <Blob scrollYProgress={scrollYProgress} />{" "}
        </div>
      </div>
    </m.div>
  );
}

export default About;
