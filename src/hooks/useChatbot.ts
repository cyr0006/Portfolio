
import { useState } from "react";
import { PROMPT_PLACEHOLDER } from "../assets/prompt";

interface Message {
  text: string;
  sender: "user" | "assistant";
  timestamp?: Date;
}

const useChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const systemPrompt = PROMPT_PLACEHOLDER;

  const sendMessage = async (message: string) => {
    const newMessages: Message[] = [...messages, { text: message, sender: "user", timestamp: new Date() }];
    setMessages(newMessages);

    try {
      const conversationHistory = [
        { role: "system", content: systemPrompt },
        ...newMessages.map(m => ({
          role: m.sender === "user" ? "user" : "assistant",
          content: m.text,
        })),
      ];

      const res = await fetch("/.netlify/functions/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: conversationHistory }),
      });

      const data = await res.json();
      const botMessage = data?.choices?.[0]?.message?.content ?? "Sorry, I couldn’t generate a response.";
      setMessages([...newMessages, { text: botMessage, sender: "assistant", timestamp: new Date() }]);
    } catch (err) {
      console.error("Error fetching AI response", err);
    }
  };

  return { messages, sendMessage };
};

export default useChatbot;
export type { Message };
