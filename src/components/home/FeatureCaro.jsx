import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function FeatureCaro ({ features }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000,
      };
    
  return (
    <Slider {...settings}>
      {features.map((ftr) => (
        <div key={ftr.id} className='px-4 w-[100%]'>
          <div className="mt-8 flex gap-5 justify-between px-7 py-6 w-full text-white bg-red-700 rounded-2xl shadow-sm max-md:max-w-full">
            <div className="my-auto w-2 bg-black rounded h-[68px]" />
            <div className="flex flex-col flex-1 max-md:max-w-full">
              <h2 className="text-2xl leading-10 max-md:max-w-full">
                {ftr.heading}
              </h2>
              <p className="mt-2.5 text-xs leading-5 max-md:max-w-full">
                {ftr.para}
              </p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  )
}

export default FeatureCaro