import React, { useRef } from "react";
import Cards from "./Cards";

function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, Itaque!",
      fileSize: "0.7mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, Itaque!",
      fileSize: "0.7mb",
      close: false,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "red",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, Itaque!",
      fileSize: "0.7mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
  ];
  return (
    <>
      <div ref={ref} className=" w-full h-screen z-[3] fixed top-0 left-0 flex gap-5 flex-wrap py-5">
        {data.map((item, index) => (
          <Cards data={item} reference={ref} />
        ))}
      </div>
    </>
  );
}

export default Foreground;
