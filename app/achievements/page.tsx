import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Chatbot } from "@/components/chatbot";
import type { Metadata } from "next";
import { Achievements } from "@/components/achievements";

export const metadata: Metadata = {
  title: "Achievements | Martins Ejiofor",
  description:
    "Showcasing the professional achievements of Martins Ejiofor, including full-stack projects, training, and leadership roles.",
};

export default function AchievementsPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
      <Achievements />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}