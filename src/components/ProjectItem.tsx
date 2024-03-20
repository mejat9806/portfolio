import Image from "next/image";
import { projectType } from "../../data/projectData";
import Link from "next/link";

function ProjectItem({ project }: { project: projectType }) {
  return (
    <div className="flex justify-center bg-white/10 backdrop-blur-2xl p-5 rounded-md drop-shadow-xl">
      <div className="flex flex-col gap-8 text-white ">
        <h1 className="text-xl font-bold md:text-2xl lg:text-4xl xl:text-6xl max-w-[800px]">
          {project.title}
        </h1>
        <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
          <Image src={project.img} fill alt={project.title} />
        </div>
        <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
          {project.desc}
        </p>
        <div className="flex justify-end">
          <Link href={project.link} target="_blank">
            <button className="bg-white text-black py-3 px-3 rounded-lg ring-2 ring-darkerpink/40 hover:bg-gradient-to-bl from-pink-200 to-blue-300 hover:text-white transition-colors duration-200 ease-in-out font-bold">
              {project.title}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
