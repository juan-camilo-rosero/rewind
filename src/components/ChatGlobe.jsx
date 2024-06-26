function ChatGlobe(params) {
    const {sender, text} = params
  return (
    <div className={`w-full flex mt-6 lg:mt-4 ${(sender === "user") ? "justify-end" : "justify-start"}`}>
        <figure className={`${(sender === "user") ? "bg-black text-gray-100" : "bg-gray-300"} w-5/6 p-4 font-semibold lg:text-sm`}>
            <p>{text}</p>
        </figure>
    </div>
  )
}

export default ChatGlobe