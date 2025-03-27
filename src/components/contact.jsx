import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Linkedin, Code2, FileText } from "lucide-react";

const Contact = () => {
  return (
    <div>
      <section
        id="resume"
        className="py-32 bg-emerald-50 dark:bg-emerald-950/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300 text-transparent bg-clip-text">
            Resume & Contact
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <a
              href="https://app.luminpdf.com/viewer/67e4cffdcaaa4de94f6f914f"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl"
            >
              <FileText size={24} />
              Download Resume
            </a>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl  mx-auto mt-12">
              <a
                href="https://github.com/suryagit-31"
                className="flex items-center gap-3 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100 dark:border-emerald-800/30 h-40"
              >
                <Github
                  size={24}
                  className="text-emerald-600 dark:text-emerald-400"
                />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  GitHub
                </span>
                <ExternalLink
                  size={16}
                  className="ml-auto text-emerald-600 dark:text-emerald-400"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/suryadss/"
                className="flex items-center gap-3 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100 dark:border-emerald-800/30"
              >
                <Linkedin
                  size={24}
                  className="text-emerald-600 dark:text-emerald-400"
                />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  LinkedIn
                </span>
                <ExternalLink
                  size={16}
                  className="ml-auto text-emerald-600 dark:text-emerald-400"
                />
              </a>
              <a
                href="https://leetcode.com/u/suryadammalapa/"
                className="flex items-center gap-3 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100 dark:border-emerald-800/30"
              >
                <Code2
                  size={24}
                  className="text-emerald-600 dark:text-emerald-400"
                />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  LeetCode
                </span>
                <ExternalLink
                  size={16}
                  className="ml-auto text-emerald-600 dark:text-emerald-400"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
