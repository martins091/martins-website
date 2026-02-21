"use client"

import { useEffect, useRef, useState } from "react"
import { Award, MapPin, GraduationCap, Users } from "lucide-react"

const achievements = [
  {
    icon: MapPin,
    title: "NIMC Staff Training",
    location: "Lagos to Abuja",
    description:
      "Traveled from Lagos to Abuja to deliver hands-on frontend development training to NIMC staff using React. Covered component architecture, state management with Redux, and modern development workflows.",
    highlight: "National Impact",
  },
  {
    icon: GraduationCap,
    title: "New Horizons Instructor",
    location: "Lagos, Nigeria",
    description:
      "Trained students from the absolute basics of web development through to advanced concepts, guiding them all the way to graduation and successful job placements in the tech industry.",
    highlight: "Career Builder",
  },
  {
    icon: Users,
    title: "20+ Projects Delivered",
    location: "Remote & On-site",
    description:
      "Successfully delivered over 20 projects across diverse industries, from e-commerce platforms and dashboards to WordPress sites for businesses, consistently meeting deadlines and exceeding expectations.",
    highlight: "Proven Track Record",
  },
  {
    icon: Award,
    title: "MERN Stack Specialist",
    location: "Self-driven",
    description:
      "Developed deep expertise across the full MERN stack plus modern tools like Next.js, NestJS, and TypeScript through continuous self-learning, real-world projects, and teaching others.",
    highlight: "Continuous Growth",
  },
]

export function Achievements() {
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
    <section ref={ref} id="achievements" className="relative px-6 py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary/3 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="mb-16 flex items-center gap-4">
            <span className="font-mono text-sm text-primary">04.</span>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Achievements
            </h2>
            <span className="hidden h-px flex-1 bg-border sm:block" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {achievements.map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="absolute right-6 top-6 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {item.highlight}
                </div>

                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="h-5 w-5" />
                </div>

                <h3 className="mb-1 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mb-4 text-xs font-medium tracking-wider text-primary uppercase">
                  {item.location}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
