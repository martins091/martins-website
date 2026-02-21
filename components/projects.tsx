"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Github } from "lucide-react"

const projects = [
  {
    title: "Naira Game Website",
    description:
      "A dynamic gaming platform for game lovers featuring a game marketplace, community forums, gaming events, latest news, and listings for game cafes. Built with a modern fullstack approach for seamless user experience.",
    image: "/nairagameproject.png",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    category: "Fullstack / Gaming",
    liveUrl: "https://www.nairagame.com/",
    githubUrl: "#",
  },
  {
    title: "Lush Hair Website",
    description:
      "An elegant WordPress e-commerce website for purchasing women's hair, creams, and personal care products.",
    image: "/lushhairproject.png",
    technologies: ["WordPress", "PHP", "CSS", "JavaScript", "WooCommerce", "SEO"],
    category: "E-Commerce / Beauty",
    liveUrl: "https://nigeria.lushhairafrica.com/",
    githubUrl: "",
  },
  {
    title: "101Migrate Immigration Consulting Website",
    description:
      "A professional immigration consulting platform for EB-2 NIW and EB-1A U.S. immigration pathways.",
    image: "/travelproject.png",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    liveUrl: "https://www.eb-101.com/",
    githubUrl: "https://github.com/martins091/101Migrate",
  },
  {
    title: "African Witch Tech – Digital Innovation Platform",
    description:
      "A comprehensive technology platform built to help African businesses launch and scale cutting-edge digital solutions.",
    image: "/witchtech.png",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs"],
    liveUrl: "https://www.africanwitchtech.com/",
    githubUrl: "#",
  },
]

export function Projects() {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} id="projects" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="font-mono text-sm text-primary">03.</span>
            <h2 className="text-3xl font-bold sm:text-4xl">Selected Work</h2>
            <span className="hidden h-px flex-1 bg-border sm:block" />
          </div>

          <p className="mb-16 max-w-xl text-muted-foreground">
            A selection of projects I&apos;ve built ranging from fullstack applications to WordPress sites.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} index={i} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border px-8 py-3.5 text-sm transition hover:border-primary/40 hover:bg-secondary"
            >
              View All Projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const isPrivateRepo = !project.githubUrl || project.githubUrl === "#"

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`group overflow-hidden rounded-2xl border bg-card transition-all duration-700 hover:border-primary/30 hover:shadow-lg ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay Icons */}
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
                  Send me a message to get access.
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
        <p className="mb-4 text-sm text-muted-foreground line-clamp-3">
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
}