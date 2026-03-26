"use client"
import { motion } from "framer-motion";

export default function ResumeSection() {
  return (
    <section className="py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          Download My Resume
        </h2>

        <p className="mt-4 text-gray-400">
          Get a detailed overview of my experience in AI, machine learning, and real-world projects.
        </p>

        <div className="mt-8">
          <a
            href="/AmsheedResume.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition"
          >
            📄 Download CV
          </a>
        </div>
      </motion.div>
    </section>
  );
}