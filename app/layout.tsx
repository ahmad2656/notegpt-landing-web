import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./layout.css";
import Navbar from "./components/Navbar";
import { ScrollProvider } from "../app/components/context/ScrollContext";
import Footer from "../app/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Note Gpt AI",
  description: "Note Gpt Landing Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning>
        <ScrollProvider>
          <div className="dashboard-container">
            <Navbar />
            <main className="main-content">{children}</main>
          </div>
        </ScrollProvider>
        <Footer />
      </body>
    </html>
  );
}
