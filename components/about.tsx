"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Users, TrendingUp, Globe } from "lucide-react"

const technicalSkills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js",
  "Node.js", "Express", "MongoDB", "NestJS", "Redux",
  "Git", "GitHub", "WordPress", "Tailwind CSS", "REST APIs",
]

const softSkills = [
  { icon: Users, label: "Team Collaboration" },
  { icon: TrendingUp, label: "Growth Mindset" },
  { icon: Globe, label: "Communication" },
  { icon: Code2, label: "Problem Solving" },
]

export function About() {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="mb-16 flex items-center gap-4">
            <span className="font-mono text-sm text-primary">01.</span>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">About Me</h2>
            <span className="hidden h-px flex-1 bg-border sm:block" />
          </div>

          <div className="grid gap-16 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                I&apos;m Martins Ejiofor, a passionate fullstack developer with over 3 years of
                hands-on experience building scalable web applications. I specialize in the
                <span className="text-foreground font-medium"> MERN stack </span>
                (MongoDB, Express, React, Node.js) and have a strong command of modern frameworks
                like <span className="text-foreground font-medium">Next.js</span> and
                <span className="text-foreground font-medium"> NestJS</span>.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                Beyond coding, I&apos;m a dedicated trainer and mentor. I&apos;ve had the privilege
                of training NIMC staff on frontend development using React in Abuja, and I&apos;ve
                guided students from complete beginners to job-ready graduates at
                <span className="text-foreground font-medium"> New Horizons Computer Institute</span>.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I also build professional WordPress websites for businesses and
                organizations. I thrive in collaborative environments and believe in growing
                together with the teams and companies I work with.
              </p>

              {/* Soft Skills */}
              <div className="mt-10 grid grid-cols-2 gap-3">
                {softSkills.map((skill) => (
                  <div
                    key={skill.label}
                    className="flex items-center gap-3 rounded-xl border border-border bg-secondary/50 px-4 py-3 transition-colors hover:border-primary/30"
                  >
                    <skill.icon className="h-4 w-4 text-primary" />
                    <span className="text-sm text-foreground">{skill.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <h3 className="mb-6 text-sm font-semibold tracking-widest text-foreground uppercase">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-secondary-foreground transition-all hover:border-primary/40 hover:text-primary hover:shadow-sm hover:shadow-primary/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="mt-10 rounded-xl border border-border bg-card p-6">
                <h3 className="mb-4 text-sm font-semibold tracking-widest text-foreground uppercase">
                  Quick Facts
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Experience</span>
                    <span className="text-sm font-medium text-foreground">3+ Years</span>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Specialty</span>
                    <span className="text-sm font-medium text-foreground">MERN Stack</span>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Projects</span>
                    <span className="text-sm font-medium text-foreground">20+ Completed</span>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Location</span>
                    <span className="text-sm font-medium text-foreground">Nigeria</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
