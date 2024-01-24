import useSWR from "swr";
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function productList() {
  const { data: products, isLoading } = useSWR("/api/products", fetcher);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  if (!products) {
    return;
  }

  return (
    <ul>
      {products.map((product) => {
        return (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>
              {product.price}
              {product.currency}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
