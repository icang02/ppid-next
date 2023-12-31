"use client";

import Link from "next/link";
import Image from "next/image";

import { useEffect, useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import logo from "@/public/img/ppid.png";

export default function Navbar() {
  const [menuClick, setMenuClick] = useState(false);
  const [listMenuClick, setListMenuClick] = useState(false);
  const [listMenuClick2, setListMenuClick2] = useState(false);
  const [listMenuClick3, setListMenuClick3] = useState(false);
  const [listMenuClick4, setListMenuClick4] = useState(false);

  const [isSticky, setIsSticky] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
    setMenuClick(false);
    setListMenuClick(false);
    setListMenuClick2(false);
    setListMenuClick3(false);
    setListMenuClick4(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 155) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Membersihkan event listener ketika komponen unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${isSticky ? "fixed" : "absolute"} z-50 w-full bg-primary`}
    >
      <div
        className={`${
          isSticky ? "px-3 py-2.5" : "px-3 py-3"
        } container mx-auto flex items-center justify-between  transition-all duration-500`}
      >
        <Link href="/" onClick={handleScrollToTop}>
          <Image src={logo} width={isSticky ? "135" : "170"} alt="image" />
        </Link>
        <ul
          className={`${menuClick ? "block" : "hidden"} ${
            isSticky ? "top-[69px]" : "top-[84px]"
          } absolute left-0 right-0 mx-3 bg-white text-sm font-normal shadow`}
        >
          <li className="flex flex-col text-center">
            <Link
              onClick={handleScrollToTop}
              href="/"
              className="border py-3.5 tracking-widest hover:bg-[#eeeeee] hover:text-acsent"
            >
              Beranda
            </Link>

            <button
              onClick={() => setListMenuClick(!listMenuClick)}
              className="relative border py-3.5 tracking-widest hover:bg-[#eeeeee] hover:text-acsent"
            >
              Tentang
              <span className="absolute right-5 top-3.5">
                <IoChevronDown />
              </span>
            </button>
            <div
              className={`${
                listMenuClick ? "flex" : "hidden"
              } flex-col text-center transition-all duration-500`}
            >
              <Link
                onClick={handleScrollToTop}
                href="/tentang/profil"
                className="border py-3.5 tracking-wide hover:bg-[#eeeeee] hover:text-acsent"
              >
                Profil
              </Link>
              <Link
                onClick={handleScrollToTop}
                href="/tentang/visi-misi"
                className="border py-3.5 tracking-wide hover:bg-[#eeeeee] hover:text-acsent"
              >
                Visi & Misi
              </Link>
              <Link
                onClick={handleScrollToTop}
                href="/tentang/tugas-fungsi"
                className="border py-3.5 tracking-wide hover:bg-[#eeeeee] hover:text-acsent"
              >
                Tugas & Fungsi
              </Link>
              <Link
                onClick={handleScrollToTop}
                href="/tentang/struktur-ppid"
                className="border py-3.5 tracking-wide hover:bg-[#eeeeee] hover:text-acsent"
              >
                Struktur PPID
              </Link>
            </div>

            <button
              onClick={() => setListMenuClick2(!listMenuClick2)}
              className="relative border py-3.5 tracking-widest hover:bg-[#eeeeee] hover:text-acsent"
            >
              Informasi Publik
              <span className="absolute right-5 top-3.5">
                <IoChevronDown />
              </span>
            </button>
            <div
              className={`${
                listMenuClick2 ? "flex" : "hidden"
              } flex-col text-center transition-all duration-500`}
            >
              <Link
                onClick={handleScrollToTop}
                href="/informasi-publik/berkala"
                className="border py-3.5 tracking-wide hover:bg-[#eeeeee] hover:text-acsent"
              >
                Informasi Berkala
              </Link>
              <Link
                onClick={handleScrollToTop}
                href="/informasi-publik/setiap-saat"
                className="border py-3.5 tracking-wide hover:bg-[#eeeeee] hover:text-acsent"
              >
                Informasi Tersedia Setiap Saat
              </Link>
              <Link
                onClick={handleScrollToTop}
                href="/informasi-publik/serta-merta"
                className="border py-3.5 tracking-wide hover:bg-[#eeeeee] hover:text-acsent"
              >
                Informasi Serta Merta
              </Link>
              <Link
                onClick={handleScrollToTop}
                href="/informasi-publik/dikecualikan"
                className="border py-3.5 tracking-wide hover:bg-[#eeeeee] hover:text-acsent"
              >
                Informasi Dikecualikan
              </Link>
            </div>

            <button
              onClick={() => setListMenuClick3(!listMenuClick3)}
              className="relative border py-3.5 tracking-widest hover:bg-[#eeeeee] hover:text-acsent"
            >
              Formulir
              <span className="absolute right-5 top-3.5">
                <IoChevronDown />
              </span>
            </button>
            <div
              className={`${
                listMenuClick3 ? "flex" : "hidden"
              } flex-col text-center transition-all duration-500`}
            >
              <Link
                onClick={handleScrollToTop}
                href="/formulir/permohonan-informasi-publik"
                className="border py-3.5 tracking-wide hover:bg-[#eeeeee] hover:text-acsent"
              >
                Permohonan Informasi Publik
              </Link>
              <Link
                onClick={handleScrollToTop}
                href="/formulir/keberatan-layanan-informasi-publik"
                className="border py-3.5 tracking-wide hover:bg-[#eeeeee] hover:text-acsent"
              >
                Keberatan Layanan Informasi Publik
              </Link>
              <Link
                onClick={handleScrollToTop}
                href="/formulir/penyelesaian-sengketa-informasi-publik"
                className="border py-3.5 tracking-wide hover:bg-[#eeeeee] hover:text-acsent"
              >
                Penyelesaian Sengketa Informasi Publik
              </Link>
            </div>

            <button
              onClick={() => setListMenuClick4(!listMenuClick4)}
              className="relative border py-3.5 tracking-widest hover:bg-[#eeeeee] hover:text-acsent"
            >
              Laporan
              <span className="absolute right-5 top-3.5">
                <IoChevronDown />
              </span>
            </button>
            <div
              className={`${
                listMenuClick4 ? "flex" : "hidden"
              } flex-col text-center transition-all duration-500`}
            >
              <Link
                onClick={handleScrollToTop}
                href="/profil"
                className="border py-3.5 tracking-wide hover:bg-[#eeeeee] hover:text-acsent"
              >
                Laporan Akses Informasi Publik
              </Link>
              <Link
                onClick={handleScrollToTop}
                href="/visi-misi"
                className="border py-3.5 tracking-wide hover:bg-[#eeeeee] hover:text-acsent"
              >
                Laporan Layanan Informasi Publik
              </Link>
            </div>

            <a
              onClick={handleScrollToTop}
              href="#"
              className="border py-3.5 tracking-widest hover:bg-[#eeeeee] hover:text-acsent"
            >
              Regulasi
            </a>
          </li>
        </ul>
        <div
          className={`${
            isSticky ? "text-3xl" : "text-4xl"
          } cursor-pointer pr-2 text-white transition-all duration-300`}
          onClick={() => setMenuClick(!menuClick)}
        >
          {menuClick ? <IoCloseOutline /> : <IoMenuOutline />}
        </div>
      </div>
    </nav>
  );
}
