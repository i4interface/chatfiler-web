import React from 'react'

function Hero() {
  return (
    <>
        <div className="flex justify-center items-center px-16 py-12 bg-white max-md:px-5">
      <div className="flex flex-col mt-14 w-full max-w-[1176px] max-md:mt-10 max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">
              <div className="mt-3.5 text-5xl whitespace-nowrap leading-[68.16px] text-zinc-900 max-md:mt-10 max-md:text-4xl">
                About Us
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[81%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/94629268de2c3f9d9d414bb51879d4604d54612c44c3a9987eb1699d5a2f7823?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/94629268de2c3f9d9d414bb51879d4604d54612c44c3a9987eb1699d5a2f7823?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/94629268de2c3f9d9d414bb51879d4604d54612c44c3a9987eb1699d5a2f7823?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/94629268de2c3f9d9d414bb51879d4604d54612c44c3a9987eb1699d5a2f7823?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/94629268de2c3f9d9d414bb51879d4604d54612c44c3a9987eb1699d5a2f7823?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/94629268de2c3f9d9d414bb51879d4604d54612c44c3a9987eb1699d5a2f7823?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/94629268de2c3f9d9d414bb51879d4604d54612c44c3a9987eb1699d5a2f7823?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/94629268de2c3f9d9d414bb51879d4604d54612c44c3a9987eb1699d5a2f7823?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&"
                className="grow w-full aspect-[2.13] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
        <div className="self-end mt-12 max-w-full w-[875px] max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="text-xl leading-8 text-zinc-900 max-md:mt-10 max-md:max-w-full">
                Welcome to Chatfilers, your premier destination for hassle-free
                and secure online tax filing.
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="text-xl leading-8 text-zinc-900 max-md:mt-10">
                As a trusted CRA-approved Netfile provider, we take pride in
                offering a seamless experience for individuals and businesses
                across Canada.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero