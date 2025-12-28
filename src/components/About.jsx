import { Code, Database, Brain, Rocket, ExternalLink } from "lucide-react";
import { portfolioData } from "../data/portfolio";

const About = () => {
  const { personal, about, socialLinks } = portfolioData;

  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          About Me
        </h2>

        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
          I’m {about.intro}
        </p>

        {/* Journey + Focus */}
        <div className="grid md:grid-cols-2 gap-14 mb-20">
          {/* Journey */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-5">My Journey</h3>
            {about.story.map((line, i) => (
              <p key={i} className="text-gray-600 mb-4 leading-relaxed">
                {line}
              </p>
            ))}
          </div>

          {/* Focus */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-6">What I Focus On</h3>

            <div className="space-y-5">
              {about.highlights.map((item, i) => {
                const Icon =
                  item.icon === "code"
                    ? Code
                    : item.icon === "database"
                    ? Database
                    : item.icon === "brain"
                    ? Brain
                    : Rocket;

                return (
                  <div key={i} className="flex gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-purple-100 text-purple-600">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-gray-600 text-sm">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Coding Profiles */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-center mb-4">
            Coding Profiles
          </h3>

          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Solved{" "}
            <span className="font-semibold text-gray-900">
              {about.codingProfiles.totalSolved}
            </span>{" "}
            DSA problems combined across platforms.
          </p>

          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* LeetCode */}
            <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-3">
                <a
                  href={socialLinks.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-yellow-600 transform hover:scale-110 transition-all duration-300"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0z" />
                  </svg>
                </a>
                <h4 className="text-lg font-semibold">LeetCode</h4>
              </div>

              <p className="text-gray-600 mb-4">
                Practicing DSA, algorithms, and coding patterns.
              </p>

              <a
                href={socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium text-yellow-600 group-hover:underline"
              >
                View Profile <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* GeeksforGeeks */}
            <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="https://media.geeksforgeeks.org/gfg-gg-logo.svg"
                  alt="GeeksforGeeks"
                  className="w-8 h-8"
                />
                <h4 className="text-lg font-semibold">GeeksforGeeks</h4>
              </div>

              <p className="text-gray-600 mb-4">
                Strong focus on core CS concepts and problem-solving.
              </p>

              <a
                href={socialLinks.geeksforgeeks}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium text-green-600 group-hover:underline"
              >
                View Profile <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Closing */}
        <p className="text-center text-gray-500 max-w-2xl mx-auto">
          {about.closing}
        </p>
      </div>
    </section>
  );
};

export default About;
