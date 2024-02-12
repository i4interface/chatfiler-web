import React from "react";
import FaqAccordion from "../home/FaqAccordion";

function Support() {
  const items = [
    {
      question: "What documents do I need to file my taxes in Canada?",
      answer:
        "You typically need documents such as T4 slips for employment income, T5 slips for investment income, receipts for deductible expenses like charitable donations and medical expenses, and any other relevant financial records.",
    },
    {
      question: "When is the tax filing deadline in Canada?",
      answer:
        "The tax filing deadline for most individuals in Canada is April 30th. However, if you or your spouse are self-employed, the deadline is June 15th, but any taxes owed are still due by April 30th.",
    },
    {
      question: "How can I file my taxes online in Canada?",
      answer:
        "Filing your taxes online with Chat Filer Inc. is simple and convenient. Our software provides a user-friendly interface that guides you through the process step-by-step. Simply create an account, input your financial information, and Chat Filer will automatically generate your tax forms. You can then securely submit your return directly to the Canada Revenue Agency (CRA) using our integrated NETFILE service. With Chat Filer, you can file your taxes accurately and efficiently from the comfort of your own home.",
    },
    {
      question:
        "What is the difference between a tax deduction and a tax credit in Canada",
      answer:
        "Similar to the US, a tax deduction in Canada reduces your taxable income, while a tax credit directly reduces the amount of tax you owe.",
    },
  ];
  return (
    <section className="w-full my-10 md:my-20">
      <div className="container mx-auto flex flex-col-reverse md:flex-row gap-4 md:gap-10">
        <div className=" w-full md:w-1/2 ">
          <FaqAccordion items={items} />
        </div>
        <div className=" w-full md:w-1/2 flex flex-col justify-between gap-4 px-5">
          <div className="flex gap-3.5 text-base leading-7 text-red-700 bg-rose-100 pr-2 rounded-3xl w-fit pr-4">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/840adc7ea9ec0b591a16f32ebb6b883a4ed8473f935f38cab083b1ecbbc0d143?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&"
              className="w-12 aspect-square"
            />
            <div className="flex-auto my-auto">SUPPORT</div>
          </div>
          <h1 className="lg:text-5xl text-3xl font-medium">
            Resources and Support
          </h1>
          <p>
            Our purpose also informs our company culture andvalues. We strive to
            create a work fosters creativity
          </p>
          <div className="flex w-full justify-between gap-4 flex-wrap">
            <a
              href="#"
              className="px-4 md:px-8 py-2 md:py-4 bg-red-700 hover:bg-red-800 transition-all ease-in-out duration-300 text-white rounded-full"
            >
              Contact us
            </a>
            <a
              href="#"
              className="px-4 md:px-8 py-2 md:py-4 bg-red-700 hover:bg-red-800 transition-all ease-in-out duration-300 text-white rounded-full"
            >
              F.A.Q
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Support;
