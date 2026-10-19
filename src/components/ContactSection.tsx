"use client";

import React, { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, Clock, MessageSquare, ArrowUpRight } from "lucide-react";
import { USER_INFO } from "@/constants/information";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: `${USER_INFO.role} Project`,
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("submitting");

    // Format mail subject & body to open directly in the user's mail app
    const subject = `[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`;
    const body = `Hi ${USER_INFO.name},\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.subject}\n\nMessage:\n${formData.message}\n\n---\nSent via ${USER_INFO.name}'s Portfolio`;

    const mailtoUrl = `mailto:${USER_INFO.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open user's default email app directly
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: `${USER_INFO.role} Project`,
        message: "",
      });
      setTimeout(() => setStatus("idle"), 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="relative py-28 bg-[#141923] overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00e676]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-slate-400 font-semibold font-display">
            LET&apos;S WORK TOGETHER
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00e676] tracking-tight mt-1">
            Contact
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Have a project in mind or want to explore collaboration? Send a
            message and let&apos;s build something exceptional.
          </p>
        </div>

        {/* Content Grid: Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#18202d] p-8 rounded-2xl border border-white/5 space-y-6">
              <h3 className="text-xl font-bold text-white font-display">
                Ready to elevate your digital presence?
              </h3>
              
              <p className="text-slate-300 text-sm leading-relaxed">
                Whether you need a complete design overhaul, a scalable design
                system, or an engaging interactive website, I&apos;m ready to partner
                with you.
              </p>

              <div className="space-y-4 pt-2">
                
                {/* Email Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00e676]/10 text-[#00e676] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${USER_INFO.email}`}
                      className="text-sm font-semibold text-white hover:text-[#00e676] transition-colors"
                    >
                      {USER_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00e676]/10 text-[#00e676] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider block">
                      Location
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {USER_INFO.locationFull}
                    </span>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00e676]/10 text-[#00e676] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider block">
                      Availability
                    </span>
                    <span className="text-sm font-semibold text-[#00e676]">
                      {USER_INFO.availability}
                    </span>
                  </div>
                </div>

              </div>

            </div>

            {/* Quick response note */}
            <div className="bg-[#121620] p-6 rounded-xl border border-white/5 flex items-center gap-4">
              <MessageSquare className="w-6 h-6 text-[#00e676] flex-shrink-0" />
              <p className="text-xs text-slate-300">
                Average reply time: <span className="text-[#00e676] font-semibold">Under 12 hours</span>. All project inquiries receive a free initial discovery consultation.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#18202d] p-8 sm:p-10 rounded-2xl border border-white/5 shadow-2xl relative">
              
              {status === "success" && (
                <div className="mb-6 p-4 rounded-xl bg-[#00e676]/10 border border-[#00e676]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[#00e676]">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm font-medium text-slate-200">
                      Opening your email app with your message pre-filled.
                    </p>
                  </div>
                  <a
                    href={`mailto:${USER_INFO.email}`}
                    className="text-xs font-semibold text-[#00e676] hover:underline whitespace-nowrap flex items-center gap-1"
                  >
                    <span>Send directly to {USER_INFO.email}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#121620] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00e676] transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#121620] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00e676] transition-colors"
                    />
                  </div>
                </div>

                {/* Subject / Service Selection */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Project Type
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#121620] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#00e676] transition-colors cursor-pointer"
                  >
                    <option value="UI & UX Design Project">UI &amp; UX Design Project</option>
                    <option value="Web Design & Frontend Development">Web Design &amp; Frontend Development</option>
                    <option value="Brand Identity & Graphic Design">Brand Identity &amp; Graphic Design</option>
                    <option value="Design System Consulting">Design System Consulting</option>
                    <option value="General Inquiry / Hello">General Inquiry / Hello</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project, goals, timeline, and budget..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#121620] border border-white/10 rounded-xl p-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00e676] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full btn-primary py-4 text-sm flex items-center justify-center gap-2"
                >
                  {status === "submitting" ? (
                    <span>Sending your message...</span>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
