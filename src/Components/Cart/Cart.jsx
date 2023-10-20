import { AiOutlineDelete } from "react-icons/ai";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

const Cart = ({ item, cartItems, setCartItems }) => {
  const { name, image, brand, price, title, _id } = item;



  // Delete Data form Mongo Bd
  // const handleDelete = (id) => {
  //   console.log(id);
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       fetch(`https://shop-server-rjpbtgvy3-liton-naths-projects.vercel.app/storedItem/${id}`, {
  //         method: "Delete",
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           console.log(data);
  //           const remaining = cartItems.filter((item) => item._id !== id);
  //           setCartItems(remaining);
  //           if (data.deletedCount > 0) {
  //             Swal.fire("Deleted!", "Your file has been deleted.", "success");
  //           }
  //         });
  //     }
  //   });
  // };

  



  const handleDelete = (id) => {
    fetch(`https://shop-server-rjpbtgvy3-liton-naths-projects.vercel.app/delete/${id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  };

  return (
    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
      <div className="flex justify-center md:w-1/4">
        <img src={image} className="rounded-lg md:h-20 h-40 w-auto md:w-auto" />
      </div>
      <div className="sm:ml-4 flex w-full sm:justify-between items-center">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900">{name}</h2>
          <p className="mt-1 text-gray-700">{brand}</p>
          <p className="mt-1 text-gray-700">{title}</p>
        </div>
        <div className="space-y-5 flex-col justify-between">
          <div className="flex items-center border-gray-100">
            <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
              {" "}
              -{" "}
            </span>
            <p className="px-2">0</p>
            <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
              {" "}
              +{" "}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-sm">{price} $</p>
            <button onClick={() => handleDelete(_id)}>
              <AiOutlineDelete className="hover:text-red-500 text-2xl"></AiOutlineDelete>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  item: PropTypes.object,
  setCartItems: PropTypes.func,
  cartItems: PropTypes.array
};
export default Cart;
