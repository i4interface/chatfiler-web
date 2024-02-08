import React from 'react'

function HomePrice() {
  return (
    <>
    <section className="py-20 mt-10">
      <div className="container mx-auto px-20">
        <div className="mx-auto max-w-xl sm:text-center">
          <h2 className="md:text-4xl text-2xl font-medium tracking-tight mb-8">
            Start today, with a free or premium plan, you choose
          </h2>
          <p className="mt-6 text-xl/8 text-gray-600">
            With lots of unique and useful features, you can easily manage your wallet without any problem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 2xl:px-[380px] gap-7 mt-16">
          <section className="flex flex-col overflow-hidden rounded-xl p-6 shadow-lg bg-white">
            <h3 className="text-sm font-semibold text-red-700 uppercase">basic plan</h3>
            <p className="relative mt-5 text-3xl tracking-tight text-gray-900">
              $0 <sub className="text-sm font-medium">Per month</sub>
            </p>
            <p className="mt-5 text-sm text-gray-700">
              Joy horrible moreover man feelings own shy. Request norland neither mistake for yet. Between the for morning assured.
            </p>
            <hr className="mt-6" />
            <div className="mt-6">
              <ul role="list" className="-my-2 text-sm text-gray-700">
                <li className="flex py-2">
                  {/* svg icon */}
                  <svg className="w-5 h-5 fill-red-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle className="stroke-red-700" cx={12} cy={12} r={10} strokeWidth="1.5" />
                    <path className="stroke-white" d="M8.5 12.5L10.5 14.5L15.5 9.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="ml-4">Customer Support</span>
                </li>
                <li className="flex py-2">
                  {/* svg icon */}
                  <svg className="w-5 h-5 fill-red-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle className="stroke-red-700" cx={12} cy={12} r={10} strokeWidth="1.5" />
                    <path className="stroke-white" d="M8.5 12.5L10.5 14.5L15.5 9.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="ml-4">Free User Account</span>
                </li>
                <li className="flex py-2">
                  {/* svg icon */}
                  <svg className="w-5 h-5 fill-red-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle className="stroke-red-500" cx={12} cy={12} r={10} strokeWidth="1.5" />
                    <path className="stroke-white" d="M14.5 9.5L9.5 14.5M9.49998 9.49998L14.5 14.5" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <span className="ml-4 text-slate-400">Monthly Reports</span>
                </li>
                <li className="flex py-2">
                  {/* svg icon */}
                  <svg className="w-5 h-5 fill-red-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle className="stroke-red-500" cx={12} cy={12} r={10} strokeWidth="1.5" />
                    <path className="stroke-white" d="M14.5 9.5L9.5 14.5M9.49998 9.49998L14.5 14.5" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <span className="ml-4 text-slate-400">Multiple Devices</span>
                </li>
              </ul>
            </div>
            <a
              className="inline-flex justify-center rounded-lg border py-2 px-3 text-sm font-semibold text-slate-400 hover:text-white hover:bg-red-700 mt-6 transition-all duration-500"
              aria-label="Get started with the Starter plan"
              href="#"
            >
              Join for free
            </a>
          </section>

          <section className="relative flex flex-col rounded-xl p-6 shadow-lg bg-red-700">
            <div className="absolute inset-0 left-auto -right-7 -top-3">
              <a
                className="rounded-lg py-2 px-3 text-xs font-semibold bg-black text-white hover:text-black hover:bg-white mt-6 transition-all duration-500"
                aria-label="Get started with the Starter plan"
                href="#"
              >
                Best choice
              </a>
            </div>
            <h3 className="text-sm/snug font-semibold text-white uppercase">premium plan</h3>
            <p className="relative mt-5 text-3xl tracking-tight text-white">
              $49 <sub className="text-sm font-medium">Per month</sub>
            </p>
            <p className="mt-5 text-sm text-white">
              On even feet time have an no at. Relation so in confined smallest children unpacked delicate. Why sir end believe.
            </p>
            <hr className="mt-6" />
            <div className="mt-6">
              <ul role="list" className="-my-2 text-sm text-white">
                <li className="flex py-2">
                  {/* svg icon */}
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle className="stroke-white" cx={12} cy={12} r={10} strokeWidth="1.5" />
                    <path className="stroke-red-700" d="M8.5 12.5L10.5 14.5L15.5 9.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="ml-4">Customer Support</span>
                </li>
                <li className="flex py-2">
                  {/* svg icon */}
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle className="stroke-white" cx={12} cy={12} r={10} strokeWidth="1.5" />
                    <path className="stroke-red-700" d="M8.5 12.5L10.5 14.5L15.5 9.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="ml-4">Upto 10 Users</span>
                </li>
                <li className="flex py-2">
                  {/* svg icon */}
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle className="stroke-white" cx={12} cy={12} r={10} strokeWidth="1.5" />
                    <path className="stroke-red-700" d="M8.5 12.5L10.5 14.5L15.5 9.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="ml-4">Monthly Reports</span>
                </li>
                <li className="flex py-2">
                  {/* svg icon */}
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle className="stroke-white" cx={12} cy={12} r={10} strokeWidth="1.5" />
                    <path className="stroke-red-700" d="M8.5 12.5L10.5 14.5L15.5 9.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="ml-4">Multiple Devices Supported</span>
                </li>
              </ul>
            </div>
            <a
              className="inline-flex justify-center rounded-lg border py-2 px-3 text-sm font-semibold bg-white hover:text-white hover:bg-red-700 mt-6 transition-all duration-500 text-gray-900"
              aria-label="Get started with the Starter plan"
              href="#"
            >
              Get the premium
            </a>
          </section>
        </div>
      </div>
    </section>

    </>
  )
}

export default HomePrice