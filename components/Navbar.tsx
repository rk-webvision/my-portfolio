"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 w-full z-50 backdrop-blur bg-black/40">

      {/* Top Bar */}
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="font-semibold">RK</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm text-gray-300">
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#vibe-code" className="hover:text-white">Vibe Code</a>
          <a href="#awards" className="hover:text-white">Awards</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4 text-gray-300 bg-black">
          <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#vibe-code" onClick={() => setOpen(false)}>Vibe Code</a>
          <a href="#awards" onClick={() => setOpen(false)}>Awards</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </div>
  );
}