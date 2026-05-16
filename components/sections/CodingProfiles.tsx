"use client";

import { motion } from "framer-motion";
import { codingProfiles } from "@/lib/data";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { ExternalLink } from "lucide-react";

export default function CodingProfiles() {
  return (
    <section id="coding" className="section-padding" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-violet-400 font-semibold mono text-sm uppercase tracking-widest mb-3">
            05 / Profiles
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Find Me Online
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-400 max-w-xl mx-auto">
            From competitive programming to open source — here&apos;s where I build and compete.
          </motion.p>
          <motion.div variants={fadeInUp} className="w-20 h-1 mx-auto rounded-full mt-6"
            style={{ background: "linear-gradient(to right, #7c3aed, #06b6d4)" }} />
        </motion.div>

        {/* Profile Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {codingProfiles.map((profile) => (
            <motion.a
              key={profile.platform}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="glass glass-hover rounded-2xl p-6 flex flex-col items-center text-center cursor-pointer group relative overflow-hidden border border-white/5 hover:border-white/15"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `radial-gradient(circle at 50% 0%, rgba(${profile.platform === "LeetCode" ? "255,161,22" : profile.platform === "Codeforces" ? "31,138,203" : profile.platform === "GitHub" ? "255,255,255" : "10,102,194"},0.08) 0%, transparent 70%)` }}
              />

              {/* Platform icon badge */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-xl font-black mono mb-4 group-hover:scale-110 transition-transform duration-200"
                style={{ background: `linear-gradient(135deg, ${profile.gradient.replace("from-", "").replace(" to-", ", ")})` }}
              >
                {profile.icon}
              </div>

              {/* Platform name */}
              <h3 className="text-white font-bold text-lg mb-1">{profile.platform}</h3>

              {/* Username */}
              <p className="mono text-sm font-medium mb-2" style={{ color: profile.color }}>
                @{profile.username}
              </p>

              {/* Description */}
              <p className="text-slate-500 text-xs mb-4 leading-relaxed">{profile.description}</p>

              {/* Stats badge */}
              <div
                className="px-3 py-1.5 rounded-full text-xs font-medium mb-4"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#94a3b8",
                }}
              >
                {profile.stats}
              </div>

              {/* Visit link */}
              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 group-hover:text-white transition-colors">
                Visit Profile <ExternalLink size={12} />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mt-12"
        >
          <p className="text-slate-500 text-sm">
            Username on all platforms:{" "}
            <span className="mono text-violet-400 font-semibold">Jarvis012</span> / {" "}
            <span className="mono text-cyan-400 font-semibold">suraj3722</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
