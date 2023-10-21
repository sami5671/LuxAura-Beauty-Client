import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BrandProductCard from "./BrandProductCard";

const BrandProduct = () => {
  // =================================================
  const loadedProducts = useLoaderData();
  const [products, setProducts] = useState(loadedProducts);

  // =================================================
  return (
    <div>
      {/* <h1>Here is your branded product : {loadedProducts.length}</h1> */}

      <section className="container mx-auto">
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <img
              src="https://imgur.com/v3GqWV8.jpg"
              className="w-full lg:h-[400px]"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://imgur.com/RYbLfbp.jpg"
              className="w-full lg:h-[400px]"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="https://imgur.com/1aFNk6c.jpg"
              className="w-full lg:h-[400px]"
            />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img
              src="https://imgur.com/szSx5z6.jpg"
              className="w-full lg:h-[400px]"
            />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {products.map((product) => (
            <BrandProductCard
              key={product._id}
              product={product}
              products={products}
              setProducts={setProducts}
            ></BrandProductCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BrandProduct;
