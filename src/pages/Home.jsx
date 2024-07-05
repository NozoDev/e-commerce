import { useFetch } from "../hooks/useFetch";

export const Home = () => {
  const { data, isLoading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );
  console.log(data);
  return (
    <div>
      <div className="md:grid md:grid-cols-5 sm:flex sm:flex-col gap-4 p-4 ">
        {data.map(({ id, title, image, price, category }) => (
          <div className="border-2 border-blue-400 mt-10 px-4" key={id}>
            <h2>{title}</h2>
            <img src={image} alt={image} />
            <p>{price}</p>
            <p>{category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
