import ChatbotApp from "../Chatbot/ChatbotApp";

const BeautyTips = () => {
  return (
    <section className="container mx-auto font-rancho">
      <div className="mb-6 text-center">
        <img
          src="https://imgur.com/gwnhtCp.png"
          alt="Beauty Tips Banner"
          className="w-full lg:h-[450px]"
        />
      </div>

      <div className="flex flex-col lg:flex-row justify-between">
        <div className="lg:w-2/3 px-4" data-aos="zoom-out">
          <h1 className="text-3xl font-bold mb-4">
            Enhance your natural glow with these simple steps
          </h1>
          <p className="text-gray-700 text-xl">
            These simple tips have stood the test of time and have proven to be
            effective on all skin types. Following these simple things just
            might completely transform the way you take care of your skin and
            look naturally. If you’re curious to know what they are, read on…
          </p>

          <div className="mt-6">
            <ul>
              <li>1. Always carry a lip-balm</li>
              <li>2. Layer skincare products the right way</li>
              <li>3. Drink the right kind of liquids</li>
              <li>4. Remove makeup without fail</li>
              <li>5. Exfoliate your skin without fail</li>
              <li>6. Double cleanse your skin</li>
              <li>7. Don’t underestimate the power of sunscreen</li>
              <li>8. Keep your hands off your face as much as you can</li>
              <li>9. Setting sprays will up your makeup game</li>
              <li>10. Follow a healthy diet</li>
            </ul>
          </div>
        </div>

        <div className="lg:w-1/3 mt-6 lg:mt-0 px-4">
          <ChatbotApp />
        </div>
      </div>
    </section>
  );
};

export default BeautyTips;
