"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-indigo-100 to-white text-gray-900">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-40 h-40 mb-6 rounded-full overflow-hidden mt-20 border-4 border-indigo-500 shadow-lg"
      >
        <Image
          src="/Mydp.jpg"
          alt="Profile"
          width={160}
          height={160}
          className="object-cover w-full h-full "
        />
      </motion.div>

      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="text-4xl font-bold text-center"
      >
        Sadam Shah
      </motion.h1>
      <p className="text-lg text-indigo-600 mt-1 text-center">
        Working remotely as a Frontend Developer
      </p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-6 max-w-xl text-center text-gray-700"
      >
        <p>
          I’m a passionate developer who loves building modern web applications
          using Next.js, React, and Tailwind CSS.
        </p>
      </motion.div>

      {/* Skills */}
      <div className="mt-10 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4 text-center">Skills</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {["React", "Next.js", "Tailwind", "TypeScript"].map((skill, idx) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx, duration: 0.4 }}
              className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full shadow-sm"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

      <div className="mt-12 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold mb-6 text-center">Projects</h2>
        {[
          {
            title: "Seller Web App",
            description:
              "A web application using Next.js for managing products and orders.",
          },
          {
            title: "Dashboard UI",
            description:
              "Responsive dashboard using Next.js and Tailwind CSS with React-Select.",
          },
        ].map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * idx, duration: 0.5 }}
            className="bg-white p-6 rounded-xl shadow-md mb-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-bold text-xl text-indigo-800">
              {project.title}
            </h3>
            <p className="text-sm mt-2 text-gray-600">{project.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-6 text-center">Education</h2>
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-4 rounded-xl shadow-md"
          >
            <h3 className="font-semibold text-indigo-700">
              COMSATS University, Abbottabad
            </h3>
            <p className="text-sm text-gray-600">
              Bachelor's in Computer Science
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-4 rounded-xl shadow-md"
          >
            <h3 className="font-semibold text-indigo-700">
              Fazaia Inter College, Kohat
            </h3>
            <p className="text-sm text-gray-600">
              Intermediate (Pre-Engineering)
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white p-4 rounded-xl shadow-md"
          >
            <h3 className="font-semibold text-indigo-700">
              Fazaia Inter College, Kohat
            </h3>
            <p className="text-sm text-gray-600">Matriculation (Science)</p>
          </motion.div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="mb-3 text-gray-600">Connect with me:</p>
        <div className="flex justify-center gap-6">
          <Link
            href="https://github.com/Sadamshah083/next.js/tree/master/lib"
            target="_blank"
          >
            <FaGithub className="w-7 h-7 text-gray-700 hover:text-black transition-colors" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/syed-sadam-shah/"
            target="_blank"
          >
            <FaLinkedin className="w-7 h-7 text-blue-600 hover:text-blue-800 transition-colors" />
          </Link>
        </div>
      </div>

      <footer className="mt-12 text-sm text-gray-500">
        © 2025 Sadam Shah. All rights reserved.
      </footer>
    </main>
  );
}
