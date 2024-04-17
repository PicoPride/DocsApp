import React from "react";
import { ImFilesEmpty } from "react-icons/im";
import { MdFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Cards({ data, reference }) {
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        dragElastic={0.1}
        whileDrag={{ scale: 1.2 }}
        dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
        className="relative w-60 h-72 bg-slate-800 rounded-[40px] z-[6] text-white py-10 px-8 overflow-hidden"
      >
        <ImFilesEmpty />
        <p className="mt-5 leading-5 font-semibold text-[15px]">{data.desc}</p>
        <div
          className={`footer h-10 w-full absolute bottom-0 left-0  ${
            data.tag.isOpen ? "bg-green-600" : "bg-blue-600"
          }`}
        >
          <div className="flex justify-between items-center px-6 py-2">
            <h5>{data.fileSize}</h5>
            <span className="w-7 h-7 bg-zinc-800 flex justify-center items-center rounded-full cursor-pointer">
              {data.close == true ? (
                <IoClose />
              ) : (
                <MdFileDownload size="0.9em" />
              )}
            </span>
          </div>
          <div className="tag w-full h-20 bg-sky-200">hsdf</div>
        </div>
      </motion.div>
    </>
  );
}

export default Cards;
