"use client"
import { motion } from "framer-motion";

export default function ProofSection() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold">What I've Delivered</h2>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        <div>
          <h3 className="text-3xl font-bold">5+</h3>
          <p className="text-gray-400">Active Clients</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">2</h3>
          <p className="text-gray-400">RAG Systems</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">2</h3>
          <p className="text-gray-400">AI Chatbots</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">1</h3>
          <p className="text-gray-400">Automation System</p>
        </div>
      </div>
    </section>
  );
}