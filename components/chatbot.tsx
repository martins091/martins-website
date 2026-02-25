"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  from: "user" | "bot";
  text: string;
}

const portfolioData = {
  name: "Martins Ejiofor",
  aiName: "Martins AI",
  title: "Full-Stack Developer (MERN Stack)",
  phone: "08137560846",
  email: "ejioformartins99@gmail.com",
  summary:
    "Martins is a Full-Stack MERN developer and coding instructor with strong experience building modern, scalable web applications. He focuses on clean code, performance, and user-friendly interfaces.",
  skills: [
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "TypeScript",
    "Tailwind CSS",
    "WordPress"
  ],
  experience: [
    "Full-Stack Developer (Freelance & Contract)",
    "Frontend Development Trainer (NIMC, Abuja)",
    "Coding Instructor at New Horizons Computer Institute"
  ],
  projects: [
    "E-commerce web applications",
    "Portfolio and corporate websites",
    "Learning Management Systems (LMS)",
    "Dashboards and internal tools"
  ]
};

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages(prev => [...prev, { from: "user", text: userMessage }]);
    setInput("");

    setTimeout(() => {
      const reply = generateReply(userMessage);
      setMessages(prev => [...prev, { from: "bot", text: reply }]);
    }, 400);
  };

  const generateReply = (text: string) => {
    const q = text.toLowerCase();

    if (q.includes("name"))
      return `I am ${portfolioData.aiName}, Martins’ personal assistant.`;

    if (q.includes("who") || q.includes("about"))
      return portfolioData.summary;

    if (q.includes("phone") || q.includes("number"))
      return `You can call Martins on ${portfolioData.phone}.`;

    if (q.includes("email"))
      return `Martins’ email is ${portfolioData.email}.`;

    if (q.includes("skill") || q.includes("tech"))
      return `Martins works with: ${portfolioData.skills.join(", ")}.`;

    if (q.includes("experience") || q.includes("work"))
      return `Experience:\n• ${portfolioData.experience.join("\n• ")}`;

    if (q.includes("project"))
      return `Projects:\n• ${portfolioData.projects.join("\n• ")}`;

    if (q.includes("contact"))
      return `You can contact Martins via phone or email.\nPhone: ${portfolioData.phone}\nEmail: ${portfolioData.email}`;

    return `I’m ${portfolioData.aiName}. I can answer questions about Martins’ skills, experience, projects, or contact details.`;
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-red-600 text-white shadow-lg flex items-center justify-center text-xl hover:bg-red-700 transition"
      >
        💬
      </button>

      {open && (
        <div className="mt-3 w-[90vw] max-w-sm h-[70vh] bg-gray-900 border border-gray-700 rounded-xl flex flex-col shadow-xl">
          <div className="bg-red-600 text-white px-4 py-3 font-semibold">
            {portfolioData.aiName}
          </div>

          <div className="flex-1 p-3 overflow-y-auto space-y-3 text-sm">
            {messages.length === 0 && (
              <p className="text-gray-400">
                Ask me anything about Martins 👋
              </p>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[85%] p-3 rounded-xl whitespace-pre-line ${
                  msg.from === "user"
                    ? "ml-auto bg-gray-700 text-white"
                    : "mr-auto bg-red-600 text-white"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex border-t border-gray-700">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && sendMessage()}
              placeholder="Ask about Martins..."
              className="flex-1 px-3 py-2 bg-gray-800 text-white outline-none"
            />
            <button
              onClick={sendMessage}
              className="px-4 bg-red-600 text-white hover:bg-red-700 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}