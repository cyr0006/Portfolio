import * as React from "react";
import ChatComponent from "../components/Chat/ChatComponent";

const Chat: React.FunctionComponent = () => {
  return (
    <div className="max-w-lg m-10 mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="w-full max-w-lg shadow-lg rounded-xl overflow-hidden bg-[#060113]">
        <ChatComponent />
      </div>
    </div>
  );
};

export default Chat;
