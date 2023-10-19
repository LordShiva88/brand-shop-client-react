import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Details = () => {
  const product = useLoaderData();
  const handleAddItem = (product) => {
    fetch("http://localhost:5000/storedItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Item Already Added",
          });
        }
      });
  };

  return (
    <section className="overflow-hidden md:p-0 p-4 bg-white py-11 dark:bg-gray-800">
      <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 md:w-1/2 ">
            <div className="sticky top-0 z-50 overflow-hidden ">
              <div className="relative mb-2 lg:mb-10 lg:h-2/4 ">
                <img
                  src={product.image}
                  alt=""
                  className="object-cover w-full lg:h-full "
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 ">
            <div className="lg:pl-20">
              <div className="mb-8">
                <span className="text-lg font-medium text-rose-500 dark:text-rose-200">
                  New
                </span>
                <h2 className="max-w-xl mt-2 mb-2 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                  {product.name}
                </h2>
                {/* rating */}
                <div className="flex gap-2">
                  <Rating
                    initialRating={product.rating}
                    readonly
                    emptySymbol={
                      <FaStarHalfAlt className="text-red-400"></FaStarHalfAlt>
                    }
                    fullSymbol={<FaStar className="text-red-400"></FaStar>}
                  />
                  <p>{product.rating}</p>
                </div>
                <div className="flex items-center mb-6"></div>
                {/* Description */}
                <p className="max-w-md mb-2 text-gray-700 dark:text-gray-400">
                  {product.short_description}
                </p>

                <p className="max-w-md mb-2 text-gray-700 dark:text-gray-400 text-2xl font-bold">
                  Specification
                </p>
                <div className=" bg-red-500 w-24 h-1 mb-5"></div>
                <div className="md:flex gap-5">
                  <div>
                    <p className="max-w-md mb-2 text-gray-700 dark:text-gray-400">
                      {product.features.map((fea, idx) => (
                        <li key={idx}>{fea}</li>
                      ))}
                    </p>
                  </div>
                  <div className="">
                    <p className="max-w-md mb-2 text-gray-700 dark:text-gray-400">
                      {product.features.map((fea, idx) => (
                        <li key={idx}>{fea}</li>
                      ))}
                    </p>
                  </div>
                </div>

                <p className="inline-block my-4 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                  <span>Price: ${product.price}</span>
                </p>
                <p className="text-green-600 dark:text-green-300 ">
                  7 in stock
                </p>
              </div>

              <div className="flex flex-wrap items-center -mx-4 ">
                <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                  <button
                    onClick={() => handleAddItem(product)}
                    className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
