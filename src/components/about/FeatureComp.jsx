import React from "react";

function FeatureComp({ data }) {
  return (
    <>
      {data.map((item, index) => (
        <div className="flex flex-col grow self-stretch px-5 pt-4 pb-12 w-full bg-gray-50 rounded-3xl max-md:mt-6" key={index}>
          <div className="flex justify-center items-center px-2 rounded-xl aspect-square bg-zinc-200 h-[68px] w-[68px]">
            <img
              loading="lazy"
              srcSet={item.ImgUrl}
              className="w-full aspect-square"
            />
          </div>
          <div className="md:mt-7 md:text-3xl text-2xl font-semibold text-zinc-900">
            {item.heading}
          </div>
          <div className="mt-7 text-xl leading-8 text-zinc-900">
            {item.description}
          </div>
        </div>
      ))}
    </>
  );
}

export default FeatureComp;
