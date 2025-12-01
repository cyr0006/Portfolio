import * as React from "react";
import { LuBot, LuSendHorizontal } from "react-icons/lu";
import useChatbot from "../../hooks/useChatbot";
import type { Message } from "../../hooks/useChatbot";
import Markdown from "react-markdown";
import useChatScroll from "../../hooks/useChatScroll";
import "./ChatComponent.css";
type IChatComponentProps = {};

const ChatComponent: React.FunctionComponent<IChatComponentProps> = () => {
  const [input, setInput] = React.useState("");
  const { messages, sendMessage } = useChatbot();
  const ref = useChatScroll(messages);

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input);
      setInput("");
    }
  };

  return (
    <div className="p-20 bg-[#050011] min-h-screen">
      <div className="flex flex-col h-[80vh] bg-[rgba(39,41,72,0.95)] animate-pulse-glow rounded-[15px] shadow-md">
        <h2 className="p-4 font-semibold text-lg text-center bg-[rgba(8,0,58,0.945)] flex text-[#f5dec3] justify-center items-center gap-2 rounded-t-lg">
          Aryan's Chatbot <LuBot size={25} />
        </h2>
        <div ref={ref} className="flex-1 overflow-y-auto p-4 space-y-2">
          {messages.map((msg: Message, index: number) => (
            <div
              key={index}
              className={`p-3 rounded-lg max-w-xs' 
                          ${
                            msg.sender === "user"
                              ? "bg-[#f5dec3] text-[rgba(8,0,58,0.945)] ml-auto"
                              : "bg-[rgba(8,0,58,0.945)] text-gray-300"
                          }
                          shadow-sm shadow-[#000000]
                         `}
            >
              <Markdown>{msg.text}</Markdown>
              <div className="flex justify-between mt-2">
                <p
                  className={`flex align-bottom justify-start font-light text-[0.5rem]`}
                >
                  {msg.sender}
                </p>
                <p
                  className={`flex align-bottom justify-end font-light text-[0.5rem]`}
                >
                  {msg.timestamp?.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center p-4 bg-[rgba(8,0,58,0.945)] rounded-b-lg">
          <input
            type="text"
            className="flex-1 p-2 rounded-lg focus:outline-none bg-white shadow-inner shadow-[inset_0_1px_2px_#000000] focus:shadow-[inset_0_1px_2px_#646464] focus:scale-[1.01] transition-all transform "
            placeholder="Your Message Here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend();
              }
            }}
          />
          <button
            onClick={handleSend}
            className=" p-2 text-[#f5dec3] cursor-pointer hover:text-white hover:scale-110 transition-transform"
          >
            <LuSendHorizontal size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
