"use client";
import { motion as m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projects } from "../../../data/projectData";
import ProjectItem from "@/components/ProjectItem";
function Portfolio() {
  const portFolioRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: portFolioRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <m.div
      className="h-full "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1, staggerChildren: 1.2 }}
    >
      <div className="h-[600vh] relative " ref={portFolioRef}>
        <div className="w-screen h-[100vh] flex items-center justify-center relative text-center  ">
          <div className=" h-1/2 md:h-full  flex  items-center justify-center">
            <m.h1 className="flex items-center bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-pink-400 h-1/2 lg:text-9xl drop-shadow-2xl font-black uppercase text-4xl sm:text-5xl md:text-8xl text-center">
              {" "}
              MY Projects
            </m.h1>
          </div>
          <div className="absolute top-0 h-[calc(100vh-6rem)] -z-50">
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
              className="bg-darkpink  w-[300px] h-[300px] absolute lg:h-[600px] lg:w-[600px] xl:w-[600px] md:h-[400px] md:w-[400px] rounded-full -z-50 blur-lg top-10 "
            ></m.div>
          </div>
        </div>
        <div className="sticky top-0  flex h-screen  items-center overflow-x-hidden  ">
          <m.div
            style={{ x }}
            className="flex bg-gradient-to-r from-purple-400 to-violet-400 "
          >
            <div className="h-screen  w-full  flex items-center  justify-center bg-gradient-to-r from-purple-300 to-red-300 " />
            {projects.map((project) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${
                  project.id === 1
                    ? "from-red-300 to-blue-300"
                    : "from-blue-300 to-violet-300"
                }`}
                key={project.id}
              >
                <ProjectItem project={project} />
              </div>
            ))}
          </m.div>
        </div>
      </div>
    </m.div>
  );
}

export default Portfolio;
