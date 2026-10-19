"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioSection, ProjectData } from "@/components/PortfolioSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ProjectModal } from "@/components/ProjectModal";
import { ContactModal } from "@/components/ContactModal";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);
  const [defaultService, setDefaultService] = useState<string>("UI & UX Design");

  const handleOpenContactModal = (service?: string) => {
    if (service) {
      setDefaultService(service);
    }
    setIsContactModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setIsContactModalOpen(false);
  };

  const handleViewPortfolio = () => {
    const el = document.getElementById("portfolio");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#121620] text-slate-100 flex flex-col selection:bg-[#00e676] selection:text-[#0b111a]">
      {/* Fixed Navigation Bar */}
      <Navbar onOpenContactModal={() => handleOpenContactModal()} />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection onViewPortfolio={handleViewPortfolio} />

        {/* About Me Section with Cutout Portrait & Badges */}
        <AboutSection onHireMe={() => handleOpenContactModal("General UI/UX Collaboration")} />

        {/* Services Section */}
        <ServicesSection onSelectService={(serviceName) => handleOpenContactModal(serviceName)} />

        {/* Portfolio Section */}
        <PortfolioSection onOpenProjectModal={(project) => setSelectedProject(project)} />

        {/* Experience & Skills Section */}
        <ExperienceSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Detail Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Contact Quick Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={handleCloseContactModal}
        defaultService={defaultService}
      />
    </div>
  );
}
