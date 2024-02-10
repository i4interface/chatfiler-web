import React from "react";
import FeatureCaro from "./FeatureCaro";

function OurFeatures() {
  const features = [
    {
      id: 1,
      heading: "CRA Approval and Compliance",
      para: "We are a CRA-approved Netfile provider, ensuring that our platform aligns with the highest standards set by the Canada Revenue Agency. Your tax return is in safe hands with Chatfilers.",
    },
    {
      id: 2,
      heading: "User-Friendly Interface",
      para: "Navigating through your tax return has never been easier. Our intuitive and user-friendly platform is designed for all levels of expertise, making the tax filing process accessible to everyone.",
    },
    {
      id: 3,
      heading: "Security is our top priority",

      para: "No matter what, security is our atmost priority. Benefit from state-of-the-art encryption and  privacy measures that safeguard your sensitive financial information throughout the entire tax filing process.",

    },
    {
      id: 4,
      heading: "Real-Time Error Checking",
      para: "Say goodbye to the stress of potential errors in your tax return. Our platform checks for errors in real-time, ensuring that your submission is accurate before you hit submit.",
    },
    {
      id: 5,
      heading: "Expertise at Your Fingertips",
      para: "Rely on the expertise of our professionals who understand the intricacies of Canadian tax regulations. Chatfilers combines innovation with a deep understanding of tax laws to provide you with accurate and reliable results.",
    },
    {
      id: 6,
      heading: "Efficiency Without Compromise",

      para: "Experience a seamless and efficient tax filing process without compromising on accuracy. Chatfilers is committed to providing a swift and hassle-free experience for all our users.",

    },
    {
      id: 7,
      heading: "Real-Time Updates & Notifications",
      para: "Stay informed throughout the entire process with real-time updates on the status of your tax return. Receive notifications as soon as your submission is processed, offering you peace of mind.",
    },
    // Add more slides as needed
  ];

  return (
    <>
      <div className="w-full min-h-screen py-4 hidden md:flex">
        <div className="container grid md:grid-cols-2 grid-cols-1 gap-4 mx-auto">
          <div className="hidden md:flex gap-5 justify-between px-7 py-6 w-full text-white bg-red-700 rounded-2xl shadow-sm max-md:max-w-full">
            <div className="my-auto w-2 bg-black rounded h-[68px]" />
            <div className="flex flex-col flex-1 max-md:max-w-full">
              <h2 className="text-2xl leading-10 max-md:max-w-full">
                CRA Approval and Compliance
              </h2>

              <p className="mt-2.5 text-base max-md:max-w-full">
                We are a CRA-approved Netfile provider, ensuring that our
                platform aligns with the highest standards set by the Canada
                Revenue Agency. Your tax return is in safe hands with
                Chatfilers.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-8 max-md:mt-10">
            <div className="flex gap-3.5 md:self-end text-base leading-7 text-black bg-rose-100 rounded-3xl">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/52713755bc96a654126aed0a862b1b6e2c345115cd42462d93ab7552bf0a344e?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&"
                className="w-12 aspect-square"
              />
              <div className="flex pr-2.5 justify-center items-center">
                OUR FEATURES
              </div>
            </div>

            <div className="2xl:text-5xl xl:text-3xl text-2xl font-medium text-zinc-900 ">
              Our Features
            </div>
          </div>

          <div className="hidden md:flex gap-5 justify-between px-7 py-6 w-full text-white bg-red-700 rounded-2xl shadow-sm max-md:max-w-full">
            <div className="my-auto w-2 bg-black rounded h-[68px]" />
            <div className="flex flex-col flex-1 max-md:max-w-full">
              <h2 className="text-2xl leading-10 max-md:max-w-full">
                User-Friendly Interface
              </h2>

              <p className="mt-2.5 text-base max-md:max-w-full">
                Navigating through your tax return has never been easier. Our
                intuitive and user-friendly platform is designed for all levels
                of expertise, making the tax filing process accessible to
                everyone.
              </p>
            </div>
          </div>

          <div className="hidden md:flex gap-5 justify-between px-7 py-6 w-full text-white bg-red-700 rounded-2xl shadow-sm max-md:max-w-full">
            <div className="my-auto w-2 bg-black rounded h-[68px]" />
            <div className="flex flex-col flex-1 max-md:max-w-full">
              <h2 className="text-2xl leading-10 max-md:max-w-full">
                Security is our top priority
              </h2>

              <p className="mt-2.5 text-base max-md:max-w-full">
                No matter what, security is our atmost priority. Benefit from
                state-of-the-art encryption and privacy measures that safeguard
                your sensitive financial information throughout the entire tax
                filing process.

              </p>
            </div>
          </div>

          <div className="hidden md:flex gap-5 justify-between px-7 py-6 w-full text-white bg-red-700 rounded-2xl shadow-sm max-md:max-w-full">
            <div className="my-auto w-2 bg-black rounded h-[68px]" />
            <div className="flex flex-col flex-1 max-md:max-w-full">
              <h2 className="text-2xl leading-10 max-md:max-w-full">

                Real-Time Error Checking
              </h2>

              <p className="mt-2.5 text-base max-md:max-w-full">
                Say goodbye to the stress of potential errors in your tax
                return. Our platform checks for errors in real-time, ensuring
                that your submission is accurate before you hit submit.

              </p>
            </div>
          </div>

          <div className="hidden md:flex gap-5 justify-between px-7 py-6 w-full text-white bg-red-700 rounded-2xl shadow-sm max-md:max-w-full">
            <div className="my-auto w-2 bg-black rounded h-[68px]" />
            <div className="flex flex-col flex-1 max-md:max-w-full">
              <h2 className="text-2xl leading-10 max-md:max-w-full">

                Expertise at Your Fingertips
              </h2>

              <p className="mt-2.5 text-base max-md:max-w-full">
                Rely on the expertise of our professionals who understand the
                intricacies of Canadian tax regulations. Chatfilers combines
                innovation with a deep understanding of tax laws to provide you
                with accurate and reliable results.

              </p>
            </div>
          </div>

          <div className="hidden md:flex gap-5 justify-between px-7 py-6 w-full text-white bg-red-700 rounded-2xl shadow-sm max-md:max-w-full">
            <div className="my-auto w-2 bg-black rounded h-[68px]" />
            <div className="flex flex-col flex-1 max-md:max-w-full">
              <h2 className="text-2xl leading-10 max-md:max-w-full">

                Efficiency Without Compromise
              </h2>

              <p className="mt-2.5 text-base max-md:max-w-full">
                Experience a seamless and efficient tax filing process without
                compromising on accuracy. Chatfilers is committed to providing a
                swift and hassle-free experience for all our users.

              </p>
            </div>
          </div>

          <div className="hidden md:flex gap-5 justify-between px-7 py-6 w-full text-white bg-red-700 rounded-2xl shadow-sm max-md:max-w-full">
            <div className="my-auto w-2 bg-black rounded h-[68px]" />
            <div className="flex flex-col flex-1 max-md:max-w-full">
              <h2 className="text-2xl leading-10 max-md:max-w-full">

                Real-Time Updates & Notifications
              </h2>

              <p className="mt-2.5 text-base max-md:max-w-full">
                Stay informed throughout the entire process with real-time
                updates on the status of your tax return. Receive notifications
                as soon as your submission is processed, offering you peace of
                mind.

              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full my-10 md:my-20 py-4 flex md:hidden  overflow-x-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col items-start pl-5 md:items-end gap-8 max-md:mt-10">
            <div className="flex gap-3.5 md:self-end text-base leading-7 text-black bg-rose-100 rounded-3xl">
              <img
                alt="Img"
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/52713755bc96a654126aed0a862b1b6e2c345115cd42462d93ab7552bf0a344e?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&"
                className="w-12 aspect-square"
              />
              <div className="flex pr-2.5 justify-center items-center">
                OUR FEATURES
              </div>
            </div>

            <div className="2xl:text-5xl xl:text-3xl text-2xl font-medium text-zinc-900 ">
              Our Features
            </div>
          </div>
          <FeatureCaro features={features} />
        </div>
      </div>
    </>
  );
}

export default OurFeatures;
