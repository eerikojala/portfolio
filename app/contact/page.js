import { MailIcon, PhoneIcon } from "lucide-react";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import Link from "next/link";

export default function Contact() {
  const socialLinks = [
    { icon: FaXTwitter, href: "https://x.com/eekka117", label: "X" },
    { icon: FaLinkedin, href: "https://linkedin.com/", label: "LinkedIn" },
    { icon: FaGithub, href: "https://github.com/eekka117", label: "GitHub" },
  ];
  return (
    <section className="flex flex-col items-center justify-center min-h-full p-8 md:p-16 text-center space-y-6 text-neutral-100">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
        Get in touch
      </h1>

      <p className="text-neutral-300 text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
        Open to job opportunities. Feel free to contact me.
      </p>

      <div className="flex flex-col items-center gap-4 pt-2">
        <a
          href="mailto:eerikojala1@gmail.com"
          className="inline-flex items-center gap-3 text-lg md:text-xl font-medium hover:text-neutral-300 transition"
        >
          <MailIcon className="w-5 h-5 md:w-6 md:h-6" />
          eerikojala1@gmail.com
        </a>

        <a
          href="tel:+358409332035"
          className="inline-flex items-center gap-3 text-lg md:text-xl font-medium hover:text-neutral-300 transition"
        >
          <PhoneIcon className="w-5 h-5 md:w-6 md:h-6" />
          +358 40 933 2035
        </a>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
        {socialLinks.map((item) => {
          return (
            <Link
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition"
            >
              <item.icon className="text-lg" />
              {item.label}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
