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
