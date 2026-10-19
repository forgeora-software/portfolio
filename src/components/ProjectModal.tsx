"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink, Calendar, User, Tag, Sparkles } from "lucide-react";
import { ProjectData } from "./PortfolioSection";

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-4xl bg-[#171d29] border border-white/10 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:text-[#00e676] hover:scale-105 transition-all"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto">
          {/* Big Preview Image */}
          <div
            className="relative w-full overflow-hidden bg-[#121620]"
            style={{ position: "relative", width: "100%", height: "360px" }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171d29] via-transparent to-transparent" />
          </div>

          {/* Project Details Content */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Category & Year */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#00e676]/10 text-[#00e676] border border-[#00e676]/30">
                {project.category}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                {project.year}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-slate-500" />
                Client: {project.client}
              </span>
            </div>

            {/* Title & Subtitle */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mt-1 font-medium">
                {project.subtitle}
              </p>
            </div>

            {/* Description */}
            <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
              <p>{project.description}</p>
              <p>
                This project focused on establishing an accessible visual hierarchy,
                streamlined user journeys, dynamic micro-interactions, and high-performance
                design token implementations that seamlessly scale across all device viewports.
              </p>
            </div>

            {/* Tags */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-[#00e676]" />
                Deliverables &amp; Technologies
              </span>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-3 py-1 rounded bg-[#121620] text-slate-300 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions Footer */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={onClose}
                className="btn-secondary"
              >
                Close Project
              </button>

              <a
                href="#contact"
                onClick={onClose}
                className="btn-primary"
              >
                <span>Request Similar Project</span>
                <Sparkles className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
