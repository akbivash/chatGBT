import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BiTrash } from "react-icons/bi";
import { GiChatBubble } from "react-icons/gi";
import { useGlobalContext } from "@/context";

const ChatRow = ({text}:any) => {
  const { setIsSidebarOpen } = useGlobalContext();

  return (
    <div className="flex items-center p-1 justify-between ">
      <Link
        href="#"
        className="flex gap-4 justify-center items-center"
        onClick={() => setIsSidebarOpen(false)}
      >
        <GiChatBubble />
        <p className="flex-1 max-w-[200px]  truncate  ">
         {text}
        </p>
      </Link>
      <BiTrash className="cursor-pointer" />
    </div>
  );
};

export default ChatRow;
