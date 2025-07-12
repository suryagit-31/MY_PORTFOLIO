import React from "react";
import { motion } from "framer-motion";
import { Bus } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "SOFTWARE DEVELEPOMENT INTERN - REDBUS BANGLORE ",
    company: `REDBUS ,INDIA (Capi Team) `,
    period: "MAY 2025- Present",
    responsibilities: [
      "SDE Intern in Centralised API Team (CAPI) at Redbus HQ ,Bengaluru",
      "Worked on Several Tech Stacks like Java 21 , JavaScript ,Golang ,React js",
      "Written Bulk OffersUpdate Feature in Redbus to Update Multiple Offertiles at a Time making it 90% faster for Updation",
      "Worked with Team to Migrate Apis From Centralised Search  Code base to Anvesha Service making Search for Bus Locations faster by 80 %",
      "Integrated Event Fields  on PRCMS Redbus Offers Using .NET CORE  Making it Easier to Use",
      "Made whole CAPITOOL Responsive and Updated Falcon and Mpax Cache clear Service in capi tool to Clear Cache from Servers In Oneclick ",
    ],
  },
  {
    id: 2,
    role: "BACKEND DEVELOPER INTERN",
    company: "The Good Game Theory",
    period: "February 2025 - MAY 2025",
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
                <h1 className="text-white dark:text-white mb-4 font-bold text-xl">
                  {exp.company} • {exp.period}
                </h1>
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
