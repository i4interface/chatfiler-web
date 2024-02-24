// src/Footer.js
import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col mt-8 z-[99999]">
      <div className="flex justify-center items-center px-8 py-12 w-full bg-black rounded-[48px_48px_0px_0px] max-lg:px-5 max-lg:max-w-full">
        <div className="mb-6 w-full">
          <div className="flex gap-5 max-lg:flex-col max-lg:gap-0 ">
            <div className="flex flex-col w-[33%] max-lg:ml-0 max-lg:w-full">
              <div className="flex flex-col grow px-4 pr-8">
                <h1 className="text-xl text-white"> Latest News from </h1>
                <form action="">
                  <div className="flex relative gap-5 justify-between  p-1 mt-4 bg-white rounded-full border border-gray-500 border-solid max-lg:pl-2">
                    <input
                      placeholder="Email Address"
                      type="email"
                      name="email"
                      id="email"
                      className="w-full flex-auto p-1 rounded-full my-auto text-sm leading-7 text-black focus:outline-none"
                    ></input>
                    <button
                      className="absolute top-0 right-0 px-4 py-2 text-base text-white bg-red-700 rounded-3xl h-full"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
                <div className="flex gap-2 justify-between pr-1 mt-12 max-lg:mt-10 w-[20%]">
                  <a href="#image-1" className="w-8 aspect-square text-white">
                    <img
                      loading="lazy"
                      src="/icons/square-facebook.svg"
                      alt="image 1"
                      className="text-white"
                    />
                  </a>
                  <a href="#image-2" className="w-8 aspect-square">
                    <img
                      loading="lazy"
                      src="/icons/square-x-twitter.svg"
                      alt="image 2"
                      className="text-white"
                    />
                  </a>
                  <a href="#image-3" className="w-8 aspect-square ">
                    <img
                      loading="lazy"
                      src="/icons/square-instagram.svg"
                      alt="image 3"
                      className="text-white"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-lg:ml-0 max-lg:w-full">
              <div className="flex gap-5 justify-between text-lg leading-8 text-white max-lg:mt-10">
                <div className="flex flex-col flex-1 whitespace-nowrap">
                  <h2 className="text-lg">Quick Links</h2>
                  {/* <a href="/news" className="text-sm font-regular mt-4 hover:text-red-700">
                    News/Updates
                  </a> */}
                  <a href="/faq" className="text-sm font-regular mt-4 hover:text-red-700">
                    F.A.Q
                  </a>
                  <a href="/tax-payers" className="text-sm font-regular mt-4 hover:text-red-700">
                    Tax Payers
                  </a>
                </div>
                <div className="flex flex-col flex-1 self-start">
                  <h2 className="text-lg">Other Links</h2>
                  <a href="/terms-and-conditions" className="text-sm font-regular mt-4 hover:text-red-700 cursor-pointer">
                    Terms & Conditions
                  </a>
                  <a href="/privacy-policy" className="text-sm font-regular mt-4 hover:text-red-700 cursor-pointer">
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-lg:ml-0 max-lg:w-full">
              <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start text-xl leading-8 text-white max-lg:mt-10">
                <h2 className="text-lg">Contact</h2>
                {/* <div className="text-sm font-regular mt-4">
                  5007 Ocean Avenue, Charlotte, NC, Bakersfield
                </div> */}

                {/* <div className="text-sm font-regular mt-2">(610) 945-7986</div> */}
                <div className="text-sm font-regular mt-2">
                  info@chatfiler.ca
                </div>
                <a href="/login"
                  className="px-4 py-2 mt-9 text-lg bg-red-700 rounded-full max-lg:px-5 "
                  
                >
                  Login/Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center items-center px-8 py-10 w-full text-xs leading-5 text-center text-gray-400 bg-black border-t-2 border-red-700 border-solid max-lg:px-5 max-lg:max-w-full">
        © 2024 ChatFiler. All Rights Reserved. <br />
        Site Credit :{" "}
        <a
          href="http://i4interface.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          i4interface
        </a>
      </div>
    </footer>
  );
}

export default Footer;
