import { motion } from "framer-motion";
import Link from "next/link";

function SvgButtonDown({ section }: { section: string }) {
  const scrollToSection = () => {
    const skillSection = document.getElementById(section);
    if (skillSection) {
      skillSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.svg
      width="50px"
      height="50px"
      viewBox="0 0 24 24"
      fill="none"
      className="stroke-slate-400 hover:opacity-100 opacity-50 transition-opacity duration-150 ease-in-out"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ y: "0px" }}
      animate={{
        y: ["10px", "0px", "10px"],
      }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      onClick={scrollToSection}
    >
      <path
        d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 6V14"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 11L12 14L9 11"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

export default SvgButtonDown;
