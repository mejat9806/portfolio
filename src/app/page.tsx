"use client";

import ProgramSvg from "@/components/ProgramSvg";
import { animate, motion as m } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <m.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1, staggerChildren: 1.2 }}
    >
      <div className="h-full flex flex-col gap-9 justify-between items-center lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
        <m.div
          className="h-1/2 w-1/2 lg:h-[800px] lg:w-[800px]  justify-center  flex items-center"
          initial={{ x: "-200vh", opacity: 0, visibility: "hidden" }}
          animate={{ x: "0%", opacity: 1, visibility: "visible" }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <ProgramSvg />
          {/* <Image
            src="/Program.svg"
            alt="hero"
            fill
            className="object-contain"
          /> */}
        </m.div>
        <div className="h-1/2 flex flex-col gap-6 lg:h-full lg:w-1/2 justify-center">
          <h1 className="font-bold text-4xl md:text-6xl">
            Welcome to my Portfolio website{" "}
          </h1>
          <p className="md:text-xl">
            My name is Amer .This is where i show my hard work in the last year
            of learning WebDev
          </p>
          <div className="flex gap-6 ">
            <Link href={"/portfolio"}>
              <button className="bg-black text-white py-3 px-3 rounded-lg ring-2 ring-slightDarkBlue/40 font-bold hover:bg-gradient-to-bl from-pink-200 to-blue-300 hover:text-white">
                View my work{" "}
              </button>
            </Link>
            <Link href={"/contact"}>
              <button className="bg-white text-black py-3 px-3 rounded-lg ring-2 ring-darkerpink/40 hover:bg-gradient-to-bl from-pink-200 to-blue-300 hover:text-white transition-colors duration-200 ease-in-out font-bold">
                Contact Me
              </button>
            </Link>
            <Link
              href="/Amer_Aizat_Bin_Hussin_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download={true}
            >
              <button className="bg-black text-white py-3 px-3 rounded-lg ring-2 ring-slightDarkBlue/40 font-bold hover:bg-gradient-to-bl from-pink-200 to-blue-300 hover:text-white">
                Resume{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </m.div>
  );
}
