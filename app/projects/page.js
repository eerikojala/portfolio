import { assets } from "../assets/assets";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      name: "React Store Site",
      description: "Clothing store site with shopping cart and checkout.",
      image: assets.react_store,
      link: "https://eeroja23fanikauppa2.node.treok.io/",
    },
    {
      name: "PHP Techstore Site",
      description: "Online store with shopping cart and item browsing.",
      image: assets.techstore,
      link: "https://techstore.eeroja23.treok.io/",
    },
    {
      name: "Iron Veil 2D Unity game",
      description: "2D action platformer game made with Unity.",
      image: assets.ironveil,
      link: "https://play.unity.com/en/games/753b6076-b1a3-4da3-bdfe-174ee9091c89/ironveil",
    },
    {
      name: "Retro To-Do App",
      description: "Windows 98-style To-Do App made with Javascript.",
      image: assets.to_do_app,
      link: "https://eekka117.github.io/retro-to-do-app/",
    },
  ];

  return (
    <div className="flex min-h-screen text-neutral-100">
      <main className="flex-1 pt-8 sm:pt-16 px-4 sm:px-8 md:px-16">
        <section className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Projects</h1>
          <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))]">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                className="block bg-neutral-800 rounded-xl overflow-hidden transition hover:bg-neutral-700"
                target="_blank"
              >
                <div className="w-full aspect-[16/10] relative">
                  <Image
                    src={project.image}
                    alt="project screenshot"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
                  <p className="text-neutral-300">{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
