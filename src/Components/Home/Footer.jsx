import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  //================ to get the current year =================

  const currentYear = new Date().getFullYear();
  // =====================================================

  return (
    <>
      <section>
        <section className="bg-slate-100 flex flex-col lg:flex-row justify-center lg:mt-12 px-12 py-12 font-rancho">
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-12">
            <img
              className="w-[100px] h-[100px] text-center"
              src="https://imgur.com/GmzD1Ke.png"
              alt=""
            />
            <h1 className="text-[#ee5ca8] font-rancho text-4xl font-bold">
              LuxAura
            </h1>
            <p className="text-center lg:text-left">
              "Feel free to connect with us anytime and become part of our
              friendly community. Share your cherished memories and moments with
              your closest companions, as we're always here to be your friends."
            </p>
            <div className="flex justify-center lg:justify-start mt-4">
              <AiFillFacebook className="text-[#ee5ca8] text-5xl lg:mr-4" />
              <AiFillTwitterCircle className="text-[#ee5ca8] text-5xl lg:mr-4" />
              <AiFillInstagram className="text-[#ee5ca8] text-5xl lg:mr-4" />
              <AiFillLinkedin className="text-[#ee5ca8] text-5xl" />
            </div>
          </div>
        </section>
        <div className="bg-pink-500 font-rancho text-center py-2">
          <h1 className="text-2xl text-white">
            &copy; {currentYear} LuxAura ! All Rights Reserved
          </h1>
        </div>
      </section>
    </>
  );
};

export default Footer;
