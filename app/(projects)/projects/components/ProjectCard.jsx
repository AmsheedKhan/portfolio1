"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="
        group relative
        min-w-[320px] max-w-[380px]
        bg-white/5 backdrop-blur-md
        border border-white/10 hover:border-white/20
        rounded-2xl p-5
      
        transition-all duration-300
        hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]
        transition-all duration-300 ease-out hover:scale-[1.02]
      "
      whileHover={{ scale: 1.03 }}
    >
       

      {/* IMAGE */}
      <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />
      </div>

      {/* TITLE */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-white">
          {project.title}
        </h3>
        <span className="text-xs text-gray-400">
          #{String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* SHORT DESCRIPTION */}
      <p className="text-sm text-gray-400">
        {project.hook}
      </p>

      {/* TECH TAGS */}
      <div className="flex flex-wrap gap-2 mt-3">
        {project.technologies.slice(0, 3).map((tech, idx) => (
          <span
            key={idx}
            className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* 🔥 PREMIUM OVERLAY */}
      <div className="
        absolute inset-0
        opacity-0 scale-95
        group-hover:opacity-100 group-hover:scale-100
        transition-all duration-300 delay-75
     
        z-50
        rounded-2xl overflow-hidden
      ">

        {/* BACKGROUND IMAGE */}
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-sm opacity-40"
        />

        {/* GRADIENT + GLASS */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/95 backdrop-blur-xl" />

        {/* CONTENT */}
        <div className="relative z-10 p-5 flex flex-col justify-between h-full overflow-y-auto maz-h-full pr-1">

          {/* TITLE */}
          <h3 className="text-lg font-semibold text-white mb-2">
            {project.title}
          </h3>

          {/* DETAILS */}
          <div className="space-y-3 text-[13px] text-gray-200">

                <p>
                <span className="text-white font-semibold">Problem:</span> {project.problem}
                </p>

                <p>
                <span className="text-white font-semibold">Solution:</span> {project.solution}
                </p>
                <p>
                 <span className="font-semibold">Impact:</span> {project.impact}
                  </p>


            </div>
            

          {/* TECH */}
            <div className="flex flex-wrap gap-2 mt-3">
            {project.technologies.map((tech, idx) => (
                <span
                key={idx}
                className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/20"
                >
                {tech}
                </span>
            ))}
            </div>

            {/* ARCHITECTURE */}
            {project.architecture && (
            <p className="text-xs text-gray-400 mt-2">
                ⚙️ {project.architecture}
            </p>
            )}

          {/* BUTTONS */}
          <div className="flex gap-3 mt-4">
            <Button size="sm" className="rounded-full text-xs" asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Live Demo <FaExternalLinkAlt className="ml-1 w-3 h-3" />
              </a>
            </Button>

            <Button size="sm" variant="outline" className="rounded-full text-xs" asChild>
              <a href={project.github} target="_blank">
                <FaGithub className="mr-1 w-3 h-3" />
                GitHub
              </a>
            </Button>
          </div>

        </div>
      </div>

    </motion.div>
  );
};