import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import StarRating from "./StarRating";


function Testimonials() {
  const testimonialData = [
    {
      name: "The Smith Family",
      position: "",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ff825c75c003228cbc5ab7a5b94fbac1f4197d251ee8ca120912d13a2d3b3cb3?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=200",
      rating: 3.5,
      content:
        "Netfilers transformed our home internet experience. We feel secure knowing our kids are protected online.",
    },
    {
      name: "Jane Doe",
      position: "CEO, XYZ Corp",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9a5ed83b477bb8c0923a45bf8d5bb540e4e8b82fdff5fbb3f37b2677d6af1c66?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=200",
      rating: 3,
      content:
        "As a business owner, Netfilers' network management features have been a game-changer. Efficient and reliable!",
    },
    {
      name: "Sarah Jackson",
      position: "",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/da4a55a150c736eb2a1a7ebc12f0c9e4a38a3eddfe97722c7f8e105b1330da61?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=200",
      rating: 5,
      content:
        "I hesitated to invest in consulting services initially, but working with a business coach turned out to be one of my best decisions ever.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    slidesToShow: 3,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1920, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1300, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  

  return (
    <div className="flex flex-col px-14 py-12 bg-black shadow-sm rounded-[48px] max-md:px-5">
      <div className="max-md:max-w-full">
      <Slider {...settings} className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            {testimonialData.map((testimonial, index) => (
              <div key={index} className="flex pr-5 flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-6 pt-6 pb-12 mx-auto w-full text-sm bg-white rounded-3xl text-zinc-900 max-md:px-5 max-md:mt-6">
                  <div className="flex gap-3.5 justify-between leading-[157%]">
                    <img loading="lazy" srcSet={testimonial.image} className="w-16 aspect-square" alt=""/>
                    <div className="flex flex-col flex-1 self-start mt-3">
                      <div>
                        {testimonial.name}
                        <br />
                        <span className="text-xs">{testimonial.position}</span>
                      </div>
                      <StarRating rating={testimonial.rating} />
                    </div>
                  </div>
                  <div className="mt-8 leading-6">{testimonial.content}</div>
                </div>
              </div>
            ))}
          </Slider>
      </div>
    </div>
  );
}

export default Testimonials;
