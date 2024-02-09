import React from "react";
import AccordionContainer from "./TaxAccordion";

function TaxPayerSnippet() {
  return (
    <>
      <div className="w-full h-fit mt-4 relative ">
        <div className="absolute w-full h-full md:h-[80%] bg-black -z-10 md:rounded-[50px]"></div>
        <div className="flex pt-5 px-5 md:pt-20 xl:w-[80%] mx-auto gap-5 max-md:flex-col max-md:gap-0 ">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col ">
              <div className="flex gap-3.5 self-start pr-4 text-base items-center text-red-700 whitespace-nowrap bg-rose-100 rounded-3xl">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/655756d1a2bb3449b7ce71bd37a3a9cf024e9a95b4a628d2111519656a738ba3?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&"
                  className="w-12 aspect-square"
                />
                <div className="grow my-auto">TAX PAYERS</div>
              </div>
              <div className="my-14 text-3xl leading-10 text-white max-md:mt-10">
                Highlight the
                <br />
                benefits of working
                <br />
                with your company
              </div>
              <div className="hidden md:flex flex-col py-8 lg:mt-36 bg-white rounded-3xl shadow text-zinc-900 max-md:mt-10">
                <div className="flex flex-col px-3 max-md:px-2">
                  <div className="text-3xl leading-10">Students</div>
                  <div className="mt-4 text-sm leading-6">
                    Are you a student navigating the complexities of filing your
                    taxes? Here we are! We understand that as a student, your
                    financial situation is unique.
                  </div>
                  <a
                    href="#"
                    className="flex gap-2 justify-center self-end px-4 py-3 mt-8 text-base leading-7 text-red-700 whitespace-nowrap rounded bg-black bg-opacity-0"
                  >
                    <div className="grow my-auto">Learn More</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d6e1c77a67dc2e24dd345165b2b73fc82527e4b08a55cd8615df001efb82795?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&"
                      className="w-5 aspect-square"
                    />
                  </a>
                </div>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2d9cb8c73f9d97d148e8cd932393872a1358b99db247a58ff8c3ac049d2b5c43?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d9cb8c73f9d97d148e8cd932393872a1358b99db247a58ff8c3ac049d2b5c43?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d9cb8c73f9d97d148e8cd932393872a1358b99db247a58ff8c3ac049d2b5c43?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d9cb8c73f9d97d148e8cd932393872a1358b99db247a58ff8c3ac049d2b5c43?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d9cb8c73f9d97d148e8cd932393872a1358b99db247a58ff8c3ac049d2b5c43?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d9cb8c73f9d97d148e8cd932393872a1358b99db247a58ff8c3ac049d2b5c43?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d9cb8c73f9d97d148e8cd932393872a1358b99db247a58ff8c3ac049d2b5c43?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d9cb8c73f9d97d148e8cd932393872a1358b99db247a58ff8c3ac049d2b5c43?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&"
                  className="self-center max-w-full aspect-[1.39] px-4 object-cover"
                />
              </div>
            </div>
          </div>
          <div className="hidden md:flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-zinc-900 max-md:mt-6">
              <div className="flex flex-col py-8 bg-white rounded-3xl shadow">
                <div className="flex flex-col px-3 max-md:px-2">
                  <div className="text-3xl leading-10">Workers</div>
                  <div className="mt-4 text-sm leading-6">
                    Are you a hardworking individual looking to simplify your
                    tax filing process? At Chatfilers, we recognise the unique
                    needs of workers like you.
                  </div>
                  <a
                    href="#"
                    className="flex gap-2 justify-center self-end px-4 py-3 mt-2.5 text-base leading-7 text-red-700 whitespace-nowrap rounded bg-black bg-opacity-0"
                  >
                    <div className="grow my-auto">Learn More</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d6e1c77a67dc2e24dd345165b2b73fc82527e4b08a55cd8615df001efb82795?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&"
                      className="w-5 aspect-square"
                    />
                  </a>
                </div>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f9282cb23bf6c227975a1065ed29654b097f719cf86e39d0294cd9f4c0111817?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9282cb23bf6c227975a1065ed29654b097f719cf86e39d0294cd9f4c0111817?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9282cb23bf6c227975a1065ed29654b097f719cf86e39d0294cd9f4c0111817?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9282cb23bf6c227975a1065ed29654b097f719cf86e39d0294cd9f4c0111817?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9282cb23bf6c227975a1065ed29654b097f719cf86e39d0294cd9f4c0111817?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9282cb23bf6c227975a1065ed29654b097f719cf86e39d0294cd9f4c0111817?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9282cb23bf6c227975a1065ed29654b097f719cf86e39d0294cd9f4c0111817?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9282cb23bf6c227975a1065ed29654b097f719cf86e39d0294cd9f4c0111817?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&"
                  className="self-center max-w-full aspect-[1.39] px-4 object-cover"
                />
              </div>
              <div className="flex flex-col pt-10 pb-6 mt-6 bg-white rounded-3xl shadow">
                <div className="flex flex-col px-3 max-md:px-2">
                  <div className="text-3xl leading-10">Self-Employed</div>
                  <div className="mt-6 text-sm leading-6">
                    Being your own boss comes with unique challenges, especially
                    when it comes to managing your taxes.
                  </div>
                  <a
                    href="#"
                    className="flex gap-2 justify-center self-end px-4 py-3 mt-1.5 text-base leading-7 text-red-700 whitespace-nowrap rounded bg-black bg-opacity-0"
                  >
                    <div className="grow my-auto">Learn More</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d6e1c77a67dc2e24dd345165b2b73fc82527e4b08a55cd8615df001efb82795?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&"
                      className="w-5 aspect-square"
                    />
                  </a>
                </div>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/239d890341eb283958e41132eac4a0983cf3f08d52d67f8fabcabca489e9d4b4?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/239d890341eb283958e41132eac4a0983cf3f08d52d67f8fabcabca489e9d4b4?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/239d890341eb283958e41132eac4a0983cf3f08d52d67f8fabcabca489e9d4b4?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/239d890341eb283958e41132eac4a0983cf3f08d52d67f8fabcabca489e9d4b4?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/239d890341eb283958e41132eac4a0983cf3f08d52d67f8fabcabca489e9d4b4?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/239d890341eb283958e41132eac4a0983cf3f08d52d67f8fabcabca489e9d4b4?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/239d890341eb283958e41132eac4a0983cf3f08d52d67f8fabcabca489e9d4b4?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/239d890341eb283958e41132eac4a0983cf3f08d52d67f8fabcabca489e9d4b4?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&"
                  className="self-center max-w-full aspect-[1.39] px-4 object-cover"
                />
              </div>
            </div>
          </div>
          <div className="hidden md:flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col py-10 w-full bg-white rounded-3xl shadow text-zinc-900 max-md:mt-6">
              <div className="flex flex-col px-3 max-md:px-2">
                <div className="text-3xl leading-10">Investors</div>
                <div className="mt-4 text-sm leading-6">
                  Investing can be both rewarding and complex, especially when
                  it comes to managing your taxes.
                </div>
                <a
                  href="#"
                  className="flex gap-2 justify-center self-end px-4 py-3 mt-5 text-base leading-7 text-red-700 whitespace-nowrap rounded bg-black bg-opacity-0"
                >
                  <div className="grow my-auto">Learn More</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d6e1c77a67dc2e24dd345165b2b73fc82527e4b08a55cd8615df001efb82795?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&"
                    className="w-5 aspect-square"
                  />
                </a>
              </div>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ed613c64aa11c645eae8640dc2d1942d3ad5418cd39e5264ae4f4e8d5899f1a1?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed613c64aa11c645eae8640dc2d1942d3ad5418cd39e5264ae4f4e8d5899f1a1?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed613c64aa11c645eae8640dc2d1942d3ad5418cd39e5264ae4f4e8d5899f1a1?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed613c64aa11c645eae8640dc2d1942d3ad5418cd39e5264ae4f4e8d5899f1a1?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed613c64aa11c645eae8640dc2d1942d3ad5418cd39e5264ae4f4e8d5899f1a1?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed613c64aa11c645eae8640dc2d1942d3ad5418cd39e5264ae4f4e8d5899f1a1?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed613c64aa11c645eae8640dc2d1942d3ad5418cd39e5264ae4f4e8d5899f1a1?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed613c64aa11c645eae8640dc2d1942d3ad5418cd39e5264ae4f4e8d5899f1a1?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&"
                className="self-center max-w-full aspect-[1.39] px-4 object-cover"
              />
            </div>

            <div className="flex flex-col pt-10 pb-6 mt-6 bg-white rounded-3xl shadow">
              <div className="flex flex-col px-3 max-md:px-2">
                <div className="text-3xl leading-10">Newcomers</div>
                <div className="mt-4 text-sm leading-6">
                  Embarking on a new journey in Canada is both exciting and full
                  of adjustments. As you settle into your new life, managing
                  your taxes doesn't have to be a challenge.
                </div>
                <a
                  href="#"
                  className="flex gap-2 justify-center self-end px-4 py-3 mt-5 text-base leading-7 text-red-700 whitespace-nowrap rounded bg-black bg-opacity-0"
                >
                  <div className="grow my-auto">Learn More</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d6e1c77a67dc2e24dd345165b2b73fc82527e4b08a55cd8615df001efb82795?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&"
                    className="w-5 aspect-square"
                  />
                </a>
              </div>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/74d4dd82633e247d2a686f16a2a4ef1990bd351946edd669991a52ea2103db94?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/74d4dd82633e247d2a686f16a2a4ef1990bd351946edd669991a52ea2103db94?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/74d4dd82633e247d2a686f16a2a4ef1990bd351946edd669991a52ea2103db94?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/74d4dd82633e247d2a686f16a2a4ef1990bd351946edd669991a52ea2103db94?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/74d4dd82633e247d2a686f16a2a4ef1990bd351946edd669991a52ea2103db94?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/74d4dd82633e247d2a686f16a2a4ef1990bd351946edd669991a52ea2103db94?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/74d4dd82633e247d2a686f16a2a4ef1990bd351946edd669991a52ea2103db94?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/74d4dd82633e247d2a686f16a2a4ef1990bd351946edd669991a52ea2103db94?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&"
                className="self-center max-w-full aspect-[1.39] px-4 object-cover"
              />
            </div>
          </div>
          <AccordionContainer />
        </div>
      </div>
    </>
  );
}

export default TaxPayerSnippet;
