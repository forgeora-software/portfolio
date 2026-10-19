"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { DribbbleIcon, LinkedinIcon, GithubIcon } from "./SocialIcons";
import { USER_INFO } from "@/constants/information";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0e1218] text-slate-400 py-12 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-[#00e676] flex items-center justify-center text-[#0b111a] font-extrabold text-lg">
              {USER_INFO.initial}
            </div>
            <div>
              <span className="text-lg font-bold text-white tracking-tight">{USER_INFO.name}</span>
              <p className="text-xs text-slate-500">
                {USER_INFO.role} &bull; {USER_INFO.location}
              </p>
            </div>
          </div>

          {/* Links & Socials */}
          <div className="flex items-center gap-3 sm:gap-4 text-slate-400">
            <a
              href={USER_INFO.socials.dribbble}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-white/5 hover:text-[#00e676] hover:bg-white/10 transition-colors"
              aria-label="Dribbble"
            >
              <DribbbleIcon size={18} />
            </a>
            <a
              href={USER_INFO.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-white/5 hover:text-[#00e676] hover:bg-white/10 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={USER_INFO.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-white/5 hover:text-[#00e676] hover:bg-white/10 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
          </div>

          {/* Back to top button */}
          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-500">
              {USER_INFO.copyrightText}
            </span>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl bg-[#171d29] border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#00e676] hover:border-[#00e676]/50 transition-colors"
              aria-label="Scroll back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
