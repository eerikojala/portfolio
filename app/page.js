export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-full p-8 md:p-16 text-center space-y-6">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
        Hi, I'm Eerik Ojala
      </h1>
      <h2 className="text-2xl md:text-3xl text-neutral-400 font-medium">
        ICT Student from Finland
      </h2>
      <p className="text-neutral-300 text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
        Take a look at my projects. If you are interested contact me anytime.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
        <a
          href="/about"
          className="px-6 py-3 bg-neutral-800 text-neutral-100 rounded-lg hover:bg-neutral-700 transition"
        >
          Learn More
        </a>
        <a
          href="/contact"
          className="px-6 py-3 bg-neutral-800 text-neutral-100 rounded-lg hover:bg-neutral-700 transition"
        >
          Contact me
        </a>
      </div>
    </section>
  );
}
