type ProductCardProps = {
  Name: string;
  price: number;
  image: string;
};

export default function ProductCard({ Name, price, image }: ProductCardProps) {
  return (
    <>
      <div className="ml-auto mr-auto w-[50%] text-center bg-[#DD5A2D] rounded-xl text-white">
        <h3 key={Name}>{Name}</h3>
        <p key={price}>{price}</p>
      </div>
    </>
  );
}
