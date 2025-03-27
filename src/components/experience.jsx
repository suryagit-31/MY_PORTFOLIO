import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "BACKEND DEVELOPER INTERN",
    company: "The Good Game Theory",
    period: "February 2025 - Present",
    responsibilities: [
      "Developed RESTful APIs using React and Node.js",
      "Worked with a team to design and implement database schemas",
      "worked on phpmyadmin and mongodb database",
    ],
  },
];

const Experience = () => {
  return (
    <div>
      {/* Experience Section */}
      <section
        id="experience"
        className="py-16 bg-emerald-50 dark:bg-emerald-950/20 "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300 text-transparent bg-clip-text">
            Work Experience
          </h2>
          <div className="space-y-12">
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl border border-emerald-100 dark:border-emerald-800/30"
              >
                <h3 className="text-2xl font-bold mb-2 text-emerald-700 dark:text-emerald-300">
                  {exp.role}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {exp.company} • {exp.period}
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-3">
                  {exp.responsibilities.map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
