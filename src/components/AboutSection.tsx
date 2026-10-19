"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Download, Mail, Check, Copy } from "lucide-react";
import { DotMatrix } from "./HexagonDecorations";
import { USER_INFO } from "@/constants/information";

interface AboutSectionProps {
  onHireMe: () => void;
}

export function AboutSection({ onHireMe }: AboutSectionProps) {
  const [copied, setCopied] = useState(false);
  const email = USER_INFO.email;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="relative pt-24 sm:pt-28 lg:pt-32 pb-24 sm:pb-28 bg-[#141923] overflow-hidden">

      {/* Organic Curved Wave Divider on top */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none -translate-y-1">
        <svg
          className="relative block w-full h-16 sm:h-24 text-[#121620]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,0 L0,0 Z" />
        </svg>
      </div>

      {/* Background Ambience & Grid */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#00e676]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-24 right-10 z-0">
        <DotMatrix dots={30} color="#94a3b8" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Column: Portrait with Orbiting Rings & Floating Metric Badges */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="about-portrait-wrap">

              {/* Outer Neon Glow Rings */}
              <div className="absolute inset-0 rounded-full border border-[#00e676]/20 animate-pulse pointer-events-none" />
              <div className="absolute -inset-4 rounded-full border border-dashed border-[#00e676]/30 pointer-events-none" />

              {/* Orbital Neon Arc Accent */}
              <svg
                className="absolute -inset-8 w-[calc(100%+64px)] h-[calc(100%+64px)] pointer-events-none"
                viewBox="0 0 300 300"
                fill="none"
              >
                <circle
                  cx="150"
                  cy="150"
                  r="140"
                  stroke="url(#accentGrad)"
                  strokeWidth="2.5"
                  strokeDasharray="90 350"
                  strokeLinecap="round"
                />
                <circle
                  cx="150"
                  cy="150"
                  r="125"
                  stroke="#00e676"
                  strokeWidth="1.5"
                  strokeDasharray="40 280"
                  opacity="0.6"
                />
                <defs>
                  <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00e676" />
                    <stop offset="100%" stopColor="#00e676" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Designer Portrait Circular Frame */}
              <div className="about-photo-circle">
                <Image
                  src="/images/about_designer.jpg"
                  alt={`${USER_INFO.name} - ${USER_INFO.role} & Creative Lead`}
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 250px, (max-width: 1024px) 290px, 330px"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-full" />
              </div>

              {/* Floating Badge 1: 16+ Years Experience (Top-Right, Vibrant Green) */}
              <div className="about-badge-exp">
                <div className="about-badge-exp-card">
                  <span className="font-extrabold text-xl sm:text-2xl font-display leading-none">
                    {USER_INFO.stats.experienceYears}
                  </span>
                  <div className="flex flex-col text-[10px] sm:text-[11px] font-bold leading-tight uppercase tracking-wider">
                    <span>Years of</span>
                    <span>Experience</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: 215+ Projects (Mid-Left, Dark Glass) */}
              <div className="about-badge-projects">
                <div className="about-badge-projects-card">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00e676]" />
                    <span className="font-extrabold text-xl sm:text-2xl font-display text-[#00e676] leading-none">
                      {USER_INFO.stats.projectsCompleted}
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-medium text-slate-300">
                    Project Completed
                  </span>
                </div>
              </div>

              {/* Floating Badge 3: 97+ Happy Clients (Bottom-Right, Dark Glass) */}
              <div className="about-badge-clients">
                <div className="about-badge-clients-card">
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-xl sm:text-2xl font-display text-white leading-none">
                      {USER_INFO.stats.happyClients}
                    </span>
                    <span className="text-[#00e676] text-xs">★</span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-medium text-slate-300">
                    Happy Clients
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Bio Content & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6">

            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-slate-400 font-semibold font-display">
                LET ME INTRODUCE MYSELF
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00e676] tracking-tight mt-1">
                About me
              </h2>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              A story of hardwork and perseverance.
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {USER_INFO.aboutBio}
            </p>

            {/* Contact Box Callout */}
            <div className="w-full bg-[#1b2230]/70 border border-white/5 rounded-xl p-5 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Contact
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Do you fancy saying hi to me or you want to get started with your
                project and you need my help? Feel free to contact me.
              </p>

              <div className="flex items-center justify-between pt-1">
                <a
                  href={`mailto:${email}`}
                  className="text-sm sm:text-base font-semibold text-[#00e676] hover:underline flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>{email}</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white px-2.5 py-1 rounded bg-white/5 border border-white/10 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#00e676]" />
                      <span className="text-[#00e676]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button onClick={onHireMe} className="btn-primary">
                HIRE ME
              </button>

              <a
                href={USER_INFO.resumeUrl}
                download={USER_INFO.resumeFileName}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary group"
              >
                <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 text-[#00e676]" />
                <span>DOWNLOAD RESUME</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
