"use client";
import { animate, motion as m } from "framer-motion";

function Portfolio() {
  return (
    <m.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1, staggerChildren: 1.2 }}
    >
      dsdsds
    </m.div>
  );
}

export default Portfolio;
