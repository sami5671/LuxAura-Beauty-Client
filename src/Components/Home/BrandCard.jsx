import { Link } from "react-router-dom";

const BrandCard = ({ cards }) => {
  //=============== destructure the object  ==========================
  const { brandname, brandimage } = cards;

  // =================================================================
  return (
    <Link to="">
      <div className="card bg-base-100 shadow-xl">
        <figure className="">
          <img
            src={brandimage}
            alt="product"
            className="h-[200px] w-[300px] rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{brandname}</h2>
        </div>
      </div>
    </Link>
  );
};

export default BrandCard;
