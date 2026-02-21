"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, ArrowUpRight } from "lucide-react"
import Link from "next/link"

export function Contact() {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} id="contact" className="relative px-6 py-32">
      <div className="mx-auto max-w-2xl text-center">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <p className="mb-4 font-mono text-sm text-primary">05. What&apos;s Next?</p>
          <h2 className="mb-6 font-serif text-4xl font-bold text-foreground sm:text-5xl">
            <span className="text-balance">Let&apos;s Build Something Great</span>
          </h2>
          <p className="mx-auto mb-12 max-w-lg text-lg leading-relaxed text-muted-foreground">
            I&apos;m currently open to new opportunities, freelance projects, and collaborations.
            Whether you need a fullstack application, a WordPress website, or a coding instructor,
            I&apos;d love to hear from you.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:agbomartinsejiofor@gmail.com"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
            >
              <Mail className="h-4 w-4" />
              Say Hello
            </a>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-8 py-3.5 text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:bg-secondary"
            >
              Contact Page
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
