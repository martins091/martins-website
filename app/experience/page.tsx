import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Chatbot } from "@/components/chatbot";
import type { Metadata } from "next";
import { Experience } from "@/components/experience";

export const metadata: Metadata = {
  title: "Experience | Martins Ejiofor",
  description:
    "Explore the professional experience of Martins Ejiofor, showcasing full-stack development, teaching, and AI-integrated projects.",
};

export default function ExperiencePage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <Experience />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}