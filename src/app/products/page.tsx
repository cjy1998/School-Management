import Link from "next/link";

export default function Products() {
  const productIds = [1, 2, 3, 8, 7, 9];
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>Product List</h1>
      {productIds.map((item) => {
        return (
          <h2 key={item}>
            <Link href={`products/${item}`}>Product {item}</Link>
          </h2>
        );
      })}
    </div>
  );
}
