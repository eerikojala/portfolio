import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  preload: true,
});

export const metadata = {
  title: "Portfolio - Eerik Ojala",
  description: "Frontend portfolio made with React, Next.js and Tailwind.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        <div className="flex h-screen">
          <Navbar />
          <main className="flex-1 p-10 box-border overflow-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
