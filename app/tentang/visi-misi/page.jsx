"use client";

import bgHero from "@/public/img/rektorat2.png";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Hero from "@/components/Tentang/Hero";
import Content from "@/components/Tentang/Content";

export default function VisiMisi() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentPath = usePathname();
  const data = {
    bgHero,
    titleMenu: "Visi & Misi",
    title: "Visi dan Misi",
    content:
      "<h6>Visi PPID</h6><p>Menjadi penyedia layanan informasi publik yang profesional, transparan, dan akuntabel sesuai dengan ketentuan peraturan perundang-undangan.</p><h6>Misi PPID</h6><ol><li>Meningkatkan tata kelola informasi publik.</li><li>Meningkatkan sumber daya manusia di bidang pelayanan informasi publik.</li><li>Mengembangkan kualitas sistem informasi pelayanan publik.</li></ol>",
    path: currentPath,
  };

  return (
    <>
      <Hero data={data} />
      <Content data={data} />
    </>
  );
}
