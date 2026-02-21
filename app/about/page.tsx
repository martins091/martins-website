import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Chatbot } from "@/components/chatbot"
import { AboutPageContent } from "@/components/about-page-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Martins Ejiofor",
  description: "Learn more about Martins Ejiofor, a fullstack developer with 3+ years of experience specializing in the MERN stack.",
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <AboutPageContent />
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}
