import React from "react";

function HomePrice() {
  return (
    <>
      <section className="md:py-20 mt-10 ">
        <div className="container mx-auto px-5 lg:px-20">
          <div className="mx-auto ">
            <h2 className="md:text-4xl text-2xl font-medium tracking-tight mb-8">
              Do It Yourself!
            </h2>
            <p className="mt-6 text-xl/8 text-gray-600">
              This is for you!! File your Tax for a coffee, Just{" "}
              <strong>1.49</strong> Cad plus Tax. <br /> On this platform, you
              are going to file your tax by yourself and submit your file by
              your Netfile Code from CRA.
              <br />
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
                $1.49
                <sub className="text-sm font-medium">
                  Per return <span>(excl. tax)</span>{" "}
                </sub>
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
                    <span >Upto 1 return per plan</span>
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
                    <span>Covers employment, unemployment, & pension Income.
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
                href="/pricing"
              >
                Explore Premium
              </a>
            </section>

            <section className="relative flex flex-col rounded-xl p-6 shadow-lg bg-red-700">
              <div className="absolute inset-0 left-auto right-0 lg:-right-7 -top-3">
                <a
                  className="rounded-lg py-2 px-3 text-xs font-semibold bg-black text-white hover:text-black hover:bg-white mt-6 transition-all duration-500"
                  aria-label="Get started with the Starter plan"
                  href="/pricing"
                >
                  Best choice
                </a>
              </div>
              <h3 className="text-sm/snug font-semibold text-white uppercase">
                Plus
              </h3>
              <p className="relative mt-5 text-3xl tracking-tight text-gray-900">
                $29.99
                <sub className="text-sm font-medium">
                  Per 2 returns <span>(excl. tax)</span>
                </sub>
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
                    <span>
                      Include everything in basic plan
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
                    <span>
                      Chat Support for Tax & Technical issues
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
                    <span>
                      Easy to use with expert chat support
                    </span>
                  </li>
                </ul>
              </div>
              <a
                className="inline-flex justify-center rounded-lg border py-2 px-3 text-sm font-semibold bg-white hover:text-white hover:bg-red-700 mt-6 transition-all duration-500 text-gray-900"
                aria-label="Get started with the Starter plan"
                href="/pricing"
              >
                Explore Premium
              </a>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePrice;
