"use client";

import React, { useState } from "react";
import { Lightbulb, Layers, Monitor, Sparkles, CheckCircle2 } from "lucide-react";
import { DotMatrix } from "./HexagonDecorations";
import { SERVICES_DATA } from "@/constants/information";

const renderServiceIcon = (iconName: string) => {
  switch (iconName) {
    case "lightbulb":
      return <Lightbulb className="w-8 h-8" />;
    case "layers":
      return <Layers className="w-8 h-8" />;
    case "monitor":
    default:
      return <Monitor className="w-8 h-8" />;
  }
};

export function ServicesSection({ onSelectService }: { onSelectService: (serviceName: string) => void }) {
  const [activeCardId, setActiveCardId] = useState<string>(
    SERVICES_DATA.items[0]?.id || "uiux"
  );

  return (
    <section id="services" className="relative py-28 bg-[#121620] overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-[#00e676]/10 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 pointer-events-none">
        <DotMatrix dots={24} color="#94a3b8" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-slate-400 font-semibold font-display">
            {SERVICES_DATA.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00e676] tracking-tight mt-1">
            {SERVICES_DATA.title}
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            {SERVICES_DATA.description}
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.items.map((service) => {
            const isActive = activeCardId === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveCardId(service.id)}
                onClick={() => {
                  setActiveCardId(service.id);
                  onSelectService(service.title);
                }}
                className={`relative rounded-2xl p-8 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? "bg-[#00e676] text-[#0b111a] shadow-[0_20px_45px_rgba(0,230,118,0.35)] -translate-y-2 scale-[1.02]"
                    : "bg-[#18202d] text-white border border-white/5 hover:border-[#00e676]/40 hover:-translate-y-1 hover:shadow-xl"
                }`}
              >
                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between mb-8">
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors ${
                        isActive
                          ? "bg-[#0b111a] text-[#00e676]"
                          : "bg-[#131722] text-[#00e676] border border-white/5"
                      }`}
                    >
                      {renderServiceIcon(service.iconName)}
                    </div>

                    <span
                      className={`text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full ${
                        isActive
                          ? "bg-[#0b111a]/20 text-[#0b111a]"
                          : "bg-white/5 text-slate-400 border border-white/10"
                      }`}
                    >
                      {service.projectsCount}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-2xl font-bold font-display mb-4 ${
                      isActive ? "text-[#0b111a]" : "text-white"
                    }`}
                  >
                    {service.title}
                  </h3>

                  {/* Summary */}
                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                      isActive ? "text-[#0b111a]/85 font-medium" : "text-slate-400"
                    }`}
                  >
                    {service.description}
                  </p>

                  {/* Detailed Feature Points */}
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className={`text-xs flex items-center gap-2 ${
                          isActive
                            ? "text-[#0b111a] font-medium"
                            : "text-slate-300"
                        }`}
                      >
                        <CheckCircle2
                          className={`w-3.5 h-3.5 flex-shrink-0 ${
                            isActive ? "text-[#0b111a]" : "text-[#00e676]"
                          }`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA Footer */}
                <div className="pt-4 border-t border-current/10 flex items-center justify-between">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider ${
                      isActive ? "text-[#0b111a]" : "text-[#00e676]"
                    }`}
                  >
                    {isActive ? "Book This Service" : "Learn More"}
                  </span>
                  <Sparkles
                    className={`w-4 h-4 ${
                      isActive ? "text-[#0b111a]" : "text-[#00e676]"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
