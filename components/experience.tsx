"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"

const experiences = [
  {
    period: "06/2025 – 12/2025",
    title: "Full-Stack Developer (Contract)",
    company: "Optimus AI Lab",
    url: "#",
    description:
      "Worked closely with a team of developers and AI specialists to design and build software solutions powered by artificial intelligence. Contributed to both frontend and backend development, ensuring seamless integration with AI models, APIs, and databases for scalable, user-friendly applications. Participated in sprints, code reviews, and collaborative problem-solving sessions.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "AI Integration", "REST APIs"],
  },
  {
    period: "04/2025 – Present",
    title: "Full-Stack Lead Facilitator Instructor & Full-Stack Engineer",
    company: "Melodia Coding Academy",
    url: "#",
    description:
      "Lead the delivery of comprehensive full-stack web development training aligned with industry standards. Mentor learners and oversee instructional teams while managing the end-to-end software development lifecycle for client projects — from requirements gathering to deployment. Drive adoption of best practices in code quality, scalability, and performance, bridging training with real-world industry solutions.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "TailwindCSS", "Git"],
  },
  {
    period: "08/2024 – 03/2025",
    title: "Full-Stack Developer (Full-Time)",
    company: "New Horizons",
    url: "#",
    description:
      "Guided and mentored junior developers in web development best practices, code reviews, and project planning. Collaborated with a team of developers to design and implement responsive, high-performance web applications. Participated in the full software development lifecycle including requirements gathering, design, development, testing, and deployment.",
    technologies: ["React", "JavaScript", "Node.js", "HTML", "CSS", "Git"],
  },
  {
    period: "06/2024 – 12/2024",
    title: "Full-Stack Developer (Contract)",
    company: "Leinad Studio",
    url: "#",
    description:
      "Collaborated with development teams to design and implement scalable web applications. Mentored junior developers and contributed to code reviews and project planning. Participated in the full software development lifecycle, ensuring responsiveness, performance, and strong user experience across client projects.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "REST APIs"],
  },
  {
    period: "09/2023 – 04/2024",
    title: "Frontend Developer (Contract)",
    company: "FinezCV",
    url: "#",
    description:
      "Played a key role in developing the FinezCV job web application by designing user interfaces, implementing new features, and ensuring responsiveness and performance. Collaborated closely with backend engineers to integrate frontend components with server-side logic, delivering a seamless user experience.",
    technologies: ["React", "Node.js", "MongoDB", "JavaScript", "HTML", "CSS"],
  },
  {
    period: "04/2022 – 08/2023",
    title: "Frontend Developer (Contract)",
    company: "Tezza Business Solutions Ltd",
    url: "#",
    description:
      "Collaborated with backend developers and UI/UX designers to build the TEZZMANDATE project for MTN. Led frontend development by converting Figma designs into responsive and efficient code. Implemented key features to ensure a robust and user-friendly web application experience.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "Figma"],
  },
  {
    period: "01/2022 – 05/2022",
    title: "Frontend Developer Intern",
    company: "All-Tech System & Co",
    url: "#",
    description:
      "Collaborated with UI/UX designers and developers to create client-focused web applications tailored to project requirements. Facilitated training sessions for students on HTML, CSS, and JavaScript fundamentals. Contributed to improving functionality and user experience across multiple projects.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
]

export function Experience() {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} id="experience" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="mb-16 flex items-center gap-4">
            <span className="font-mono text-sm text-primary">02.</span>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Experience
            </h2>
            <span className="hidden h-px flex-1 bg-border sm:block" />
          </div>

          <div className="relative flex flex-col gap-2">
            {/* Timeline line */}
            <div className="absolute left-[19px] top-8 hidden h-[calc(100%-4rem)] w-px bg-border lg:block" />

            {experiences.map((exp, i) => (
              <div
                key={i}
                className="group relative rounded-xl p-6 transition-all hover:bg-secondary/60 lg:grid lg:grid-cols-8 lg:gap-6 lg:pl-14"
              >
                {/* Timeline dot */}
                <div className="absolute left-3 top-9 hidden h-3 w-3 rounded-full border-2 border-primary bg-background transition-all group-hover:bg-primary lg:block" />

                <div className="mb-2 text-xs font-medium tracking-wider text-muted-foreground uppercase lg:col-span-2 lg:mb-0 lg:pt-1">
                  {exp.period}
                </div>
                <div className="lg:col-span-6">
                  <h3 className="mb-2 flex items-center gap-2 text-base font-semibold text-foreground">
                    {exp.title} &middot;{" "}
                    <span className="text-primary">{exp.company}</span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
