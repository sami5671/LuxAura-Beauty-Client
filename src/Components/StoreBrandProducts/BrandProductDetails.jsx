import { useLoaderData } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Swal from "sweetalert2";

const BrandProductDetails = () => {
  // =================================================================
  const product = useLoaderData();
  const { _id, photo, name, brand, type, price, description, rating } = product;

  // =================================================================

  //  =================================================================
  const handleOnCart = () => {
    const addToCart = {
      photo,
      name,
      brand,
      type,
      price,
      description,
      rating,
    };
    // console.log(addToCart);
    fetch(
      "https://luxaura-beauty-server-8k1lzmadi-samis-projects-aa838460.vercel.app/cart",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(addToCart),
      }
    )
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
  return (
    <section className="container mx-auto font-rancho">
      <div className="flex flex-col lg:flex-row px-6">
        <div>
          <img
            className="w-full h-[250px] lg:w-[900px] lg:h-[300px]"
            src={photo}
            alt=""
          />
        </div>

        <div className="border text-center px-2 py-12">
          <h1 className="text-3xl">
            Product Name: <span className="text-2xl">{name}</span>
          </h1>
          <h1>
            <span>Product Brand: </span>
            {brand}
          </h1>
          <h1>
            <span>Product Price: </span>
            {price}
          </h1>
          <p>About: {description}</p>

          <button
            onClick={handleOnCart}
            className="btn btn-block bg-pink-400 text-white hover:text-black"
          >
            <FaShoppingCart></FaShoppingCart>Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandProductDetails;
