import { IoTodaySharp } from "react-icons/io5";
import imgBerita from "@/public/img/berita.jpg";

import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CardNews() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        const filteredData = res.data.filter((item) => item.id < 5);
        setData(filteredData);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <div className="my-10 rounded-lg shadow-lg">
      <div className="border-b-[3px] border-black bg-[#EDEDED] px-4 py-4">
        Berita & Informasi Terbaru
      </div>

      <div className="pb-3 pt-2">
        {data.map((item, i) => (
          <div key={i}>
            <div className="flex items-start gap-4 p-4" key={i}>
              <Image
                src={imgBerita}
                alt="image"
                className="aspect-[4/3] w-20 rounded object-cover"
              />
              <div>
                <Link
                  href="/"
                  className="mb-1.5 inline-block font-bold leading-5 hover:underline"
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Incidunt, temporibus!
                </Link>
                <div className="flex items-center gap-1 text-xs text-[#6C757D]">
                  <IoTodaySharp /> 2023-09-22
                </div>
              </div>
            </div>
            {i < data.length - 1 && <hr />}
          </div>
        ))}
      </div>
    </div>
  );
}
