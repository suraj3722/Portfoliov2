"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

const CATEGORIES = Object.keys(skills) as (keyof typeof skills)[];

const categoryDescriptions: Record<string, string> = {
  Languages: "Core programming languages I write production code in",
  Frontend: "Building beautiful, responsive user interfaces",
  Backend: "Scalable server-side APIs and real-time systems",
  Database: "Data modeling and persistent storage",
  Tools: "Development environment and version control",
  Concepts: "Fundamental computer science knowledge",
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const allCategories = ["All", ...CATEGORIES];

  const getFilteredSkills = () => {
    if (activeCategory === "All") {
      return Object.entries(skills).flatMap(([cat, items]) =>
        items.map((s) => ({ ...s, category: cat }))
      );
    }
    return (skills[activeCategory as keyof typeof skills] || []).map((s) => ({
      ...s,
      category: activeCategory,
    }));
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section id="skills" className="section-padding" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-12"
        >
          <motion.p variants={fadeInUp} className="text-violet-400 font-semibold mono text-sm uppercase tracking-widest mb-3">
            02 / Skills
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Tech Stack
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-400 max-w-xl mx-auto">
            Technologies I&apos;ve worked with — from competitive programming to full-stack development.
          </motion.p>
          <motion.div variants={fadeInUp} className="w-20 h-1 mx-auto rounded-full mt-6"
            style={{ background: "linear-gradient(to right, #7c3aed, #06b6d4)" }} />
        </motion.div>

        {/* Category tabs */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {allCategories.map((cat) => (
            <motion.button
              key={cat}
              variants={fadeInUp}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 mono ${
                activeCategory === cat
                  ? "text-white"
                  : "text-slate-400 hover:text-white glass-hover glass"
              }`}
              style={
                activeCategory === cat
                  ? { background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }
                  : {}
              }
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Category description */}
        {activeCategory !== "All" && (
          <motion.p
            key={activeCategory}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-slate-500 text-sm mb-8"
          >
            {categoryDescriptions[activeCategory]}
          </motion.p>
        )}

        {/* Skill Cards */}
        <motion.div
          key={activeCategory}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={`${skill.category}-${skill.name}`}
              variants={fadeInUp}
              custom={index}
              className="glass glass-hover rounded-2xl p-4 flex flex-col items-center text-center gap-3 cursor-default group relative overflow-hidden"
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{ background: "radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.08) 0%, transparent 70%)" }}
              />
              <span className="text-2xl z-10">{skill.icon}</span>
              <p className="text-slate-200 text-sm font-semibold z-10 leading-tight">{skill.name}</p>
              {/* Progress bar */}
              <div className="w-full bg-white/5 rounded-full h-1 z-10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={viewportConfig}
                  transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
                  className="h-1 rounded-full"
                  style={{ background: "linear-gradient(to right, #7c3aed, #06b6d4)" }}
                />
              </div>
              <p className="text-xs text-slate-500 mono z-10">{skill.level}%</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
