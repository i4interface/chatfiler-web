import React, { useState } from "react";

const Dropdown = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const initialItem = (
    <li>
      <div className="flex items-center justify-center mt-3 text-red-700 bg-black bg-opacity-0 border-b-[1px] border-gray-300 w-[80%]">
        <a
          href="#"
          className="justify-center items-start py-5 pr-16 pl-4 font-bold bg-black bg-opacity-0 max-md:pr-5 hover:text-red-700 cursor-pointer"
        >
          Students
        </a>
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 transition-transform ml-auto transform ${
            showAll ? 'rotate-90' : ''
          }`}
          onClick={toggleShowAll}
        >
          <path
            d="M0 12.2352L1.13977 13.375L7.51475 7L1.13977 0.625L0 1.76477L5.23519 7L0 12.2352Z"
            fill="black"
          />
        </svg>
      </div>
    </li>
  );

  const restItems = [
    { title: "Workers", content: "Content for Workers" },
    { title: "Newcomers", content: "Content for Newcomers" },
    { title: "Self-Employed", content: "Content for Self-Employed" },
    { title: "Investors", content: "Content for Investors" },
  ];

  return (
    <ul className="md:hidden">
      {initialItem}
      {showAll &&
        restItems.map((item, index) => (
          <li key={index}>
            <div className="flex flex-col justify-center mt-3 bg-black bg-opacity-0 border-b-[1px] border-gray-300 w-[80%]">
              <div className="justify-center items-start py-5 pr-16 pl-4 bg-black bg-opacity-0 max-md:pr-5 hover:text-red-700 cursor-pointer">
                {item.title}
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default Dropdown;
