export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 text-center">
      <h2 className="text-4xl font-bold mb-6">Contact</h2>

      <div className="space-y-3 text-gray-300">
        <p>Email: kotgyaleravikiran@gmail.com</p>
        <p>Phone: +91 7276278721</p>

        <p><a href="https://linkedin.com/in/ravikiran-kotgyale" target="_blank">
          LinkedIn
        </a></p>

        <p>
          <a href="https://github.com/rk-webvision" target="_blank">
          GitHub
        </a>
        </p>
      </div>

      {/* CTA */}
      <div className="mt-10">
        <a
          href="mailto:kotgyaleravikiran@gmail.com"
          className="px-6 py-3 bg-white text-black rounded-xl"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}