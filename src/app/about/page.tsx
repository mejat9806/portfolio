"use client";

import Brain from "@/components/Brain";
import Experince from "@/components/Experince";
import { motion as m, useScroll } from "framer-motion";
import React, { useRef } from "react";

const skills = [
  "javascript",
  "typescript",
  "CSS",
  "HTML",
  "Tailwinds",
  "NextJS",
  "NodeJS",
  "Express",
  "SupaBase",
  "MongoDb",
];
function About() {
  const containerRef = React.useRef<HTMLInputElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  console.log(scrollYProgress);
  return (
    <m.div
      className="h-full   "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* COntainer */}
      <div
        className="h-full overflow-scroll overflow-x-hidden flex justify-center "
        ref={containerRef}
      >
        {/* TextContianer */}
        <div className=" px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 gap-24 md:gap-32 lg:gap-48 xl:gap-64 w-2/3 lg:pr-0">
          {/* BIO */}
          <div className="flex flex-col gap-12 justify-center h-svh">
            <h1 className="text-4xl font-bold">Biography</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
              aliquam unde sequi voluptas obcaecati nemo fugit quae perferendis
              fugiat reiciendis. Commodi, suscipit exercitationem! Voluptate
              earum temporibus pariatur placeat sapiente velit!
            </p>
            <span className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              nobis,
            </span>
            <div className="flex justify-end flex-col items-end">
              <svg
                width="140"
                height="70"
                viewBox="0 0 440 320"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector 1"
                  d="M94 263C91.9183 268.783 91.0155 274.055 89 265.111C83.6598 241.414 90.2904 213.566 94.8889 190.444C105.06 139.303 120.334 87.1507 145.667 41.3333C152.916 28.2217 163.842 9.67462 178 3.00001C189.682 -2.50745 200.349 8.23956 205.889 17.4445C229.762 57.1109 236.278 105.904 235.333 151.333C234.889 172.699 232.444 193.886 227.944 214.778C225.345 226.845 223.06 241.162 216.111 251.667C200.582 275.141 171.253 266.916 148.222 261.222C128.166 256.264 108.334 247.959 89.5556 239.444C70.9124 230.991 52.1847 222.118 34.8889 211.111C31.1159 208.71 -6.05878 187.485 4.00001 179.222C10.1303 174.187 19.0714 171.391 26.1667 167.944C42.5733 159.976 59.2536 152.641 75.3333 144C132.069 113.513 185.842 77.9075 245 52C264.863 43.3012 285.422 34.2412 306.278 28.1667C307.955 27.6783 325.096 21.8355 322.111 29.1111C318.069 38.9634 308.566 47.3231 301.278 54.6111C283.801 72.0879 265.034 88.3633 246.667 104.889C194.174 152.117 141.616 200.442 97.1111 255.444C83.9843 271.668 71.8671 288.622 60.6667 306.222C60.4592 306.548 51.3694 319.914 57.6667 317.333C66.8052 313.588 74.3894 303.733 80.7778 296.667C96.0364 279.79 111.368 262.984 127.056 246.5C161.431 210.381 197.46 175.746 236.667 144.889C241.874 140.79 256.145 127.277 264.111 129.667C269.671 131.335 254.674 155.287 253.778 156.778C232.221 192.617 207.112 226.214 185.722 262.167C183.223 266.368 178.699 275.008 185.333 266.444C194.651 254.418 202.52 241.261 212.222 229.556C216.135 224.835 265.148 170.659 268.833 177.722C271.77 183.35 264.301 195.184 262 200.222C258.063 208.843 252.933 217.263 250.111 226.333C247.741 233.953 252.582 227.385 254.667 224.667C261.906 215.228 269.362 205.977 276.556 196.5C283.82 186.93 291.532 177.714 300.889 170.111C303.069 168.34 309.179 163.776 308.833 169.833C308.364 178.054 304.608 186.207 302.222 194C300.73 198.875 297.053 205.737 298.556 210.889C301.497 220.974 324.885 189.988 326.444 187.833C336.798 173.527 347.582 155.805 353.444 139.056C353.696 138.337 354.862 134.614 353 135.778C351.089 136.972 350.864 143.115 350.556 145.056C349.389 152.385 350.191 159.942 349.778 167.333C349.231 177.101 347.927 186.716 347.056 196.444C346.631 201.18 342.649 227.892 354.667 223.333C368.652 218.028 379.645 205.424 389.056 194.444C406.575 174.006 421.858 151.523 438 130"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <svg
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              fill="none"
              className="stroke-slate-500"
              xmlns="http://www.w3.org/2000/svg"
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
            </svg>
          </div>
          {/* SKill */}

          <div className="flex flex-col gap-12  h-svh">
            {/* skill title */}
            <h1 className="text-4xl font-bold">Skills</h1>
            <div className="flex gap-4 flex-wrap ">
              {skills.map((skill, i) => (
                <div key={i} className="relative">
                  <m.div className=" first-letter:capitalize bg-slightDarkBlue hover:bg-darkpink rounded p-2 text-sm cursor-pointer transition-colors duration-150 hover:text-white hover:drop-shadow-md hover:scale-105 font-semibold    outline-none  afterSkill">
                    {skill}
                  </m.div>
                </div>
              ))}
            </div>
            {/* skill scroll button */}
            <svg
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              fill="none"
              className="stroke-slate-500"
              xmlns="http://www.w3.org/2000/svg"
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
            </svg>
          </div>

          <div className="flex flex-col gap-12 justify-center pb-8">
            <div className="pb-2 flex flex-col gap-9">
              <h1 className="text-4xl font-bold ">Experince</h1>
              <div>
                <Experince
                  compName="matc"
                  date="2021-2021"
                  desc="kerja"
                  title="Frontend Dev"
                />
                <Experince
                  compName="matc"
                  date="2021-2021"
                  desc="kerja"
                  title="Frontend Dev"
                  position="right"
                />
              </div>
            </div>
            <div>
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                fill="none"
                className="stroke-slate-500"
                xmlns="http://www.w3.org/2000/svg"
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
              </svg>
            </div>
          </div>
        </div>
        {/* SVG Contantairt */}
        <div className="hidden lg:block h-full   w-1/3 xl:w-1/2 sticky top-0">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </m.div>
  );
}

export default About;
