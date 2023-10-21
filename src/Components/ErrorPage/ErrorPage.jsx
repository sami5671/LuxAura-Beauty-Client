import Footer from "../Home/Footer";
import NavBar from "../Home/NavBar";

const ErrorPage = () => {
  return (
    <section>
      <NavBar></NavBar>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <img
          className="lg:w-[500px] lg:h-[400px]"
          src="https://imgur.com/P3Xzilr.jpg"
          alt=""
        />

        <h1 className="text-6xl text-pink-400 mt-4 text-center">
          Error!!!! 404 Page Not Found!!!!
        </h1>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default ErrorPage;
