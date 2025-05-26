"use client";

import Link from "next/link";
import ProductCard from "../../components/product-card";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

const products = [
  { name: "Chitato", price: 12000, category: "snack" },
  { name: "Taro", price: 9500, category: "snack" },
  { name: "Qtela", price: 10000, category: "snack" },
  { name: "Tic Tac", price: 8500, category: "snack" },
  { name: "Oreo", price: 8000, category: "snack" },
  { name: "Teh Pucuk", price: 6000, category: "minuman" },
  { name: "Aqua", price: 4000, category: "minuman" },
  { name: "Floridina", price: 5000, category: "minuman" },
  { name: "Indomilk", price: 7000, category: "minuman" },
  { name: "Good Day", price: 6500, category: "minuman" },
  { name: "Lifebuoy", price: 9000, category: "sabun" },
  { name: "Dettol", price: 11000, category: "sabun" },
  { name: "Giv", price: 5000, category: "sabun" },
  { name: "Nuvo", price: 8500, category: "sabun" },
  { name: "Clear", price: 12000, category: "shampoo" },
  { name: "Pantene", price: 13000, category: "shampoo" },
  { name: "Sunsilk", price: 11500, category: "shampoo" },
  { name: "Head & Shoulders", price: 14000, category: "shampoo" },
  { name: "Pepsodent", price: 8000, category: "pasta-gigi" },
  { name: "Ciptadent", price: 7000, category: "pasta-gigi" },
  { name: "Formula", price: 6500, category: "pasta-gigi" },
  { name: "Sensodyne", price: 18000, category: "pasta-gigi" },
  { name: "Rexona", price: 14000, category: "deodorant" },
  { name: "Nivea", price: 13500, category: "deodorant" },
  { name: "Gatsby", price: 12000, category: "deodorant" },
  { name: "Marina", price: 9500, category: "deodorant" },
  { name: "Bodrex", price: 5000, category: "obat" },
  { name: "Paramex", price: 4500, category: "obat" },
  { name: "Antangin", price: 3000, category: "obat" },
  { name: "OBH Combi", price: 12000, category: "obat" },
];

export default function Product() {
  const [spending, setSpending] = useState(0);
  const searchParams = useSearchParams();

  const budgetParam = searchParams.get("budget");
  const categoryParam = searchParams.get("category");

  let budget = 0;
  if (budgetParam) {
    budget = parseInt(budgetParam);
  }

  const change = budget - spending;

  const categories = categoryParam?.split(",");

  const filteredProducts = products.filter(
    (product) =>
      categories?.includes(product.category) && product.price <= budget
  );

  return (
    <>
      <nav className="px-[32px] py-[24px] absolute top-0 z-10">
        <Link href={"/"} className="font-bold text-[24px] md:text-[32px]">
          Scan Cuan
        </Link>
      </nav>

      <main className="relative min-h-screen flex flex-col items-center gap-[32px] pt-[100px] px-[32px] pb-[64px] bg-[url('/background.jpg')] bg-contain">
        <div className="sticky top-10 hidden sm:block border-2 border-[#FDC937] bg-[#fff7df] rounded-lg p-8">
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

        <div className="fixed bottom-0 border-2 border-[#FDC937] bg-[#fff7df] w-full p-5 sm:hidden">
          <p>
            Anggaran Anda: <span className="font-bold">Rp{budget}</span>
          </p>
          <p>
            Pengeluaran Anda: <span className="font-bold">Rp{spending}</span>
          </p>
          <p>
            Sisa: <span className="font-bold">Rp{change}</span>
          </p>
          <div className="flex gap-[8px] mt-2">
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
          {filteredProducts.map((product, index) => {
            return (
              <ProductCard
                key={index}
                name={product.name}
                price={product.price}
                category={product.category}
                onClick={() => setSpending((prev) => prev + product.price)}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
