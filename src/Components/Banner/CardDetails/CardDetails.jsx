import { FaTicketAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const CardDetails = ({product}) => {
  const {name,image,brand,price,discount,rating,title,short_description,features,specifications, _id}=product;
  return (
    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <a href="#!">
        <img
          className="rounded-t-lg"
          src={image}
          alt=""
        />
      </a>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {name}
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          {discount}
          
        </p>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          {title}
        </p>
        <Link to={`/details/${_id}`}>
        <button className="btn">Details</button>
        </Link>
        <button className="btn">Update</button>
      </div>
    </div>
  );
};

export default CardDetails;
