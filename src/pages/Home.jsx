import { useFetch } from "../hooks/useFetch";

export const Home = () => {
  const { data, isLoading } = useFetch("https://fakestoreapi.com/products");
  console.log(data);
  return (
    <div>
      {isLoading && <h2>Loading...</h2>}
      <div className="md:grid md:grid-cols-5 sm:flex sm:flex-col gap-4 p-4 ">
        {data.map(({ id, title, image, price, category }) => (
          <div className="border-2 border-blue-400  px-4" key={id}>
            <div className="">
              <h2>{title}</h2>
              <img src={image} alt={image} />
              <p>{price}</p>
              <p>{category}</p>
            </div>
            <button className="border-gray-100 border w-full mt-4">
              Add to Cart<i className="bx bx-plus"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
