"use client"

import Image from "next/image"
import { Code2, Users, TrendingUp, Globe, Download, Mail } from "lucide-react"

const timeline = [
  { year: "01/2022 – 05/2022", event: "Frontend Developer Intern at All-Tech System & Co. Learned HTML, CSS, JavaScript, and contributed to client web applications." },
  { year: "04/2022 – 08/2023", event: "Frontend Developer (Contract) at Tezza Business Solutions Ltd. Led frontend development for TEZZMANDATE project for MTN, implementing responsive UI from Figma designs." },
  { year: "09/2023 – 04/2024", event: "Frontend Developer (Contract) at FinezCV. Developed UI, implemented features, and integrated frontend with backend for a job web application." },
  { year: "06/2024 – 12/2024", event: "Full-Stack Developer (Contract) at Leinad Studio. Built scalable web apps, mentored juniors, participated in code reviews and project planning." },
  { year: "08/2024 – 03/2025", event: "Full-Stack Developer (Full-Time) at New Horizons. Guided junior developers, collaborated on responsive, high-performance web applications." },
  { year: "04/2025 – Present", event: "Full-Stack Lead Facilitator Instructor & Full-Stack Engineer at Melodia Coding Academy. Deliver full-stack training, mentor learners, manage client projects from development to deployment." },
  { year: "06/2025 – 12/2025", event: "Full-Stack Developer (Contract) at Optimus AI Lab. Worked on AI-powered software solutions, contributing to frontend & backend integration with APIs and databases." },
  { year: "Now", event: "Open to new opportunities and collaborations in full-stack development, MERN/Next.js projects, and AI-integrated applications." },
];

const values = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "I write maintainable, well-structured code that stands the test of time and is easy for teams to collaborate on.",
  },
  {
    icon: Users,
    title: "Mentorship",
    description: "Sharing knowledge is core to who I am. I have trained dozens of students and professionals to become confident developers.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description: "Technology evolves fast. I stay current by constantly learning new tools, frameworks, and best practices.",
  },
  {
    icon: Globe,
    title: "Impact Driven",
    description: "I build things that matter. Every project I take on aims to solve real problems for real people and businesses.",
  },
]

export function AboutPageContent() {
  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Hero section */}
        <div className="mb-20 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-2 font-mono text-sm text-primary">About Me</p>
            <h1 className="mb-6 font-serif text-4xl font-bold text-foreground sm:text-5xl">
              <span className="text-balance">I build web experiences that make a difference.</span>
            </h1>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              I&apos;m Martins Ejiofor, a fullstack developer based in Nigeria with over 3 years of
              experience. I specialize in the MERN stack (MongoDB, Express, React, Node.js) and
              modern frameworks like Next.js and NestJS.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              What sets me apart is my passion for teaching. I&apos;ve traveled from Lagos to Abuja
              to train government staff, and I regularly guide students from zero knowledge to
              job-ready developers at New Horizons Computer Institute.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:hello@martinsejiofor.dev"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
              <a
                href="https://docs.google.com/document/d/1c8TocEGhdoK01uLuwygtQV6UiIv7ipffWewin6hpwQk/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:bg-secondary"
              >
                <Download className="h-4 w-4" />
                View Resume
              </a>
            </div>
          </div>

          <div className="relative mx-auto max-w-sm lg:mx-0 lg:ml-auto">
            <div className="absolute -inset-2 rounded-2xl bg-primary/10 blur-xl" />
            <div className="relative overflow-hidden rounded-2xl border-2 border-primary/20">
              <Image
                src="mart.jpeg"
                alt="Martins Ejiofor"
                width={400}
                height={500}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="mb-10 font-serif text-3xl font-bold text-foreground">What I Believe In</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <value.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h2 className="mb-10 font-serif text-3xl font-bold text-foreground">My Journey</h2>
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2" />
            <div className="flex flex-col gap-8">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`relative flex items-start gap-8 pl-12 md:pl-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  {/* Dot */}
                  <div className="absolute left-2.5 top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background md:left-1/2 md:-translate-x-1/2" />

                  <div className={`hidden md:block md:w-1/2 ${i % 2 === 0 ? "text-right pr-12" : "text-left pl-12"}`}>
                    <span className="font-mono text-sm font-bold text-primary">{item.year}</span>
                  </div>
                  <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                    <span className="mb-1 block font-mono text-sm font-bold text-primary md:hidden">{item.year}</span>
                    <p className="text-foreground">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
