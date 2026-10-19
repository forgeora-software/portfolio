"use client";

import React, { useState, useEffect } from "react";
import { X, Send, CheckCircle2, Sparkles, ArrowUpRight } from "lucide-react";
import { USER_INFO } from "@/constants/information";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function ContactModal({ isOpen, onClose, defaultService }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(defaultService || "UI & UX Design");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setService(defaultService);
    }
  }, [defaultService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSending(true);

    const subject = `[Portfolio Inquiry] ${service} - from ${name}`;
    const body = `Hi ${USER_INFO.name},\n\nName: ${name}\nEmail: ${email}\nInterested In: ${service}\n\nMessage:\n${message}\n\n---\nSent via ${USER_INFO.name}'s Portfolio`;

    const mailtoUrl = `mailto:${USER_INFO.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open user's default email app directly
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setIsSending(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        setName("");
        setEmail("");
        setMessage("");
      }, 3500);
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-lg bg-[#171d29] border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-black/80 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00e676] mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LET&apos;S TALK</span>
          </div>
          <h2 className="text-2xl font-extrabold text-white font-display">
            Start a Conversation
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Fill in your details and let me know about your next big idea.
          </p>
        </div>

        {isSuccess ? (
          <div className="py-12 flex flex-col items-center text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-[#00e676]/20 border border-[#00e676] flex items-center justify-center text-[#00e676] animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white font-display">Opening Email App...</h3>
            <p className="text-sm text-slate-300 max-w-xs">
              Your inquiry has been composed with all details. If your mail client didn&apos;t open automatically:
            </p>
            <a
              href={`mailto:${USER_INFO.email}`}
              className="text-xs font-semibold text-[#00e676] hover:underline flex items-center gap-1 mt-2"
            >
              <span>Launch mail directly ({USER_INFO.email})</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="Sarah Jenkins"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#121620] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00e676] transition-colors"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">
                Your Email
              </label>
              <input
                type="email"
                required
                placeholder="sarah@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#121620] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00e676] transition-colors"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">
                Interested In
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full bg-[#121620] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00e676] transition-colors cursor-pointer"
              >
                <option value="UI & UX Design">UI &amp; UX Design</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="Web Design">Web Design</option>
                <option value="Design System Consulting">Design System Consulting</option>
                <option value="Full Website Build">Full Website Build</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">
                Message or Project Scope
              </label>
              <textarea
                required
                rows={4}
                placeholder="Briefly describe what you would like to build..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-[#121620] border border-white/10 rounded-xl p-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00e676] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full btn-primary py-3.5 mt-2 flex items-center justify-center gap-2"
            >
              {isSending ? (
                <span>Sending...</span>
              ) : (
                <>
                  <span>SEND INQUIRY</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
