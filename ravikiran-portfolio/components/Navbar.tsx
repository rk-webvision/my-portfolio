export default function Navbar() {
  return (
    <div className="fixed top-0 w-full flex justify-between p-5 backdrop-blur bg-black/30 z-50">
      <h1 className="font-bold">Ravikiran</h1>
      <div className="space-x-4">
        <a href="#projects">Projects</a>
        <a href="/resume.pdf" download>Resume</a>
      </div>
    </div>
  );
}