"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight, Github } from "lucide-react"

const allProjects = [
  {
    title: "Naira Game Website",
    description:
      "A dynamic gaming platform for game lovers featuring a game marketplace, community forums, gaming events, latest news, and listings for game cafes. Built with a modern fullstack approach for seamless user experience.",
    image: "/nairagameproject.png",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    category: "Fullstack",
    liveUrl: "https://www.nairagame.com/",
    githubUrl: "#",
  },
  {
    title: "Lush Hair Website",
    description:
      "An elegant WordPress e-commerce website for purchasing women's hair, creams, and personal care products. Features custom themes, product catalog, secure checkout, and an engaging blog for beauty tips.",
    image: "/lushhairproject.png",
    technologies: ["WordPress", "PHP", "CSS", "JavaScript", "WooCommerce", "SEO"],
    category: "WordPress",
    liveUrl: "https://nigeria.lushhairafrica.com/",
    githubUrl: "#",
  },
  {
    title: "101Migrate Immigration Consulting Website",
    description:
      "A professional immigration consulting platform for 101Migrate, specializing in EB-2 NIW and EB-1A U.S. employment-based immigration pathways.",
    image: "/travelproject.png",
    category: "Fullstack",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    liveUrl: "https://www.eb-101.com/",
    githubUrl: "https://github.com/martins091/101Migrate",
  },
  {
    title: "African Witch Tech – Digital Innovation Platform",
    description:
      "A comprehensive technology platform built to help African businesses launch and scale cutting-edge digital solutions.",
    image: "/witchtech.png",
    category: "Fullstack",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs"],
    liveUrl: "https://www.africanwitchtech.com/",
    githubUrl: "#",
  },
  {
    title: "ClimaHorizon Initiative – Climate Innovation Platform",
    description:
      "A modern frontend web platform for a climate-tech organization driving environmental innovation.",
    image: "/clima.png",
    technologies: ["React", "Tailwind CSS", "Next.js", "Framer Motion"],
    category: "Frontend",
    liveUrl: "https://www.climahorizoninitiative.com/",
    githubUrl: "https://github.com/martins091/ClimaHorizon",
  },
  {
    title: "GreenSfera – Climate Action & Community Platform",
    description:
      "A modern frontend web platform for a youth-led climate movement focused on real environmental impact.",
    image: "/greensfera.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "Frontend",
    liveUrl: "https://www.egreensfera.com/",
    githubUrl: "https://github.com/martins091/GreenSfera",
  },
  {
    title: "Life Changers Care & LIFT Initiative – Mental Health Backend System",
    description:
      "A secure backend system built to support the digital infrastructure of a mental health organization.",
    image: "/life.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "Frontend",
    liveUrl: "https://www.lifechangerscareandliftinitiative.com/",
    githubUrl: "https://github.com/martins091/Life-Changing-business-website",
  },
  {
    title: "La Pizza Restaurant & Bar Website",
    description:
      "A customer-focused WordPress website designed to showcase a diverse menu with fast delivery.",
    image: "/lapizza.png",
    technologies: ["WordPress", "PHP", "JavaScript", "CSS"],
    category: "WordPress",
    liveUrl: "https://lapizza.com.ng/",
    githubUrl: "#",
  },
]

const categories = ["All", "Fullstack", "Frontend", "Backend", "WordPress"]

export function ProjectsPageContent() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory)

  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <p className="mb-2 font-mono text-sm text-primary">My Portfolio</p>
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">All Projects</h1>
          <p className="max-w-2xl text-muted-foreground">
            A comprehensive look at the projects I&apos;ve built across different domains and technologies.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className="grid gap-8 md:grid-cols-2">
          {filtered.map((project, i) => {
            const isPrivateRepo = !project.githubUrl || project.githubUrl === "#"

            return (
              <div
                key={`${project.title}-${i}`}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:border-primary/30 hover:shadow-lg"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute right-4 top-4 flex gap-2 opacity-0 transition group-hover:opacity-100">
                    {/* GitHub */}
                    {isPrivateRepo ? (
                      <div className="relative group/github">
                        <div className="flex h-9 w-9 cursor-not-allowed items-center justify-center rounded-full bg-background/80 text-muted-foreground">
                          <Github className="h-4 w-4" />
                        </div>

                        <div className="pointer-events-none absolute right-0 top-11 w-60 rounded-lg border bg-background px-3 py-2 text-xs opacity-0 shadow-lg transition group-hover/github:opacity-100">
                          🔒 Repository is private.
                          <span className="block text-muted-foreground">
                            Send me a message so I can give you access.
                          </span>
                        </div>
                      </div>
                    ) : (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-background/90 hover:bg-primary hover:text-primary-foreground"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}

                    {/* Live */}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-background/90 hover:bg-primary hover:text-primary-foreground"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}