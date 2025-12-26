import { Trophy, Code2, Crown } from "lucide-react";
import { portfolioData } from "../data/portfolio";

const icons = [
  { icon: Trophy, color: "from-yellow-400 to-orange-500" },
  { icon: Code2, color: "from-purple-600 to-blue-500" },
  { icon: Crown, color: "from-emerald-500 to-teal-500" },
];

const Achievements = () => {
  const { achievements } = portfolioData;

  return (
    <section
      id="achievements"
      className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Key{" "}
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Achievements
          </span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Milestones that reflect my consistency, problem-solving ability, and
          leadership
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement, index) => {
          const Icon = icons[index % icons.length].icon;
          const gradient = icons[index % icons.length].color;

          return (
            <div
              key={index}
              className="relative group bg-white rounded-3xl border border-gray-200
                         p-8 shadow-sm hover:shadow-2xl hover:-translate-y-3
                         transition-all duration-300 overflow-hidden"
            >
              {/* Glow */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition
                            bg-gradient-to-br ${gradient} blur-3xl`}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`w-14 h-14 mb-6 rounded-2xl flex items-center justify-center
                              bg-gradient-to-r ${gradient} text-white shadow-lg`}
                >
                  <Icon className="w-7 h-7" />
                </div>

                {/* Text */}
                <p className="text-gray-800 font-semibold leading-relaxed">
                  {achievement}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Achievements;
