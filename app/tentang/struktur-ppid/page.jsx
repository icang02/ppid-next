"use client";

import bgHero from "@/public/img/rektorat2.png";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Hero from "@/components/Tentang/Hero";
import Content from "@/components/Tentang/Content";

export default function StrukturPPID() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentPath = usePathname();
  const data = {
    bgHero,
    titleMenu: "Struktur PPID",
    title: "Struktur Organisasi PPID UHO",
    content:
      "<p>Struktur PPID Universitas Halu Oleo dapat dilihat pada gambar berikut.</p>",
    path: currentPath,
  };

  return (
    <>
      <Hero data={data} />
      <Content data={data} />
    </>
  );
}
