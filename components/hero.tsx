"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowDown, ArrowUp, Github, Linkedin, Twitter } from "lucide-react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center px-6 overflow-hidden">
      {/* Animated background grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(100,200,180,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,200,180,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-[150px]" />
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-primary/3 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl w-full">
        <div className="grid items-center gap-12 lg:grid-cols-5">
          {/* Text Content */}
          <div
            className={`lg:col-span-3 transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-xs font-medium text-primary">Available for opportunities</span>
            </div>

            <h1 className="mb-4 font-serif text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              <span className="text-balance">Martins</span>
              <br />
              <span className="text-gradient">Ejiofor</span>
            </h1>

            <p className="mb-3 text-xl font-medium text-foreground/80">
              Fullstack Developer &middot; MERN Specialist
            </p>

            <p className="mb-10 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Building robust web applications with 3+ years of experience.
              Specializing in the MERN stack, Next.js, and WordPress.
              Passionate about clean code, mentorship, and turning ideas into impactful products.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
              >
                View My Work
                <ArrowUp className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3.5 text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:bg-secondary"
              >
                Get In Touch
              </a>
            </div>

            <div className="mt-12 flex items-center gap-5">
              <a
                href="https://github.com/martins091"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/martins-ejiofor-a9b32b26a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://x.com/Martinz_TyNo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div
            className={`lg:col-span-2 transition-all duration-1000 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="relative mx-auto w-64 sm:w-72 lg:w-full max-w-sm">
              <div className="absolute -inset-1 rounded-2xl bg-primary/20 blur-xl" />
              <div className="relative overflow-hidden rounded-2xl border-2 border-primary/20">
                <Image
                  src="/martins.jpeg"
                  alt="Martins Ejiofor - Fullstack Developer"
                  width={400}
                  height={500}
                  className="h-auto w-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
              {/* Floating stats */}
              <div className="absolute -bottom-4 -left-4 rounded-xl border border-border bg-card px-4 py-3 shadow-xl">
                <p className="text-2xl font-bold text-primary">3+</p>
                <p className="text-xs text-muted-foreground">Years Exp.</p>
              </div>
              <div className="absolute -right-4 top-8 rounded-xl border border-border bg-card px-4 py-3 shadow-xl">
                <p className="text-2xl font-bold text-primary">20+</p>
                <p className="text-xs text-muted-foreground">Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
