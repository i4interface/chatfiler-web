import React from "react";
import Layout from "../layout/Layout";

function Pricing() {
  return (
    <Layout>
      <section className="md:py-20 mt-10 ">
        <div className="container mx-auto px-5 lg:px-20">
          <div className="mx-auto ">
            <h2 className="md:text-4xl text-2xl font-medium tracking-tight mb-8">
              Do It Yourself!
            </h2>
            <p className="mt-6 text-xl/8 text-gray-600">
              This is for you!! File your Tax at ease.<br />
              You will get easy access to all the slips from CRA if you already
              have an account with CRA. So, move forward and file your tax with
              ease.
            </p>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-7 mt-16">
            <section className="flex flex-col overflow-hidden rounded-xl p-6 shadow-lg bg-white">
              <h3 className="text-sm font-semibold text-red-700 uppercase">
                Basic
              </h3>
              <p className="relative mt-5 text-3xl tracking-tight text-gray-900">
              Pay What You Want 
                <p className="text-sm font-medium">
                even $0 
                </p>
              </p>
              {/* <p className="mt-5 text-sm text-gray-700">
                Joy horrible moreover man feelings own shy. Request norland
                neither mistake for yet. Between the for morning assured.
              </p> */}
              <hr className="mt-6" />
              <div className="mt-6">
                <ul role="list" className="-my-2 text-sm text-gray-700">
                  <li className="flex items-center py-2">
                    {/* svg icon */}
                    <svg
                      className="w-5 h-5 fill-red-700 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="stroke-red-700"
                        cx={12}
                        cy={12}
                        r={10}
                        strokeWidth="1.5"
                      />
                      <path
                        className="stroke-white"
                        d="M8.5 12.5L10.5 14.5L15.5 9.5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Upto 1 return per plan</span>
                  </li>

                  <li className="flex items-center py-2">
                    {/* svg icon */}
                    <svg
                      className="w-5 h-5 fill-red-700 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="stroke-red-700"
                        cx={12}
                        cy={12}
                        r={10}
                        strokeWidth="1.5"
                      />
                      <path
                        className="stroke-white"
                        d="M8.5 12.5L10.5 14.5L15.5 9.5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>
                      Covers employment, unemployment, & pension Income.
                    </span>
                  </li>

                  <li className="flex items-center py-2">
                    {/* svg icon */}
                    <svg
                      className="w-5 h-5 fill-red-700 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="stroke-red-700"
                        cx={12}
                        cy={12}
                        r={10}
                        strokeWidth="1.5"
                      />
                      <path
                        className="stroke-white"
                        d="M8.5 12.5L10.5 14.5L15.5 9.5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>AI powered Slip Scanning</span>
                  </li>

                  <li className="flex items-center py-2">
                    {/* svg icon */}
                    <svg
                      className="w-5 h-5 fill-red-700 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="stroke-red-700"
                        cx={12}
                        cy={12}
                        r={10}
                        strokeWidth="1.5"
                      />
                      <path
                        className="stroke-white"
                        d="M8.5 12.5L10.5 14.5L15.5 9.5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Video Tutorials</span>
                  </li>

                  <li className="flex items-center py-2">
                    {/* svg icon */}
                    <svg
                      className="w-5 h-5 fill-red-700 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="stroke-red-700"
                        cx={12}
                        cy={12}
                        r={10}
                        strokeWidth="1.5"
                      />
                      <path
                        className="stroke-white"
                        d="M8.5 12.5L10.5 14.5L15.5 9.5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Amend & Refile</span>
                  </li>

                  <li className="flex items-center py-2">
                    {/* svg icon */}
                    <svg
                      className="w-5 h-5 fill-red-700 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="stroke-red-700"
                        cx={12}
                        cy={12}
                        r={10}
                        strokeWidth="1.5"
                      />
                      <path
                        className="stroke-white"
                        d="M8.5 12.5L10.5 14.5L15.5 9.5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Save Data from Previous Years</span>
                  </li>

                  <li className="flex items-center py-2">
                    {/* svg icon */}
                    <svg
                      className="w-5 h-5 fill-red-700 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="stroke-red-700"
                        cx={12}
                        cy={12}
                        r={10}
                        strokeWidth="1.5"
                      />
                      <path
                        className="stroke-white"
                        d="M8.5 12.5L10.5 14.5L15.5 9.5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>
                      Tuition Fees, Medical Receipts, Donation Slips, Rent Paid
                    </span>
                  </li>

                  <li className="flex items-center py-2">
                    {/* svg icon */}
                    <svg
                      className="w-5 h-5 fill-red-700 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="stroke-red-700"
                        cx={12}
                        cy={12}
                        r={10}
                        strokeWidth="1.5"
                      />
                      <path
                        className="stroke-white"
                        d="M8.5 12.5L10.5 14.5L15.5 9.5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>
                      Unlock more features by upgrading to Chatfiler Plus
                    </span>
                  </li>
                </ul>
              </div>
              <a
                className="inline-flex justify-center rounded-lg border py-2 px-3 text-sm font-semibold text-slate-400 hover:text-white hover:bg-red-700 mt-6 transition-all duration-500"
                aria-label="Get started with the Starter plan"
                href="https://app.chatfiler.ca/2023"
              >
                EXPLORE BASIC
              </a>
            </section>

            <section className="relative flex flex-col rounded-xl p-6 shadow-lg bg-red-700">
              <div className="absolute inset-0 left-auto right-0 lg:-right-7 -top-3">
                <a
                  className="rounded-lg py-2 px-3 text-xs font-semibold bg-black text-white hover:text-black hover:bg-white mt-6 transition-all duration-500"
                  aria-label="Get started with the Starter plan"
                  href="https://app.chatfiler.ca/2023"
                >
                  Best choice
                </a>
              </div>
              <h3 className="text-sm/snug font-semibold text-white uppercase">
                Plus
              </h3>
              <p className="relative mt-5 text-3xl font-medium tracking-tight text-white">
                $29.99
                <p className="text-sm font-medium">
                  Per 2 returns <span>(excl. tax)</span>
                </p>
              </p>
              {/* <p className="mt-5 text-sm text-white">
                On even feet time have an no at. Relation so in confined
                smallest children unpacked delicate. Why sir end believe.
              </p> */}
              <hr className="mt-6" />
              <div className="mt-6">
                <ul role="list" className="-my-2 text-sm text-white">
                  <li className="flex items-center py-2">
                    {/* svg icon */}
                    <svg
                      className="w-5 h-5 fill-white mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="stroke-white"
                        cx={12}
                        cy={12}
                        r={10}
                        strokeWidth="1.5"
                      />
                      <path
                        className="stroke-red-700"
                        d="M8.5 12.5L10.5 14.5L15.5 9.5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Upto 2 returns per plan</span>
                  </li>
                  <li className="flex items-center py-2">
                    {/* svg icon */}
                    <svg
                      className="w-5 h-5 fill-white mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="stroke-white"
                        cx={12}
                        cy={12}
                        r={10}
                        strokeWidth="1.5"
                      />
                      <path
                        className="stroke-red-700"
                        d="M8.5 12.5L10.5 14.5L15.5 9.5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Include everything in basic plan</span>
                  </li>
                  <li className="flex items-center py-2">
                    {/* svg icon */}
                    <svg
                      className="w-5 h-5 fill-white mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="stroke-white"
                        cx={12}
                        cy={12}
                        r={10}
                        strokeWidth="1.5"
                      />
                      <path
                        className="stroke-red-700"
                        d="M8.5 12.5L10.5 14.5L15.5 9.5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Mostly ideal for families</span>
                  </li>
                  <li className="flex items-center py-2">
                    {/* svg icon */}
                    <svg
                      className="w-5 h-5 fill-white mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="stroke-white"
                        cx={12}
                        cy={12}
                        r={10}
                        strokeWidth="1.5"
                      />
                      <path
                        className="stroke-red-700"
                        d="M8.5 12.5L10.5 14.5L15.5 9.5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Audit Assistance</span>
                  </li>
                  <li className="flex items-center py-2">
                    {/* svg icon */}
                    <svg
                      className="w-5 h-5 fill-white mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="stroke-white"
                        cx={12}
                        cy={12}
                        r={10}
                        strokeWidth="1.5"
                      />
                      <path
                        className="stroke-red-700"
                        d="M8.5 12.5L10.5 14.5L15.5 9.5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Chat Support for Tax & Technical issues</span>
                  </li>
                  <li className="flex items-center py-2">
                    {/* svg icon */}
                    <svg
                      className="w-5 h-5 fill-white mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="stroke-white"
                        cx={12}
                        cy={12}
                        r={10}
                        strokeWidth="1.5"
                      />
                      <path
                        className="stroke-red-700"
                        d="M8.5 12.5L10.5 14.5L15.5 9.5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>
                      Unlimited Personalized Tax Support during the season
                    </span>
                  </li>
                  <li className="flex items-center py-2">
                    {/* svg icon */}
                    <svg
                      className="w-5 h-5 fill-white mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="stroke-white"
                        cx={12}
                        cy={12}
                        r={10}
                        strokeWidth="1.5"
                      />
                      <path
                        className="stroke-red-700"
                        d="M8.5 12.5L10.5 14.5L15.5 9.5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Know your refund before</span>
                  </li>
                  <li className="flex items-center py-2">
                    {/* svg icon */}
                    <svg
                      className="w-5 h-5 fill-white mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="stroke-white"
                        cx={12}
                        cy={12}
                        r={10}
                        strokeWidth="1.5"
                      />
                      <path
                        className="stroke-red-700"
                        d="M8.5 12.5L10.5 14.5L15.5 9.5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Year around email support</span>
                  </li>
                  <li className="flex items-center py-2">
                    {/* svg icon */}
                    <svg
                      className="w-5 h-5 fill-white mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="stroke-white"
                        cx={12}
                        cy={12}
                        r={10}
                        strokeWidth="1.5"
                      />
                      <path
                        className="stroke-red-700"
                        d="M8.5 12.5L10.5 14.5L15.5 9.5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Easy to use with expert chat support</span>
                  </li>
                </ul>
              </div>
              <a
                className="inline-flex justify-center rounded-lg border py-2 px-3 text-sm font-semibold bg-white hover:text-white hover:bg-red-700 mt-6 transition-all duration-500 text-gray-900"
                aria-label="Get started with the Starter plan"
                href="https://app.chatfiler.ca/2023"
              >
                EXPLORE PLUS
              </a>
            </section>
          </div>
        </div>
      </section>

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
                    <h5 className="font-normal text-black text-lg">One return per plan</h5>
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
                    <h5 className="font-normal text-black text-lg">Pension Income</h5>
                  </li>
                  <li className="my-2">
                    <h5 className="font-normal text-black text-lg">
                      Unlimited T4 and other slips
                    </h5>
                  </li>
                  <li className="my-2">
                    <h5 className="font-normal text-black text-lg">Audit Protection</h5>
                  </li>
                  <li className="my-2">
                    <h5 className="font-normal text-black text-lg">Property Disposal</h5>
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
                            <h5 className="font-normal text-black text-lg">One return per plan</h5>
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
                            <h5 className="font-normal text-black text-lg">Pension Income</h5>
                          </li>
                          <li className="my-2">
                            <h5 className="font-normal text-black text-lg">
                              Unlimited T4 and other slips
                            </h5>
                          </li>
                          <li className="my-2">
                            <h5 className="font-normal text-black text-lg">Audit Protection</h5>
                          </li>
                          <li className="my-2">
                            <h5 className="font-normal text-black text-lg">Property Disposal</h5>
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
                    <h5 className="font-normal text-black text-lg">One return per plan</h5>
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
                    <h5 className="font-normal text-black text-lg">Pension Income</h5>
                  </li>
                  <li className="my-2">
                    <h5 className="font-normal text-black text-lg">
                      Unlimited T4 and other slips
                    </h5>
                  </li>
                  <li className="my-2">
                    <h5 className="font-normal text-black text-lg">Audit Protection</h5>
                  </li>
                  <li className="my-2">
                    <h5 className="font-normal text-black text-lg">Property Disposal</h5>
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
