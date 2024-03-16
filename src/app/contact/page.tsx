"use client";

import { animate, motion as m } from "framer-motion";
function Contact() {
  return (
    <m.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1, staggerChildren: 1.2 }}
    ></m.div>
  );
}

export default Contact;
