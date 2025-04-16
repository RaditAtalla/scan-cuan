"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRightCircle } from "react-feather";

export default function Home() {
  const [budget, setBudget] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const router = useRouter();

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setSelectedCategories((prev) =>
      checked ? [...prev, value] : prev.filter((v) => v !== value)
    );
  };

  const handleSearch = () => {
    if (!budget.trim()) return;

    const isNumber = /^\d+(\.\d+)?$/.test(budget);

    if (!isNumber) {
      alert("Harap masukkan angka!");
      return;
    }

    if (selectedCategories.length === 0) {
      return alert("Harap pilih minimal 1 kategori!");
    }

    const categories = selectedCategories.join(",");

    router.push(`/product?budget=${budget}&category=${categories}`);
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
        <form
          onSubmit={handleSearch}
          className="flex flex-col gap-[16px] sm:items-center mt-[24px]"
        >
          <div className="flex items-center gap-[8px] border-2 border-gray-300 rounded-lg pl-[16px] w-full sm:w-[300px]">
            <p className="font-bold text-gray-500">Rp</p>
            <input
              type="text"
              className="focus:outline-none py-[8px] font-medium text-[16px] md:text-[24px]"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-2">
            <div className="flex items-center gap-[8px]">
              <input
                type="checkbox"
                name="snack"
                id="snack"
                value="snack"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="snack">snack</label>
            </div>
            <div className="flex items-center gap-[8px]">
              <input
                type="checkbox"
                name="minuman"
                id="minuman"
                value="minuman"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="minuman">minuman</label>
            </div>
            <div className="flex items-center gap-[8px]">
              <input
                type="checkbox"
                name="sabun"
                id="sabun"
                value="sabun"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="sabun">sabun</label>
            </div>
            <div className="flex items-center gap-[8px]">
              <input
                type="checkbox"
                name="shampoo"
                id="shampoo"
                value="shampoo"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="shampoo">shampoo</label>
            </div>
            <div className="flex items-center gap-[8px]">
              <input
                type="checkbox"
                name="pasta-gigi"
                id="pasta-gigi"
                value="pasta-gigi"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="pasta-gigi">pasta gigi</label>
            </div>
            <div className="flex items-center gap-[8px]">
              <input
                type="checkbox"
                name="deodorant"
                id="deodorant"
                value="deodorant"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="deodorant">deodorant</label>
            </div>
            <div className="flex items-center gap-[8px]">
              <input
                type="checkbox"
                name="obat"
                id="obat"
                value="obat"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="obat">obat</label>
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#FDC937] p-[8px] rounded-lg flex items-center justify-center w-full"
          >
            <ArrowRightCircle color="white" size={32} />
          </button>
        </form>
      </main>
    </>
  );
}
