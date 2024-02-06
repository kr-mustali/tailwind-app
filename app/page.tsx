'use client'
import Camp from "@/components/Camp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Image from "next/image";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <Hero />
      <Camp />
      <Features />
    </ThemeProvider>
  );
}
