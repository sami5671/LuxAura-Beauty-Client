import { Link } from "react-router-dom";

const BrandCard = ({ cards }) => {
  // Destructure the object
  const { brandname, brandimage, id } = cards;

  return (
    <Link to={`/brandProduct/${id}`}>
      <div className="card rounded-xl shadow-2xl p-4 flex flex-col items-center font-rancho">
        <img
          src={brandimage}
          alt="product"
          className="h-[200px] w-[300px] rounded-xl mb-4"
        />
        <div className="text-center">
          <h2 className="text-2xl font-bold">{brandname}</h2>
        </div>
      </div>
    </Link>
  );
};

export default BrandCard;
