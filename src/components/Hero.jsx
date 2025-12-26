import { Github, Linkedin, Mail, MapPin, ArrowRight } from "lucide-react";
import { portfolioData } from "../data/portfolio";

const Hero = () => {
  const { personal, socialLinks } = portfolioData;

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Soft background blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-40" />
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-40" />

      <div className="relative z-10 max-w-4xl text-center">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Building{" "}
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            intelligent
          </span>{" "}
          & scalable web products
        </h1>

        {/* Headline */}
        <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
          {personal.headline}
        </p>

        {/* Summary */}
        <p className="text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          {personal.summary}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full
                       bg-gradient-to-r from-purple-600 to-blue-500
                       text-white font-semibold shadow-lg
                       hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            View Projects
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full
                       bg-white border border-gray-200
                       text-gray-800 font-semibold
                       hover:bg-gray-50 hover:-translate-y-1 transition-all"
          >
            Contact Me
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Social Proof / Icons */}
        <div className="flex items-center justify-center gap-6">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-white shadow hover:shadow-lg
                       hover:-translate-y-1 transition"
          >
            <Github />
          </a>

          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-white shadow hover:shadow-lg
                       hover:-translate-y-1 transition"
          >
            <Linkedin />
          </a>

          <a
            href={`mailto:${personal.email}`}
            className="p-4 rounded-full bg-white shadow hover:shadow-lg
                       hover:-translate-y-1 transition"
          >
            <Mail />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
