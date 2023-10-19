import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";

const AllProducts = () => {
  // for fetching data in the home page
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("brand.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // =================================================================
  return (
    <>
      <section className="p-4 md:p-16 mx-auto mt-12 lg:mt-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((cards) => (
            <BrandCard key={cards.id} cards={cards}></BrandCard>
          ))}
        </div>
      </section>
    </>
  );
};

export default AllProducts;
