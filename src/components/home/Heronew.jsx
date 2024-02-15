import * as React from "react";
import HeroImage from "../../images/heroImg.png"
function Heronew() {
  return (
    <section className="w-full my-0 md:my-10 xl:my-20 flex justify-center items-center px-16 py-6 md:py-12 bg-white max-md:px-5">
      <div className="w-full h-full container max-w-[1500px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col-reverse max-md:gap-5 ">
          <div className="flex flex-col w-6/12 max-md:w-full">
            <div className="flex flex-col text-black max-md:max-w-full gap-8">
              <h1 className="text-6xl max-md:hidden font-semibold leading-[68px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
                File your tax ease!
              </h1>
              <p className=" text-xl leading-8 max-md:max-w-full">
                Do it yourself with expert help and mentoring. Take your device
                and let’s start your filing
              </p>
              <button className="w-fit px-6 py-2 uppercase text-white bg-[#AF1B19] hover:bg-[#8d2725] ease-in-out duration-300 rounded-full">
                File my tax returns
              </button>
              <div className="flex gap-10 md:mt-8 text-black max-md:flex-wrap max-md:max-w-full">
                <div className="flex flex-col gap-4">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f9f36f35eb0b94c7cf6cb404efc8519bb5b0185f4b483c8e07d8c44b73faeaf9?apiKey=5545c1dfaa70484eb36cb94b5bd66380&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9f36f35eb0b94c7cf6cb404efc8519bb5b0185f4b483c8e07d8c44b73faeaf9?apiKey=5545c1dfaa70484eb36cb94b5bd66380&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9f36f35eb0b94c7cf6cb404efc8519bb5b0185f4b483c8e07d8c44b73faeaf9?apiKey=5545c1dfaa70484eb36cb94b5bd66380&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9f36f35eb0b94c7cf6cb404efc8519bb5b0185f4b483c8e07d8c44b73faeaf9?apiKey=5545c1dfaa70484eb36cb94b5bd66380&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9f36f35eb0b94c7cf6cb404efc8519bb5b0185f4b483c8e07d8c44b73faeaf9?apiKey=5545c1dfaa70484eb36cb94b5bd66380&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9f36f35eb0b94c7cf6cb404efc8519bb5b0185f4b483c8e07d8c44b73faeaf9?apiKey=5545c1dfaa70484eb36cb94b5bd66380&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9f36f35eb0b94c7cf6cb404efc8519bb5b0185f4b483c8e07d8c44b73faeaf9?apiKey=5545c1dfaa70484eb36cb94b5bd66380&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9f36f35eb0b94c7cf6cb404efc8519bb5b0185f4b483c8e07d8c44b73faeaf9?apiKey=5545c1dfaa70484eb36cb94b5bd66380&"
                    className="w-11 rounded-xl aspect-square"
                  />
                  <div className=" text-xl font-bold ">3500+</div>
                  <div className=" text-base ">Satisfied Users</div>
                </div>
                <div className="flex flex-col gap-4">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/af5049ff9f23247e909f526b4b69a731b47ea8ef2176c1c7671723b9f719fe9b?apiKey=5545c1dfaa70484eb36cb94b5bd66380&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/af5049ff9f23247e909f526b4b69a731b47ea8ef2176c1c7671723b9f719fe9b?apiKey=5545c1dfaa70484eb36cb94b5bd66380&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/af5049ff9f23247e909f526b4b69a731b47ea8ef2176c1c7671723b9f719fe9b?apiKey=5545c1dfaa70484eb36cb94b5bd66380&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/af5049ff9f23247e909f526b4b69a731b47ea8ef2176c1c7671723b9f719fe9b?apiKey=5545c1dfaa70484eb36cb94b5bd66380&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/af5049ff9f23247e909f526b4b69a731b47ea8ef2176c1c7671723b9f719fe9b?apiKey=5545c1dfaa70484eb36cb94b5bd66380&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/af5049ff9f23247e909f526b4b69a731b47ea8ef2176c1c7671723b9f719fe9b?apiKey=5545c1dfaa70484eb36cb94b5bd66380&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/af5049ff9f23247e909f526b4b69a731b47ea8ef2176c1c7671723b9f719fe9b?apiKey=5545c1dfaa70484eb36cb94b5bd66380&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/af5049ff9f23247e909f526b4b69a731b47ea8ef2176c1c7671723b9f719fe9b?apiKey=5545c1dfaa70484eb36cb94b5bd66380&"
                    className="w-11 rounded-xl aspect-square"
                  />
                  <div className=" text-xl font-bold">250k+</div>
                  <div className=" text-base">Successful transactions</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex relative flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex w-full z-10 h-1/2 ">
              <div className="flex flex-col bg-white gap-2 h-fit items-start max-w-[100px] p-2 rounded-2xl mt-4 ml-4">
                <img src="https://i.postimg.cc/nVS9RhLL/61b67d81-5ab3-4416-9719-6db0e3db5088-3.png" alt="" />
                <h4 className="text-xs">Successful transcations</h4>
                <p className="text-sm font-semibold">$123.456</p>
                <span className="flex justify-center items-center p-2 gap-2 rounded-full bg-[#AF1B19] text-white text-xs ">
                  + 8.65%
                  <svg
                    width="8"
                    height="4"
                    viewBox="0 0 8 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.1852 0.0824257L7.40005 3.39767C7.60065 3.60453 7.47906 4 7.21485 4H0.785152C0.520944 4 0.399347 3.60453 0.599948 3.39767L3.8148 0.0824257C3.92137 -0.0274754 4.07863 -0.0274751 4.1852 0.0824257Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>
            </div>
                <img src={HeroImage} alt="person using laptop" className="absolute object-bottom z-[1] w-full h-[85%] object-cover rounded-xl" />
                <div className="w-1/2 h-[65%] bg-red-700 z-0 blur-[175px] absolute bottom-0 right-0"></div>
            <div className="flex flex-col z-10 gap-4 justify-center items-end w-full h-1/2 ">
                <div className="w-[80%] mt-10 h-[80%] bg-white rounded-3xl"></div>
                <div className="w-[80%] h-[20%] bg-white rounded-3xl"></div>
            </div>
          </div>
          <h1 className="font-semibold mb-4 md:hidden max-md:max-w-full max-md:text-4xl ">
                File your tax ease!
              </h1>
        </div>
      </div>
    </section>
  );
}
export default Heronew;
