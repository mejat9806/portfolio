"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

function TestPage() {
  const pathName = usePathname();
  console.log(pathName);
  const variants = {
    variant1: { x: 500, y: 200, opacity: 0.5 },
    variant2: {
      x: -500,
      y: 200,
      opacity: 0.9,
      rotation: 90,
      transition: { delay: 1, duration: 1.5 },
    },
  };
  return (
    <div className="h-full flex justify-center items-center">
      <motion.div
        className="bg-red-500 w-96 h-96 flex items-center justify-center rounded-md"
        variants={variants}
        animate="variant1"
        transition={{ delay: 2, duration: 0.5 }}
      ></motion.div>
      <motion.div
        className="bg-blue-500 w-96 h-96 flex items-center justify-center rounded-md"
        variants={variants}
        animate={pathName === "/testanimation" ? "variant2" : ""}
      ></motion.div>
    </div>
  );
}

export default TestPage;
