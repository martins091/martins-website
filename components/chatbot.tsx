"use client";

import { useState } from "react";

interface Message {
  from: "user" | "bot";
  text: string;
}

// Your detailed portfolio data
const portfolioData = {
  name: "Martins Ejiofor",
  title: "Fullstack Developer · MERN Specialist",
  summary: "Building robust web applications with 3+ years of experience. Specializing in the MERN stack, Next.js, and WordPress. Passionate about clean code, mentorship, and turning ideas into impactful products.",
  experience: [
    {
      role: "Fullstack Developer · Freelance / Contract",
      years: "2023 - Present",
      description: "Building end-to-end web applications using MERN stack and Next.js. Delivering WordPress solutions. Leading frontend architecture and responsive, accessible UIs.",
      tech: ["React", "Next.js", "Node.js", "MongoDB", "TypeScript", "WordPress"]
    },
    {
      role: "Frontend Development Trainer · NIMC (Abuja)",
      years: "2024",
      description: "Trained NIMC staff on modern frontend development using React. Delivered structured curriculum on component architecture, state management, and best practices.",
      tech: ["React", "JavaScript", "HTML", "CSS", "Redux"]
    },
    {
      role: "Coding Instructor · New Horizons Computer Institute",
      years: "2023 - Present",
      description: "Teaching students from basics to advanced web development, guiding them to graduation and job placements.",
      tech: ["HTML", "CSS", "JavaScript", "React", "Git"]
    }
  ],
  projects: [
    {
      name: "E-Commerce Platform",
      description: "Fullstack e-commerce application with product management, cart, authentication, payment integration.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Redux"]
    },
    {
      name: "Business Portfolio Website",
      description: "WordPress site for corporate client with SEO, custom themes, and forms. Boosted client leads by 40%.",
      tech: ["WordPress", "PHP", "CSS", "JavaScript", "SEO"]
    },
    {
      name: "Task Management Dashboard",
      description: "Real-time project management tool with drag-and-drop tasks, team collaboration, analytics.",
      tech: ["Next.js", "NestJS", "TypeScript", "MongoDB", "Tailwind CSS"]
    },
    {
      name: "Learning Management System",
      description: "Online LMS platform with course creation, progress tracking, quizzes, certificates, and video streaming.",
      tech: ["React", "Express", "MongoDB", "Node.js", "REST APIs"]
    }
  ],
  achievements: [
    "Trained NIMC staff on React frontend development in Abuja",
    "Guided students at New Horizons from basic to advanced web development",
    "Delivered 20+ projects across multiple industries",
    "Expertise in MERN stack, Next.js, NestJS, TypeScript"
  ],
  contact: {
    email: "agbomartinsejiofor@gmail.com",
    linkedin: "https://www.linkedin.com/in/martins-ejiofor-a9b32b26a/",
    github: "https://github.com/martins091"
  }
};

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const toggleOpen = () => setOpen(!open);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages([...messages, { from: "user", text: userMessage }]);
    setInput("");

    setTimeout(() => {
      const reply = generateReply(userMessage);
      setMessages(prev => [...prev, { from: "bot", text: reply }]);
    }, 500);
  };

  const generateReply = (text: string) => {
    const lower = text.toLowerCase();

    // General questions
    if (lower.includes("name")) return `Hi! My name is ${portfolioData.name}.`;
    if (lower.includes("title") || lower.includes("role")) return `I am a ${portfolioData.title}.`;
    if (lower.includes("summary") || lower.includes("about")) return portfolioData.summary;

    // Experience questions
    if (lower.includes("experience") || lower.includes("work")) {
      return portfolioData.experience
        .map(exp => `• ${exp.role} (${exp.years}): ${exp.description} [Tech: ${exp.tech.join(", ")}]`)
        .join("\n");
    }

    // Projects questions
    if (lower.includes("project") || lower.includes("work samples") || lower.includes("portfolio")) {
      return portfolioData.projects
        .map(p => `• ${p.name}: ${p.description} [Tech: ${p.tech.join(", ")}]`)
        .join("\n");
    }

    // Achievements questions
    if (lower.includes("achievement") || lower.includes("award") || lower.includes("success")) {
      return "Here are some of my notable achievements:\n" + portfolioData.achievements.map(a => `• ${a}`).join("\n");
    }

    // Contact
    if (lower.includes("contact") || lower.includes("reach") || lower.includes("email") || lower.includes("linkedin")) {
      return `You can reach me at:\nEmail: ${portfolioData.contact.email}\nLinkedIn: ${portfolioData.contact.linkedin}\nGitHub: ${portfolioData.contact.github}`;
    }

    // Tech stack
    if (lower.includes("tech stack") || lower.includes("skills") || lower.includes("technologies")) {
      return "I work with: " + portfolioData.experience.flatMap(e => e.tech).filter((v, i, a) => a.indexOf(v) === i).join(", ");
    }

    // Default fallback
    return "I can answer questions about my skills, experience, projects, achievements, or how to contact me. What would you like to know?";
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Chat toggle button */}
      <button
        onClick={toggleOpen}
        className="bg-gradient-to-br from-purple-700 to-indigo-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:from-purple-800 hover:to-indigo-800 transition"
      >
        💬
      </button>

      {/* Chat window */}
      {open && (
        <div className="mt-2 w-96 max-w-sm bg-gray-900 border border-gray-700 rounded-lg shadow-lg flex flex-col overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-800 to-purple-800 text-white px-4 py-2 font-semibold">Hello I am Martinz AI</div>
          <div className="p-4 flex-1 overflow-y-auto h-80 space-y-2">
            {messages.length === 0 && (
              <p className="text-gray-400 text-sm">Ask me anything about his work, skills, contact, or achievements!</p>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-3 rounded-xl max-w-[80%] break-words ${
                  msg.from === "user"
                    ? "bg-gradient-to-r from-gray-700 to-gray-600 text-white self-end"
                    : "bg-gradient-to-r from-indigo-800 to-purple-700 text-white self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex border-t border-gray-700">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && sendMessage()}
              placeholder="Type your question..."
              className="flex-1 px-3 py-2 bg-gray-800 text-white focus:outline-none"
            />
            <button
              onClick={sendMessage}
              className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white px-4 hover:from-purple-800 hover:to-indigo-800 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}