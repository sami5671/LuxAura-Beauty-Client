import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_krbu6f9",
        "template_bjttpzi",
        form.current,
        "cBaUoRkJgclAkWIap"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            title: "Your Response has been sent successfully",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `,
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `,
            },
          });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="mt-12">
      <div
        id="Contact"
        className="p-4 lg:p-20 flex flex-col items-center justify-center text-black"
      >
        <h2 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-pink-500 text-center">
          Contact ME
        </h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-2 lg:w-1/2"
        >
          <div className="lg:flex gap-6">
            <input
              className="w-full my-3 rounded-lg bg-pink-200 p-4 border-2"
              type="text"
              placeholder="Your name"
              name="user_name"
              id=""
            />
            <input
              className="w-full my-3 rounded-lg bg-pink-200 p-4 border-2 ml-"
              type="email"
              placeholder="@example.com"
              name="user_email"
              id=""
            />
          </div>
          <textarea
            className="w-full my-3 rounded-lg bg-pink-200 p-4 border-2"
            placeholder="Write something here............."
            name="message"
            id=""
            cols="20"
            rows="10"
          ></textarea>
          <button
            className="neno-button shadow-xl hover:shadow-pink-400 text-black border-2 bg-pink-500 hover:bg-pink-400 rounded-lg py-3 mt-4 uppercase relative overflow-hidden text-xl font-bold"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
