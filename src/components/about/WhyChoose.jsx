import React, { useState } from 'react';

function WhyChoose() {
    const [accordionOpen, setAccordionOpen] = React.useState(0);

    const handleAccordionToggle = (index) => {
      setAccordionOpen((prevIndex) => (prevIndex === index ? -1 : index));
    };
    const accordionData = [
        {
          title: "Expertise in Tax Filing",
          image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9e86a12967859cd332faec31dc8713141fe62dcde8c4de5e5d48699765516deb?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&",
          content: "Your content here...",
        },
        {
          title: "Commitment to Security",
          image: "https://cdn.builder.io/api/v1/image/assets/TEMP/2eadd48feacec9b75cceeae64477ff5a013ec5b00f5726ab3f9be67041b31d6d?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&",
          content: "Your content here...",
        },
        {
          title: "User-Friendly Platform",
          image: "https://cdn.builder.io/api/v1/image/assets/TEMP/57b2117285818c2640f962a1af0828ce06b1e7352ecb45525639b3611e5d487c?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&",
          content: "We prioritize user experience, ensuring that our platform is accessible and intuitive for all. Whether you're a first-time filer or a seasoned tax pro, our user-friendly interface guides you through the process effortlessly.",
        },
        {
          title: "Transparency and Compliance",
          image: "https://cdn.builder.io/api/v1/image/assets/TEMP/52033d640d181ebe10521ffb27ea3966679508bd8c4c0fd712380634d9b4ab34?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&",
          content: "Your content here...",
        },
      ];
    
  return (
    <>
        <div className="flex justify-center items-center px-16 py-12 bg-gray-100 rounded-[64px_64px_0px_0px] max-md:px-5">
      <div className="mt-8 w-full max-w-[1175px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="mt-4 text-6xl leading-[84px] text-zinc-900 max-md:mt-10 max-md:text-4xl max-md:leading-[58px]">
              Why Choose
              <br />
              Chatfilers?
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-3xl leading-10 text-zinc-900 max-md:mt-10 max-md:max-w-full">
              {accordionData.map((item, index) => (
                <div key={index}>
                  <div
                    className="flex gap-5 justify-between px-px mt-8 max-md:flex-wrap max-md:max-w-full cursor-pointer"
                    onClick={() => handleAccordionToggle(index)}
                  >
                    <div className="flex-auto">{item.title}</div>
                    <img
                      loading="lazy"
                      src={item.image}
                      className={`self-start w-7 aspect-square ${accordionOpen === index ? 'transform rotate-90' : ''}`}
                    />
                  </div>
                  {accordionOpen === index && (
                    <>
                      <img
                        loading="lazy"
                        src={item.image}
                        className="mt-6 w-full stroke-[1px] stroke-neutral-800 max-md:max-w-full"
                      />
                      <div className="mt-7 text-base leading-7 max-md:max-w-full">
                        {item.content}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default WhyChoose