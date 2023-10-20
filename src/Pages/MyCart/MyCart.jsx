import { Link, useLoaderData } from "react-router-dom";
import Cart from "../../Components/Cart/Cart";
import { useState } from "react";
import { useEffect } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const MyCart = () => {
  const data = useLoaderData();
  const [filterCartItem, setFilterCartItem] = useState([]);
  const itemId = JSON.parse(localStorage.getItem("cart"));
  const [ls, setLs] = useState(itemId);

  useEffect(() => {
    const filterCart = data.filter((item) => ls.includes(item._id));
    setFilterCartItem(filterCart);
  }, [data, ls]);

  return (
    <div className=" py-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {filterCartItem.length === 0 ? (
            <div className="flex justify-center items-center mt-48">
              <div className="flex-col space-y-2">
                <h1 className="text-2xl">Oops! Your Cart is Empty</h1>
                <p>Add some items to your cart to.</p>
                <Link to={"/"} className="text-red-500 flex items-center gap-3">
                  <FaArrowAltCircleLeft></FaArrowAltCircleLeft> Continue
                  shopping
                </Link>
              </div>
            </div>
          ) : (
            filterCartItem.map((item) => (
              <Cart key={item._id} setLs={setLs} item={item}></Cart>
            ))
          )}
        </div>

        <div className="border p-5 h-[600px] rounded-sm">
          <h1 className="font-semibold text-2xl border-b pb-8">
            Order Summary
          </h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">
              Items {data.length}
            </span>
            <span className="font-semibold text-sm">590$</span>
          </div>
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">
              Shipping
            </label>
            <select className="block p-2 text-gray-600 w-full text-sm">
              <option>Regular shipping - $10.00</option>
              <option>Standard shipping - $150.00</option>
              <option>Premium shipping - $20.00</option>
            </select>
          </div>
          <div className="py-10">
            <label
              htmlFor="promo"
              className="font-semibold inline-block mb-3 text-sm uppercase"
            >
              Promo Code
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              className="p-2 text-sm w-full"
              readOnly
            />
          </div>
          <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
            Apply
          </button>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>$600</span>
            </div>
            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
