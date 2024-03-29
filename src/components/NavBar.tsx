"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navlink from "./Navlink";
import { Variant, Variants, motion } from "framer-motion";

const Links = [
  { url: "/", title: "home" },
  { url: "/about", title: "about" },
  { url: "/portfolio", title: "portfolio" },
  { url: "/contact", title: "contact" },
];

function NavBar() {
  const [open, setopen] = useState<boolean>(false);
  console.log(open);
  const topVariants: Variants = {
    close: {
      rotate: 0,
    },
    open: {
      rotate: 45,
      backgroundColor: "rgb(255, 255, 255)",
    },
  };
  const centerVariants: Variants = {
    close: {
      opacity: 1,
    },
    open: {
      opacity: 0,
    },
  };
  const bottomVariants: Variants = {
    close: {
      rotate: 0,
    },
    open: {
      rotate: -45,
      backgroundColor: "rgb(255, 255, 255)",
    },
  };
  const listVariants: Variants = {
    close: {
      x: "100vw",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    open: {
      x: open ? 0 : "100vw",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.1,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const linkItemVariants: Variants = {
    close: {
      x: -10,
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 z-10 ">
      {/* RESPONSIVE MENU */}
      <div className="md:hidden flex ">
        <Link
          href={"/"}
          className=" text-sm font-bold bg-darkpink p-1 rounded-md flex items-center justify-center"
        >
          <span className="  text-darkBlue   rounded-s-md mr-1">Amer</span>
          <span className="flex items-center justify-center bg-slightDarkBlue text-darkerpink  w-12 h-8 rounded-md px-[0.2rem]">
            .Dev
          </span>
        </Link>
      </div>
      <div className="md:hidden flex  z-50">
        <button
          className="flex flex-col gap-2 z-50 relative"
          onClick={() => setopen(!open)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "open" : "close"}
            className="w-10 h-1 bg-black rounded origin-top-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "open" : "close"}
            className="w-10 h-1 bg-black rounded "
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "open" : "close"}
            className="w-10 h-1 bg-black rounded origin-bottom-left"
          ></motion.div>
        </button>
        {/* Menulist */}

        {open && (
          <motion.div
            className="absolute top-0 left-0 w-svw h-svh scrollbar-hide bg-black/85  font-extrabold flex flex-col items-center justify-center gap-8 text-4xl capitalize "
            variants={listVariants}
            initial={"close"}
            animate={open ? "open" : "close"}
          >
            {Links.map((link) => (
              <motion.div
                key={link.title}
                variants={linkItemVariants}
                className=""
              >
                <Link href={link.url} onClick={() => setopen(!open)}>
                  <motion.span className="text-white hover:bg-gradient-to-r from-pink-200  to-blue-200 bg-clip-text hover:text-transparent ">
                    {link.title}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
      {/* normal menu */}
      <div className="md:flex hidden justify-between w-full z-10 ">
        <div className="flex items-center gap-10 w-1/3">
          <div className=" hidden md:flex gap-5 capitalize ">
            {Links.map((link) => (
              <Navlink link={link} key={link.title} />
            ))}
          </div>
        </div>
        <div className="w-1/3 md:hidden lg:flex justify-center">
          <Link
            href={"/"}
            className=" text-sm font-bold bg-darkpink p-1 rounded-md flex items-center justify-center"
          >
            <span className="  text-darkBlue   rounded-s-md mr-1">Amer</span>
            <span className="flex items-center justify-center bg-slightDarkBlue text-darkerpink  w-12 h-8 rounded-md px-[0.2rem]">
              .Dev
            </span>
          </Link>
        </div>
        <div className=" hidden md:flex w-1/3 justify-end items-center">
          <Link
            href="https://github.com/mejat9806"
            className="h-5 w-10"
            target="_blank"
          >
            <Image src="/github.png" alt="github" width={24} height={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/muhammad-amer-aizat-hussin-05952a108/"
            className="h-5 w-10"
            target="_blank"
          >
            <Image src="/linkedin.png" alt="linkedin" width={24} height={24} />
          </Link>
          <Link
            href="https://www.facebook.com/mejat.hussin"
            className="h-5 w-10"
            target="_blank"
          >
            <Image src="/facebook.png" alt="facebook" width={24} height={24} />
          </Link>
          <Link
            href="https://www.instagram.com/mejat_98/"
            className="h-5 w-10"
            target="_blank"
          >
            <Image
              src="/instagram.png"
              alt="instagram"
              width={24}
              height={24}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
