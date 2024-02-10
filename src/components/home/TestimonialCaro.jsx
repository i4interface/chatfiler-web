import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TestimonialCaro({ details }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    loop: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
    ]
  };

  return (
    <Slider {...settings}>
      {details.map((detail) => (
        <div key={detail.id} className="px-4 w-[100%]">
          <div className="flex flex-col grow px-6 pt-6 pb-12 mx-auto w-full text-sm bg-white rounded-3xl text-zinc-900 max-md:px-5 max-md:mt-6">
            <div className="flex gap-3.5 justify-between leading-[157%]">
              <img
                loading="lazy"
                srcSet={detail.src}
                className="w-16 aspect-square"
              />
              <div className="flex flex-col flex-1 my-auto">
                <div>{detail.name}</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a9a08c94fbe7249ea030c5e4be0ab40dbd76ac89faa388cfd2c031b7db39e93?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&"
                  className="mt-1.5 w-20 aspect-[5]"
                />
              </div>
            </div>
            <div className="mt-8 leading-6">{detail.testimonial}</div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default TestimonialCaro;
