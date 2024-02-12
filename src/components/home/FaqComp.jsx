import React from "react";
import FaqAccordion from "./FaqAccordion";

function FaqComp() {
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
    // {
    //   question: "What expenses can I deduct from my taxes in Canada?",
    //   answer:
    //     "In Canada, you can deduct expenses such as union dues, certain employment expenses, childcare expenses, medical expenses, and charitable donations, among others. It's essential to refer to CRA guidelines or consult with a tax professional for specific deductions.",
    // },
    // {
    //   question:
    //     "What is the basic personal amount, and am I eligible for it?",
    //   answer:
    //     "The basic personal amount is the amount of income you can earn without paying federal income tax. The eligibility and amount vary based on factors such as your province or territory of residence and your income level.",
    // },
    // {
    //   question: "How do I know if I need to file taxes in Canada?",
    //   answer:
    //     "You generally need to file taxes in Canada if you owe taxes, want to claim a refund, or are requested to file by the CRA. The specific requirements depend on factors such as your income, residency status, and age.",
    // },
    // {
    //   question: "Can I claim my dependents on my tax return in Canada?",
    //   answer:
    //     "Yes, you can claim dependents such as children or eligible relatives on your Canadian tax return, which may qualify you for certain tax benefits such as the Canada Child Benefit or the Child Care Expense Deduction.",
    // },
    // {
    //   question:
    //     "What is the Canada Child Benefit (CCB), and do I qualify for it?",
    //   answer:
    //     "The Canada Child Benefit is a tax-free monthly payment provided by the Government of Canada to eligible families to help with the cost of raising children under 18 years of age. Eligibility is based on factors such as your family income and the number of children you have.",
    // },
    // {
    //   question: "How can I track the status of my tax refund in Canada?",
    //   answer:
    //     "You can track the status of your tax refund in Canada using the CRA's My Account service, the MyCRA mobile app, or by calling the CRA's Tax Information Phone Service (TIPS).",
    // },
    // Add other items similarly
  ];
  return (
    <section className="w-full my-10 lg:my-20">
      <div className="w-full px-5 lg:px-20">
        <div className="flex w-fit gap-3.5 self-start pr-4 text-base items-center text-red-700 whitespace-nowrap bg-rose-100 rounded-3xl">
          <svg
            width="49"
            height="49"
            viewBox="0 0 49 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M48.2416 24.1208C48.2416 10.7992 37.4423 0 24.1208 0C10.7992 0 0 10.7992 0 24.1208C0 37.4423 10.7992 48.2416 24.1208 48.2416C37.4423 48.2416 48.2416 37.4423 48.2416 24.1208Z"
              fill="#AF1B19"
            />
            <path
              d="M24.1056 7.06042C24.8096 7.06922 25.4872 7.28043 26.0768 7.70283C26.6488 8.11643 27.1768 8.59162 27.7224 9.04042C27.8896 9.18122 28.048 9.32202 28.1888 9.48922C29.0688 10.4836 30.1688 10.8972 31.4976 10.862C32.2984 10.8356 33.1168 10.8796 33.9088 11.0116C35.8624 11.3372 37.0064 12.5868 37.1912 14.5756C37.2792 15.5436 37.3056 16.5204 37.3408 17.4884C37.3672 18.1572 37.5784 18.7468 38.036 19.2484C38.5024 19.7588 38.9952 20.2604 39.444 20.7884C39.8136 21.2196 40.1832 21.6596 40.4824 22.1348C41.292 23.4284 41.2744 24.7396 40.456 26.0244C40.1832 26.4468 39.8664 26.8428 39.532 27.2212C39.1448 27.67 38.7312 28.1012 38.3176 28.5236C37.684 29.1748 37.3232 29.9316 37.3056 30.8644C37.2968 31.7268 37.2704 32.5804 37.1912 33.4428C37.0064 35.6428 35.6864 36.9804 33.4864 37.1916C32.5536 37.2796 31.6208 37.306 30.688 37.3324C29.9752 37.3588 29.3592 37.5876 28.8312 38.0716C28.2856 38.582 27.74 39.0924 27.1856 39.5852C26.8512 39.8756 26.508 40.1572 26.1384 40.3948C24.7568 41.3012 23.3488 41.31 21.9936 40.3684C21.3336 39.9108 20.6912 39.3916 20.1544 38.802C19.1248 37.6756 17.8928 37.1828 16.3704 37.262C15.6664 37.2972 14.9536 37.2356 14.2584 37.1212C12.2784 36.778 11.1432 35.5372 10.9584 33.5308C10.8704 32.5716 10.844 31.6124 10.8088 30.6532C10.7824 29.9668 10.5624 29.3684 10.1048 28.858C9.61197 28.3212 9.10157 27.7844 8.61757 27.2388C8.29197 26.8692 7.97517 26.482 7.71117 26.0684C6.84877 24.722 6.83997 23.3404 7.74637 22.0204C8.21277 21.334 8.74957 20.674 9.35677 20.1196C10.4744 19.09 10.9496 17.8668 10.8704 16.362C10.8352 15.6492 10.8968 14.9188 11.02 14.2148C11.3456 12.2788 12.5952 11.1348 14.5576 10.9412C15.508 10.8444 16.476 10.8268 17.4352 10.7916C18.1656 10.7652 18.7904 10.5276 19.3272 10.0436C20.0664 9.37483 20.7968 8.68842 21.5624 8.04602C22.284 7.44762 23.12 7.06042 24.1144 7.06042H24.1056ZM38.696 23.9916C38.52 23.6748 38.3704 23.3052 38.1328 23.006C37.5872 22.346 36.9976 21.7124 36.408 21.0876C35.4312 20.0492 34.9208 18.826 34.8944 17.3916C34.8768 16.5204 34.8416 15.6492 34.7536 14.778C34.6656 13.8452 34.2608 13.4492 33.328 13.3612C32.6768 13.2996 32.0168 13.2556 31.3568 13.2732C29.5 13.3084 27.9248 12.7012 26.6136 11.3636C26.0856 10.818 25.5136 10.3164 24.9152 9.85883C24.2552 9.34843 23.8856 9.36602 23.1992 9.84122C22.9528 10.0172 22.7152 10.2108 22.4864 10.4132C22.02 10.8356 21.5536 11.2668 21.096 11.7068C20.0488 12.7012 18.8168 13.2116 17.3648 13.2292C16.5024 13.238 15.6488 13.282 14.7952 13.3612C13.836 13.458 13.4488 13.854 13.352 14.8044C13.2904 15.4556 13.2552 16.1156 13.264 16.7756C13.2992 18.6148 12.7096 20.1988 11.3632 21.4748C11.0376 21.7916 10.7296 22.126 10.4304 22.4692C10.1928 22.7332 9.98157 23.0148 9.77037 23.2964C9.40077 23.7892 9.39197 24.2996 9.76157 24.8012C9.98157 25.1004 10.2016 25.3908 10.448 25.6636C10.844 26.1036 11.2488 26.5348 11.6624 26.966C12.6744 28.0308 13.2112 29.2804 13.2288 30.7588C13.2376 31.6212 13.2816 32.4748 13.3608 33.3284C13.4488 34.2612 13.8536 34.6572 14.7864 34.7452C15.464 34.8068 16.1504 34.842 16.828 34.8332C18.6408 34.8068 20.1896 35.4052 21.4568 36.7164C21.8792 37.1564 22.328 37.5612 22.7944 37.9572C23.824 38.8284 24.2728 38.8372 25.3024 37.966C25.892 37.4732 26.4464 36.9364 27.0096 36.3996C28.0568 35.4052 29.2888 34.8948 30.7408 34.8772C31.6032 34.8684 32.4568 34.8244 33.3104 34.7452C34.2696 34.6484 34.6568 34.2524 34.7536 33.302C34.8152 32.686 34.8504 32.0612 34.8416 31.4452C34.7888 29.518 35.4048 27.8724 36.8216 26.5436C37.1472 26.2444 37.4464 25.91 37.728 25.5756C37.9832 25.2764 38.2208 24.9684 38.432 24.634C38.5464 24.458 38.5904 24.238 38.6872 23.974L38.696 23.9916Z"
              fill="#F4FAF5"
            />
            <path
              d="M25.2944 26.3752C25.2768 26.5072 25.2768 26.6216 25.2592 26.7272C25.136 27.3432 24.5728 27.7656 23.9656 27.7128C23.3672 27.66 22.8832 27.1672 22.8568 26.56C22.8392 26.1552 22.848 25.7504 22.8568 25.3456C22.8656 24.5888 23.3496 24.1048 24.1152 24.0784C25.6112 24.0168 26.7728 23.0312 27.0456 21.588C27.3536 19.9776 26.2888 18.3936 24.6784 18.0768C23.0328 17.7512 21.44 18.7896 21.1056 20.4088C21.0616 20.62 21.044 20.8312 21.0352 21.0512C20.9912 21.7552 20.4632 22.2832 19.7856 22.2656C19.1168 22.248 18.6064 21.7024 18.6064 20.9896C18.6064 18.244 20.7096 15.9472 23.5432 15.604C26.1656 15.2872 28.7528 17.144 29.3776 19.7664C30.0552 22.6264 28.4096 25.4512 25.5848 26.296C25.488 26.3224 25.4 26.3576 25.3032 26.384L25.2944 26.3752Z"
              fill="#F4FAF5"
            />
            <path
              d="M25.8922 31.9032C25.8922 32.9152 25.0738 33.7424 24.0706 33.7424C23.0762 33.7424 22.2578 32.9328 22.249 31.9384C22.249 30.9264 23.0674 30.0992 24.0706 30.0992C25.065 30.0992 25.8834 30.9088 25.8922 31.9032Z"
              fill="#F4FAF5"
            />
          </svg>

          <div className="flex-auto my-auto">FAQ</div>
        </div>
      </div>

      <div className="w-full flex justify-between px-5 lg:px-20 gap-4 mt-8">
        <h1 className=" lg:text-6xl md:text-4xl text-2xl font-medium">
          Have Questions? <br />
          Get Answers
        </h1>
        <a href="/faq" className="underline">
          View all
        </a>
      </div>

      <FaqAccordion items={items} />
    </section>
  );
}

export default FaqComp;
