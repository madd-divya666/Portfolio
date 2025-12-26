import { X, Github, ExternalLink } from "lucide-react";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-8 relative shadow-2xl">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
        >
          <X />
        </button>

        {/* Header */}
        <div className="mb-6">
          <span className="text-sm text-purple-600 font-semibold uppercase">
            {project.category}
          </span>
          <h3 className="text-2xl font-bold mt-1">{project.title}</h3>
        </div>

        {/* Overview */}
        <p className="text-gray-600 leading-relaxed mb-6">{project.overview}</p>

        {/* Features */}
        <div className="mb-6">
          <h4 className="font-semibold mb-3">Key Features</h4>
          <ul className="space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="flex gap-3 text-gray-600">
                <span className="w-2 h-2 rounded-full bg-purple-500 mt-2" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="font-semibold mb-3">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 font-medium"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl
                         bg-gradient-to-r from-purple-600 to-blue-500
                         text-white font-medium hover:opacity-90"
            >
              <ExternalLink className="w-5 h-5" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
