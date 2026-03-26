/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { HiCode, HiArrowRight } from 'react-icons/hi';
import { config } from '@/config';
import Link from 'next/link';
import { BackgroundPresets } from '@/components/ui/background-effects';
import { motion } from 'framer-motion';
import SkillsShowcase from './SkillsShowcase';

const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const textAnimation = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const HeroSection = () => {
  return (
    <section className="min-h-[calc(100vh-140px)] flex items-center justify-center relative">
      <BackgroundPresets.Minimal />

      <div className="container mx-auto px-6">
        <motion.div
          variants={containerAnimation}
          initial="hidden"
          animate="show"
          className="max-w-3xl mx-auto text-center space-y-8 relative"
        >
          <motion.div
              variants={itemAnimation}
              className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-white backdrop-blur-sm"
            >
              <span className="text-sm font-medium">
              AI Engineer • 5 Active Clients • LLM & RAG Systems
              </span>
            </motion.div>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm text-gray-300 backdrop-blur-sm">
              📍 London, United Kingdom
            </div>
          <div className="space-y-4">
          <motion.h1
            variants={itemAnimation}
            className="text-4xl md:text-7xl font-bold tracking-tight leading-tight"
          >
            <motion.span
              variants={textAnimation}
              className="block text-white mb-2"
            >
              I build AI systems that
            </motion.span>

            <motion.span
              variants={textAnimation}
              className="block text-white/70 text-2xl md:text-4xl"
            >
              understand, reason, and automate work
            </motion.span>
          </motion.h1>
          </div>

          <motion.p
              variants={itemAnimation}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            >
              AI Engineer based in London, specializing in LLMs, RAG pipelines, and intelligent automation.
              Currently working with 5 active clients delivering production-ready AI systems
              including chatbots, agentic workflows, and automation pipelines.
            </motion.p>

          <motion.div
              variants={itemAnimation}
              className="flex flex-wrap gap-4 justify-center pt-6"
            >

              {/* PROJECTS */}
              <Link href={"/projects"}>
                <Button
                  className="rounded-full px-6 py-6 text-base font-semibold bg-white text-black hover:scale-105 transition"
                >
                  View Projects
                </Button>
              </Link>

              {/* RESUME */}
              <a href="/resume.pdf" download>
                <Button
                  variant="outline"
                  className="rounded-full px-6 py-6 text-base border-white/20 hover:border-white/40"
                >
                  Download Resume
                </Button>
              </a>

            </motion.div>
            <motion.div
              variants={itemAnimation}
              className="grid grid-cols-3 gap-6 pt-10 text-center"
            >

              <div>
                <h2 className="text-2xl font-bold text-white">5+</h2>
                <p className="text-gray-400 text-sm">Active Clients</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">10+</h2>
                <p className="text-gray-400 text-sm">AI Projects</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">1+</h2>
                <p className="text-gray-400 text-sm">Years Experience in Freelance</p>
              </div>

            </motion.div>
            <span className="text-primary">AI ystems</span>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute -z-10 inset-0 pointer-events-none"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
          </motion.div>
        </motion.div>
        <SkillsShowcase />
      </div>
    </section>
  );
};

export default HeroSection;