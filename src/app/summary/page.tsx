"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Summary() {
  const searchParams = useSearchParams();

  const budget = searchParams.get("anggaran");
  const spending = searchParams.get("pengeluaran");
  const change = searchParams.get("sisa");

  let sisa: number = 0;
  if (change) {
    sisa = parseInt(change);
  }

  return (
    <>
      <nav className="px-[32px] py-[24px] absolute top-0">
        <Link href={"/"} className="font-bold text-[24px] md:text-[32px]">
          Scan Cuan
        </Link>
      </nav>

      <main className="min-h-screen flex flex-col justify-center items-center bg-[url('/background.jpg')] bg-contain px-[32px]">
        <div className="border-2 border-[#FDC937] bg-[#fff7df] rounded-lg p-8">
          <p>
            Anggaran Anda: <span className="font-bold">Rp{budget}</span>
          </p>
          <p>
            Pengeluaran Anda: <span className="font-bold">Rp{spending}</span>
          </p>
          <p className="text-[24px] mt-[16px]">
            Sisa: <span className="font-bold">Rp{change}</span>
          </p>
        </div>

        <p className="mt-[16px] text-[16px] md:text-[24px] text-center">
          {sisa >= 0
            ? "Kamu belanja cerdas, tidak overbudget!"
            : "Oh tidak, kamu telah overbudget!"}
        </p>

        <Link
          href={"/"}
          className="bg-[#FDC937] py-2 px-4 text-black rounded-lg font-bold mt-[16px]"
        >
          Kembali ke Beranda
        </Link>
      </main>
    </>
  );
}
