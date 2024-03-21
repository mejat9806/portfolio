import { motion } from "framer-motion";

function ArrowDownSvg({ section }: { section: string }) {
  const scrollToSection = () => {
    const sectionToGo = document.getElementById(section);
    if (sectionToGo) {
      console.log("click");
      sectionToGo.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.svg
      initial={{ y: 0 }}
      animate={{ y: [0, 20, 0] }}
      transition={{ repeat: Infinity, duration: 5 }}
      height="50px"
      width="50px"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 490 490"
      style={{ rotate: "180deg" }}
      onClick={scrollToSection}
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#bde0fe" />
          <stop offset="100%" stopColor="#ffafcc" />
        </linearGradient>
      </defs>
      <path
        d="M245,258.23l153.302,155.246L490,324.619L245,76.524L0,324.619l91.697,88.857L245,258.23z M43.502,324.14L245,120.101
         l201.498,204.04l-47.717,46.252L245,214.653L91.219,370.393L43.502,324.14z"
        fill="url(#gradient)"
      />
    </motion.svg>
  );
}

export default ArrowDownSvg;
