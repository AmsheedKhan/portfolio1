"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { config } from '@/config';

const SkillsSection = () => {
  const skills = config.skills;

  return (
    <section className="py-12" id="skills">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Core Expertise
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mt-2">
            Focused on building production-ready AI systems using modern LLM and data technologies.
          </p>
        </div>

        {/* SKILLS */}
        <div className="space-y-8">

          {skills.map((category) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >

              {/* CATEGORY TITLE */}
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="text-lg">{category.icon}</span>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>

              {/* SKILL CHIPS */}
              <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-3 py-1 text-sm rounded-full
                      border border-white/20
                      bg-white/5
                      hover:bg-white/10
                      transition-all duration-300
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;