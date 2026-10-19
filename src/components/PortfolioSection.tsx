"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink, Eye } from "lucide-react";
import { PORTFOLIO_DATA, ProjectData } from "@/constants/information";

export type { ProjectData };

interface PortfolioSectionProps {
  onOpenProjectModal: (project: ProjectData) => void;
}

export function PortfolioSection({ onOpenProjectModal }: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(0);

  const { badge, title, categories, projects } = PORTFOLIO_DATA;

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : Math.max(0, filteredProjects.length - 1)));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < filteredProjects.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="portfolio" className="relative py-28 bg-[#141923] overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#00e676]/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Top Controls Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-slate-400 font-semibold font-display">
              {badge}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-1">
              {title}
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#1a2130] rounded-xl border border-white/5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setCurrentPage(0);
                  }}
                  className={`text-xs font-semibold px-4 py-2 rounded-lg transition-all ${
                    activeCategory === cat
                      ? "bg-[#00e676] text-[#0b111a] shadow-[0_0_12px_rgba(0,230,118,0.3)]"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Slider Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-xl bg-[#1a2130] border border-white/5 flex items-center justify-center text-slate-300 hover:text-[#00e676] hover:border-[#00e676]/50 transition-colors"
                aria-label="Previous portfolio project"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-xl bg-[#00e676] flex items-center justify-center text-[#0b111a] hover:bg-[#46f79e] transition-colors shadow-[0_0_15px_rgba(0,230,118,0.3)]"
                aria-label="Next portfolio project"
              >
                <ChevronRight className="w-5 h-5 font-bold" />
              </button>
            </div>

          </div>

        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onOpenProjectModal(project)}
              className="group relative bg-[#192130] rounded-2xl overflow-hidden border border-white/5 hover:border-[#00e676]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] cursor-pointer flex flex-col"
            >
              {/* Project Image Preview */}
              <div
                className="relative w-full overflow-hidden bg-[#121620]"
                style={{ position: "relative", width: "100%", height: "230px" }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                
                {/* Hover Quick Overlay */}
                <div className="absolute inset-0 bg-[#0b111a]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-xs">
                  <span className="w-11 h-11 rounded-full bg-[#00e676] text-[#0b111a] flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                    <Eye className="w-5 h-5" />
                  </span>
                </div>

                {/* Category Pill */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#0b111a]/80 backdrop-blur-md text-[#00e676] border border-[#00e676]/30">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#00e676] transition-colors font-display line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {project.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                  <span>{project.client}</span>
                  <span className="font-semibold text-white flex items-center gap-1 group-hover:text-[#00e676]">
                    View Case <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
