"use client";

import { animate, motion as m } from "framer-motion";
import { useEffect } from "react";
function Contact() {
  useEffect(() => {
    function handleScroll() {
      const currentPosition = window.scrollY;
      document.body.style.backgroundColor = "red";
      console.log(currentPosition);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <m.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1, staggerChildren: 1.2 }}
    >
      <div className="h-[1000%]"></div>
    </m.div>
  );
}

export default Contact;
