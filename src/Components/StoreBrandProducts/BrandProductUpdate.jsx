import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const BrandProductUpdate = () => {
  // =================================================================
  const product = useLoaderData();
  const { _id, photo, name, brand, type, price, description, rating } = product;

  // =================================================================
  // =======================handle update==========================================

  const handleUpdate = (event) => {
    event.preventDefault();

    const form = event.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;

    const updateProduct = {
      photo,
      name,
      brand,
      type,
      price,
      description,
      rating,
    };
    console.log(updateProduct);
    fetch(
      `https://luxaura-beauty-server-8k1lzmadi-samis-projects-aa838460.vercel.app/brands/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Product Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool you have updated the product!!!",
          });
        }
      });
  };
  // =================================================================
  return (
    <section className="container mx-auto mt-12 font-rancho">
      <div className="bg-[#fef1ff] p-4 md:p-24">
        <h2 className="text-5xl font-extrabold font-rancho text-[#374151] text-center mb-4">
          Update Your Existing Product
        </h2>
        <form onSubmit={handleUpdate}>
          {/*-------------------------------------- */}
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="Image URL"
                  className="input input-bordered w-full lg:w-1/2"
                  defaultValue={photo}
                />
              </label>
            </div>
          </div>
          {/* --------------------------------------- */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Product Name"
                  className="input input-bordered w-full"
                  defaultValue={name}
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 mt-4 md:mt-0">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="brand"
                  placeholder="Brand Name"
                  className="input input-bordered w-full"
                  defaultValue={brand}
                />
              </label>
            </div>
          </div>
          {/* --------------------------------------- */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Product Type</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="type"
                  placeholder="product type"
                  className="input input-bordered w-full"
                  defaultValue={type}
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 mt-4 md:mt-0">
              <label className="label">
                <span className="label-text">Product Price </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  placeholder="Price"
                  className="input input-bordered w-full"
                  defaultValue={price}
                />
              </label>
            </div>
          </div>
          {/* --------------------------------------- */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Short description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="description"
                  placeholder="description"
                  className="input input-bordered w-full"
                  defaultValue={description}
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 mt-4 md:mt-0">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="rating"
                  placeholder="rating"
                  className="input input-bordered w-full"
                  defaultValue={rating}
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Update the Product"
            className="btn btn-block bg-pink-400 text-white hover:text-black"
          />
        </form>
      </div>
    </section>
  );
};

export default BrandProductUpdate;
