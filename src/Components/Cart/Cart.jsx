import { AiOutlineDelete } from "react-icons/ai";

const Cart = ({item, items, setItem}) => {
  const {name,image,brand,price,discount,rating,title,short_description,features,specifications, _id}=item;

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/storedItem/${id}`,{
      method: 'Delete'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const remaining = items.filter(item => item._id !== id)
      setItem(remaining)
    })
  };
  
  return (
 
      <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
        <img
          src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="product-image"
          className="w-full rounded-lg sm:w-40"
        />
        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div className="mt-5 sm:mt-0">
            <h2 className="text-lg font-bold text-gray-900">
              Nike Air Max 2019
            </h2>
            <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
          </div>
          <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
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
              <p className="text-sm">259.000 $</p>
              <button onClick={()=>handleDelete(_id)}>
                <AiOutlineDelete className="hover:text-red-500 text-2xl"></AiOutlineDelete>
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Cart;
