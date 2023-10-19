"use client";

import bgHero from "@/public/img/tugu.png";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Hero from "@/components/Tentang/Hero";
import Content from "@/components/Tentang/Content";

export default function SetiapSaat() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentPath = usePathname();
  const data = {
    bgHero,
    titleMenu: "Informasi Tersedia Setiap Saat",
    title: "Informasi Tersedia Setiap Saat",
    content:
      "<p>Informasi Tersedia Setiap Saat adalah informasi yang siap tersedia untuk bisa langsung diberikan kepada Pemohon Informasi Publik ketika terdapat permohonan mengajukan atas Informasi Publik tersebut.</p>",
    path: currentPath,
  };

  return (
    <>
      <Hero data={data} />
      <Content data={data} />
    </>
  );
}
