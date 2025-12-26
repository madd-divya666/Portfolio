import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { portfolioData } from "../data/portfolio";

const Contact = () => {
  const { personal, socialLinks } = portfolioData;

  return (
    <section
      id="contact"
      className="relative py-28 px-6 overflow-hidden
                 bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-600"
    >
      {/* Soft glow */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />

      <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Let’s build something{" "}
          <span className="underline decoration-white/40">meaningful</span>
        </h2>

        {/* Subtext */}
        <p className="text-white/80 text-lg leading-relaxed mb-10">
          I’m always open to discussing new opportunities, interesting projects,
          or collaborations in full-stack and AI-driven development.
        </p>

        {/* Primary CTA */}
        <a
          href={`mailto:${personal.email}`}
          className="inline-flex items-center gap-3 px-8 py-4
                     rounded-full bg-white text-gray-900
                     font-semibold shadow-lg
                     hover:shadow-2xl hover:-translate-y-1
                     transition-all duration-300"
        >
          Get in touch
          <ArrowRight className="w-5 h-5" />
        </a>

        {/* Social Links */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/20
                       flex items-center justify-center
                       hover:bg-white hover:text-gray-900
                       transition-all"
          >
            <Github />
          </a>

          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/20
                       flex items-center justify-center
                       hover:bg-white hover:text-gray-900
                       transition-all"
          >
            <Linkedin />
          </a>

          <a
            href={`mailto:${personal.email}`}
            className="w-12 h-12 rounded-full bg-white/20
                       flex items-center justify-center
                       hover:bg-white hover:text-gray-900
                       transition-all"
          >
            <Mail />
          </a>
        </div>

        {/* Footer line */}
        <p className="mt-14 text-sm text-white/70">
          © {new Date().getFullYear()} {personal.name}.
        </p>
      </div>
    </section>
  );
};

export default Contact;
