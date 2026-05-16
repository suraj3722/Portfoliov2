"use client";

import { motion } from "framer-motion";
import { personalInfo, education } from "@/lib/data";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportConfig } from "@/lib/animations";
import { GraduationCap, Target, Zap, Code2 } from "lucide-react";

const stats = [
  { label: "NIMCET Rank", value: "AIR 81", icon: "🏆" },
  { label: "BCA CGPA", value: "8.37", icon: "🎓" },
  { label: "Hackathon", value: "Rank 2", icon: "⚡" },
  { label: "Projects", value: "3+", icon: "💻" },
];

const strengths = [
  { icon: Code2, title: "Problem Solver", desc: "Love tackling complex algorithmic challenges with clean, efficient solutions." },
  { icon: Zap, title: "Fast Learner", desc: "Quickly adapt to new technologies and frameworks — from Fabric.js to GenAI APIs." },
  { icon: Target, title: "Goal-Driven", desc: "Focused on building production-ready, impactful software from day one." },
  { icon: GraduationCap, title: "Academic Excellence", desc: "AIR 81 in NIMCET, 8.37 CGPA — proof of consistent discipline and hard work." },
];

export default function About() {
  return (
    <section id="about" className="section-padding" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-violet-400 font-semibold mono text-sm uppercase tracking-widest mb-3">
            01 / About
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Who I Am
          </motion.h2>
          <motion.div variants={fadeInUp} className="w-20 h-1 mx-auto rounded-full" 
            style={{ background: "linear-gradient(to right, #7c3aed, #06b6d4)" }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio & Story */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.div variants={fadeInLeft}>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                {personalInfo.bio.split("\n\n")[0]}
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                {personalInfo.bio.split("\n\n")[1]}
              </p>
            </motion.div>

            {/* Stats row */}
            <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  className="glass glass-hover gradient-border rounded-2xl p-4"
                >
                  <p className="text-2xl mb-1">{stat.icon}</p>
                  <p className="text-2xl font-extrabold text-white mono">{stat.value}</p>
                  <p className="text-xs text-slate-400 font-medium mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Education & Strengths */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-8"
          >
            {/* Education */}
            <motion.div variants={fadeInRight}>
              <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                <GraduationCap size={20} className="text-violet-400" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="glass glass-hover rounded-2xl p-5 border border-white/5 hover:border-violet-500/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-2xl flex-shrink-0">{edu.logo}</div>
                      <div className="flex-1">
                        <p className="text-white font-semibold text-sm">{edu.degree}</p>
                        <p className="text-violet-400 text-xs font-medium mt-0.5">{edu.shortName}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-xs text-slate-500 mono">{edu.period}</span>
                          <span className="text-xs text-cyan-400 font-semibold mono">{edu.score}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Strengths */}
            <motion.div variants={fadeInRight}>
              <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                <Zap size={20} className="text-cyan-400" />
                Core Strengths
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {strengths.map((s) => (
                  <motion.div
                    key={s.title}
                    variants={fadeInUp}
                    className="glass glass-hover rounded-xl p-4 cursor-default group"
                  >
                    <s.icon size={18} className="text-violet-400 mb-2 group-hover:text-cyan-400 transition-colors" />
                    <p className="text-white text-sm font-semibold mb-1">{s.title}</p>
                    <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
