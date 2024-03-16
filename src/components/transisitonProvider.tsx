"use client";

import { AnimatePresence, motion as m } from "framer-motion";
import { ReactNode } from "react";

import NavBar from "./NavBar";
import { usePathname } from "next/navigation";

function TransisitonProvider({ children }: { children: ReactNode }) {
  const pathName = usePathname();
  const pageName = pathName.substring(1).toUpperCase();
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-screen bg-gradient-to-b from-blue-50 to-pink-100 "
      >
        <m.div
          className="h-screen w-screen fixed bg-black rounded-b-[120px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 2, ease: "easeOut" }}
        ></m.div>
        <m.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-7xl cursor-none z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          {pageName === "" ? "Home Page" : pageName}
        </m.div>
        <m.div
          className="h-screen w-screen fixed bg-black rounded-t-[120px] bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 2 } }}
        ></m.div>
        <div className="h-24 ">
          <NavBar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
}

export default TransisitonProvider;
