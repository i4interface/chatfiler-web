import React, { useState } from 'react';
import Layout from "../layout/Layout";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNum: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here using formData
    console.log(formData);
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <div className="py-12 pl-20 bg-white max-md:pl-5 mt-12">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto text-base leading-7 max-md:mt-10 max-md:max-w-full">
                <div className="text-5xl leading-[68.16px] text-zinc-900 max-md:max-w-full max-md:text-4xl">
                  Get in touch
                </div>
                <div className="mt-10 text-xl leading-8 text-zinc-900 max-md:max-w-full">
                  Advising companies on long-term growth, and market
                  positioning.
                </div>
                <div className="flex gap-4 justify-between mt-5 max-md:flex-wrap max-md:max-w-full">
                  <div className="flex flex-col flex-1 justify-center pt-2 bg-black bg-opacity-0">
                    
                    <label
                      htmlFor="fullName"
                      className="font-bold text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="justify-center items-start py-4 pr-16 pl-4 mt-2 whitespace-nowrap bg-white rounded border border-solid border-zinc-400 text-neutral-300 max-md:pr-5"
                      placeholder="Full Name"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center pt-2 mt-4 bg-black bg-opacity-0 max-md:max-w-full">
                    <label
                      htmlFor="phoneNum"
                      className="font-bold text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phoneNum"
                      name="phoneNum"
                      value={formData.phoneNum}
                      onChange={handleChange}
                      className="justify-center items-start py-4 pr-16 pl-4 mt-2 whitespace-nowrap bg-white rounded border border-solid border-zinc-400 text-neutral-300 max-md:pr-5"
                      placeholder="Phone Number"
                    />
                  </div>
                <div className="flex flex-col justify-center pt-2 mt-4 bg-black bg-opacity-0 max-md:max-w-full">
                  <label
                    htmlFor="email"
                    className="font-bold text-gray-700 max-md:max-w-full"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="justify-center items-start py-4 pr-16 pl-4 mt-2 whitespace-nowrap bg-white rounded border border-solid border-zinc-400 text-neutral-300 max-md:pr-5 max-md:max-w-full"
                    placeholder="Email"
                  />
                </div>
                <div className="flex flex-col justify-center pt-2 mt-4 bg-black bg-opacity-0 max-md:max-w-full">
                  <label
                    htmlFor="message"
                    className="font-bold text-gray-700 max-md:max-w-full"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="flex flex-col pt-4 pb-0.5 pl-3.5 whitespace-nowrap bg-white rounded border border-solid border-zinc-400 text-neutral-300 max-md:max-w-full"
                    placeholder="Message"
                  />
                </div>
                <div className="justify-center items-center px-16 py-5 mt-8 max-w-full text-lg leading-7 text-white whitespace-nowrap bg-red-700 rounded-3xl w-[196px] max-md:px-5">
                  <button type="submit">Submit</button>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto text-xl leading-8 text-zinc-900 max-md:mt-10">
                <div className="flex gap-4 justify-between whitespace-nowrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/64f1a947065a4810ca351abc83a79afba06c665b6866f9cdc6d5c1e4c162ee20?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&"
                    className="w-6 aspect-square"
                  />
                  <div className="grow">5007 Ocean Avenue, Charlotte</div>
                </div>
                <div className="flex gap-3.5 justify-between mt-9">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9091424a0a6265c5c4834e42d5558b706ff457f281e44382aee5ec28e0d6827?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&"
                    className="w-6 aspect-square"
                  />
                  <div className="flex-auto my-auto">(610) 945-7986</div>
                </div>
                <div className="flex gap-4 justify-between mt-8 whitespace-nowrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c09e759a740575fb46ed1c67a42f10bd17a4d4a2c1f1d6fc5781a6bb6c38d1e?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&"
                    className="w-6 aspect-square"
                  />
                  <div className="grow">real.danieljackson@hotmail.com</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e07e5622fc8a7f3c26da2867a8b62e0a452fe164e916a8f89e3f1f4e70937ae6?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e07e5622fc8a7f3c26da2867a8b62e0a452fe164e916a8f89e3f1f4e70937ae6?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e07e5622fc8a7f3c26da2867a8b62e0a452fe164e916a8f89e3f1f4e70937ae6?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e07e5622fc8a7f3c26da2867a8b62e0a452fe164e916a8f89e3f1f4e70937ae6?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e07e5622fc8a7f3c26da2867a8b62e0a452fe164e916a8f89e3f1f4e70937ae6?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e07e5622fc8a7f3c26da2867a8b62e0a452fe164e916a8f89e3f1f4e70937ae6?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e07e5622fc8a7f3c26da2867a8b62e0a452fe164e916a8f89e3f1f4e70937ae6?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e07e5622fc8a7f3c26da2867a8b62e0a452fe164e916a8f89e3f1f4e70937ae6?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&"
                className="mt-8 w-full aspect-[0.82] max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
}

export default Contact;
