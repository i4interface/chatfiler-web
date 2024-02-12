import React from "react";

function Hero() {
  return (
    <>
      <section className="w-full h-screen flex justify-center items-center">
        <div className="flex flex-col container px-5 lg:px-10">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
              <div className=" text-5xl whitespace-nowrap leading-[68.16px] text-zinc-900 max-md:text-4xl">
                About Us
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[100%] max-md:ml-0 max-md:w-full">
              <video
                autoPlay
                loop
                muted
                className="grow w-full max-md:mt-10 max-md:max-w-full"
              >
                <source
                  src="/video/about.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="self-end mt-12 max-w-full w-[875px] max-md:mt-10">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="text-xl leading-8 text-zinc-900 max-md:mt-10 max-md:max-w-full">
                  Welcome to Chatfilers, your premier destination for
                  hassle-free and secure online tax filing.
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="text-xl leading-8 text-zinc-900 max-md:mt-10">
                  As a trusted CRA-approved Netfile provider, we take pride in
                  offering a seamless experience for individuals and businesses
                  across Canada.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
