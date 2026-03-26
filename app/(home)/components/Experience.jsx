"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { HiBriefcase } from 'react-icons/hi';

const ExperienceSection = () => {
  return (
    <>
      {/* ================= EXPERIENCE ================= */}
      <section className="py-12 relative" id="experience">

        {/* 🔥 BACKGROUND GLOW */}
        <div className="absolute inset-0 -z-10 flex justify-center">
          <div className="w-[400px] h-[400px] bg-white/5 blur-3xl rounded-full" />
        </div>

        <div className="container mx-auto px-6 space-y-16">

          {/* HEADER */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Experience
            </h2>
            <p className="text-gray-400">
              Real-world AI systems built for production use
            </p>
          </div>

          {/* METRICS */}
          <div className="flex flex-wrap justify-center gap-10 text-center">
            {[
              { value: "5+", label: "Clients" },
              { value: "10+", label: "AI Systems" },
              { value: "3+", label: "RAG Pipelines" },
              { value: "100%", label: "Satisfaction" }
            ].map((item, i) => (
              <div key={i}>
                <h3 className="text-3xl font-bold text-white">{item.value}</h3>
                <p className="text-sm text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>

          {/* MAIN CARD */}
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_0_25px_rgba(255,255,255,0.08)]">

              {/* SHINE */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shine_1.5s_linear]" />
              </div>

              {/* TITLE */}
              <div className="flex items-center gap-2 mb-2">
                <HiBriefcase className="text-white/70 group-hover:scale-110 transition" />
                <h3 className="text-2xl font-bold text-white">
                  Freelance AI Engineer
                </h3>
              </div>

              <p className="text-sm text-gray-400 mb-4">
                Self-Employed • 2024 – Present • Remote
              </p>

              <p className="text-gray-300 mb-6">
                Built production AI systems including RAG pipelines,
                LLM chatbots, and automation workflows.
              </p>

              {/* IMPACT */}
              <div className="space-y-2 text-sm text-gray-300">
                <p>🚀 Built 5+ AI systems including RAG pipelines and automation tools</p>
                <p>⚡ Reduced manual workflows using AI automation (n8n, APIs)</p>
                <p>🧠 Developed LLM-based chatbots with improved response accuracy</p>
                <p>📊 Designed end-to-end pipelines (data → embeddings → API → deployment)</p>
              </div>

              {/* TECH */}
              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/10">
                {["Python", "FastAPI", "LangChain", "RAG", "LLMs", "Docker"].map((tech) => (
                  <span key={tech} className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20">
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </motion.div>

          {/* MINI CARDS */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">

            <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition">
              <h3 className="text-md font-semibold text-white">
                Deep Learning Intern
              </h3>
              <p className="text-xs text-gray-400 mb-2">
                Oxi Academy • 2025
              </p>
              <p className="text-sm text-gray-400">
                Built CNN & NLP models using TensorFlow & PyTorch.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition">
              <h3 className="text-md font-semibold text-white">
                Machine Learning Intern
              </h3>
              <p className="text-xs text-gray-400 mb-2">
                Verzeo • 2024
              </p>
              <p className="text-sm text-gray-400">
                Developed ML models and improved prediction accuracy.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= EDUCATION ================= */}
      <section className="py-12" id="education">

        <div className="max-w-2xl mx-auto text-center space-y-6">

          <h2 className="text-2xl font-semibold text-white">
            Education
          </h2>

          <div className="space-y-4">

            <div className="p-5 rounded-xl bg-white/10 border border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              <h3 className="text-lg font-semibold text-white">
                MSc Artificial Intelligence
              </h3>
              <p className="text-sm text-gray-400">
                University of East London • 2024 – 2026
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-lg font-semibold text-white">
                Diploma in Artificial Intelligence
              </h3>
              <p className="text-sm text-gray-400">
                Completed 2025
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-lg font-semibold text-white">
                BSc Computer Science
              </h3>
              <p className="text-sm text-gray-400">
                2021 – 2024
              </p>
            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default ExperienceSection;