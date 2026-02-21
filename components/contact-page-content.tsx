"use client";

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Send, CheckCircle } from "lucide-react";

export function ContactPageContent() {
  const [state, handleSubmit] = useForm("mreaankg"); // your Formspree form ID
  const [isSubmitted, setIsSubmitted] = useState(false);

  // When Formspree succeeds, show confirmation message
  if (state.succeeded && !isSubmitted) {
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000); // hide after 4s
  }

  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-2 font-mono text-sm text-primary">Get In Touch</p>
          <h1 className="mb-4 font-serif text-4xl font-bold text-foreground sm:text-5xl">
            <span className="text-balance">Let's work together.</span>
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Have a project idea, need a developer, or looking for a coding instructor?
            I'd love to hear from you. Fill out the form or reach out via any channel below.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary/60 focus:outline-none focus:ring-1 focus:ring-primary/30"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary/60 focus:outline-none focus:ring-1 focus:ring-primary/30"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-foreground">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="Project inquiry"
                  className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary/60 focus:outline-none focus:ring-1 focus:ring-primary/30"
                />
                <ValidationError prefix="Subject" field="subject" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="service" className="mb-2 block text-sm font-medium text-foreground">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground transition-colors focus:border-primary/60 focus:outline-none focus:ring-1 focus:ring-primary/30"
                >
                  <option value="">Select a service</option>
                  <option value="fullstack">Fullstack Development</option>
                  <option value="frontend">Frontend Development</option>
                  <option value="backend">Backend Development</option>
                  <option value="wordpress">WordPress Website</option>
                  <option value="training">Coding Training</option>
                  <option value="other">Other</option>
                </select>
                <ValidationError prefix="Service" field="service" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary/60 focus:outline-none focus:ring-1 focus:ring-primary/30"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 sm:w-auto"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="h-4 w-4" />
                    Message Sent
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-border bg-card p-8">
                <h3 className="mb-6 text-lg font-semibold text-foreground">Contact Info</h3>
                <div className="flex flex-col gap-5">
                  <a
                    href="mailto:hello@martinsejiofor.dev"
                    className="flex items-center gap-4 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Email</p>
                      <p className="text-sm font-medium text-foreground">agbomartinsejiofor@gmail.com</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Location</p>
                      <p className="text-sm font-medium text-foreground">Lagos, Nigeria</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Availability</p>
                      <p className="text-sm font-medium text-foreground">Open for work</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-8">
                <h3 className="mb-6 text-lg font-semibold text-foreground">Follow Me</h3>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/martins091"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground hover:bg-secondary"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/martins-ejiofor-a9b32b26a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground hover:bg-secondary"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                   href="https://x.com/Martinz_TyNo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground hover:bg-secondary"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Services summary */}
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
                <h3 className="mb-4 text-lg font-semibold text-foreground">Services I Offer</h3>
                <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Fullstack Web Development (MERN)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Next.js / NestJS Applications
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    WordPress Website Development
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Frontend Development Training
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    API Design & Development
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
