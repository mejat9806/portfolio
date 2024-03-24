import { motion as m } from "framer-motion";

type experinceType = {
  title: string;
  desc: string;
  date: string;
  compName: string;
  position?: string;
  experinceRef: React.RefObject<HTMLDivElement>;
  isExperinceRefInView: boolean;
  isItbottom?: boolean;
};

function Experince({
  title,
  desc,
  date,
  compName,
  experinceRef,
  isExperinceRefInView,
  position = "left",
  isItbottom,
}: experinceType) {
  return (
    <>
      <div ref={experinceRef}>
        {/* experince list */}
        <m.div
          className="flex h-48 "
          initial={{ x: "-100px" }}
          animate={isExperinceRefInView ? { x: 0 } : ""}
          transition={{ delay: 0.1, ease: "easeInOut" }}
        >
          {/* Left */}
          <m.div
            className=" flex w-1/3  p-4 rounded-md items-end flex-col"
            initial={{ x: "-1000px" }}
            animate={isExperinceRefInView ? { x: 0 } : ""}
            transition={{ delay: 0.2, ease: "easeInOut" }}
          >
            {position === "left" && (
              <div className="flex flex-col items-start">
                <div className="bg-white p-3 rounded-tl-lg rounded-b-lg backdrop-blur-3xl font-semibold first-letter:capitalize w-fit">
                  <h1>{title}</h1>
                </div>
                <div className=" py-2  text-sm italic  first-letter:capitalize">
                  <p>{desc}</p>
                </div>
                <div className="text-xs">
                  <p className=" ">{date}</p>
                </div>
                <div className="bg-white text-sm flex w-fit p-1 rounded font-semibold capitalize">
                  <p>{compName}</p>
                </div>
              </div>
            )}
            {position === "right" && <div className="w-1/3 "></div>}
          </m.div>
          {/* center */}
          <m.div
            initial={{ y: "1000px", opacity: 0 }}
            animate={isExperinceRefInView ? { y: 0, opacity: 1 } : ""}
            transition={{ delay: 0.05, ease: "easeInOut" }}
            className="w-1/6 flex justify-center"
          >
            <div className="w-1 h-full bg-gray-600 rounded relative">
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-slightDarkBlue ring-offset-1 bg-gradient-to-b from-blue-50 to-pink-100 ring-offset-darkpink -left-2 -top-5"></div>
            </div>
          </m.div>
          {/* right  */}
          {position === "right" && (
            <m.div
              initial={{ x: "300px", opacity: 0 }}
              animate={isExperinceRefInView ? { x: 0, opacity: 1 } : ""}
              transition={{ delay: 0.15, ease: "easeInOut" }}
              className="w-1/3 p-4 rounded-md "
            >
              <div className="bg-white p-3 rounded-tl-lg rounded-b-lg backdrop-blur-3xl font-semibold first-letter:capitalize w-fit">
                <h1>{title}</h1>
              </div>
              <div className="  py-2  flex w-56">
                <p className="text-sm italic  first-letter:capitalize">
                  {desc}
                </p>
              </div>
              <div className="text-xs">
                <p className=" ">{date}</p>
              </div>
              <div className="bg-white text-sm flex w-fit p-1 rounded font-semibold capitalize">
                <p>{compName}</p>
              </div>
            </m.div>
          )}
          {position === "left" && <div className="w-1/3 "></div>}{" "}
        </m.div>
      </div>
    </>
  );
}

export default Experince;
