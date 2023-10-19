import Image from "next/image";
import heroImg from "../../public/home-img.png";

export default function Hero() {
  return (
    <section className={`relative`}>
      <div className="absolute -z-10 h-full w-full">
        <Image
          src={heroImg}
          className="h-[100.5vh] w-full object-cover object-center"
          alt="image"
          unoptimized
        />
      </div>

      <div className="container mx-auto flex h-[100.5vh] items-center justify-center pt-10 text-center">
        <div className="text-white">
          <h1 className="max-w-xs text-2xl font-black leading-9">
            <span className="text-acsent">Selamat</span> Datang di PPID
            Universitas <span className="text-acsent">Halu Oleo</span>
          </h1>
          <div className="mx-auto my-10 mt-7 h-1 w-20 bg-white"></div>
          <p className="hidden">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto,
            aspernatur!
          </p>
          <a
            href="#jenisInformasi"
            className="rounded bg-acsent px-5 py-2.5 text-sm font-semibold"
          >
            Selengkapnya
          </a>
        </div>
      </div>
    </section>
  );
}
