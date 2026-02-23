"use client";

import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Twitter,
  Send,
  CheckCircle,
} from "lucide-react";

export function ContactPageContent() {
  const [state, handleSubmit] = useForm("mbdapzae");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle success message safely
  useEffect(() => {
    if (state.succeeded) {
      setIsSubmitted(true);
      const timer = setTimeout(() => setIsSubmitted(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16">
          <p className="mb-2 font-mono text-sm text-primary">Get In Touch</p>
          <h1 className="mb-4 font-serif text-4xl font-bold text-foreground sm:text-5xl">
            Let&apos;s work together.
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Have a project idea, need a developer, or looking for a coding
            instructor? I&apos;d love to hear from you. Fill out the form or
            reach out via any channel below.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full rounded-xl border bg-secondary px-4 py-3 text-sm focus:ring-1 focus:ring-primary/30"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full rounded-xl border bg-secondary px-4 py-3 text-sm focus:ring-1 focus:ring-primary/30"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Project inquiry"
                  className="w-full rounded-xl border bg-secondary px-4 py-3 text-sm"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Service Needed
                </label>
                <select
                  name="service"
                  className="w-full rounded-xl border bg-secondary px-4 py-3 text-sm"
                >
                  <option value="">Select a service</option>
                  <option value="fullstack">Fullstack Development</option>
                  <option value="frontend">Frontend Development</option>
                  <option value="backend">Backend Development</option>
                  <option value="wordpress">WordPress Website</option>
                  <option value="training">Coding Training</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border bg-secondary px-4 py-3 text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
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
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="rounded-2xl border bg-card p-8">
              <h3 className="mb-6 text-lg font-semibold">Contact Info</h3>

              <div className="flex flex-col gap-5">
                {/* Email */}
                <a
                  href="mailto:ejioformartins99@gmail.com"
                  className="flex items-center gap-4 hover:text-foreground"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs">Email</p>
                    <p className="text-sm font-medium">
                      ejioformartins99@gmail.com
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+2348137560846"
                  className="flex items-center gap-4 hover:text-foreground"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs">Phone</p>
                    <p className="text-sm font-medium">0813 756 0846</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs">Location</p>
                    <p className="text-sm font-medium">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="rounded-2xl border bg-card p-8">
              <h3 className="mb-6 text-lg font-semibold">Follow Me</h3>
              <div className="flex gap-3">
                <a href="https://github.com/martins091" target="_blank">
                  <Github />
                </a>
                <a
                  href="https://www.linkedin.com/in/martins-ejiofor-a9b32b26a/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a href="https://x.com/Martinz_TyNo" target="_blank">
                  <Twitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}