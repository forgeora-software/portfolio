"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Mouse, Download } from "lucide-react";
import { HexagonDecorations, DotMatrix } from "./HexagonDecorations";
import { USER_INFO } from "@/constants/information";

interface HeroSectionProps {
  onViewPortfolio: () => void;
}

export function HeroSection({ onViewPortfolio }: HeroSectionProps) {
  return (
    <section
      id="hello"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-[#121620]"
    >
      {/* Decorative SVGs and Ambient Mesh */}
      <HexagonDecorations />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="hero-grid">

          {/* Left Column: contains Headline block and Bio/CTA block */}
          <div className="hero-left-col">
            {/* Headline Block (Order 1 on mobile, top on desktop) */}
            <div className="hero-headline-block">
              {/* Tag */}
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00e676] animate-pulse" />
                <span className="text-xs uppercase tracking-[0.25em] text-slate-400 font-semibold font-display">
                  {USER_INFO.headlinePrefix}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
                {USER_INFO.headlineTitle}{" "}
                <span className="text-[#00e676] drop-shadow-[0_0_20px_rgba(0,230,118,0.35)]">
                  {USER_INFO.headlineHighlight}
                </span>
              </h1>
            </div>

            {/* Bio & Actions Block (Order 3 on mobile, below headline on desktop) */}
            <div className="hero-bio-block">
              {/* Bio paragraph */}
              <p className="text-slate-300 text-base sm:text-lg max-w-lg leading-relaxed font-light">
                {USER_INFO.heroBio}
              </p>

              {/* CTA Buttons */}
              <div className="hero-cta-buttons">
                <button
                  onClick={onViewPortfolio}
                  className="btn-primary group"
                >
                  <span>VIEW PORTFOLIO</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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

              {/* Scroll Down to Explore indicator (Desktop only) */}
              <div className="hero-scroll-desktop pt-10 text-slate-400 group cursor-pointer">
                <a
                  href="#about"
                  className="flex items-center gap-3 text-xs tracking-wider uppercase hover:text-[#00e676] transition-colors"
                >
                  <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-1.5">
                    <div className="w-1 h-2 rounded-full bg-[#00e676] animate-bounce" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-[11px] text-slate-300">Scroll Down</span>
                    <span className="text-[10px] text-slate-500">To Explore</span>
                  </div>
                  <ArrowDown className="w-3.5 h-3.5 animate-bounce ml-1 text-[#00e676]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Portrait with Emerald Backdrop (Order 2 on mobile, right column on desktop) */}
          <div className="hero-right-col">
            <div className="hero-portrait-wrapper">

              {/* Dynamic Angular Vibrant Green Backdrop */}
              <div className="hero-backdrop-green" />

              {/* Secondary Angular Dark Overlay */}
              <div className="hero-backdrop-dark" />

              {/* Decorative Geometric Elements inside the hero graphic */}
              <div className="absolute top-6 right-6 z-20">
                <DotMatrix dots={18} color="#00e676" />
              </div>

              {/* Outlined Hexagon sitting on top-right */}
              <svg
                className="hero-hexagon-tr"
                viewBox="0 0 100 100"
                fill="none"
              >
                <polygon
                  points="50,5 90,28 90,72 50,95 10,72 10,28"
                  stroke="#00e676"
                  strokeWidth="2"
                />
              </svg>

              {/* Outlined Hexagon bottom-left */}
              <svg
                className="hero-hexagon-bl"
                viewBox="0 0 100 100"
                fill="none"
              >
                <polygon
                  points="50,5 90,28 90,72 50,95 10,72 10,28"
                  stroke="#94a3b8"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
              </svg>

              {/* Designer Hero Photo */}
              <div className="hero-photo-frame">
                <Image
                  src="/images/hero_designer.jpg"
                  alt={`${USER_INFO.name} - ${USER_INFO.role}`}
                  fill
                  priority
                  className="object-cover object-top filter contrast-[1.05] brightness-[1.02] hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 290px, (max-width: 1024px) 380px, 480px"
                />

                {/* Gradient blend at bottom so image seamlessly anchors to section */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#121620] via-[#121620]/60 to-transparent pointer-events-none" />
              </div>

            </div>
          </div>

        </div>

        {/* Scroll Down Indicator on Mobile (Hidden on desktop) */}
        <div className="hero-scroll-mobile text-slate-400">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-xs tracking-wider uppercase hover:text-[#00e676] transition-colors"
          >
            <div className="w-5 h-8 rounded-full border-2 border-slate-600 flex items-start justify-center p-1">
              <div className="w-1 h-2 rounded-full bg-[#00e676] animate-bounce" />
            </div>
            <span className="text-[10px] text-slate-400 flex items-center gap-1">
              Scroll Down <ArrowDown className="w-3 h-3 text-[#00e676] animate-bounce" />
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}
