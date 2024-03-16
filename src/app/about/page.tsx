"use client";

import { motion as m } from "framer-motion";

function About() {
  return (
    <m.div
      className="h-full  "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* COntainer */}
      <div>
        {/* TextContianer */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
          {/* BIO */}
          <div>BIO</div>
          {/* SKill */}

          <div>Skil</div>
          {/* Experince */}

          <div>Experience</div>
        </div>
        {/* SVG Contantairt */}
        <div className="hidden"></div>
      </div>
    </m.div>
  );
}

export default About;
