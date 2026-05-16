"use client";

import { Mail, Heart } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-white/5" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo / Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-white font-bold text-lg tracking-tight">Suraj Kumar Gupta</h3>
            <p className="text-slate-500 text-sm mt-1">Software Engineer & Problem Solver</p>
          </div>

          {/* Copyright */}
          <div className="text-slate-500 text-sm flex items-center gap-1.5 order-3 md:order-2">
            <span>© {currentYear} built with</span>
            <Heart size={14} className="text-red-500 inline fill-red-500/20" />
            <span>by Suraj</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href={personalInfo.links.github} target="_blank" rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors">
              <FiGithub size={18} />
            </a>
            <a href={personalInfo.links.linkedin} target="_blank" rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors">
              <FiLinkedin size={18} />
            </a>
            <a href={`mailto:${personalInfo.email}`}
              className="text-slate-500 hover:text-white transition-colors">
              <Mail size={18} />
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
