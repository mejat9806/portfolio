"use client";
import { motion as m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projects } from "../../../data/projectData";
import ProjectItem from "@/components/ProjectItem";
import ArrowDownSvg from "@/components/ArrowDownSvg";
function Portfolio() {
  const portFolioRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: portFolioRef });
  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-50%"]);

  return (
    <m.div
      className="h-full "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1, staggerChildren: 1.2 }}
    >
      <div className="lg:h-[600vh] h-[100vh] relative " ref={portFolioRef}>
        <div className="w-screen h-[100vh] flex items-center justify-center relative text-center  ">
          <div className=" h-1/2 md:h-full  flex flex-col items-center justify-center">
            <m.h1 className="flex items-center bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-pink-400 h-1/2 lg:text-9xl drop-shadow-2xl font-black uppercase text-4xl sm:text-5xl md:text-8xl text-center">
              {" "}
              MY Projects
            </m.h1>
            <div className="lg:hidden">
              <ArrowDownSvg section="projectSection" />
            </div>
          </div>
          <div className="absolute top-0 h-[calc(100vh-6rem)] -z-50 md:block hidden">
            <m.div
              animate={{
                x: ["-3000px", "0px", "-3000px"],
                y: [500, 0, 500],
              }}
              transition={{
                repeat: Infinity,
                duration: 100,
                ease: "easeInOut",
                delay: 2,
              }}
              className="bg-slightDarkBlue/65 lg:h-[500px] lg:w-[500px] xl:h-[600px] xl:w-[600px] md:w-[400px] md:h-[400px] absolute rounded-full -z-50 blur-lg top-10 "
            ></m.div>
            <m.div
              animate={{
                x: ["-3000px", "-200px", "-3000px"],
                y: [500, 0, 500],
              }}
              transition={{
                repeat: Infinity,
                duration: 100,
                ease: "easeInOut",
                delay: 1,
              }}
              className="bg-purple-200 lg:h-[500px] lg:w-[500px] xl:h-[600px] xl:w-[600px] md:h-[400px] md:w-[400px] w-[300px] h-[300px]  absolute rounded-full -z-50 blur-lg top-10 "
            ></m.div>
            <m.div
              animate={{
                x: ["-3000px", "50%", "-3000px"],
                y: [-1300, 100, -1300],
              }}
              transition={{
                repeat: Infinity,
                duration: 100,
                ease: "easeInOut",
                delay: 0.7,
              }}
              className=" w-[300px] h-[300px] absolute lg:h-[600px] lg:w-[600px] xl:w-[600px] md:h-[400px] md:w-[400px] rounded-full -z-50 blur-lg top-10 "
            ></m.div>
          </div>
        </div>
        <div className="sticky top-0 lg:flex h-svh hidden items-center overflow-x-hidden w-svw bg-purple-300 ">
          <m.div
            style={{ x }}
            className="flex  bg-gradient-to-r  from-purple-300 to-red-300 "
          >
            {/* <div className="h-screen   text-9xl flex  bg-gradient-to-r  from-purple-300 to-red-300 "></div> */}

            {projects.map((project) => (
              <div
                className={`lg:h-svh lg:w-screen flex    items-center `}
                key={project.id}
              >
                <ProjectItem project={project} />
              </div>
            ))}
          </m.div>
        </div>
        <div>
          <div className="bg-gradient-to-r  from-purple-300 to-red-300 lg:hidden flex flex-col justify-center items-center ">
            {projects.map((project) => (
              <div
                key={project.id}
                className="w-full flex justify-center items-center"
              >
                <ProjectItem project={project} smallScreen={true} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </m.div>
  );
}

export default Portfolio;
