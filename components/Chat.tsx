import React from "react";
import InputBox from "./InputBox";
import { useRouter } from "next/router";


const Chat = () => {
const router = useRouter()
const id = router.query.id

  return (
    <>
      <div className="flex   h-screen flex-col">
        <div className="flex-1  overflow-y-scroll">
        </div>
        <InputBox chatId={id} />
      </div>
    </>
  );
};

export default Chat;
