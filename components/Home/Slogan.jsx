import calculatorBg from "@/public/images/calculator-bg.jpg";
import Image from "next/image";

export default function Slogan() {
  return (
    <section className="relative">
      <div className="absolute -z-10 h-full w-full">
        <Image
          src={calculatorBg}
          className="h-full w-full object-cover object-center"
          unoptimized
        />
      </div>

      <div className="container mx-auto px-3 py-20">
        <p className="px-3 text-center text-sm leading-loose text-white">
          "Hak atas informasi yang terbuka menjadi pembuka jalan bagi
          terjaminnya pelaksanaan hak-hak asasi lainnya, seperti hak atas
          pendidikan, hak untuk hidup sejahtera, hak untuk hidup aman, dan hak
          warga negara lainnya."
        </p>
        <p className="mx-auto mt-7 text-center text-xs text-white">
          Kominfo RI
        </p>
      </div>
    </section>
  );
}
