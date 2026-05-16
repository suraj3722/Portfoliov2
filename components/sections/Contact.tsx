"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportConfig } from "@/lib/animations";
import { Mail, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((res) => setTimeout(res, 1500));
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="contact" className="section-padding" style={{ background: "var(--bg-primary)" }}>
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
            06 / Contact
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Let&apos;s Connect
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-400 max-w-xl mx-auto">
            Whether it&apos;s an internship, collaboration, or just saying hey — my inbox is always open.
          </motion.p>
          <motion.div variants={fadeInUp} className="w-20 h-1 mx-auto rounded-full mt-6"
            style={{ background: "linear-gradient(to right, #7c3aed, #06b6d4)" }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-8"
          >
            <motion.div variants={fadeInLeft}>
              <h3 className="text-2xl font-bold text-white mb-3">Open to Opportunities</h3>
              <p className="text-slate-400 leading-relaxed">
                Currently pursuing MCA at MNNIT Allahabad and actively seeking{" "}
                <span className="text-violet-400 font-medium">summer internships</span> in software
                development, full-stack engineering, and AI/ML. Let&apos;s build something great together.
              </p>
            </motion.div>

            {/* Contact methods */}
            <motion.div variants={staggerContainer} className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: FiGithub, label: "GitHub", value: "@suraj3722", href: personalInfo.links.github },
                { icon: FiLinkedin, label: "LinkedIn", value: "@suraj3722", href: personalInfo.links.linkedin },
              ].map(({ icon: Icon, label, value, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeInUp}
                  className="flex items-center gap-4 glass glass-hover rounded-xl p-4 group border border-white/5 hover:border-white/15 transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200"
                    style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(6,182,212,0.2))" }}
                  >
                    <Icon size={18} className="text-violet-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">{label}</p>
                    <p className="text-sm text-white font-semibold">{value}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Availability */}
            <motion.div variants={fadeInLeft} className="glass rounded-xl p-4 border border-emerald-500/20">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-white font-semibold text-sm">Available for Opportunities</p>
              </div>
              <p className="text-slate-400 text-xs mt-1.5 ml-6">
                Open to internships, freelance, and collaborative projects.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-2xl p-10 text-center border border-emerald-500/20"
              >
                <CheckCircle2 size={48} className="text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-400 text-sm">Thanks for reaching out. I&apos;ll respond within 24 hours.</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
                  className="mt-6 px-5 py-2 rounded-lg text-sm text-slate-400 hover:text-white border border-white/10 hover:border-white/20 transition-all"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass rounded-2xl p-8 border border-white/5 space-y-5"
              >
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <MessageSquare size={20} className="text-violet-400" />
                  Drop a Message
                </h3>

                {[
                  { id: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
                  { id: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-xs font-medium text-slate-400 mb-2 mono uppercase tracking-wider">
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      required
                      placeholder={field.placeholder}
                      value={form[field.id as "name" | "email"]}
                      onChange={(e) => setForm((f) => ({ ...f, [field.id]: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 border border-white/10 bg-white/5 focus:outline-none focus:border-violet-500/50 focus:bg-white/8 transition-all duration-200"
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-slate-400 mb-2 mono uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 border border-white/10 bg-white/5 focus:outline-none focus:border-violet-500/50 focus:bg-white/8 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-[1.02] disabled:opacity-70 disabled:scale-100"
                  style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)", boxShadow: "0 0 20px rgba(124,58,237,0.3)" }}
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
