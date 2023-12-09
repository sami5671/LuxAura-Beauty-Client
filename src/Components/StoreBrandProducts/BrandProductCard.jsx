import { Link } from "react-router-dom";

const BrandProductCard = ({ product }) => {
  const { _id, photo, name, brand, type, price, rating } = product;

  return (
    <section className="mb-4 p-4 font-rancho">
      <div className="rounded-lg shadow-2xl" data-aos="zoom-out">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="w-full lg:col-span-1 flex justify-center items-center">
            <img
              src={photo}
              className="w-[200px] h-[190px] rounded-lg"
              alt={name}
            />
          </div>
          <div className="w-full lg:col-span-1 p-4 flex flex-col justify-between">
            <h1 className="text-xl">
              <span className="font-bold">Product Name: </span>
              <span className="text-[5C5B5B]">{name}</span>
            </h1>
            <h1 className="text-xl">
              <span className="font-bold">Brand Name: </span>
              <span className="text-[5C5B5B]">{brand}</span>
            </h1>
            <h1 className="text-xl">
              <span className="font-bold">Type: </span>
              <span className="text-[5C5B5B]">{type}</span>
            </h1>
            <h1 className="text-xl">
              <span className="font-bold">Rating: </span>
              <span className="text-[5C5B5B]">{rating}</span>
            </h1>
            <p className="text-2xl">
              Price: <span className="text-amber-900">{price}</span>
            </p>
            <div className="mt-auto">
              <Link to={`/brandProductDetails/${_id}`}>
                <button className="btn btn-ghost">Details</button>
              </Link>
              <Link to={`/brandProductUpdate/${_id}`}>
                <button className="btn btn-ghost mt-2">Update</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandProductCard;
