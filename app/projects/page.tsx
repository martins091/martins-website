import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Chatbot } from "@/components/chatbot"
import { ProjectsPageContent } from "@/components/projects-page-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects | Martins Ejiofor",
  description: "Browse the portfolio of projects built by Martins Ejiofor, from fullstack MERN applications to WordPress websites.",
}

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <ProjectsPageContent />
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}
