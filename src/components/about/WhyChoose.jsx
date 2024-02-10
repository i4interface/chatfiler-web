import React, { useState } from "react";
import FaqAccordion from "../../components/home/FaqAccordion";

function WhyChoose() {
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
    <section className="flex justify-center items-center px-16 py-12 bg-gray-100 rounded-[64px_64px_0px_0px] max-md:px-5">
      <div className="container flex md:flex-row flex-col justify-center items-start">
        <div className="w-full md:w-[40%] h-full flex justify-start items-start">
          <h1 className="2xl:text-5xl xl:text-3xl text-2xl font-medium">
            Why Choose Chatfilers?
          </h1>
        </div>
        <div className="w-full md:w-[60%]">
          <FaqAccordion items={items} />
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
