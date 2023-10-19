"use client";

import bgHero from "@/public/img/rektorat2.png";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Hero from "@/components/Tentang/Hero";
import Content from "@/components/Tentang/Content";

export default function Profil() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentPath = usePathname();
  const data = {
    bgHero,
    titleMenu: "Profil",
    title: "Profil Pejabat Pengelola Informasi dan Dokumentasi (PPID)",
    content:
      "<p>PPID adalah kepanjangan dari Pejabat Pengelola Informasi dan Dokumentasi, yang berfungsi sebagai pengelola dan penyampai dokumen yang dimiliki oleh Badan Publik sesuai dengan amanat UU 14/2008 tentang Keterbukaan Informasi Publik. Dengan keberadaan PPID maka masyarakat yang akan menyampaikan permohonan informasi lebih mudah dan tidak berbelit karena dilayani lewat satu pintu.</p><p>Pejabat Pengelola Informasi dan Dokumentasi (PPID) adalah pejabat yang bertanggung jawab di bidang penyimpanan, pendokumentasian, penyediaan dan/ atau pelayanan informasi di badan publik.</p>",
    path: currentPath,
  };

  return (
    <>
      <Hero data={data} />
      <Content data={data} />
    </>
  );
}
