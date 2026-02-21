import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Chatbot } from "@/components/chatbot"
import { ContactPageContent } from "@/components/contact-page-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | Martins Ejiofor",
  description: "Get in touch with Martins Ejiofor for fullstack development projects, WordPress websites, or training opportunities.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <ContactPageContent />
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}
