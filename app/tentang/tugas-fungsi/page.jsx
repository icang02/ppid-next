"use client";

import bgHero from "@/public/img/rektorat2.png";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Hero from "@/components/Tentang/Hero";
import Content from "@/components/Tentang/Content";

export default function TugasFungsi() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentPath = usePathname();
  const data = {
    bgHero,
    titleMenu: "Tugas & Fungsi",
    title: "Tugas dan Fungsi",
    content:
      "<h6>Tugas PPID</h6><p>PPID bertugas mengkoordinasikan pengumpulan seluruh informasi publik dari setiap unit kerja di lingkungan Universitas Halu Oleo yang meliputi, informasi yang wajib disediakan dan diumumkan secara berkala; informasi yang wajib tersedia setiap saat; informasi terbuka lainnya yang diminta Pemohon Informasi Publik.</p><h6>Fungsi PPID</h6><ol><li>Penghimpunan informasi publik di lingkungan Universitas Halu Oleo.</li><li>Penyampaian informasi publik yang diperoleh dari seluruh unit kerja di lingkungan Universitas Halu Oleo.</li><li>Penyediaan dan pemberian layanan informasi publik yang bersifat terbuka.</li><li>Penyelesaian sengketa pelayanan informasi.</li></ol>",
    path: currentPath,
  };

  return (
    <>
      <Hero data={data} />
      <Content data={data} />
    </>
  );
}
