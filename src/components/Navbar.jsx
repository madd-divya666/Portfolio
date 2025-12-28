import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 inset-x-0 z-50">
      {/* Full-width background */}
      <div
        className={`w-full backdrop-blur-xl border-b border-purple-200/40
                    transition-all duration-300
                    ${
                      scrolled ? "bg-purple-50/90 shadow-md" : "bg-purple-50/80"
                    }`}
      >
        {/* Centered content */}
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-lg font-extrabold tracking-tight
                       bg-gradient-to-r from-purple-600 to-blue-500
                       bg-clip-text text-transparent"
          >
            Divya
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-gray-700 hover:text-purple-600 transition
                           after:absolute after:-bottom-1 after:left-0 after:h-0.5
                           after:w-0 after:bg-purple-500 after:transition-all
                           hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (full width, attached) */}
      {open && (
        <div className="md:hidden w-full bg-purple-50/95 backdrop-blur-xl border-b border-purple-200/40 shadow-lg">
          <div className="max-w-6xl mx-auto px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-gray-700 font-medium
                           hover:text-purple-600 transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
