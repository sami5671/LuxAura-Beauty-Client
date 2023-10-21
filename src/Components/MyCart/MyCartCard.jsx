import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
const MyCartCard = ({ myCart, carts, setCarts }) => {
  // destructure =================================
  const { _id, photo, name, brand, type, price, description, rating } = myCart;

  // =================================================
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = carts.filter(
                (parameter) => parameter._id !== _id
              );
              setCarts(remaining);
            }
          });
      }
    });
  };
  // =================================================================
  return (
    <section className="container mx-auto font-rancho">
      <div className="flex flex-col lg:flex-row gap-12 my-6 border items-center p-6 rounded-lg shadow-md">
        <div>
          <img
            className="mask mask-squircle w-12 h-12"
            src={photo}
            alt={name}
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-24 items-center">
          <p className="text-lg font-bold">Product Name: {name}</p>
          <p className="text-lg font-bold">Brand: {brand}</p>
          <p className="text-lg font-bold">Price: {price}</p>
          <button
            onClick={() => handleDelete(_id)}
            className="btn bg-red-500 mt-4 text-white hover:text-red-500 lg:mt-0"
          >
            <AiFillDelete></AiFillDelete>
            Delete
          </button>
        </div>
      </div>
    </section>
  );
};

export default MyCartCard;
