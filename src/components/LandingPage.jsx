import { RiArrowUpLine } from "@remixicon/react";

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((text, index) => (
          <div key={index} className="masker">
            <div className="w-fit flex">
                {index === 1 && (<div className="w-[9vw] mr-[1vw] rounded-md h-[6vw] relative top-[1vw] bg-red-500"></div>)}
              <h1 className="font-founders uppercase text-[9vw] leading-[7vw] font-medium flex items-center">
                {text}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For Public and Private Companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className=" text-md font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full">
            Start the Project
          </div>
          <div className="w-10 h-10 flex items-center justify-evenly rounded-full border-[2px] border-zinc-500">
            <RiArrowUpLine className="rotate-[40deg]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
