"use client";
import React from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { projectCategories, config } from "@/config";
import { HiArrowRight } from "react-icons/hi";

const allProjects = config.projects;

const ProjectCategories = () => {
  return (
    <div className="w-full px-6 md:px-16 lg:px-24 space-y-20 mt-20">

      {projectCategories.map((category) => {

        const filteredProjects = category.projects
          .map(id => allProjects.find(p => p.id === id))
          .filter(Boolean); // safety

        return (
          <div key={category.title}>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {category.title}
            </h2>

            <div className="relative">

              {/* RIGHT FADE + ARROW */}
              {filteredProjects.length > 2 && (
                <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10 flex items-center justify-end pr-3 pointer-events-none">
                  <HiArrowRight className="text-white opacity-70 text-xl animate-pulse" />
                </div>
              )}

              {/* SCROLL */}
              <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">

                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="min-w-[320px] max-w-[380px] snap-start flex-shrink-0"
                    whileHover={{ scale: 1.03 }}
                  >
                    <ProjectCard project={project} index={index} />
                  </motion.div>
                ))}

              </div>
            </div>

          </div>
        );
      })}

    </div>
  );
};

export default ProjectCategories;