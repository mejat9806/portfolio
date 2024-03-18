import { motion as m } from "framer-motion";
import SvgButtonDown from "./SvgButtonDown";

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

function Skill({
  skillRef,
  isSkillRefInView,
}: {
  skillRef: React.RefObject<HTMLDivElement>;
  isSkillRefInView: boolean;
}) {
  return (
    <div className="flex flex-col gap-12  h-svh" ref={skillRef}>
      {/* skill title */}
      <m.h1
        initial={{ x: "-200px" }}
        animate={isSkillRefInView ? { x: 0 } : ""}
        transition={{ delay: 0.1, ease: "easeInOut" }}
        className="text-4xl font-bold"
      >
        Skills
      </m.h1>
      <m.div
        className="flex gap-4 flex-wrap "
        initial={{ x: "-100px" }}
        animate={isSkillRefInView ? { x: 0 } : ""}
        transition={{ delay: 0.1, ease: "easeInOut" }}
      >
        {skills.map((skill, i) => (
          <m.div key={i} className="relative">
            <m.div className=" first-letter:capitalize bg-slightDarkBlue hover:bg-darkpink rounded p-2 text-sm cursor-pointer transition-colors duration-150 hover:text-white hover:drop-shadow-md hover:scale-105 font-semibold    outline-none  afterSkill">
              {skill}
            </m.div>
          </m.div>
        ))}
      </m.div>
      {/* skill scroll button */}
      <SvgButtonDown section="Experince" />
    </div>
  );
}

export default Skill;
