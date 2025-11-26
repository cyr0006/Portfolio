import axios from "axios";
//API dotenv root access
//import dotenv from "dotenv";
//dotenv.config();
//React
import { useState } from "react";
import { PROMPT_PLACEHOLDER } from "../assets/prompt";

interface Message {
    text: string;
    sender: "user" | "assistant";
    timestamp?: Date;
}

const useChatbot = () => {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    const [messages, setMessages] = useState<Message[]>([]);
        // Your personal information - customize this!
    const systemPrompt = PROMPT_PLACEHOLDER

    const sendMessage = async (message: string) => {
        const newMessages: Message[] = [...messages, { text: message, sender: "user", timestamp: new Date() }];
        setMessages(newMessages);

    try {
        const conversationHIstory = newMessages.map(msg => ({
            role: msg.sender === 'user' ? 'user' : 'assistant',
            content: msg.text,
            timestamp: new Date()

        }));

        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-4o-mini",
                messages: [
                    {
                        role: "system",
                        content: systemPrompt
                    },
                    ...conversationHIstory
                ],
                temperature: 0.7,
                max_tokens: 500,
            },
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    "Content-Type": "application/json",
                },
            },
        );
        const botMessage = response.data.choices[0].message.content;
        setMessages([...newMessages, { text: botMessage, sender: 'assistant', timestamp: new Date() }]);

    } catch (error) {
        console.error("Error fetching AI response", error);
    };
    }
    return { messages, sendMessage }
};

export default useChatbot;
export type { Message };