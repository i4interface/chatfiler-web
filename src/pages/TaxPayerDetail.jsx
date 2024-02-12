import React from "react";
import Layout from "../layout/Layout";
import KeyBenefitsList from "../components/taxpayer/KeyBenefitsList";
import BenefitsDetails from "../components/taxpayer/BenefitsDetails";
import Dropdown from "../components/taxpayer/Dropdown";
import Support from "../components/taxpayer/Support";

function TaxPayerDetail() {
  return (
    <Layout>
      <div className="flex justify-center items-center px-16 md:py-12 bg-white max-md:px-5">
        <div className="mt-1.5 w-full max-w-[1500px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col items-end lg:items-center ">
            <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-base leading-7 text-gray-600 whitespace-nowrap">
                <div className="flex gap-2 justify-between text-zinc-900">
                  <div className="grow">Tax Payers</div>
                  <div className="my-auto">&gt;</div>
                  <div className="grow">Taxpayer Students</div>
                </div>
                <div className="mt-16 lg:text-5xl text-3xl font-medium text-zinc-900 max-md:mt-10 border-b-[1px] border-gray-300 w-full md:w-[80%]">
                  Tax Payers
                </div>
                <Dropdown className="md:hidden" />
                <ul className="hidden md:block">
                  <li>
                    <div className="flex flex-col justify-center mt-3 text-red-700 bg-black bg-opacity-0 border-b-[1px] border-gray-300 w-[80%]">
                      <a
                        href="#"
                        className="justify-center items-start py-5 pr-16 pl-4 font-bold bg-black bg-opacity-0 max-md:pr-5 hover:text-red-700 cursor-pointer"
                      >
                        Students
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-col justify-center mt-2.5 bg-black bg-opacity-0 border-b-[1px] border-gray-300 w-[80%]">
                      <div className="justify-center items-start py-5 pr-16 pl-4 bg-black bg-opacity-0 max-md:pr-5 hover:text-red-700 cursor-pointer">
                        Workers
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-col justify-center mt-3 bg-black bg-opacity-0 border-b-[1px] border-gray-300 w-[80%]">
                      <div className="justify-center items-start py-5 pr-16 pl-4 bg-black bg-opacity-0 max-md:pr-5 hover:text-red-700 cursor-pointer">
                        Newcomers
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-col justify-center mt-3 bg-black bg-opacity-0 border-b-[1px] border-gray-300 w-[80%]">
                      <div className="justify-center items-start py-5 pr-16 pl-4 bg-black bg-opacity-0 max-md:pr-5 hover:text-red-700 cursor-pointer">
                        Self-Employed
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-col justify-center mt-3 bg-black bg-opacity-0 border-b-[1px] border-gray-300 w-[80%]">
                      <div className="justify-center items-start py-5 pr-16 pl-4 bg-black bg-opacity-0 max-md:pr-5 hover:text-red-700 cursor-pointer">
                        Investors
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row h-full gap-4 w-full items-start lg:items-center">
              <div className="flex flex-col ml-5 w-[50%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dab1914a16cb60fd2682724446edaff28aef11cb34a2956c5cafd67000510f5f?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dab1914a16cb60fd2682724446edaff28aef11cb34a2956c5cafd67000510f5f?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dab1914a16cb60fd2682724446edaff28aef11cb34a2956c5cafd67000510f5f?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dab1914a16cb60fd2682724446edaff28aef11cb34a2956c5cafd67000510f5f?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dab1914a16cb60fd2682724446edaff28aef11cb34a2956c5cafd67000510f5f?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dab1914a16cb60fd2682724446edaff28aef11cb34a2956c5cafd67000510f5f?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dab1914a16cb60fd2682724446edaff28aef11cb34a2956c5cafd67000510f5f?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dab1914a16cb60fd2682724446edaff28aef11cb34a2956c5cafd67000510f5f?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&"
                  className=" w-full aspect-square max-md:max-w-[300px]"
                />
              </div>
              <div className="flex flex-col ml-5 w-full lg:w-[50%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto text-zinc-900 max-md:mt-10">
                  <div className="text-3xl leading-10">Taxpayer Students</div>
                  <div className="mt-7 text-sm leading-6">
                    Are you a student navigating the complexities of filing your
                    taxes? Here we are! We understand that as a student, your
                    financial situation is unique. Our Taxpayer Student page is
                    tailored to provide you with the guidance and support you
                    need for a stress-free tax filing experience.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <KeyBenefitsList />
      <BenefitsDetails />
      <Support />
    </Layout>
  );
}

export default TaxPayerDetail;
