"use client";

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full flex justify-between px-8 py-4 backdrop-blur bg-black/40 z-50">
      
      <h1 className="font-semibold">RK</h1>

      <div className="hidden md:flex gap-6 text-sm text-gray-300">
        <a href="#experience" className="hover:text-white transition">
          Experience
        </a>
        <a href="#skills" className="hover:text-white transition">
          Skills
        </a>
        <a href="#projects" className="hover:text-white transition">
          Projects
        </a>
        <a href="#system-design" className="hover:text-white transition">
          Design
        </a>
        <a href="#awards" className="hover:text-white transition">
          Awards
        </a>
        <a href="#contact" className="hover:text-white transition">
          Contact
        </a>
      </div>

      <a
        href="/resume.pdf"
        download
        className="text-sm border px-3 py-1 rounded hover:bg-white hover:text-black transition"
      >
        Resume
      </a>
    </div>
  );
}