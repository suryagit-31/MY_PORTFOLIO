import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink } from "lucide-react";
import wechat from "../assets/wechat.png";
import Gobuddy from "../assets/Gobuddy.png";
import {
  Menu,
  X,
  Bike,
  PlaneTakeoff,
  Plane,
  GlobeLock,
  Lightbulb,
} from "lucide-react";

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
                  src={Gobuddy}
                  alt="Project 1"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-emerald-700 dark:text-emerald-300 flex items-center gap-2">
                  Go buddy <Plane />- Flight Companion Finder
                </h3>
                <div className="text-white-600 dark:text-white-400 mb-4 flex-col gap-y-4">
                  <p className="flex items-center">
                    My parents had Trouble in Aeroplane Journey, as they are not
                    Familiar with the Long process. So I came up with an idea
                  </p>
                  <p>
                    Go Buddy Connects the Companions in Same filght, to have a
                    Safe and Comfrtable Journey for Elderly People
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-800/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm">
                    React Js
                  </span>
                  <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-800/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm">
                    Javascript
                  </span>
                  <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-800/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm">
                    AviationStack
                  </span>
                  <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-800/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm">
                    RestApi
                  </span>
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/suryagit-31/Go_buddy"
                    className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a
                    href="https://go-buddy-1.onrender.com/"
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
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-300 border border-emerald-100 dark:border-emerald-800/30"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={wechat}
                  alt="Project 2"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-emerald-700 dark:text-emerald-300 flex items-center gap-2">
                  We CHAT <GlobeLock />- Real-time Message App
                </h3>
                <div className="text-white-600 dark:text-white-400 mb-4 flex-col gap-y-4">
                  <p className="flex items-center">
                    Me and MY friends always wanted a Secret Chat app to chat
                    beacuse everyone uses Whatsapp and Instagram
                  </p>
                  <p>
                    We chat is a Secure,Real-time Messaging App, where you can
                    chat with your friends.
                  </p>
                </div>
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
                  alt="Project 3"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl flex space-x-1 font-bold mb-3 text-emerald-700 dark:text-emerald-300">
                  Cycle-GEN <Bike />
                </h3>
                <div className="text-white-600 dark:text-white-400 mb-4 flex-col gap-y-4">
                  <p className="flex items-center">
                    Cycle-GEN is a Cycle booking app Group project
                  </p>
                  <p>Cycle gen Sales Modrenised Cycles for all age groups</p>
                </div>
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
