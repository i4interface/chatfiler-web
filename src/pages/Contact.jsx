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
            <div className="flex flex-col w-[60%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-[80%] self-stretch my-auto text-base leading-7 max-md:mt-10 max-md:max-w-[90%]">
                <div className="text-5xl leading-[68.16px] text-zinc-900 max-md:max-w-full max-md:text-4xl">
                  Get in touch
                </div>
                {/* <div className="mt-10 text-xl leading-8 text-zinc-900 max-md:max-w-full">
                  Advising companies on long-term growth, and market
                  positioning.
                </div> */}
                <div className="flex gap-4 justify-between mt-5 max-md:flex-wrap max-md:max-w-full">
                  <div className="flex flex-col flex-1 justify-center pt-2 ">
                    
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
                <div className="flex flex-col justify-center pt-2 mt-4 max-md:max-w-full">
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
                <div className="flex flex-col justify-center pt-2 mt-4 max-md:max-w-full">
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
                <div className="flex flex-col justify-center pt-2 mt-4 max-md:max-w-full">
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
                <div className="justify-center items-center px-16 py-2 mt-8 max-w-full text-lg leading-7 text-white whitespace-nowrap bg-red-700 rounded-3xl w-[196px] max-md:px-5">
                  <button type="submit">Submit</button>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[40%] max-md:ml-0 max-md:w-full">
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
