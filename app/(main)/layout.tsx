import Navbar from "./_components/navbar";
import { Inter } from "next/font/google";

import "../globals.css";

const font = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Chapln",
  description: "A social media for movie geeks",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.className}>
      <body>
        <div className="main">
          <Navbar />
          <div className="bg-background grow rounded-tl-[20px] overflow-y-hidden">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
