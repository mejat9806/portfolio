"use client";

import { AnimatePresence, motion as m } from "framer-motion";
import { ReactNode } from "react";

import NavBar from "./NavBar";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";

function TransisitonProvider({ children }: { children: ReactNode }) {
  const pathName = usePathname();
  const pageName = pathName.substring(1).toUpperCase();
  return (
    <AnimatePresence mode="wait">
      <div key={pathName} className=" ">
        <m.div
          className="h-screen w-screen fixed bg-black rounded-b-[120px] z-50"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        ></m.div>
        {/*  <m.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-7xl cursor-none  w-fit h-fit"
          initial={{
            opacity: 1,
            zIndex: 50,
            display: "block",
            visibility: "visible",
          }}
          animate={{ opacity: 0, display: "none", visibility: "hidden" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          {pageName === "" ? "Home Page" : pageName}
        </m.div> */}
        <m.div
          className="h-screen w-screen fixed bg-black rounded-t-[120px] bottom-0 z-50"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        ></m.div>
        <div className="h-24 w-full  z-40">
          <NavBar />
        </div>
        <div className="h-svh">{children}</div>
      </div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "white",
            height: "60px",
            width: "200px",
          },
          success: {
            duration: 5000,
            style: { color: "green" },
          },
          error: {
            duration: 5000,
            style: { color: "red" },
          },
        }}
      />
    </AnimatePresence>
  );
}

export default TransisitonProvider;
