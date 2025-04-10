type ProductCardType = {
  name: string;
  price: number;
  onClick?: () => void;
};

export default function ProductCard({ name, price, onClick }: ProductCardType) {
  return (
    <div className="shadow-lg rounded-lg p-5 w-full sm:min-w-[200px] bg-white">
      <p className="text-[18px] font-semibold">{name}</p>
      <p className="text-gray-700">Rp{price}</p>
      <button
        onClick={onClick}
        className="bg-[#FDC937] py-1 px-2 text-black rounded-lg font-bold mt-[16px] w-full"
      >
        Beli
      </button>
    </div>
  );
}
