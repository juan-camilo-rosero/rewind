import { useContext, useState } from "react";
import { RiCloseLine, RiSendPlaneFill } from "react-icons/ri";
import { SectionContext } from "../context/SectionContext";
import ChatGlobe from "./ChatGlobe"
import { PiecesContext } from "../context/PiecesContext";

const chatGPTApiKey = import.meta.env.VITE_OPENAI_API_KEY

function Chat() {
    const {chat, setChat} = useContext(SectionContext)
    const {title, author} = useContext(PiecesContext)
    const [userTurn, setUserTurn] = useState(true)
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const [conversation, setConversation] = useState([
        {text: "Hi, i'm your assistant, ask me whatever you want about the artwork",
        sender: "chatbot"
    }
    ])

    const answer = async question => {
        const prompt = `Hi, answer the following question about the artwork ${title} by ${author} in Bogotá : ${question}`
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + chatGPTApiKey
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [
                    {"role": "user", "content": prompt}
                ]
            })
        }
        const res = await fetch("https://api.openai.com/v1/chat/completions", options)
        const data = await res.json()

        return data.choices[0].message.content
    }

    const handleSend = async () => {
        if (!message.trim()) return; // Evita enviar mensajes vacíos
    
        const userMessage = {
            text: message,
            sender: "user"
        };
    
        setConversation(prevConversation => [...prevConversation, userMessage]);
    
        setUserTurn(false);
        setMessage("");
        setLoading(true);
    
        const response = await answer(message);
    
        const botMessage = {
            text: response,
            sender: "chatbot"
        };
    
        setConversation(prevConversation => [...prevConversation, botMessage]);
    
        setLoading(false);
        setUserTurn(true);
    };
    
    
    
  return (
    <div className={`w-full pt-14 pb-[15vh] h-[70vh] fixed ${(chat) ? "bottom-0" : "-bottom-[150vh]"} bg-gray-100 border-t-2 border-black backdrop-blur-md bg-opacity-60 transition-all flex items-center flex-col lg:w-[25vw] lg:right-0 lg:pb-8 lg:border-l-2 lg:pt-14`}>
        <button className="absolute right-0 top-0 bg-black w-16 h-16 flex items-center justify-center text-gray-100 text-2xl lg:w-12 lg:h-12" onClick={() => setChat(false)}>
            <RiCloseLine/>
        </button>
        <div className="w-[85vw] pb-16 overflow-y-auto lg:w-[20vw]">
            {conversation.map((message, index) => (
                <ChatGlobe key={index} text={message.text} sender={message.sender} />
            ))}
            {(loading)
                ? <div className={`w-full flex mt-6 justify-start`}>
                    <figure className={`bg-gray-300 w-auto p-4 pt-2 font-semibold`}>
                        <p className="text-3xl">...</p>
                    </figure>
                </div>
                : null
            }
        </div>

        <input type="text" className="w-[85vw] border-2 border-black fixed bottom-[12vh] py-2 pl-4 pr-16 bg-gray-100 bg-opacity-40 backdrop-blur-md text-md focus:outline-none font-semibold disabled:bg-gray-300 disabled:border-opacity-50 lg:w-4/5 lg:bottom-8 lg:pr-14 lg:text-sm" disabled={!userTurn} onChange={e => setMessage(e.target.value)} value={message}/>
        <button className="fixed bottom-[12vh] py-[10px] text-2xl w-14 bg-black text-gray-100 right-[7.5vw] flex justify-center items-center disabled:opacity-70 lg:bottom-8 lg:right-[2.5vw] lg:text-2xl lg:w-12" disabled={!userTurn} onClick={handleSend}>
            <RiSendPlaneFill/>
        </button>
    </div>
  )
}

export default Chat