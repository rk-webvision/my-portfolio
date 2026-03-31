export default function Navbar() {
  return (
    <div className="fixed top-0 w-full flex justify-between px-8 py-4 backdrop-blur bg-black/40 z-50">
      <h1 className="font-semibold">RK</h1>

      <div className="flex gap-6 text-sm text-gray-300">
        <a href="#projects" className="hover:text-white">Projects</a>
        <a href="/resume.pdf" download className="hover:text-white">
          Resume
        </a>
      </div>
    </div>
  );
}