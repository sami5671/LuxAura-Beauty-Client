import "./Banner.css";
const Banner = () => {
  return (
    <>
      <div className="background-img">
        {/* --------------------------- Here is the search  option  */}
        <section className="text-white font-rancho px-12">
          {/* banner  */}
          <div className="background-img flex items-center justify-end lg:px-24">
            <div className="">
              <h1 className="text-5xl lg:text-6xl font-bold">
                <marquee direction="left" width="90%">
                  Welcome To LuxAura Cosmetics & Beauty
                </marquee>
              </h1>
              <p className="text-xl mt-3 mb-3">
                LuxAura Cosmetics & Beauty is your one-stop destination for
                premium skincare and cosmetics. Explore a world of luxury and
                indulge in top-notch products that enhance your natural beauty.
                Experience the epitome of elegance and self-care with us.
              </p>
              <button className="btn bg-pink-400 border-none text-white hover:text-black">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Banner;
