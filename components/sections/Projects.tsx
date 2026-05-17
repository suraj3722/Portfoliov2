"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { FiGithub } from "react-icons/fi";

export default function Projects() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="section-padding" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16 lg:mb-24"
        >
          <motion.p variants={fadeInUp} className="text-violet-400 font-semibold mono text-sm uppercase tracking-widest mb-3">
            03 / Work
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Featured Projects
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-400 max-w-xl mx-auto">
            From collaborative tools to optimized algorithms. Here are some of my best works.
          </motion.p>
          <motion.div variants={fadeInUp} className="w-20 h-1 mx-auto rounded-full mt-6"
            style={{ background: "linear-gradient(to right, #7c3aed, #06b6d4)" }} />
        </motion.div>

        {/* Project List */}
        <div className="space-y-16 lg:space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Visual side - Decorative preview box */}
                <motion.div
                  variants={fadeInUp}
                  className="w-full lg:w-1/2 relative group perspective-1000"
                >
                  <div className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-20 blur-3xl rounded-full group-hover:opacity-40 transition-opacity duration-700`} />
                  
                  <div className="relative aspect-video rounded-2xl glass overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-500 transform group-hover:rotate-x-2 group-hover:rotate-y-2 group-hover:scale-[1.02]">
                    {(project as any).image ? (
                      <>
                        <Image
                          src={(project as any).image}
                          alt={project.title}
                          fill
                          className={`object-cover transition-opacity duration-700 w-full h-full ${(project as any).hoverImage ? 'opacity-90 group-hover:opacity-0' : 'opacity-90 group-hover:scale-105'}`}
                          priority={project.id === 1}
                        />
                        {(project as any).hoverImage && (
                          <Image
                            src={(project as any).hoverImage}
                            alt={`${project.title} hover`}
                            fill
                            className="object-cover opacity-0 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 absolute inset-0"
                            priority={project.id === 1}
                          />
                        )}
                      </>
                    ) : (
                      <div className="absolute inset-0 p-8 flex flex-col justify-between">
                        {/* Top Bar pseudo UI */}
                        <div className="flex gap-2 mb-4 opacity-50">
                          <div className="w-3 h-3 rounded-full bg-red-400" />
                          <div className="w-3 h-3 rounded-full bg-yellow-400" />
                          <div className="w-3 h-3 rounded-full bg-green-400" />
                        </div>
                        
                        {/* Typographic Hero within the box */}
                        <div className="flex-1 flex flex-col justify-center">
                          <h3 className={`text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}>
                            {project.title}
                          </h3>
                          <p className="text-white/50 mono text-sm mt-4 font-semibold uppercase tracking-widest">
                            {project.tag} / {project.year}
                          </p>
                        </div>
                        
                        {/* Abstract geometric decoration based on ID */}
                        <div className="absolute right-8 bottom-8 text-white/5 pointer-events-none">
                          <span className="text-[12rem] font-bold leading-none select-none tracking-tighter">
                            0{project.id}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Content Side */}
                <motion.div variants={fadeInUp} className="w-full lg:w-1/2 flex flex-col items-start">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full border border-white/5 ${project.tagColor} tracking-wider uppercase`}>
                      {project.tag}
                    </span>
                    <span className="text-slate-500 font-medium mono text-sm">{project.year}</span>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-xl text-violet-400 font-medium mb-6 leading-relaxed">{project.subtitle}</p>

                  <div className="glass rounded-2xl p-6 border-white/5 mb-6 relative">
                    <p className="text-slate-300 leading-relaxed text-base">
                      {project.description}
                    </p>

                    <AnimatePresence>
                      {expandedId === project.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden mt-6"
                        >
                          <div className="pt-6 border-t border-white/5 space-y-6">
                            <p className="text-slate-400 text-sm leading-relaxed">
                              {project.longDescription}
                            </p>
                            <div>
                              <p className="text-white text-sm font-semibold mb-3 tracking-wide">KEY HIGHLIGHTS</p>
                              <ul className="space-y-2">
                                {project.highlights.map((highlight, i) => (
                                  <li key={i} className="flex items-start gap-3">
                                    <span className="text-violet-400 mt-0.5 opacity-80">▹</span>
                                    <span className="text-slate-300 text-sm leading-relaxed">{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-white/5 rounded-md text-xs font-medium text-slate-400 mono border border-white/5 hover:border-violet-500/30 transition-colors cursor-default">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links & Expand Actions */}
                  <div className="flex items-center gap-4 w-full justify-between sm:justify-start">
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="flex items-center gap-2 text-sm font-medium text-violet-400 hover:text-cyan-400 transition-colors"
                    >
                      {expandedId === project.id ? (
                        <>Show Less <ChevronUp size={16} /></>
                      ) : (
                        <>Show Details <ChevronDown size={16} /></>
                      )}
                    </button>

                    {/* Expand button and actions */}
                    <div className="flex items-center gap-3 flex-wrap">
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 mt-4 sm:mt-0 rounded-lg text-sm font-medium glass transition-all hover:scale-105 border border-white/5">
                        <FiGithub size={16} className="text-white" />
                        <span className="text-white">Source Code</span>
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white transition-all duration-200 hover:scale-[1.02]"
                          style={{
                            background: `linear-gradient(135deg, ${project.gradient.replace("from-", "").replace(" to-", ", ")})`,
                          }}
                        >
                          <ExternalLink size={15} /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
