import React from "react";

function Background() {
  return (
    <>
      <div className=" fixed z-[2] w-full h-screen">
        <div className="flex justify-center absolute w-full py-5 top-[5%] text-white font-semibold text-[1.7vw]">
          Documents
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[11vw]  font-semibold text-zinc-500">
          Docs
        </h1>
      </div>
    </>
  );
}

export default Background;
