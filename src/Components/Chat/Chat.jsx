import { useEffect, useRef, useState } from "react";
import useAuth from "../../hook/useAuth";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { io } from "socket.io-client";

//backend URL
const socket = io("http://localhost:5000"); 

const Chat = ({ tuitionId, receiverId }) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    socket.emit("joinRoom", tuitionId);

    axiosSecure.get(`/messages/${user._id}/${tuitionId}`).then((res) => {
      setMessages(res.data);
    });

    socket.on("receiveMessage", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, [tuitionId, user._id]);

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const msg = {
      senderId: user._id,
      receiverId,
      tuitionId,
      text: newMessage,
      timestamp: new Date()
    };
    socket.emit("sendMessage", msg);
    setMessages((prev) => [...prev, msg]);
    setNewMessage("");
    axiosSecure.post("/messages", msg);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-full max-w-md mx-auto border rounded-lg shadow-lg bg-white">
      {/* Chat Header */}
      <div className="bg-teal-500 text-white p-3 rounded-t-lg font-semibold text-center">
        Chat
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`max-w-[70%] px-3 py-2 rounded-xl break-words 
              ${m.senderId === user._id ? "bg-teal-500 text-white self-end rounded-br-none" : "bg-gray-200 text-black self-start rounded-bl-none"}`}
          >
            {m.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="flex p-3 border-t gap-2">
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          placeholder="Type a message..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-teal-500 px-4 py-2 rounded-full text-white font-semibold hover:bg-teal-600 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
