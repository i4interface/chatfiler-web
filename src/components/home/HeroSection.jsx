import React from "react";
import photo from "../../images/hero-banner.png"

const HeroSection = () => {
  return (
    <section className="w-full h-[100dvh] px-5 md:px-0 flex justify-center items-center">
      <div className="w-full md:w-[55%] md:h-full h-[45%] bg-black absolute -z-10 top-0 left-0"></div>
      <div className="w-full h-[70%] md:w-[80%] md:h-[70%] md:min-h-[500px] flex flex-col-reverse md:flex-row justify-between items-center gap-8">
        <div className=" md:text-white flex flex-col items-start gap-11 w-full md:w-[40%]">
          <div className="flex flex-col items-start gap-4">
            <h1 className="2xl:text-5xl xl:text-3xl text-2xl font-medium">
              File your tax ease!
            </h1>
            <p>
              Do it yourself with expert help and mentoring. Take your device
              and let’s start your filing
            </p>
          </div>

          <button className="px-6 py-2 uppercase text-white bg-[#AF1B19] hover:bg-[#8d2725] ease-in-out duration-300 rounded-full">
            File my tax returns
          </button>
        </div>
        <div className="w-full md:w-[60%] h-[60%] md:h-full">
            <img src={photo} className="w-full h-full object-cover rounded-xl" alt="person using a laptop" />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
