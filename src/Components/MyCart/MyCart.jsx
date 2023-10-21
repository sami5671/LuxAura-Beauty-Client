import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyCartCard from "./MyCartCard";

const MyCart = () => {
  const loadedCarts = useLoaderData();
  const [carts, setCarts] = useState(loadedCarts);

  return (
    <section className="container mx-auto font-rancho">
      <div>
        <h1 className="text-center text-5xl">
          You have: {carts.length} Items On your Cart
        </h1>
        {carts.map((myCart) => (
          <MyCartCard
            key={myCart._id}
            myCart={myCart}
            carts={carts}
            setCarts={setCarts}
          ></MyCartCard>
        ))}
      </div>
    </section>
  );
};

export default MyCart;
