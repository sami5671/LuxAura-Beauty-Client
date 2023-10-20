const BrandProductCard = ({ product }) => {
  const { photo, name, brand, type, price, rating } = product;

  return (
    <section className="mb-4 p-4">
      <div className="bg-[#F5F4F1] rounded-lg shadow-2xl">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="w-full lg:col-span-1 p-4">
            <img src={photo} className="w-full h-auto" alt={name} />
          </div>
          <div className="w-full lg:col-span-1 p-4">
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
            <div className="flex justify-between mt-4">
              <button className="btn btn-ghost">Details</button>
              <button className="btn btn-ghost">Update</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandProductCard;
