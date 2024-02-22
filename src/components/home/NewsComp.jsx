import React from "react";

function NewsComp({ data }) {
  return (
    <>
      {data.map((item, index) => (
        <div className="flex flex-col grow p-4 mx-auto mb-0 w-full bg-white rounded-3xl text-zinc-900 max-md:pl-5 max-md:mt-6" key={index}>
          <img
            loading="lazy"
            src={item.imageUrl}
            className="box-border object-cover overflow-hidden shrink-0 mx-auto w-full aspect-[1.42] min-h-[20px] min-w-[20px]"
          />
          <h1 className="mt-9 text-3xl leading-10">{item.title}</h1>
          <div className="mt-6 text-sm leading-6">{item.description}</div>
          <div className="flex gap-5 justify-between mt-9 w-full text-red-700 whitespace-nowrap">
            <div className="flex flex-col justify-center my-auto text-sm leading-5 aspect-[1.58] ">
              <div className="justify-center px-3 py-3.5 rounded-2xl aspect-[1.58] bg-neutral-100">
                Skills
              </div>
            </div>
            <button className="flex gap-2 justify-between px-4 py-3 text-base leading-7 rounded ">
              <div className="grow my-auto">Learn more</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d6e1c77a67dc2e24dd345165b2b73fc82527e4b08a55cd8615df001efb82795?apiKey=5545c1dfaa70484eb36cb94b5bd66380&"
                className="w-5 aspect-square"
              />
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default NewsComp;
