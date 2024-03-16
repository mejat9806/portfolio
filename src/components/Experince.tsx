type experinceType = {
  title: string;
  desc: string;
  date: string;
  compName: string;
  position?: string;
};

function Experince({
  title,
  desc,
  date,
  compName,
  position = "left",
}: experinceType) {
  if (position === "right") {
    return (
      <>
        <div>
          {/* experince list */}
          <div className="flex justify-between h-48 ">
            {/* Left */}
            <div className="w-1/3 bg-red-400"></div>
            {/* center */}
            <div className="w-1/6 flex justify-center">
              <div className="w-1 h-full bg-gray-600 rounded relative">
                <div className="absolute w-5 h-5 rounded-full ring-4 ring-slightDarkBlue ring-offset-1 bg-gradient-to-b from-blue-50 to-pink-100 ring-offset-darkpink -left-2 -top-5"></div>
              </div>
            </div>
            {/* right  */}

            <div className="w-1/3 p-4 rounded-md ">
              <div className="bg-white p-3 rounded-tl-lg rounded-b-lg backdrop-blur-3xl font-semibold first-letter:capitalize w-fit">
                <h1>{title}</h1>
              </div>
              <div className=" p-2  text-sm italic  first-letter:capitalize">
                <p>{desc}</p>
              </div>
              <div className="text-xs">
                <p className="text-red-500 ">{date}</p>
              </div>
              <div className="bg-white text-sm flex w-fit p-1 rounded font-semibold capitalize">
                <p>{compName}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div>
        {/* experince list */}
        <div className="flex justify-between h-48 ">
          {/* Left */}
          <div className="w-1/3  p-4 rounded-md ">
            <div className="bg-white p-3 rounded-tl-lg rounded-b-lg backdrop-blur-3xl font-semibold first-letter:capitalize w-fit">
              <h1>{title}</h1>
            </div>
            <div className=" p-2  text-sm italic  first-letter:capitalize">
              <p>{desc}</p>
            </div>
            <div className="text-xs">
              <p className="text-red-500 ">{date}</p>
            </div>
            <div className="bg-white text-sm flex w-fit p-1 rounded font-semibold capitalize">
              <p>{compName}</p>
            </div>
          </div>
          {/* center */}
          <div className="w-1/6 flex justify-center">
            <div className="w-1 h-full bg-gray-600 rounded relative">
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-slightDarkBlue ring-offset-1 bg-gradient-to-b from-blue-50 to-pink-100 ring-offset-darkpink -left-2 -top-5"></div>
            </div>
          </div>
          {/* right  */}
          <div className="w-1/3 bg-red-400"></div>
        </div>
      </div>
    </>
  );
}

export default Experince;
