import { useLoaderData } from "react-router-dom";

const Details = () => {
  const product = useLoaderData();

  return (
    <div>
      <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <a href="#!">
          <img className="rounded-t-lg" src={product.image} alt="" />
        </a>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {product.name}
          </h5>
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {product.title}
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {product.discount}
          </p>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {product.title}
          </p>
          <button className="btn">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
