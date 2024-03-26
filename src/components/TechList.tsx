import Image from "next/image";
import { techTypes } from "../../data/projectData";
import { motion } from "framer-motion";

function TechList({ tech }: { tech: techTypes }) {
  return (
    <div className="relative w-18 h-18 flex flex-col md:gap-2 items-center justify-center hover:scale-105 transition-all duration-150    backdrop-blur-3xl  md:h-24 md:w-24">
      <div className="w-10 h-10 relative flex items-center justify-center">
        <Image src={tech.img} fill alt={tech.name} className="" />
      </div>
      <motion.div className="text-xs text-center capitalize font-semibold">
        {tech.name}
      </motion.div>
    </div>
  );
}

export default TechList;
