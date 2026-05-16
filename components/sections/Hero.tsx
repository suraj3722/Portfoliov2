"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Download, ChevronDown, Code2, Terminal } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import Image from "next/image";
import { personalInfo } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const TYPING_TEXTS = personalInfo.taglines;

function TypingText() {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const currentText = TYPING_TEXTS[textIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex < currentText.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 80);
      setDisplayText(currentText.slice(0, charIndex + 1));
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 45);
      setDisplayText(currentText.slice(0, charIndex - 1));
    } else if (!isDeleting && charIndex === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((i) => (i + 1) % TYPING_TEXTS.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <span className="gradient-text">
      {displayText}
      <span className="inline-block w-[2px] h-[1.1em] ml-1 bg-cyan-400 animate-pulse align-middle" />
    </span>
  );
}

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 animate-float-slow"
          style={{
            background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)",
            top: "-10%",
            right: "-5%",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-15 animate-float"
          style={{
            background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
            bottom: "0%",
            left: "-5%",
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute w-[300px] h-[300px] rounded-full blur-[80px] opacity-10 animate-float-slow"
          style={{
            background: "radial-gradient(circle, #a855f7 0%, transparent 70%)",
            top: "50%",
            left: "30%",
            animationDelay: "4s",
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left: Text content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center">
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium mono"
                style={{
                  background: "rgba(124, 58, 237, 0.1)",
                  borderColor: "rgba(124, 58, 237, 0.3)",
                  color: "#a78bfa",
                }}
              >
                <Terminal size={13} />
                <span>Available for Internships & Opportunities</span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-4"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">
                Suraj
              </span>
            </motion.h1>

            {/* Dynamic typing */}
            <motion.div variants={fadeInUp} className="text-xl sm:text-2xl font-semibold text-slate-300 mb-6 h-8">
              <TypingText />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
            >
              MCA student at MNNIT Allahabad — building real-time, AI-powered
              applications. Ranked{" "}
              <span className="text-violet-400 font-semibold">AIR 81 in NIMCET</span> and
              passionate about the intersection of software engineering and{" "}
              <span className="text-cyan-400 font-semibold">artificial intelligence</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                  boxShadow: "0 0 20px rgba(124, 58, 237, 0.3)",
                }}
              >
                <Code2 size={18} />
                View Projects
              </button>
              <a
                href={personalInfo.resume}
                download
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-105 glass-hover gradient-border"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <Download size={18} />
                Download Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-5 justify-center lg:justify-start"
            >
              {[
                { icon: FiGithub, href: personalInfo.links.github, label: "GitHub" },
                { icon: FiLinkedin, href: personalInfo.links.linkedin, label: "LinkedIn" },
                { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-xl glass glass-hover flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              ))}

              {/* Coding profiles label */}
              <div className="flex items-center gap-2 pl-2 border-l border-white/10">
                {[
                  { label: "LC", href: personalInfo.links.leetcode, color: "#FFA116" },
                  { label: "CF", href: personalInfo.links.codeforces, color: "#1F8ACB" },
                ].map(({ label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl glass glass-hover flex items-center justify-center text-xs font-bold mono transition-all duration-200 hover:scale-110"
                    style={{ color }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex-shrink-0"
          >
            {/* Outer glow ring */}
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-40 animate-pulse-glow scale-110"
              style={{
                background: "conic-gradient(from 0deg, #7c3aed, #06b6d4, #a855f7, #7c3aed)",
              }}
            />
            {/* Rotating gradient ring */}
            <div
              className="absolute inset-[-4px] rounded-full animate-spin-slow"
              style={{
                background: "conic-gradient(from 0deg, #7c3aed, #06b6d4, transparent, #7c3aed)",
              }}
            />
            {/* Photo container */}
            <div
              className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-transparent"
              style={{
                background: "var(--bg-secondary)",
                boxShadow: "0 0 60px rgba(124, 58, 237, 0.4), 0 0 120px rgba(6, 182, 212, 0.15)",
              }}
            >
              <Image
                src="/suraj.jpeg"
                alt="Suraj Kumar Gupta"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                priority
                className="rounded-full"
              />
            </div>

            {/* Floating badge — MNNIT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-4 -left-6 glass px-3 py-2 rounded-xl border border-white/10"
            >
              <p className="text-xs text-slate-400 font-medium">🏛️ MNNIT Allahabad</p>
              <p className="text-xs text-violet-400 font-semibold mono">MCA Student</p>
            </motion.div>

            {/* Floating badge — Rank */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="absolute -top-4 -right-6 glass px-3 py-2 rounded-xl border border-white/10"
            >
              <p className="text-xs text-slate-400 font-medium">🏆 NIMCET 2025</p>
              <p className="text-xs text-yellow-400 font-semibold mono">AIR 81</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors"
      >
        <span className="text-xs font-medium tracking-widest uppercase mono">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}