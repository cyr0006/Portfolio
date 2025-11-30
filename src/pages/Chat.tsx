import * as React from "react";
import ChatComponent from "../components/Chat/ChatComponent";

const Chat: React.FunctionComponent = () => {
  return (
    <div className="chatbot-container">
      <div className="max-w-lg mt-20 mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
          <ChatComponent />
        </div>
      </div>
    </div>
  );
};

export default Chat;
