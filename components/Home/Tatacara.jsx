import calculatorBg from "@/public/images/calculator-bg.jpg";
import Image from "next/image";

export default function Tatacara() {
  return (
    <section className="relative">
      <div className="absolute -z-10 h-full w-full">
        <Image
          src={calculatorBg}
          className="h-full w-full object-cover object-center"
          unoptimized
        />
      </div>

      <div className="container mx-auto px-3 py-24">
        <h2 className="text-center text-2xl font-bold text-white">
          Tata Cara <span className="text-acsent">Permohonan</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 px-5">
          <div className="col-span-1">
            <img
              src="/img/1.png"
              className="w-full border-[5px] border-white"
            />
            <h6 className="mt-5 text-center font-bold text-white">
              Tata Cara Permohonan Informasi Publik
            </h6>
          </div>
          <div className="col-span-1">
            <img
              src="/img/2.png"
              className="w-full border-[5px] border-white"
            />
            <h6 className="mt-5 text-center font-bold text-white">
              Tata Cara Mengajukan Keberatan
            </h6>
          </div>
          <div className="col-span-1">
            <img
              src="/img/3.png"
              className="w-full border-[5px] border-white"
            />
            <h6 className="mt-5 text-center font-bold text-white">
              Tata Cara Pengajuan Permohonan Sengketa
            </h6>
          </div>
          <div className="col-span-1">
            <img
              src="/img/4.png"
              className="w-full border-[5px] border-white"
            />
            <h6 className="mt-5 text-center font-bold text-white">
              Prosedur Permohonan Penyelesaian Sengketa Informasi
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
}
