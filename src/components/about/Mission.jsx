import React from "react";
import fetaurephoto from "../../images/aboutfeature.png"

function Mission() {
  return (
    <>
      <section className="w-full flex justify-center items-center py-10">
        <div className="container gap-4 bg-black rounded-3xl flex justify-between items-center px-5 py-8">
          <img src={fetaurephoto} alt="features photo" className="hidden md:block w-[40%] max-w-[500px]" />
          <div className="flex w-full md:w-[55%] flex-col my-auto text-white max-md:max-w-full">
            <div className="2xl:text-5xl text-3xl font-medium">
              Our Mission
            </div>
            <div className="self-end mt-8 ml-20 xl:text-xl leading-8 max-md:max-w-full">
              At Chatfilers, our mission is to simplify the tax filing process
              and empower Canadians to navigate through their tax obligations
              with ease. We believe that everyone deserves a stress-free tax
              season, and our platform is designed to make that vision a
              reality.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Mission;
