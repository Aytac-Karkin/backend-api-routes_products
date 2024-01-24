import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function theProduct() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`, fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <h1>{data.name}</h1>
      <p>
        {data.price} {data.currency}
      </p>
      <p>{data.description}</p>
      <p>{data.category}</p>
    </>
  );
}
