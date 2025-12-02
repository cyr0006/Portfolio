import * as React from "react";
import ChatComponent from "../components/Chat/ChatComponent";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Chat: React.FunctionComponent = () => {
  return (
    <div className="min-h-screen bg-[#050011] pt-24">
      <Navbar />
      <div className="max-w-lg  mx-auto mt-5 mb-10 bg-white shadow-md rounded-lg overflow-hidden">
        <div className="w-full max-w-lg shadow-lg rounded-xl overflow-hidden bg-[#060113]">
          <ChatComponent />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Chat;
