import Swal from "sweetalert2";
const AddProduct = () => {
  // =======================handle the add product==========================================
  const handleProduct = (event) => {
    event.preventDefault();

    const form = event.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;

    const newProduct = {
      photo,
      name,
      brand,
      type,
      price,
      description,
      rating,
    };
    console.log(newProduct);

    // send data to server
    fetch("http://localhost:5000/brands", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Success!",
          text: "Added successfully!!!",
          icon: "success",
          confirmButtonText: "Cool",
        });
      });
  };
  // =================================================================
  const bgStyle = {
    backgroundImage: `url('https://imgur.com/Pt3aVTv.jpg')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
  };

  return (
    <>
      <section className="container mx-auto mt-12 font-rancho">
        <div style={bgStyle} className="bg-[#fef1ff] p-4 md:p-24">
          <h2 className="text-5xl font-extrabold font-rancho text-black text-center mb-4">
            Add Product
          </h2>
          <form onSubmit={handleProduct}>
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
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
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
                  />
                </label>
              </div>
            </div>
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Product Type</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="type"
                    placeholder="Product Type"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 mt-4 md:mt-0">
                <label className="label">
                  <span className="label-text">Product Price</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="price"
                    placeholder="Price"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Short Description</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    className="input input-bordered w-full"
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
                    placeholder="Rating"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            <input
              type="submit"
              value="Add the Product"
              className="btn btn-block bg-pink-400 text-white hover:text-black"
            />
          </form>
        </div>
      </section>
    </>
  );
};

export default AddProduct;
