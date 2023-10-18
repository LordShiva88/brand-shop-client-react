import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const data = useLoaderData();
  const {
    name,
    brand,
    category,
    price,
    short_description,
    image,
    rating,
    _id,
  } = data;

  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const category = form.category.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const photo = form.photo.value;
    const updateProduct = {
      name,
      brand,
      category,
      price,
      description,
      photo,
      rating,
    };
    console.log(updateProduct);

    fetch(`http://localhost:5000/products/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          return Swal.fire({
            icon: "success",
            title: "Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="md:w-1/2 w-full mx-auto mt-20">
      <h2 className="font-bold text-3xl text-center">Update Product</h2>
      <form onSubmit={handleAddProduct} className="card-body">
        <div className="md:flex gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              placeholder="Enter coffee name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <input
              type="text"
              name="brand"
              defaultValue={brand}
              placeholder="Brand Name"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="md:flex gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <input
              type="text"
              name="category"
              defaultValue={category}
              placeholder="Type"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={price}
              placeholder="Enter coffee taste"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="md:flex gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Short description</span>
            </label>
            <input
              type="text"
              name="description"
              defaultValue={short_description}
              placeholder="Enter coffee category"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              name="rating"
              defaultValue={rating}
              placeholder="Enter coffee details"
              className="input input-bordered"
              required
            />
          </div>
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            type="text"
            name="photo"
            defaultValue={image}
            placeholder="Enter photo URL"
            className="input input-bordered"
            required
          />
        </div>
        <input
          type="submit"
          value="Added Products"
          className="bg-[#D2B48C] p-2 rounded-md text-[#331A15] cursor-pointer mt-5"
        />
      </form>
    </div>
  );
};

export default Update;
