import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useGlobalContext } from "../context";
import { FaTimes } from "react-icons/fa";

const NewChat = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();

  return (
    <div className="flex justify-between gap-2 h-[3rem] cursor-pointer  bg-[var(--text-primary)]   items-center border-[1px] border-[var(--text-secondary-1)]  ">
      <span className="flex gap-4">
        {" "}
        <AiOutlinePlus className="text-2xl " /> New chat
      </span>
      <span
        className=" h-[3rem] top-0 text-2xl  border-[1px] border-[var(--text-secondary-1)] p-2 rounded-sm md:hidden cursor-pointer "
        onClick={() => setIsSidebarOpen(false)}
      >
        <FaTimes />
      </span>
    </div>
  );
};

export default NewChat;
