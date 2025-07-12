import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code2, StarIcon } from "lucide-react";
import profile from "../assets/profile_surya.jpeg";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";

const Herosection = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div>
      <section
        id="about"
        className="pt-24 min-h-screen flex items-center bg-gradient-to-b from-emerald-50/50 to-white dark:from-emerald-950/30 dark:to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Flip Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2"
            >
              <div
                className={`flip-card w-96 h-96 mx-auto md:mx-0 ${
                  isFlipped ? "flipped" : ""
                }`}
                onClick={() => setIsFlipped((prev) => !prev)}
              >
                <div className="flip-inner">
                  {/* Front Side */}
                  <div className="flip-front">
                    <img
                      src={profile}
                      alt="Profile"
                      className="rounded-2xl w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Back Side */}
                  <div className="flip-back bg-gradient-to-br from-emerald-500 to-teal-400 text-white flex flex-col justify-center items-center p-6 gap-4">
                    <h2 className="text-2xl font-bold animate-bounce">
                      👋 Hey there!
                    </h2>
                    <p className="text-center text-sm">
                      Welcome to my portfolio
                    </p>
                    <div className="flex flex-col gap-3 w-full">
                      <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        offset={-70}
                        className="cursor-pointer w-full text-center px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full font-medium transition duration-300"
                      >
                        🚀 Visit My Projects
                      </Link>
                      <Link
                        to="experience"
                        smooth={true}
                        duration={500}
                        offset={-70}
                        className="cursor-pointer w-full text-center px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full font-medium transition duration-300"
                      >
                        Work Experience
                      </Link>
                      <Link
                        to="resume"
                        smooth={true}
                        duration={500}
                        offset={-70}
                        className="cursor-pointer w-full text-center px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full font-medium transition duration-300"
                      >
                        📄 Resume
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-sm sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300 animate-pulse text-center">
                👆 Click on me to know me
              </p>
            </motion.div>

            {/* Text and Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/2 text-center md:text-left"
            >
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300 text-transparent bg-clip-text">
                Surya Dammalapa
              </h1>
              <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-2 font-semibold flex items-center justify-center md:justify-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-300">
                  <Typewriter
                    words={[
                      "Full Stack Developer",
                      "Golang Developer",
                      "Debug Expert",
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="▍"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </span>
                <StarIcon className="inline h-4 text-yellow-400 animate-pulse" />
              </h2>

              <h4 className="text-xl text-gray-600 dark:text-gray-300 mb-6 font-semibold">
                MERN STACK – GOLANG – JAVASCRIPT
              </h4>

              <div className="prose prose-lg dark:prose-invert mb-8">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Dedicated Computer Science student at IIIT Kottayam with a
                  focus on Software Engineering and Artificial Intelligence.
                  Experienced in full-stack development with a proven track
                  record of delivering scalable web applications. Passionate
                  about solving complex algorithmic problems and contributing to
                  open-source projects.
                </p>
              </div>

              <div className="flex gap-6 justify-center md:justify-start mb-8">
                <a
                  href="https://github.com/suryagit-31"
                  target="_blank"
                  className="p-3 rounded-full bg-emerald-100 dark:bg-emerald-800/30 hover:bg-emerald-200 dark:hover:bg-emerald-700/50 transition-colors text-emerald-700 dark:text-emerald-300"
                >
                  <Github size={28} />
                </a>
                <a
                  href="https://www.linkedin.com/in/suryadss/"
                  target="_blank"
                  className="p-3 rounded-full bg-emerald-100 dark:bg-emerald-800/30 hover:bg-emerald-200 dark:hover:bg-emerald-700/50 transition-colors text-emerald-700 dark:text-emerald-300"
                >
                  <Linkedin size={28} />
                </a>
                <a
                  href="https://leetcode.com/u/suryadammalapa/"
                  target="_blank"
                  className="p-3 rounded-full bg-emerald-100 dark:bg-emerald-800/30 hover:bg-emerald-200 dark:hover:bg-emerald-700/50 transition-colors text-emerald-700 dark:text-emerald-300"
                >
                  <Code2 size={28} />
                </a>
                <a
                  href="mailto:suryadammalapa@gmail.com"
                  className="p-3 rounded-full bg-emerald-100 dark:bg-emerald-800/30 hover:bg-emerald-200 dark:hover:bg-emerald-700/50 transition-colors text-emerald-700 dark:text-emerald-300"
                >
                  <Mail size={28} />
                </a>
              </div>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {["React.js", "Golang", "Python", "C++", "Javascript"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-emerald-100 dark:bg-emerald-800/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Herosection;
