"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Download } from "lucide-react";
import { DribbbleIcon, LinkedinIcon, GithubIcon } from "./SocialIcons";
import { USER_INFO } from "@/constants/information";

interface NavbarProps {
  onOpenContactModal: () => void;
}

export function Navbar({ onOpenContactModal }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("hello");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Hello", href: "#hello" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ["hello", "about", "services", "portfolio", "experience", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`navbar-header ${isScrolled ? "is-scrolled" : ""} ${mobileMenuOpen ? "menu-open" : ""}`}
    >
      {/* Subtle emerald bottom glow when scrolled */}
      <div className="navbar-bottom-glow" />
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hello"
          onClick={(e) => scrollToSection(e, "#hello")}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-md bg-[#00e676] flex items-center justify-center text-[#0b111a] font-extrabold text-lg transition-transform group-hover:scale-105 shadow-[0_0_15px_rgba(0,230,118,0.4)]">
            {USER_INFO.initial}
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-[#00e676] transition-colors">
            {USER_INFO.firstName}
          </span>
        </a>

        {/* Center Desktop Navigation */}
        <nav
          className={`hidden md:flex items-center gap-8 px-6 py-2 rounded-full border transition-all duration-300 ${
            isScrolled
              ? "bg-white/[0.04] border-white/10 backdrop-blur-md"
              : "bg-[#171d29]/70 border-white/5 backdrop-blur-sm"
          }`}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`text-sm font-medium transition-all relative py-1 ${
                  isActive
                    ? "text-[#00e676] font-semibold"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00e676] rounded-full shadow-[0_0_8px_#00e676]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action & Socials */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Social Icons */}
          <div className="flex items-center gap-3 text-slate-400 border-r border-white/10 pr-5">
            <a
              href={USER_INFO.socials.dribbble}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 hover:text-[#00e676] transition-colors"
              title="Dribbble"
              aria-label="Dribbble profile"
            >
              <DribbbleIcon size={16} />
            </a>
            <a
              href={USER_INFO.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 hover:text-[#00e676] transition-colors"
              title="LinkedIn"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={USER_INFO.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 hover:text-[#00e676] transition-colors"
              title="GitHub"
              aria-label="GitHub profile"
            >
              <GithubIcon size={16} />
            </a>
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
              EN
            </span>
          </div>

          {/* Let's Talk CTA */}
          <button
            onClick={onOpenContactModal}
            className="flex items-center gap-2 px-5 py-2.5 rounded-md border border-[#00e676] text-[#00e676] font-bold text-xs uppercase tracking-wider hover:bg-[#00e676] hover:text-[#0b111a] transition-all duration-300 shadow-[0_0_15px_rgba(0,230,118,0.2)] hover:shadow-[0_0_25px_rgba(0,230,118,0.4)]"
          >
            <span>LET&apos;S TALK</span>
            <ArrowUpRight size={14} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2.5">
          <button
            onClick={onOpenContactModal}
            className="px-3 py-1.5 rounded border border-[#00e676] text-[#00e676] font-bold text-xs tracking-wider"
          >
            TALK
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden navbar-mobile-drawer">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={isActive ? "active" : ""}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 text-slate-400">
                <a
                  href={USER_INFO.socials.dribbble}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Dribbble"
                  className="hover:text-[#00e676] transition-colors"
                >
                  <DribbbleIcon size={18} />
                </a>
                <a
                  href={USER_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-[#00e676] transition-colors"
                >
                  <LinkedinIcon size={18} />
                </a>
                <a
                  href={USER_INFO.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="hover:text-[#00e676] transition-colors"
                >
                  <GithubIcon size={18} />
                </a>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={USER_INFO.resumeUrl}
                  download={USER_INFO.resumeFileName}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 bg-white/10 hover:bg-white/15 text-slate-200 font-bold text-xs rounded uppercase tracking-wider flex items-center gap-1 border border-white/10"
                >
                  <Download size={13} className="text-[#00e676]" />
                  <span> Resume</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContactModal();
                  }}
                  className="px-3.5 py-2 bg-[#00e676] text-[#0b111a] font-bold text-xs rounded uppercase tracking-wider"
                >
                  Let&apos;s Talk
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
