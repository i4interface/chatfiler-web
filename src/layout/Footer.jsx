// src/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="flex flex-col mt-8">
      <div className="flex justify-center items-center px-8 py-12 w-full bg-black rounded-[48px_48px_0px_0px] max-md:px-5 max-md:max-w-full">
        <div className="mb-6 w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-4 pr-8">
                <h1 className="text-xl text-white">
                  {" "}
                  Latest News from{" "}
                </h1>
                <form action="">
                <div className="flex gap-5 justify-between  p-1 mt-4 bg-white rounded-full border border-gray-500 border-solid max-md:pl-2">
                  <input placeholder='Email Address' type='email' name='email' id='email' className="flex-auto p-1 rounded-full my-auto text-sm leading-7 text-black focus:outline-none">
                    
                  </input>
                  <button
                    className="justify-center px-8 py-2 text-base leading-7 text-white whitespace-nowrap bg-red-700 rounded-3xl max-md:px-5"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </div>
                </form>
                <div className="flex gap-2 justify-between pr-1 mt-12 max-md:mt-10 w-[20%]">
              <a href="#image-1" className="w-8 aspect-square">
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
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex gap-5 justify-between text-lg leading-8 text-white max-md:mt-10">
                <div className="flex flex-col flex-1 whitespace-nowrap">
                  <h2 className="text-lg">Quick Links</h2>
                  <div className="text-sm font-regular mt-4 hover:text-red-700">News/Updates</div>
                  <div className="text-sm font-regular mt-4 hover:text-red-700">F.A.Q</div>
                  <div className="text-sm font-regular mt-4 hover:text-red-700">Services</div>
                </div>
                <div className="flex flex-col flex-1 self-start">
                  <h2 className="text-lg">Other Links</h2>
                  <div className="text-sm font-regular mt-4 hover:text-red-700">
                    Terms & Conditions
                  </div>
                  <div className="text-sm font-regular mt-4 hover:text-red-700">Privacy Policy</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-xl leading-8 text-white max-md:mt-10">
                <h2 className="text-lg">Contact</h2>
                <div className="text-sm font-regular mt-4">
                  5007 Ocean Avenue, Charlotte, NC, Bakersfield
                </div>
                
                <div className="text-sm font-regular mt-2">(610) 945-7986</div>
                <div className="text-sm font-regular mt-2">
                  real.danieljackson@hotmail.com
                </div>
                <button className="justify-center px-2 py-4 mt-9 text-lg leading-7 whitespace-nowrap bg-red-700 rounded-full max-md:px-5 w-[50%]" type="button">
                  Login/Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center items-center px-8 py-10 w-full text-xs leading-5 text-center text-gray-400 bg-black border-t-2 border-red-700 border-solid max-md:px-5 max-md:max-w-full">
        © 2024 ChatFiler. All Rights Reserved. <br />
        Site Credit : <a href="http://i4interface.com" target="_blank" rel="noopener noreferrer">i4interface</a>
      </div>
    </footer>
  );
}

export default Footer;

