"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRightCircle } from "react-feather";

export default function Home() {
  const [budget, setBudget] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (!budget.trim()) return;

    const isNumber = /^\d+(\.\d+)?$/.test(budget);

    if (!isNumber) {
      alert("Harap masukkan angka!");
      return;
    }

    router.push(`/product?budget=${budget}`);
  };

  return (
    <>
      <nav className="px-[32px] py-[24px] absolute top-0">
        <Link href={"/"} className="font-bold text-[24px] md:text-[32px]">
          Scan Cuan
        </Link>
      </nav>
      <main className="min-h-screen flex flex-col justify-center items-center bg-[url('/background.jpg')] bg-contain px-[32px]">
        <h1 className="text-[32px] md:text-[48px] font-semibold text-center">
          Masukkan Batas Anggaranmu!
        </h1>
        <p className="text-[16px] md:text-[24px] text-gray-500 text-center">
          Kami akan mencarikan produk sesuai dengan anggaranmu
        </p>
        <form className="flex flex-col sm:flex-row gap-[8px] sm:items-center mt-[24px]">
          <div className="flex items-center gap-[8px] border-2 border-gray-300 rounded-lg pl-[16px] w-[300px]">
            <p className="font-bold text-gray-500">Rp</p>
            <input
              type="text"
              className="focus:outline-none py-[8px] font-medium text-[16px] md:text-[24px]"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              required
            />
          </div>
          <button
            onClick={handleSearch}
            className="bg-[#FDC937] p-[8px] rounded-lg flex items-center justify-center"
          >
            <ArrowRightCircle color="white" size={32} />
          </button>
        </form>
      </main>
    </>
  );
}
