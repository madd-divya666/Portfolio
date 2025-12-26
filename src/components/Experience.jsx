import { Calendar, MapPin } from "lucide-react";
import { portfolioData } from "../data/portfolio";

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section
      id="experience"
      className="py-24 px-6 bg-gradient-to-b from-white to-gray-50"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Work{" "}
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Real-world experience building scalable backend systems and modern
          full-stack applications
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200" />

        <div className="space-y-14">
          {experience.map((exp, index) => (
            <div key={index} className="relative pl-12">
              {/* Dot */}
              <div className="absolute left-2 top-6 w-4 h-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 shadow-md" />

              {/* Card */}
              <div
                className="bg-white rounded-3xl border border-gray-200 p-6 md:p-8
                              shadow-sm hover:shadow-xl hover:-translate-y-1
                              transition-all duration-300"
              >
                {/* Role */}
                <h3 className="text-xl font-semibold text-gray-800">
                  {exp.role}
                </h3>

                {/* Company */}
                <p className="text-purple-600 font-medium mt-1">
                  {exp.company}
                </p>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-3">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </span>
                </div>

                {/* Details */}
                <ul className="mt-5 space-y-2 text-gray-600 text-sm leading-relaxed">
                  {exp.details.map((detail, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2" />
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.techUsed.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs
                                 bg-gray-100 text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
