import React from 'react'
import Layout from '../layout/Layout'

function Pricing() {
  return (
    <Layout>
          <section className="py-20 relative mt-8">
      <div className="container mx-auto">
        <div className="mx-auto max-w-2xl sm:text-center">
          <span className="font-medium text-gray-400 tracking-widest">our price</span>
          <h2 className="md:text-5xl text-3xl font-medium tracking-tight mt-7">Price Plans</h2>
          <div className="w-10 mx-auto mt-5 bg-gradient-to-r from-red-500 to-red-700 h-[2px]"></div>
          <p className="mt-6 text-xl/8 text-gray-600">Choose the plan that suits your needs best and enjoy the creative process of brainstorming the new project of yours.</p>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 2xl:px-28 mt-20">
          {/* Basic Plan */}
          <div className="flex flex-col border border-gray-300 rounded-xl overflow-hidden">
            <div className="text-center pt-10">
              <h5 className="text-xl font-semibold">Basic</h5>
              <h2 className="text-5xl mt-8 mb-3 items-center align-middle">
                <sup className="text-2xl align-middle">$</sup>49
              </h2>
              <span>per user, per month</span>
            </div>

            <div className="p-10">
              <ul className="mb-10 text-center">
                <li className="my-4">
                  <h5 className="font-medium">10k Visitors/mo</h5>
                </li>
                <li>
                  <h5 className="font-medium">10 Funnels, 50 Pages</h5>
                </li>
                <li className="my-4">
                  <h5 className="font-medium">Unlimited Transactions</h5>
                </li>
                <li>
                  <h5 className="font-medium">Analytics</h5>
                </li>
                <li className="my-4">
                  <h5 className="font-medium">Integrations</h5>
                </li>
                <li className="my-4">
                  <h5 className="font-medium text-gray-500 line-through">Audience Data</h5>
                </li>
                <li className="my-4">
                  <h5 className="font-medium text-gray-500 line-through">Premium Templates</h5>
                </li>
                <li className="my-4">
                  <h5 className="font-medium text-gray-500 line-through">White Labeling</h5>
                </li>
              </ul>
              <div className="flex justify-center">
                <a href="#" className="py-3 px-6 font-medium border rounded-md border-red-700 text-red-700 hover:bg-red-700 hover:text-white transition-all duration-500">
                  Get Basic
                </a>
              </div>
            </div>
          </div>

          {/* Professional Plan */}
          <div className="relative z-20">
            <div className="absolute top-0 inset-x-0">
              <div className="flex justify-center">
                <span className="text-xs font-medium uppercase border border-gray-700 text-white bg-black px-2 py-1 rounded-md -mt-3">most popular</span>
              </div>
            </div>
            <div className="group">
              <div className="border rounded-xl border-gray-300 bg-white">
                <div className="text-center">
                  <div className="flex flex-col">
                    <div className="text-center pt-10">
                      <h5 className="text-xl font-semibold">Professional</h5>
                      <h2 className="text-5xl mt-8 mb-3 items-center align-middle">
                        <sup className="text-2xl align-middle">$</sup>69
                      </h2>
                      <span>per user, per month</span>
                    </div>

                    <div className="p-10">
                      <ul className="mb-10 text-center">
                        <li className="my-4">
                          <h5 className="font-medium">10k Visitors/mo</h5>
                        </li>
                        <li>
                          <h5 className="font-medium">10 Funnels, 50 Pages</h5>
                        </li>
                        <li className="my-4">
                          <h5 className="font-medium">Unlimited Transactions</h5>
                        </li>
                        <li>
                          <h5 className="font-medium">Analytics</h5>
                        </li>
                        <li className="my-4">
                          <h5 className="font-medium">Integrations</h5>
                        </li>
                        <li className="my-4">
                          <h5 className="font-medium">Audience Data</h5>
                        </li>
                        <li className="my-4">
                          <h5 className="font-medium">Premium Templates</h5>
                        </li>
                        <li className="my-4">
                          <h5 className="font-medium text-gray-500 line-through">White Labeling</h5>
                        </li>
                      </ul>
                      <div className="flex justify-center">
                        <a href="#" className="py-3 px-6 font-medium border rounded-md border-red-700 bg-red-700 text-white hover:bg-red-700-800">
                          Get Pro
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-neutral-300/30 rounded-xl h-full left-0 top-0 w-full translate-x-2 translate-y-2 -z-10"></div>
            </div>
          </div>

          {/* Ultimate Plan */}
          <div className="flex flex-col border border-gray-300 rounded-xl overflow-hidden">
            <div className="text-center pt-10">
              <h5 className="text-xl font-semibold">Ultimate</h5>
              <h2 className="text-5xl mt-8 mb-3 items-center align-middle">
                <sup className="text-2xl align-middle">$</sup>89
              </h2>
              <span>per user, per month</span>
            </div>

            <div className="p-10">
              <ul className="mb-10 text-center">
                <li className="my-4">
                  <h5 className="font-medium">10k Visitors/mo</h5>
                </li>
                <li>
                  <h5 className="font-medium">10 Funnels, 50 Pages</h5>
                </li>
                <li className="my-4">
                  <h5 className="font-medium">Unlimited Transactions</h5>
                </li>
                <li>
                  <h5 className="font-medium">Analytics</h5>
                </li>
                <li className="my-4">
                  <h5 className="font-medium">Integrations</h5>
                </li>
                <li className="my-4">
                  <h5 className="font-medium">Audience Data</h5>
                </li>
                <li className="my-4">
                  <h5 className="font-medium">Premium Templates</h5>
                </li>
                <li className="my-4">
                  <h5 className="font-medium">White Labeling</h5>
                </li>
              </ul>
              <div className="flex justify-center">
                <a href="#" className="py-3 px-6 font-medium border rounded-md border-red-700 text-red-700 hover:bg-red-700 hover:text-white transition-all duration-500">
                  Get Ultimate
                </a>
              </div>
            </div>
          </div>
        </div>
        <h5 className="text-center font-medium mt-14">Interested in a custom plan? <a href="#" className="text-red-700">Get in touch</a></h5>
      </div>
    </section>
    </Layout>
  )
}

export default Pricing