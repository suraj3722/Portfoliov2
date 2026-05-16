"use client";

import { motion } from "framer-motion";
import { achievements } from "@/lib/data";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { Trophy } from "lucide-react";

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding" style={{ background: "var(--bg-primary)" }}>
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
            04 / Achievements
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Milestones
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-400 max-w-xl mx-auto">
            National ranks, hackathon wins, and competitions — proof of consistent excellence.
          </motion.p>
          <motion.div variants={fadeInUp} className="w-20 h-1 mx-auto rounded-full mt-6"
            style={{ background: "linear-gradient(to right, #7c3aed, #06b6d4)" }} />
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="relative"
        >
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: "linear-gradient(to bottom, transparent, #7c3aed50, #06b6d450, transparent)" }}
          />

          <div className="space-y-8">
            {achievements.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  variants={fadeInUp}
                  className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-0 ${!isLeft ? "lg:flex-row-reverse" : ""}`}
                >
                  {/* Card */}
                  <div className={`w-full lg:w-[45%] ${isLeft ? "lg:pr-12" : "lg:pl-12"}`}>
                    <motion.div
                      className="glass glass-hover rounded-2xl p-6 border border-white/5 hover:border-white/15 transition-all duration-300 group cursor-default"
                      whileHover={{ y: -2 }}
                    >
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
                          style={{ background: `linear-gradient(135deg, ${item.gradient.replace("from-", "").replace(" to-", ", ")})`, opacity: 0.9 }}
                        >
                          <span>{item.icon}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-2 flex-wrap">
                            <div>
                              <p className="text-white font-bold">{item.title}</p>
                              <p className="text-slate-500 text-xs font-medium mt-0.5">{item.subtitle}</p>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                              <span
                                className="px-2.5 py-0.5 rounded-full text-xs font-bold mono"
                                style={{
                                  background: `linear-gradient(135deg, ${item.gradient.replace("from-", "").replace(" to-", ", ")})`,
                                  WebkitBackgroundClip: "text",
                                  WebkitTextFillColor: "transparent",
                                  backgroundClip: "text",
                                  border: "1px solid rgba(255,255,255,0.1)",
                                  padding: "2px 10px",
                                  WebkitTextFillColor: "unset",
                                  color: "white",
                                  opacity: 0.9,
                                }}
                              >
                                {item.rank}
                              </span>
                              <span className="text-xs text-slate-600 mono">{item.year}</span>
                            </div>
                          </div>
                          <p className="text-slate-400 text-sm leading-relaxed mt-3">
                            {item.description}
                          </p>
                          <div className="mt-3">
                            <span
                              className="text-xs font-medium px-2 py-1 rounded-full"
                              style={{
                                background: "rgba(124,58,237,0.1)",
                                color: "#a78bfa",
                                border: "1px solid rgba(124,58,237,0.2)",
                              }}
                            >
                              {item.type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:flex w-[10%] justify-center relative z-10">
                    <div
                      className="w-4 h-4 rounded-full border-2 border-violet-500"
                      style={{ background: "var(--bg-primary)", boxShadow: "0 0 12px rgba(124,58,237,0.6)" }}
                    />
                  </div>

                  {/* Empty right side spacer */}
                  <div className="hidden lg:block w-[45%]" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {[
            { value: "AIR 81", label: "NIMCET 2025", color: "#f59e0b" },
            { value: "AIR 295", label: "CUET 2025", color: "#94a3b8" },
            { value: "Rank 2", label: "DevJam 2026", color: "#a855f7" },
            { value: "3+", label: "Projects Built", color: "#06b6d4" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="glass glass-hover rounded-2xl p-6 text-center gradient-border"
            >
              <p className="text-3xl font-extrabold mono mb-2" style={{ color: stat.color }}>
                {stat.value}
              </p>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
