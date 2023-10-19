import BeritaUtama from "@/components/Home/BeritaUtama";
import FormulirUtama from "@/components/Home/FormulirUtama";
import Hero from "@/components/Home/Hero";
import JenisInformasi from "@/components/Home/JenisInformasi";
import Slogan from "@/components/Home/Slogan";
import Tatacara from "@/components/Home/Tatacara";

export default function Home() {
  return (
    <>
      <Hero />
      <JenisInformasi />
      <Tatacara />
      <FormulirUtama />
      <Slogan />
      <BeritaUtama />
    </>
  );
}
