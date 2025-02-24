import React from "react";
import Layout from "../layout/Layout";
import NewPricingSnip from "../components/homeNew/NewPricingSnip";

function Pricing() {
  return (
    <Layout>
      <NewPricingSnip />

      <section className="py-20 relative mt-8">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl sm:text-center">
            <span className="font-medium text-gray-400 tracking-widest">
              Price Plans
            </span>
            <h2 className="md:text-5xl text-3xl font-medium tracking-tight mt-7">
              Review & File
            </h2>
            <div className="w-10 mx-auto mt-5 bg-gradient-to-r from-red-500 to-red-700 h-[2px]"></div>
            <p className="mt-6 text-xl/8 text-gray-600">
              File your tax at your convenience even though you don't have any
              expertise in it, because we got you covered. Our expert team will
              review your file and provide you with expert knowledge,
              suggestions and tips to save your taxes.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 2xl:px-28 mt-20">
            {/* Pro Plan */}
            <div className="flex flex-col border border-gray-300 rounded-xl overflow-hidden">
              <div className="text-center pt-10">
                <h5 className="text-xl font-semibold">Pro</h5>
                <h2 className="text-5xl mt-8 mb-3 items-center align-middle">
                  <sup className="text-2xl align-middle">$</sup>49.99
                </h2>
                <span>(excl. Tax)</span>
              </div>

              <div className="py-8 px-10">
                <ul className="mb-8 text-start ">
                  <li className="my-2 ">
                    <h5 className="font-normal text-black text-lg">
                      Book a 20 min session with us after filling all the
                      information, we will review it and guide you through the
                      submission process.
                    </h5>
                  </li>
                  <li>
                    <h5 className="font-normal text-black text-lg">
                      One return per plan
                    </h5>
                  </li>
                  <li className="my-2">
                    <h5 className="font-normal text-black text-lg">
                      Ideal for family and Beginners
                    </h5>
                  </li>
                  <li className="my-2">
                    <h5 className="font-normal text-black text-lg">
                      Include everything in the “Do it yourself” plan + review
                      by a tax expert.
                    </h5>
                  </li>
                  <li className="my-2">
                    <h5 className="font-normal text-black text-lg">
                      Chat Support for Tax & Technical Issues.
                    </h5>
                  </li>
                  <li className="my-2">
                    <h5 className="font-normal text-black text-lg">
                      Customized Tax Savings Tips for your scenario.
                    </h5>
                  </li>
                  <li className="my-2">
                    <h5 className="font-normal text-black text-lg">
                      Stocks, Capital Gains/Losses & Investments
                    </h5>
                  </li>
                  <li className="my-2">
                    <h5 className="font-normal text-black text-lg">
                      Pension Income
                    </h5>
                  </li>
                  <li className="my-2">
                    <h5 className="font-normal text-black text-lg">
                      Unlimited T4 and other slips
                    </h5>
                  </li>
                  <li className="my-2">
                    <h5 className="font-normal text-black text-lg">
                      Audit Protection
                    </h5>
                  </li>
                  <li className="my-2">
                    <h5 className="font-normal text-black text-lg">
                      Property Disposal
                    </h5>
                  </li>
                  <li className="my-2">
                    <h5 className="font-normal text-gray-500 text-lg line-through">
                      Rental Income & foreign Income
                    </h5>
                  </li>
                  <li className="my-2">
                    <h5 className="font-normal text-gray-500  text-lg line-through">
                      Business & Self- Employment Income
                    </h5>
                  </li>
                </ul>
                <div className="flex justify-center">
                  <a
                    href="https://app.chatfiler.ca/2023"
                    className="py-3 px-6 font-medium border rounded-md border-red-700 text-red-700 hover:bg-red-700 hover:text-white transition-all duration-500"
                  >
                    EXPLORE PRO
                  </a>
                </div>
              </div>
            </div>

            {/* Professional Plan */}
            <div className="relative z-20">
              <div className="absolute top-0 inset-x-0">
                <div className="flex justify-center">
                  <span className="text-xs font-medium uppercase border border-gray-700 text-white bg-black px-2 py-1 rounded-md -mt-3">
                    most popular
                  </span>
                </div>
              </div>
              <div className="group">
                <div className="border rounded-xl border-gray-300 bg-white">
                  <div className="text-center">
                    <div className="flex flex-col">
                      <div className="text-center pt-10">
                        <h5 className="text-xl font-semibold">Premium</h5>
                        <h2 className="text-5xl mt-8 mb-3 items-center align-middle">
                          <sup className="text-2xl align-middle">$</sup>99.99
                        </h2>
                        <span>(excl. Tax)</span>
                      </div>

                      <div className="p-10">
                        <ul className="mb-8 text-start">
                          <li className="my-2">
                            <h5 className="font-normal text-black text-lg">
                              Book a 30 min session with us after filling all
                              the information, we will review it and guide you
                              through the submission process.
                            </h5>
                          </li>
                          <li>
                            <h5 className="font-normal text-black text-lg">
                              One return per plan
                            </h5>
                          </li>
                          <li className="my-2">
                            <h5 className="font-normal text-black text-lg">
                              Ideal for family and Beginners
                            </h5>
                          </li>
                          <li>
                            <h5 className="font-normal text-black text-lg">
                              Include everything in the “Do it yourself” plan +
                              review by a tax expert.
                            </h5>
                          </li>
                          <li className="my-2">
                            <h5 className="font-normal text-black text-lg">
                              Chat Support for Tax & Technical Issues.
                            </h5>
                          </li>
                          <li className="my-2">
                            <h5 className="font-normal text-black text-lg">
                              Customized Tax Savings Tips for your scenario.
                            </h5>
                          </li>
                          <li className="my-2">
                            <h5 className="font-normal text-black text-lg">
                              Stocks, Capital Gains/Losses & Investments
                            </h5>
                          </li>
                          <li className="my-2">
                            <h5 className="font-normal text-black text-lg">
                              Pension Income
                            </h5>
                          </li>
                          <li className="my-2">
                            <h5 className="font-normal text-black text-lg">
                              Unlimited T4 and other slips
                            </h5>
                          </li>
                          <li className="my-2">
                            <h5 className="font-normal text-black text-lg">
                              Audit Protection
                            </h5>
                          </li>
                          <li className="my-2">
                            <h5 className="font-normal text-black text-lg">
                              Property Disposal
                            </h5>
                          </li>
                          <li className="my-2">
                            <h5 className="font-normal text-black text-lg ">
                              Rental Income & foreign Income
                            </h5>
                          </li>
                          <li className="my-2">
                            <h5 className="font-normal text-lg text-gray-500 line-through">
                              Business & Self- Employment Income
                            </h5>
                          </li>
                        </ul>
                        <div className="flex justify-center">
                          <a
                            href="https://app.chatfiler.ca/2023"
                            className="py-3 px-6 font-medium border rounded-md border-red-700 bg-red-700 text-white hover:bg-red-700-800"
                          >
                            EXPLORE PREMIUM
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ultimate Plan */}
            <div className="flex flex-col border border-gray-300 rounded-xl overflow-hidden">
              <div className="text-center pt-10">
                <h5 className="text-xl font-semibold">Advanced</h5>
                <h2 className="text-5xl mt-8 mb-3 items-center align-middle">
                  <sup className="text-2xl align-middle">$</sup>129
                </h2>
                <span>(excl. Tax)</span>
              </div>

              <div className="p-10">
                <ul className="mb-8 text-start">
                  <li className="my-2">
                    <h5 className="font-normal text-black text-lg">
                      Book a 30 min session with us after filling all the
                      information, we will review it and guide you through the
                      submission process.
                    </h5>
                  </li>
                  <li>
                    <h5 className="font-normal text-black text-lg">
                      One return per plan
                    </h5>
                  </li>
                  <li className="my-2">
                    <h5 className="font-normal text-black text-lg">
                      Ideal for family and Beginners
                    </h5>
                  </li>
                  <li>
                    <h5 className="font-normal text-black text-lg">
                      Include everything in the “Do it yourself” plan + review
                      by a tax expert.
                    </h5>
                  </li>
                  <li className="my-2">
                    <h5 className="font-normal text-black text-lg">
                      Chat Support for Tax & Technical Issues.
                    </h5>
                  </li>
                  <li className="my-2">
                    <h5 className="font-normal text-black text-lg">
                      Customized Tax Savings Tips for your scenario.
                    </h5>
                  </li>
                  <li className="my-2">
                    <h5 className="font-normal text-black text-lg">
                      Stocks, Capital Gains/Losses & Investments
                    </h5>
                  </li>
                  <li className="my-2">
                    <h5 className="font-normal text-black text-lg">
                      Pension Income
                    </h5>
                  </li>
                  <li className="my-2">
                    <h5 className="font-normal text-black text-lg">
                      Unlimited T4 and other slips
                    </h5>
                  </li>
                  <li className="my-2">
                    <h5 className="font-normal text-black text-lg">
                      Audit Protection
                    </h5>
                  </li>
                  <li className="my-2">
                    <h5 className="font-normal text-black text-lg">
                      Property Disposal
                    </h5>
                  </li>
                  <li className="my-2">
                    <h5 className="font-normal text-black text-lg ">
                      Rental Income & foreign Income
                    </h5>
                  </li>
                  <li className="my-2">
                    <h5 className="font-normal text-black text-lg">
                      Business & Self- Employment Income
                    </h5>
                  </li>
                </ul>
                <div className="flex justify-center">
                  <a
                    href="https://app.chatfiler.ca/2023"
                    className="py-3 px-6 font-medium text-lg border rounded-md border-red-700 text-red-700 hover:bg-red-700 hover:text-white transition-all duration-500"
                  >
                    ADVANCED PLAN
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <h5 className="text-center font-medium mt-14">Interested in a custom plan? <a href="#" className="text-red-700">Get in touch</a></h5> */}
        </div>
      </section>
    </Layout>
  );
}

export default Pricing;
