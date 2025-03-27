import React from 'react'
import { motion } from 'framer-motion'

const Education = () => {
  return (
    <div>
      <section
        id="education"
        className="py-32 bg-emerald-50 dark:bg-emerald-950/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300 text-transparent bg-clip-text">
            Education
          </h2>
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl border border-emerald-100 dark:border-emerald-800/30"
            >
              <h3 className="text-2xl font-bold mb-2 text-emerald-700 dark:text-emerald-300">
                Indian institute of information Technology, Kottayam
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Bachelor of Science in Computer Science • 2022 - Present
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li> GPA: 7.0</li>
                <li> Memeber of Web development club- BetaLabs IIITK</li>
                <li>Lead of Cinevedika Film Club IIITK </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl border border-emerald-100 dark:border-emerald-800/30"
            >
              <h3 className="text-2xl font-bold mb-2 text-emerald-700 dark:text-emerald-300">
                Relevant Coursework
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="space-y-2">
                  <p className="font-medium">DATA STRUCTURES & Algorithms</p>
                  <p className="font-medium">Operating Systems</p>
                  <p className="font-medium">Database Systems</p>
                </div>
                <div className="space-y-2">
                  <p className="font-medium">Computer Networks</p>
                  <p className="font-medium">Software Engineering</p>
                  <p className="font-medium">Artificial Intelligence</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Education
