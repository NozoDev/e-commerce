import { useFetch } from "../hooks/useFetch";

export const Home = () => {
  const { data, isLoading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );
  console.log(data);
  return <div>Home</div>;
};
