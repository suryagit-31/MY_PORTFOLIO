import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink } from "lucide-react";
import wechat from "../assets/wechat.png";
import { Menu, X, Bike } from "lucide-react";

const Projects = () => {
  return (
    <div>
      <section id="projects" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300 text-transparent bg-clip-text">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-300 border border-emerald-100 dark:border-emerald-800/30"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={wechat}
                  alt="Project 1"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-emerald-700 dark:text-emerald-300">
                  (WE CHAT) Real-time Message App
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  WE CHAT IS A full stack messaging app devloped using MERN AND
                  SOCKET.IO FOR REAL-TIME CHAT.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-800/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm">
                    Javascript
                  </span>
                  <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-800/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm">
                    Socket.io
                  </span>
                  <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-800/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm">
                    Node js
                  </span>
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/suryagit-31/WE_CHAT"
                    className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a
                    href="https://we-chat-37q7.onrender.com/login"
                    className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-300 border border-emerald-100 dark:border-emerald-800/30"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="Project 2"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl flex space-x-1 font-bold mb-3 text-emerald-700 dark:text-emerald-300">
                  Cycle-GEN <Bike />
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A Modern ECO-Friendly cycle booking website and innovative
                  design
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-800/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-800/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm">
                    Tailwind CSS
                  </span>
                  <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-800/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm">
                    Mongo db
                  </span>
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/suryagit-31/cyclegen_pro"
                    className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a
                    href="https://cyclegen-pro-2-bqnnvzf23-suryadammalapas-projects.vercel.app/"
                    className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
