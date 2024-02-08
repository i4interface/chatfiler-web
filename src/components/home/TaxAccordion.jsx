import React, { useState } from "react";

const TaxAccordion = ({ title, content, imageUrl, isOpen, onClick }) => {
  return (
    <div className="border rounded-3xl w-full px-5 mb-4 md:hidden bg-white">
      <div
        className="flex justify-between items-center px-2 py-5 cursor-pointer"
        onClick={onClick}
      >
        <h2 className="mr-2 text-xl font-medium">{title}</h2>
        <span>{isOpen ? "▼" : "►"}</span>
      </div>
      {isOpen && (
        <div className="p-2">
          <p>{content}</p>
          <div className="w-full flex items-center justify-end">
            <a
              href="#"
              className="flex gap-2 justify-center px-4 py-3 mt-5 text-base text-red-700 rounded"
            >
              <div className="my-auto">Learn More</div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d6e1c77a67dc2e24dd345165b2b73fc82527e4b08a55cd8615df001efb82795?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&"
                alt="Learn more"
                className="w-5 aspect-square"
              />
            </a>
          </div>
          <img
            src={imageUrl}
            alt="Accordion Image"
            className="rounded-3xl w-full aspect-[1.39] mb-5 object-cover"
          />
        </div>
      )}
    </div>
  );
};

const AccordionContainer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const accordions = [
    {
      title: "Students",
      content: "Are you a student navigating the complexities of filing your taxes? Here we are! We understand that as a student, your financial situation is unique.",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/2d9cb8c73f9d97d148e8cd932393872a1358b99db247a58ff8c3ac049d2b5c43?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d9cb8c73f9d97d148e8cd932393872a1358b99db247a58ff8c3ac049d2b5c43?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d9cb8c73f9d97d148e8cd932393872a1358b99db247a58ff8c3ac049d2b5c43?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d9cb8c73f9d97d148e8cd932393872a1358b99db247a58ff8c3ac049d2b5c43?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d9cb8c73f9d97d148e8cd932393872a1358b99db247a58ff8c3ac049d2b5c43?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d9cb8c73f9d97d148e8cd932393872a1358b99db247a58ff8c3ac049d2b5c43?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d9cb8c73f9d97d148e8cd932393872a1358b99db247a58ff8c3ac049d2b5c43?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d9cb8c73f9d97d148e8cd932393872a1358b99db247a58ff8c3ac049d2b5c43?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&"
    },
    {
      title: "Workers",
      content: "Are you a hardworking individual looking to simplify your tax filing process? At Chatfilers, we recognise the unique needs of workers like you.",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/f9282cb23bf6c227975a1065ed29654b097f719cf86e39d0294cd9f4c0111817?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9282cb23bf6c227975a1065ed29654b097f719cf86e39d0294cd9f4c0111817?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9282cb23bf6c227975a1065ed29654b097f719cf86e39d0294cd9f4c0111817?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9282cb23bf6c227975a1065ed29654b097f719cf86e39d0294cd9f4c0111817?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9282cb23bf6c227975a1065ed29654b097f719cf86e39d0294cd9f4c0111817?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9282cb23bf6c227975a1065ed29654b097f719cf86e39d0294cd9f4c0111817?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9282cb23bf6c227975a1065ed29654b097f719cf86e39d0294cd9f4c0111817?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9282cb23bf6c227975a1065ed29654b097f719cf86e39d0294cd9f4c0111817?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&"
    },
    {
        title: "Self-Employed",
        content: "Being your own boss comes with unique challenges, especially when it comes to managing your taxes.",
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/239d890341eb283958e41132eac4a0983cf3f08d52d67f8fabcabca489e9d4b4?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/239d890341eb283958e41132eac4a0983cf3f08d52d67f8fabcabca489e9d4b4?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/239d890341eb283958e41132eac4a0983cf3f08d52d67f8fabcabca489e9d4b4?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/239d890341eb283958e41132eac4a0983cf3f08d52d67f8fabcabca489e9d4b4?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/239d890341eb283958e41132eac4a0983cf3f08d52d67f8fabcabca489e9d4b4?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/239d890341eb283958e41132eac4a0983cf3f08d52d67f8fabcabca489e9d4b4?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/239d890341eb283958e41132eac4a0983cf3f08d52d67f8fabcabca489e9d4b4?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/239d890341eb283958e41132eac4a0983cf3f08d52d67f8fabcabca489e9d4b4?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&"
      },
      {
        title: "Investors",
        content: "Investing can be both rewarding and complex, especially when it comes to managing your taxes.",
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/ed613c64aa11c645eae8640dc2d1942d3ad5418cd39e5264ae4f4e8d5899f1a1?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed613c64aa11c645eae8640dc2d1942d3ad5418cd39e5264ae4f4e8d5899f1a1?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed613c64aa11c645eae8640dc2d1942d3ad5418cd39e5264ae4f4e8d5899f1a1?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed613c64aa11c645eae8640dc2d1942d3ad5418cd39e5264ae4f4e8d5899f1a1?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed613c64aa11c645eae8640dc2d1942d3ad5418cd39e5264ae4f4e8d5899f1a1?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed613c64aa11c645eae8640dc2d1942d3ad5418cd39e5264ae4f4e8d5899f1a1?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed613c64aa11c645eae8640dc2d1942d3ad5418cd39e5264ae4f4e8d5899f1a1?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed613c64aa11c645eae8640dc2d1942d3ad5418cd39e5264ae4f4e8d5899f1a1?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&"
      },
      {
        title: "Newcomers",
        content: "Embarking on a new journey in Canada is both exciting and full of adjustments. As you settle into your new life, managing your taxes doesn't have to be a challenge.",
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/74d4dd82633e247d2a686f16a2a4ef1990bd351946edd669991a52ea2103db94?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/74d4dd82633e247d2a686f16a2a4ef1990bd351946edd669991a52ea2103db94?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/74d4dd82633e247d2a686f16a2a4ef1990bd351946edd669991a52ea2103db94?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/74d4dd82633e247d2a686f16a2a4ef1990bd351946edd669991a52ea2103db94?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/74d4dd82633e247d2a686f16a2a4ef1990bd351946edd669991a52ea2103db94?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/74d4dd82633e247d2a686f16a2a4ef1990bd351946edd669991a52ea2103db94?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/74d4dd82633e247d2a686f16a2a4ef1990bd351946edd669991a52ea2103db94?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/74d4dd82633e247d2a686f16a2a4ef1990bd351946edd669991a52ea2103db94?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&"
      }
    // Add more accordion items as needed
  ];

  return (
    <div>
      {accordions.map((accordion, index) => (
        <TaxAccordion
          key={index}
          title={accordion.title}
          content={accordion.content}
          imageUrl={accordion.imageUrl}
          isOpen={index === openIndex}
          onClick={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default AccordionContainer;
