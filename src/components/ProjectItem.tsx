"use client";
import Image from "next/image";
import { projectType } from "../../data/projectData";
import Link from "next/link";
import TechList from "./TechList";

function ProjectItem({
  project,
  smallScreen,
}: {
  project: projectType;
  smallScreen?: boolean;
}) {
  if (smallScreen === true)
    return (
      <div className=" p-5 w-[400px] sm:w-[500px]  " id="projectSection">
        <div className=" flex flex-col justify-between  bg-gradient-to-b from-blue-200/30 h-[500px] to-pink-200/30 backdrop-blur-2xl p-5 rounded-md drop-shadow-xl ">
          <div className="">
            <h1 className="text-3xl text-white font-black">{project.title}</h1>
            <div className="relative w-[300px] h-[200px] sm:w-[400px] sm:h-[300px] md:w-[400px] md:h-[200px] lg:w-[600px] lg:h-[400px]">
              <Image
                src={project.img}
                alt={project.title}
                className="object-contain "
                fill
              />
            </div>
            <p className="w-fit md:w96 lg:w-[500px] lg:text-lg xl:w-[600px] ">
              {project.desc}
            </p>
          </div>
          <div className="flex justify-end gap-10 lg:gap-0">
            <Link href={project.link} target="_blank">
              <button className="bg-white text-black py-3 px-3 rounded-lg ring-2 ring-darkerpink/40 hover:bg-gradient-to-bl from-pink-200 to-blue-300 hover:text-white transition-colors duration-200 ease-in-out font-bold">
                Live View
              </button>
            </Link>
            <Link href={project.github} target="_blank">
              <button className="bg-white text-black py-3 px-3 rounded-lg ring-2 ring-darkerpink/40 hover:bg-gradient-to-bl from-pink-200 to-blue-300 hover:text-white transition-colors duration-200 ease-in-out font-bold">
                Source Code
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  return (
    <div className="flex justify-center mx-14 bg-gradient-to-b from-blue-200/30 to-pink-200/30 backdrop-blur-2xl p-5 rounded-md drop-shadow-xl w-[1/2] h-[800px]">
      <div className="flex flex-col gap-8 text-white ">
        <h1 className="text-xl text-white font-black font-bold md:text-2xl lg:text-4xl xl:text-6xl max-w-[800px]">
          {project.title}
        </h1>
        <div className="relative w-[600px] h-[700px] ">
          <Image
            src={project.img}
            alt={project.title}
            className="object-contain"
            fill
          />
        </div>
        <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
          {project.desc}
        </p>
        <div className="">
          <h1 className="text-lg font-semibold">Technology use</h1>
          <div className="flex  drop-shadow-2xl mt-4  flex-wrap w-full overflow-hidden">
            {project.tech.map((tech) => (
              <TechList key={tech.name} tech={tech} />
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-10">
          <Link href={project.link} target="_blank">
            <button className="bg-white text-black py-3 px-3 rounded-lg ring-2 ring-darkerpink/40 hover:bg-gradient-to-bl from-pink-200 to-blue-300 hover:text-white transition-colors duration-200 ease-in-out font-bold">
              Live View
            </button>
          </Link>
          <Link href={project.github} target="_blank">
            <button className="bg-white text-black py-3 px-3 rounded-lg ring-2 ring-darkerpink/40 hover:bg-gradient-to-bl from-pink-200 to-blue-300 hover:text-white transition-colors duration-200 ease-in-out font-bold">
              Source Code
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
