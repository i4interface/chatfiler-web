import React, { useState } from "react";

const FaqAccordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleToggle = (index) => {
    return activeIndex === index ? "h-full" : "h-0";
  };

  const handleRotate = (index) => {
    return activeIndex === index ? "rotate-180" : "";
  };

  const renderedItems = items.map((item, index) => {
    return (
      <li key={index} className="border-b border-black">
        <div
          onClick={() => handleClick(index)}
          className="flex flex-row justify-between gap-2 items-center p-3 cursor-pointer"
        >
          <span className="block w-[85%]">{item.question}</span>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28" // Adjust the viewBox to match the content coordinates
            className={`fill-none text-black h-6 w-[10%] lg:w-auto transform transition-transform duration-500 ${handleRotate(
              index
            )}`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 9L14 19L24 9"
              stroke="#171A1F"
              strokeWidth="2.4"
              strokeMiterlimit="10"
              strokeLinecap="square"
            />
          </svg>
        </div>
        <div
          className={`border-l-2 border-red-600 overflow-hidden duration-300 transition-all ${handleToggle(
            index
          )}`}
        >
          <p className="p-3 text-gray-900">{item.answer}</p>
        </div>
      </li>
    );
  });

  return (
    <ul className="accordion w-full px-5 lg:px-20 mt-5 lg:mt-10">{renderedItems}</ul>
  );
};

export default FaqAccordion;
