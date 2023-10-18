import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const CardDetails = ({ product }) => {
  const {
    name,
    image,
    brand,
    price,
    discount,
    rating,
    title,
    _id,
  } = product;
  return (
    <div className="border shadow-xl" data-aos="zoom-in">

        <div className="flex justify-center ">
          <img src={image} className="w-auto h-60  p-5" />
        </div>
        <small className="bg-[#eb347a] text-center px-5 py-2 text-white font-bold">
          {brand}
        </small>

      <div className="card-body space-y-3">
        <div className="space-y-3">
          <h2 className="card-title">{name}</h2>
          <p>Price: {price}</p>
          <p>Discount: {discount}</p>
          <div className="flex items-center gap-1">
            <p>{title}</p>
          </div>
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
