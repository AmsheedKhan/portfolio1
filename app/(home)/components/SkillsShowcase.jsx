'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiPython, SiTensorflow, SiPytorch, SiPostgresql, SiApachespark 
} from "react-icons/si";

import { FaBrain, FaDatabase, FaRobot, FaServer, FaTools } from "react-icons/fa";
import { HiCode } from "react-icons/hi";
import { SiHuggingface } from "react-icons/si";

const skillCategories = [
    {
      title: "Core AI",
      icon: <FaRobot />,
      skills: [
        { name: "LLMs", icon: <FaBrain />, highlight: true },
        { name: "RAG Systems", icon: <FaDatabase />, highlight: true },
        { name: "Agentic AI", icon: <FaRobot />, highlight: true },
        { name: "AI Agents", icon: <FaRobot /> },
        { name: "Multi-Agent Systems", icon: <FaRobot /> },
  
        { name: "Prompt Engineering", icon: <HiCode />, highlight: true },
        { name: "Fine-tuning (LoRA, PEFT)", icon: <HiCode /> },
  
        { name: "Recommendation Systems", icon: <HiCode /> },
        { name: "Expert Systems", icon: <HiCode /> },
        { name: "LangChain", icon: <HiCode />, highlight: true },
        { name: "LangGraph", icon: <HiCode />, highlight: true },
        { name: "LlamaIndex", icon: <HiCode /> },
        { name: "Knowledge Graphs", icon: <FaDatabase /> },
      ]
    },
  
    {
      title: "Machine Learning",
      icon: <FaBrain />,
      skills: [
        { name: "Machine Learning", icon: <FaBrain /> },
        { name: "Deep Learning (CNN, LSTM, Transformers)", icon: <FaBrain /> },
  
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "PyTorch", icon: <SiPytorch /> },
  
        { name: "PySpark", icon: <SiApachespark /> },
        { name: "MATLAB", icon: <HiCode /> },{ name: "MLOps", icon: <HiCode />, highlight: true },
        { name: "Model Monitoring", icon: <HiCode /> },
        { name: "Azure ML", icon: <HiCode /> }
      ]
    },
  
    {
      title: "Data & Backend",
      icon: <FaServer />,
      skills: [
        { name: "Python", icon: <SiPython />, highlight: true },
  
        { name: "SQL", icon: <FaDatabase /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Hive", icon: <FaDatabase /> },
  
        { name: "FastAPI", icon: <HiCode />, highlight: true },
  
        { name: "Embeddings", icon: <FaDatabase /> },
        { name: "Semantic Search", icon: <FaDatabase /> },
        { name: "Vector DBs (Qdrant, FAISS)", icon: <FaDatabase /> }
      ]
    },
  
    {
      title: "AI Systems & MLOps",
      icon: <FaServer />,
      skills: [
        { name: "AI System Design", icon: <HiCode />, highlight: true },
        { name: "RAG Architecture Design", icon: <HiCode /> },
        { name: "Evaluation & Guardrails", icon: <HiCode /> },
  
        { name: "Model Deployment", icon: <HiCode /> },
        { name: "Docker", icon: <FaTools /> },
        { name: "CI/CD for ML", icon: <HiCode /> }
      ]
    },
  
    {
      title: "Tools & Platforms",
      icon: <FaTools />,
      skills: [
        { name: "Hugging Face", icon: <SiHuggingface />, highlight: true },
        { name: "Ollama", icon: <FaRobot />, highlight: true },
        { name: "Claude", icon: <FaRobot />, highlight: true },
  
        { name: "n8n", icon: <HiCode />, highlight: true },
        { name: "Activepieces", icon: <HiCode /> },
  
        { name: "Streamlit", icon: <HiCode /> },
        { name: "Qdrant", icon: <FaDatabase /> },
  
        { name: "Cursor", icon: <HiCode /> },
        { name: "Docling", icon: <HiCode /> },
        { name: "GitHub", icon: <FaTools /> }
      ]
    }
  ];

const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2
    }
  }
};

const SkillsShowcase = () => {
  return (
    <motion.div
      variants={containerAnimation}
      initial="hidden"
      animate="show"
      className="w-full mt-12"
    >
      <div className="mt-12">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Tech Stacks
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          {skillCategories.map((category) => (
            <div key={category.title}>

              {/* Category Title */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="text-xl">{category.icon}</span>
                <h2 className="text-xl font-semibold">{category.title}</h2>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 justify-center">

              {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`
                      flex items-center gap-2 px-3 py-1 rounded-full border text-sm
                      ${skill.highlight
                        ? "bg-white text-black border-white font-semibold"
                        : "border-white/30 text-gray-300"
                      }
                    `}
                  >
                    <span className="text-sm">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}

              </div>
            </div>
          ))}

        </div>
      </div>
    </motion.div>
  );
};

export default SkillsShowcase;