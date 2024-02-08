import React from 'react'

function Mission() {
  return (
    <>
        <div className="flex gap-0 justify-between items-start px-14 py-11 font-semibold text-red-700 bg-black rounded-[48px] max-md:flex-wrap max-md:px-5">
      <div className="flex gap-5 justify-between items-start self-start text-2xl leading-10 whitespace-nowrap">
        <div className="flex flex-col flex-1 self-start">
          <div className="flex gap-0 justify-between">
            <div className="grow justify-center px-8 py-10 bg-white rounded-2xl max-md:px-5">
              Empowerment
            </div>
            <div className="self-start mt-11 w-3.5 h-3.5 rounded-full bg-red-700 bg-opacity-90 max-md:mt-10" />
          </div>
          <div className="flex gap-0 justify-between mt-16 max-md:mt-10">
            <div className="grow justify-center px-12 py-10 bg-white rounded-2xl max-md:px-5">
              Innovation
            </div>
            <div className="self-start mt-10 w-3.5 h-3.5 rounded-full bg-red-700 bg-opacity-90" />
          </div>
        </div>
        <div className="self-end mt-9 bg-white h-[281px] w-[3px]" />
      </div>
      <div className="z-10 self-end mt-72 w-3.5 h-3.5 rounded-full bg-red-700 bg-opacity-90 max-md:mt-10" />
      <div className="flex flex-col self-end mt-16 text-2xl leading-10 whitespace-nowrap basis-0 max-md:mt-10">
        <div className="flex gap-5 justify-between py-10 bg-white rounded-2xl">
          <div className="self-start w-3.5 h-3.5 rounded-full bg-red-700 bg-opacity-90" />
          <div className="flex-auto">Collaboration</div>
        </div>
        <div className="justify-center px-10 py-9 mt-24 bg-white rounded-2xl max-md:px-5 max-md:mt-10">
          Authenticity
        </div>
      </div>
      <div className="flex flex-col flex-1 my-auto text-white max-md:max-w-full">
        <div className="ml-20 text-6xl leading-[83.84px] max-md:max-w-full max-md:text-4xl">
          Our Mission
        </div>
        <div className="self-end mt-8 ml-20 text-xl leading-8 max-md:max-w-full">
          At Chatfilers, our mission is to simplify the tax filing process and
          empower Canadians to navigate through their tax obligations with ease.
          We believe that everyone deserves a stress-free tax season, and our
          platform is designed to make that vision a reality.
        </div>
      </div>
    </div>
    </>
  )
}

export default Mission