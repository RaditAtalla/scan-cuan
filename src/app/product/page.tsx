"use client";

import Link from "next/link";
import ProductCard from "../../components/product-card";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

const products = [
  {
    name: "Aqua",
    price: 5000,
  },
  {
    name: "Milo",
    price: 3000,
  },
  {
    name: "Indomie",
    price: 3000,
  },
  {
    name: "Lifebuoy",
    price: 50000,
  },
  {
    name: "Bimoli",
    price: 70000,
  },
  {
    name: "Pepsodent",
    price: 15000,
  },
  {
    name: "Rexona",
    price: 30000,
  },
  {
    name: "Kahf Face Wash",
    price: 32000,
  },
  {
    name: "Chitato",
    price: 10000,
  },
];

export default function Product() {
  const [spending, setSpending] = useState(0);
  const searchParams = useSearchParams();

  const budgetParam = searchParams.get("budget");
  let budget = 0;
  if (budgetParam) {
    budget = parseInt(budgetParam);
  }

  const change = budget - spending;

  return (
    <>
      <nav className="px-[32px] py-[24px] absolute top-0">
        <Link href={"/"} className="font-bold text-[24px] md:text-[32px]">
          Scan Cuan
        </Link>
      </nav>

      <main className="min-h-screen flex flex-col items-center gap-[32px] pt-[100px] px-[32px] pb-[64px] bg-[url('/background.jpg')] bg-contain">
        <div className="border-2 border-[#FDC937] bg-[#fff7df] rounded-lg p-8">
          <p>
            Anggaran Anda: <span className="font-bold">Rp{budget}</span>
          </p>
          <p>
            Pengeluaran Anda: <span className="font-bold">Rp{spending}</span>
          </p>
          <p>
            Sisa: <span className="font-bold">Rp{change}</span>
          </p>
          <div className="flex gap-[8px]">
            <Link
              href={`/summary?anggaran=${budget}&pengeluaran=${spending}&sisa=${change}`}
              className="bg-[#FDC937] py-1 px-2 text-black rounded-lg font-bold"
            >
              Selesai
            </Link>
          </div>
        </div>

        <h1 className="text-[32px] md:text-[48px] font-semibold text-center">
          Produk apa yang ingin anda beli?
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[16px]">
          {products.map((product, index) => {
            return (
              <ProductCard
                key={index}
                name={product.name}
                price={product.price}
                onClick={() => setSpending((prev) => prev + product.price)}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
