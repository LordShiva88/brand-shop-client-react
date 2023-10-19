import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Rating from "react-rating";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
const CardDetails = ({ product }) => {
  const { name, image, brand, price, discount, rating, title, _id } = product;

  const discountPrice = (price / 100) * discount;
  const afterDiscount = (price - discountPrice).toFixed(2);

  return (
    <div data-aos="zoom-in" className="border shadow-xl">
      <div className="relative">
        {discount === 0 ? (
          ""
        ) : (
          <span className="font-black bg-red-400 px-3 absolute text-white py-1">
            -{discount}% OFF
          </span>
        )}
        <div className="flex justify-center ">
          <img src={image} className="w-auto h-60  p-5" />{" "}
        </div>
      </div>

      <div className="card-body h-56 mb-2">
        <h2 className="card-title">{name}</h2>
        <h2 className="card-title text-red-300">{brand}</h2>
        <div className="flex gap-2">
          <Rating
            initialRating={rating}
            readonly
            emptySymbol={
              <FaStarHalfAlt className="text-red-400"></FaStarHalfAlt>
            }
            fullSymbol={<FaStar className="text-red-400"></FaStar>}
          />
          <p>{rating}</p>
        </div>
        <div className="flex items-center gap-1">
          <p>{title}</p>
        </div>
        <div className="flex gap-2 items-baseline">
          {discount === 0 ? (
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${price}
            </span>
          ) : (
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold text-gray-900 dark:text-white ">
                ${afterDiscount}
              </span>
              <span className="font-bold text-gray-900 dark:text-white line-through">
                ${price}
              </span>
            </div>
          )}
        </div>
      </div>
      <hr />
      <div className="flex justify-between px-6 py-5">
        <Link to={`/details/${_id}`}>
          <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase px-4">
            Details
          </button>
        </Link>
        <Link to={`/update/${_id}`}>
          <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase px-4">
            Update
          </button>
        </Link>
      </div>
    </div>
  );
};
CardDetails.propTypes = {
  product: PropTypes.object,
};
export default CardDetails;
