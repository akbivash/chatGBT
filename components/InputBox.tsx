import React from "react";
import { TbSend } from "react-icons/tb";

const InputBox = () => {
  return (
    <div className="relative h-[10vh]  md:mb-0  w-full  p-2 bg-[var(--text-default)] items-center gap-4   ">
      <input
        type="text"
        placeholder="Send a message"
        className=" rounded-sm bg-[var(--text-secondary)]  w-full   text-white p-3  outline-none"
      />
      <TbSend className="text-2xl  absolute right-2 top-[50%] translate-y-[-50%] text-white cursor-pointer" />
    </div>
  );
};

export default InputBox;
