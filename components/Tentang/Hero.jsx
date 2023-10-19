import Image from "next/image";

export default function Hero({ data }) {
  return (
    <div className="relative h-96">
      <div className="absolute -z-10 h-96 w-full">
        <Image
          src={data.bgHero}
          className="h-full w-full object-cover object-center"
          unoptimized
        />
      </div>

      <div className="flex h-full items-center justify-center pt-20">
        <div>
          <h1 className="text-center text-xl font-extrabold text-white">
            {data.titleMenu}
          </h1>
          <div className="h mx-auto mt-4 h-1.5 w-20 rounded-lg bg-white"></div>
        </div>
      </div>
    </div>
  );
}
