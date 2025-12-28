import { Code2, Database, Brain, Wrench, BookOpen } from "lucide-react";
import { portfolioData } from "../data/portfolio";

const skillCategories = [
  { key: "programmingLanguages", title: "Languages", icon: Code2 },
  { key: "frameworks", title: "Frameworks", icon: Code2 },
  { key: "databases", title: "Databases", icon: Database },
  { key: "machineLearning", title: "ML Libraries", icon: Brain },
  { key: "aiAndLLM", title: "AI & LLM", icon: Brain },
  { key: "tools", title: "Tools", icon: Wrench },
  { key: "coreSubjects", title: "Core Subjects", icon: BookOpen },
];

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section
      id="skills"
      className="py-28 px-6 bg-gradient-to-b from-white to-gray-50"
    >
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Skills &{" "}
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
          Technologies I use to design, build, and scale modern full-stack and
          AI-driven applications
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map(({ key, title, icon: Icon }) => (
          <div
            key={key}
            className="group relative rounded-3xl bg-white/80 backdrop-blur
                       border border-gray-200/70 p-7
                       shadow-sm transition-all duration-300
                       hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Glow */}
            <div
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
                         bg-gradient-to-br from-purple-200/40 to-blue-200/40
                         blur-2xl transition"
            />

            {/* Content */}
            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="p-3 rounded-2xl
                             bg-gradient-to-br from-purple-100 to-blue-100
                             text-purple-600 shadow-sm"
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-3">
                {skills[key].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-sm font-medium
                               bg-gray-100/80 text-gray-700
                               hover:bg-purple-100 hover:text-purple-700
                               transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
