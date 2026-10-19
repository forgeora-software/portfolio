"use client";

import React from "react";
import { Briefcase, Award, Check } from "lucide-react";
import { EXPERIENCE_DATA } from "@/constants/information";

export function ExperienceSection() {
  const {
    badge,
    title,
    description,
    timelineTitle,
    skillsTitle,
    toolsTitle,
    experiences,
    skills,
    tools,
  } = EXPERIENCE_DATA;

  return (
    <section id="experience" className="relative py-28 bg-[#121620] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#00e676]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-slate-400 font-semibold font-display">
            {badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00e676] tracking-tight mt-1">
            {title}
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            {description}
          </p>
        </div>

        {/* Content Columns: Timeline + Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
              <Briefcase className="w-5 h-5 text-[#00e676]" />
              <span>{timelineTitle}</span>
            </h3>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-white/10 space-y-10">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#121620] border-2 border-[#00e676] group-hover:bg-[#00e676] transition-colors shadow-[0_0_10px_rgba(0,230,118,0.5)]" />

                  {/* Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h4 className="text-lg font-bold text-white group-hover:text-[#00e676] transition-colors font-display">
                      {exp.role}
                    </h4>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#00e676]/10 text-[#00e676] border border-[#00e676]/20">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm font-medium text-slate-400 mb-2">
                    {exp.company}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-1.5">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="text-xs text-slate-400 flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#00e676] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Skills & Toolset */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-[#00e676]" />
              <span>{skillsTitle}</span>
            </h3>

            {/* Skill Bars */}
            <div className="space-y-5 bg-[#171d29] p-6 rounded-2xl border border-white/5 shadow-xl">
              {skills.map((skill, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-200">{skill.name}</span>
                    <span className="text-[#00e676] font-mono">{skill.level}</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#00b05b] to-[#00e676] transition-all duration-1000"
                      style={{ width: skill.level }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Tools Tech Stack Pills */}
            <div className="bg-[#171d29] p-6 rounded-2xl border border-white/5 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {toolsTitle}
              </h4>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-[#121620] text-slate-300 border border-white/5 hover:border-[#00e676]/50 hover:text-[#00e676] transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
