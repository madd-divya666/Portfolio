import { useState } from "react";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { portfolioData } from "../data/portfolio";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Featured{" "}
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Real-world projects built using MERN stack, AI, and Machine Learning
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group bg-white rounded-3xl border border-gray-200
                       shadow-sm hover:shadow-2xl hover:-translate-y-3
                       transition-all duration-300 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div
              className="h-32 bg-gradient-to-br from-purple-100 via-blue-100 to-transparent
                            flex items-center justify-center"
            >
              <span className="text-sm font-semibold text-purple-700 bg-white/70 px-4 py-1 rounded-full">
                {project.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {project.overview}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-500">
                    +{project.techStack.length - 4}
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="mt-auto flex items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                <button
                  onClick={() => setSelectedProject(project)}
                  className="ml-auto flex items-center gap-2 px-4 py-2
                             rounded-xl bg-gradient-to-r from-purple-600 to-blue-500
                             text-white text-sm font-medium
                             hover:opacity-90 transition"
                >
                  Know More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
