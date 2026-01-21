"use client";

import { assets } from "../assets/assets";
import { Home as HomeIcon, User, Folder, Mail, Menu } from "lucide-react";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const year = new Date().getFullYear();
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(true);

  const navItems = [
    { name: "Home", icon: HomeIcon, href: "/" },
    { name: "About", icon: User, href: "/about" },
    { name: "Projects", icon: Folder, href: "/projects" },
    { name: "Contact", icon: Mail, href: "/contact" },
  ];

  const socialLinks = [
    { icon: FaXTwitter, href: "https://x.com/eekka117", label: "X" },
    { icon: FaLinkedin, href: "https://linkedin.com/", label: "LinkedIn" },
    { icon: FaGithub, href: "https://github.com/eekka117", label: "GitHub" },
  ];

  return (
    <>
      <div className="md:hidden fixed top-0 left-0 right-0 bg-neutral-900 z-50 flex items-center justify-between px-4 py-2 border-b border-neutral-800">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-md hover:bg-neutral-800 transition"
        >
          <Menu className="text-neutral-200" />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden fixed top-14 left-0 right-0 bg-neutral-900 z-40 flex flex-col px-4 py-4 space-y-2 border-b border-neutral-800">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-neutral-800 transition ${
                  isActive ? "bg-neutral-800 font-semibold" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </Link>
            );
          })}
        </div>
      )}

      {!desktopMenuOpen && (
        <button
          onClick={() => setDesktopMenuOpen(true)}
          className="hidden md:flex fixed top-4 left-4 z-50 p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 transition cursor-pointer"
        >
          <Menu className="w-6 h-6 text-neutral-200" />
        </button>
      )}

      {desktopMenuOpen && (
        <aside className="hidden md:flex h-screen w-64 bg-neutral-900 text-neutral-200 flex-col px-4 py-6 border-r border-neutral-800">
          <div className="flex flex-col items-center gap-3 mb-10 relative">
            <Menu
              className="absolute right-0 cursor-pointer"
              onClick={() => setDesktopMenuOpen(false)}
            />
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              <Image
                src={assets.profile_picture}
                alt="Profile picture"
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <div className="font-semibold">Eerik Ojala</div>
              <div className="text-sm text-neutral-400">ICT Student</div>
            </div>
          </div>

          <nav className="flex flex-col gap-2 text-sm">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-3 rounded-md hover:bg-neutral-800 w-full transition ${
                    isActive ? "bg-neutral-800 font-semibold" : ""
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto text-center space-y-3">
            <div className="text-xs text-neutral-500">© {year} Eerik Ojala</div>
            <div className="flex gap-4 justify-center">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-200 hover:bg-neutral-800 p-3 rounded-full transition-colors duration-200 text-xl"
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </aside>
      )}
    </>
  );
};

export default Navbar;
