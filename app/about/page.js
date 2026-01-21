export default function About() {
  const techs = [
    // Web and coding languages
    "JavaScript",
    "HTML",
    "CSS",
    "PHP",
    "C# (Unity)",

    // Frameworks and libraries
    "React",
    "Next.js",
    "Node.js",
    "Tailwind",
    "Unity",

    // Databases
    "SQL (MySQL, MongoDB)",

    // Tools
    "Git / GitHub",
    "Docker",
    "VSCode",
    "Vite",

    // Design and Ui
    "Figma",
    "Adobe Creative Suite",
  ];

  const languages = [
    { name: "Finnish", level: "Fluent" },
    { name: "English", level: "Advanced" },
    { name: "Swedish", level: "Novice" },
  ];

  const workExperience = [
    {
      role: "On-the-Job Training / Junior developer",
      company: "Kodarit Oy",
      period: "2024",
      description:
        "Built a web app using React and Node.js that uses AI to help users learn coding with exercises and feedback.",
    },
  ];

  return (
    <section className="flex flex-col items-center min-h-full p-8 md:p-16 mt-12 md:mt-0 text-neutral-100 space-y-8">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Eerik Ojala</h1>
        <h2 className="text-xl md:text-2xl text-neutral-400 mb-3">
          ICT student at Tampere Vocational College, Finland
        </h2>
        <p className="text-neutral-300 mb-6 leading-relaxed">
          I enjoy working on small projects. I am aiming to become a full-stack
          developer.
        </p>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Technologies & Tools</h3>
          <div className="flex flex-wrap gap-3">
            {techs.map((tech) => (
              <span
                key={tech}
                className="bg-neutral-800 text-neutral-200 px-3 py-1 rounded-md text-sm font-medium hover:bg-neutral-700 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Languages</h3>
          <div className="flex flex-wrap gap-3">
            {languages.map((lang) => (
              <span
                key={lang.name}
                className="bg-neutral-800 text-neutral-200 px-3 py-1 rounded-md text-sm font-medium hover:bg-neutral-700 transition"
              >
                {lang.name} ({lang.level})
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Work Experience</h3>
          <div className="flex flex-col gap-4">
            {workExperience.map((job, index) => (
              <div key={index} className="bg-neutral-800 p-4 rounded-md w-full">
                <h4 className="text-lg font-semibold">{job.role}</h4>
                <p className="text-neutral-400">
                  {job.company} - {job.period}
                </p>
                <p className="text-neutral-300 mt-1">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
