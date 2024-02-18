import React, { useState } from "react";
import Layout from "../layout/Layout";

import Dropdown from "../components/taxpayer/Dropdown";
import Support from "../components/taxpayer/Support";

import studImg from "../images/students.png";
import newcomImg from "../images/newcommers.png";
import invImg from "../images/investor.png";
import selfImg from "../images/selfemployed.png";
import worImg from "../images/workes.png";

function TaxPayerDetail() {
  const [selectedCategory, setSelectedCategory] = useState("students");
  const taxPayerData = {
    students: {
      mainTitle: "Students",
      mainImage: studImg,
      mainContent:
        "Are you a student navigating the complexities of filing your taxes? Here we are! We understand that as a student, your financial situation is unique. Our Taxpayer Student page is tailored to provide you with the guidance and support you need for a stress-free tax filing experience.",
      keybenefits: [
        {
          title: "Student-Friendly Interface",
          description: `Our platform is designed with students in mind. Enjoy an easy-to-navigate interface that simplifies the tax filing process, making it accessible for students of all levels.
            Welcome to Chatfilers, where we've crafted a seamless and student-friendly interface to simplify the often daunting task of tax filing for students.
            Our platform is designed with intuitive features that guide you through the tax process effortlessly, ensuring a stress-free experience.`,
        },
        {
          title: "Maximise Your Deductions",
          description: `We guide you through potential deductions relevant to students, helping you maximize your return. From education-related expenses to eligible credits, we've got you covered.
            Students, embark on a journey of financial empowerment with Chatfilers, your dedicated partner in maximizing deductions during tax season. 
            Our platform is tailored to meet the unique needs of students, providing a straightforward and user-friendly interface that guides you through the process of identifying 
            and claiming every eligible deduction. From tuition expenses to educational credits and work-related deductions, Chatfilers ensures that you receive the maximum return on your investment in education. `,
        },
        {
          title: "Real-Time Guidance",
          description: `Uncover all the education credits available to you. We help you optimise your tax return by ensuring you take full advantage of the credits applicable to your student status.
            Elevate your financial returns with Chatfilers, where we specialise in optimising education credits to maximise your tax benefits. Our platform recognises the unique challenges
            students face and is committed to ensuring you get the most out of your educational expenses. Chatfilers provides a tailored approach, guiding you through the intricacies of claiming education credits effortlessly`,
        },
        {
          title: "Secure Document Storage",
          description: `Safely store and manage your important tax documents in one place. Our secure document storage ensures that you have easy access to your records whenever you need them.
            Trust Chatfilers to provide secure document storage tailored to safeguard your important tax-related records. Our platform understands the significance of keeping your financial information safe and easily accessible. 
            Rest assured that your sensitive information is protected with robust security measures, ensuring compliance with the highest standards of data security. `,
        },
        {
          title: "Educational Resource Center",
          description: `Explore our Educational Resource Center, packed with articles, guides, and FAQs specifically curated for student taxpayers. Enhance your understanding of the tax implications related to your education.
            We proudly present our Educational Resource Center, a comprehensive hub tailored to equip you with the knowledge needed for successful tax management. 
            Dive into a wealth of resources, including guides, FAQs, and tutorials, specifically crafted to demystify tax-related concepts for students.`,
        },
      ],
    },
    workers: {
      mainTitle: "Workers",
      mainImage: worImg,
      mainContent:
        "Are you a hardworking individual looking to simplify your tax filing process? At Chatfilers, we recognize the unique needs of workers like you.",
      keybenefits: [
        {
          title: "Worker-Focused Interface",
          description: `Our platform is tailored to meet the needs of workers. Experience an interface designed for easy navigation, ensuring a straightforward tax filing process.
          Navigate effortlessly through the tax filing journey with features tailored to the needs of employees, freelancers, and gig workers.
           From simplified income reporting to clear categorization of deductible expenses, our worker-focused interface ensures a seamless and efficient experience.
          Stay in control of your finances with Chatfilers, providing a dedicated space where the intricacies of tax filing meet the ease of user-centric design.`,
        },
        {
          title: "Income Optimization",
          description: `We guide you through potential income optimizations and deductions specific to your worker status. Maximize your return by ensuring you claim all eligible expenses.
          Designed with a keen understanding of the complexities of tax management, our platform facilitates a streamlined approach to help you optimize your income.
          From identifying eligible deductions to strategically leveraging tax credits, Chatfilers is your partner in ensuring that every aspect of your income is scrutinized for potential financial benefits. `,
        },
        {
          title: "On-the-Spot Direction",
          description: `Receive real-time guidance as you enter your information. Our platform checks for potential errors and offers tips to ensure accuracy in your tax return.
          Whether you have questions about deductions, need clarification on tax terms, or require help with any aspect of the tax filing process, our on-the-spot direction feature is here to provide instant support. 
          No more waiting or uncertainty – with Chatfilers, you can confidently address queries on the fly, making your tax-filing journey smoother and more efficient.`,
        },
        {
          title: "Employment Expense Assistance",
          description: `Explore our resources to help you understand and claim employment-related expenses. We provide clear guidance on what you can claim to optimize your tax situation.
          From home office costs to work-related travel expenses, Chatfilers provides a user-friendly interface that simplifies the process of reporting and claiming employment-related deductions. 
          Our platform empowers you to take control of your finances by offering clear guidance on eligible expenses, making it easy to optimize your tax returns. `,
        },
        {
          title: "Secure Document Management",
          description: `Safely store and manage your important tax documents in one secure place. Our document management system ensures easy access to your records whenever you need them.
          Recognizing the paramount importance of safeguarding sensitive information in the realm of taxation. 
          Easily upload, organize, and store essential documents, from income statements to business receipts, with the assurance that your sensitive data is protected through advanced security measures. 
          Chatfilers not only simplifies the tax filing process but also ensures that your confidential information remains confidential. `,
        },
        {
          title: "Resource Center for Workers",
          description: `Dive into our Resource Center tailored for workers. Access articles, guides, and FAQs to enhance your understanding of tax implications related to your employment.
          This dedicated space offers a wealth of resources to empower you with the knowledge and tools necessary for successful financial management.
          Join Chatfilers to leverage a wealth of information, ensuring you have the resources needed to make informed decisions, optimize your financial outcomes, and navigate the complex landscape of taxation with confidence.`,
        },
      ],
    },
    newcommers: {
      mainTitle: "Newcommers",
      mainImage: newcomImg,
      mainContent:
        "Embarking on a new journey in Canada is both exciting and full of adjustments. As you settle into your new life, managing your taxes doesn't have to be a challenge. ",
      keybenefits: [
        {
          title: "Newcomer-Friendly Interface",
          description: `Embark on your tax-filing journey with ease through Chatfilers' Newcomer-Friendly Interface.
          Tailored for those navigating the complexities of taxation for the first time, our platform offers an intuitive and user-friendly design to simplify the process. 
          From straightforward navigation to clear instructions, Chatfilers ensures that newcomers can confidently manage their taxes without unnecessary complexities. `,
        },
        {
          title: "Guidance on Newcomer Tax Credits",
          description: `We provide guidance on tax credits and deductions specifically available to newcomers. Maximize your return by ensuring you claim all eligible credits to support your transition.
          Whether you're a recent immigrant, international student, or someone filing taxes in a new country, our user-friendly interface guides you through the process of maximizing your eligible credits.
          From education credits to newcomer-specific deductions, Chatfilers ensures that you optimize your financial returns with ease.`,
        },
        {
          title: "Continuous Assistance",
          description: `Receive real-time assistance as you enter your information. Our platform checks for potential errors and offers tips to ensure accuracy in your tax return.
          Our platform is committed to providing immediate assistance throughout your tax-filing journey, ensuring that you have on-the-spot support whenever you need it. 
          No more waiting or uncertainty - with Chatfilers, you can confidently address queries on the fly, making your tax-filing experience smoother and more efficient.`,
        },
        {
          title: "Understanding Canadian Tax Basics",
          description: `Access resources tailored to help you understand the basics of the Canadian tax system. Our educational materials provide insights into key tax concepts relevant to newcomers.
          Chatfilers is here to simplify the process with a dedicated resource on Understanding Canadian Tax Basics for Newcomers. 
          Chatfilers ensures that newcomers can access user-friendly resources, making the process of understanding and filing Canadian taxes straightforward. `,
        },
        {
          title: "Secure Document Management",
          description: `Safely store and manage your essential tax documents in one secure location. Our document management system ensures easy access to your records whenever you need them.
          Designed to instill confidence in the safety of your financial information, our platform offers an encrypted and organized system for uploading, storing, and managing essential documents. 
          Chatfilers not only streamlines the tax-filing process but also ensures that your crucial documents are handled with the utmost care.`,
        },
        {
          title: "Resource Center for Newcomers",
          description: `Explore our Resource Center curated for newcomers. Access articles, guides, and FAQs designed to help you navigate the Canadian tax landscape as a newcomer.`,
        },
      ],
    },
    selfemployed: {
      mainTitle: "Self-Employed",
      mainImage: selfImg,
      mainContent:
        "Being your own boss comes with unique challenges, especially when it comes to managing your taxes. At Chatfilers, we understand the complexities of self-employment, and our Self-Employed page is tailored to provide you with the tools and guidance you need for a smooth tax filing experience.",
      keybenefits: [
        {
          title: "Self-Employed-Focused Interface",
          description: `Our platform is designed to cater specifically to the needs of self-employed individuals. Experience an interface that streamlines the tax filing process, ensuring it meets the unique requirements of self-employment.`,
        },
        {
          title: "Optimize Your Business Expenses",
          description: `We guide you through potential deductions and credits specific to self-employed taxpayers. Maximize your return by ensuring you claim all eligible business-related expenses.`,
        },
        {
          title: "Real-Time Guidance",
          description: `Receive real-time guidance as you enter your information. Our platform checks for potential errors and provides tips to ensure accuracy in your tax return.`,
        },
        {
          title: "Employment Expense Assistance",
          description: `Explore our resources to help you understand and claim employment-related expenses. We provide clear guidance on what you can claim to optimize your tax situation`,
        },
        {
          title: "Secure Document Management",
          description: `Safely store and manage your essential tax documents in one secure location. Our document management system ensures easy access to your records whenever you need them.`,
        },
        {
          title: "Resource Center for Self-Employed",
          description: `Dive into our Resource Center tailored for self-employed individuals. Access articles, guides, and FAQs to enhance your understanding of tax implications related to self-employment.`,
        },
      ],
    },
    investors: {
      mainTitle: "Investors",
      mainImage: invImg,
      mainContent:
        "Investing can be both rewarding and complex, especially when it comes to managing your taxes. At Chatfilers, we understand the intricacies of investment-related tax implications, and our Taxpayer Investors page is designed to provide you with the tools and guidance needed for a seamless tax filing experience.",
      keybenefits: [
        {
          title: "Investor-Focused Interface",
          description: `Our platform is tailored to meet the specific needs of investors. Experience an interface that streamlines the tax filing process, ensuring it aligns with the unique requirements of investment portfolios.`,
        },
        {
          title: "Maximize Your Investment Deductions",
          description: `We guide you through potential deductions and credits specific to taxpayer investors. Maximize your return by ensuring you claim all eligible investment-related expenses.`,
        },
        {
          title: "Real-Time Guidance",
          description: `Uncover all the education credits available to you. We help you optimise your tax return by ensuring you take full advantage of the credits applicable to your student status.
            Elevate your financial returns with Chatfilers, where we specialise in optimising education credits to maximise your tax benefits. Our platform recognises the unique challenges
            students face and is committed to ensuring you get the most out of your educational expenses. Chatfilers provides a tailored approach, guiding you through the intricacies of claiming education credits effortlessly`,
        },
        {
          title: "Real-Time Guidance",
          description: `Receive real-time guidance as you enter your information. Our platform checks for potential errors and provides tips to ensure accuracy in your tax return.`,
        },
        {
          title: "Capital Gains Optimization",
          description: `Explore resources to help you understand and optimize your capital gains reporting. We provide clear guidance on how to maximize your returns in a tax-efficient manner.`,
        },
        {
          title: "Secure Document Management",
          description: `Safely store and manage your essential tax documents in one secure location. Our document management system ensures easy access to your investment records whenever you need them.`,
        },
        {
          title: "Resource Center for Investors",
          description: `Dive into our Resource Center tailored for taxpayer investors. Access articles, guides, and FAQs to enhance your understanding of tax implications related to your investment activities.`,
        },
      ],
    },
  };
  const currentCategoryData = taxPayerData[selectedCategory];

  const handleContentCase = (cat) => {
    setSelectedCategory(cat);
  };

  return (
    <Layout>
      <div className="flex justify-center items-center px-16 md:py-12 bg-white max-md:px-5">
        <div className="mt-1.5 w-full max-w-[1500px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col items-end lg:items-center ">
            <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-base leading-7 text-gray-600 whitespace-nowrap">
                <div className="mt-16 lg:text-5xl text-3xl font-medium text-zinc-900 max-md:mt-10 border-b-[1px] border-gray-300 w-full md:w-[80%]">
                  Tax Payers
                </div>
                <ul className="md:hidden flex overflow-x-auto">
                  <li>
                    <div className="flex items-center justify-center mt-3  bg-black bg-opacity-0 border-b-[1px] border-gray-300 w-[80%]">
                      <div
                        onClick={() => handleContentCase("students")}
                        className={`justify-center items-start py-5 pr-16 pl-4 ${selectedCategory === 'students' ? 'font-bold text-red-700' : ''} bg-black bg-opacity-0 max-md:pr-5 hover:text-red-700 cursor-pointer`}
                      >
                        Students
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center justify-center mt-3  bg-black bg-opacity-0 border-b-[1px] border-gray-300 w-[80%]">
                      <div
                        onClick={() => handleContentCase("workers")}
                        className={`justify-center items-start py-5 pr-16 pl-4 ${selectedCategory === 'workers' ? 'font-bold text-red-700' : ''} bg-black bg-opacity-0 max-md:pr-5 hover:text-red-700 cursor-pointer`}
                      >
                        Workers
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center justify-center mt-3  bg-black bg-opacity-0 border-b-[1px] border-gray-300 w-[80%]">
                      <div
                        onClick={() => handleContentCase("newcommers")}
                        className={`justify-center items-start py-5 pr-16 pl-4 ${selectedCategory === 'newcommers' ? 'font-bold text-red-700' : ''} bg-black bg-opacity-0 max-md:pr-5 hover:text-red-700 cursor-pointer`}
                      >
                        Newcommers
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center justify-center mt-3  bg-black bg-opacity-0 border-b-[1px] border-gray-300 w-[80%]">
                      <div
                        onClick={() => handleContentCase("selfemployed")}
                        className={`justify-center items-start py-5 pr-16 pl-4 ${selectedCategory === 'selfemployed' ? 'font-bold text-red-700' : ''} bg-black bg-opacity-0 max-md:pr-5 hover:text-red-700 cursor-pointer`}
                      >
                        Self-Employed
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center justify-center mt-3  bg-black bg-opacity-0 border-b-[1px] border-gray-300 w-[80%]">
                      <div
                        onClick={() => handleContentCase("investors")}
                        className={`justify-center items-start py-5 pr-16 pl-4 ${selectedCategory === 'investors' ? 'font-bold text-red-700' : ''} bg-black bg-opacity-0 max-md:pr-5 hover:text-red-700 cursor-pointer`}
                      >
                        Investors
                      </div>
                    </div>
                  </li>
                </ul>

                <ul className="hidden md:block">
                  <li>
                    <div
                      className={`flex flex-col justify-center mt-3 bg-black bg-opacity-0 border-b-[1px] border-gray-300 w-[80%] ${
                        selectedCategory === "students"
                          ? "text-red-700 font-bold"
                          : ""
                      }`}
                    >
                      <div
                        onClick={() => handleContentCase("students")}
                        className="justify-center items-start py-5 pr-16 pl-4 bg-black bg-opacity-0 max-md:pr-5 hover:text-red-700 cursor-pointer"
                      >
                        Students
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className={`flex flex-col justify-center mt-2.5 bg-black bg-opacity-0 border-b-[1px] border-gray-300 w-[80%] ${
                        selectedCategory === "workers"
                          ? "text-red-700 font-bold"
                          : ""
                      }`}
                    >
                      <div
                        onClick={() => handleContentCase("workers")}
                        className="justify-center items-start py-5 pr-16 pl-4 bg-black bg-opacity-0 max-md:pr-5 hover:text-red-700 cursor-pointer"
                      >
                        Workers
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className={`flex flex-col justify-center mt-3 bg-black bg-opacity-0 border-b-[1px] border-gray-300 w-[80%] ${
                        selectedCategory === "newcommers"
                          ? "text-red-700 font-bold"
                          : ""
                      }`}
                    >
                      <div
                        onClick={() => handleContentCase("newcommers")}
                        className="justify-center items-start py-5 pr-16 pl-4 bg-black bg-opacity-0 max-md:pr-5 hover:text-red-700 cursor-pointer"
                      >
                        Newcomers
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className={`flex flex-col justify-center mt-3 bg-black bg-opacity-0 border-b-[1px] border-gray-300 w-[80%] ${
                        selectedCategory === "selfemployed"
                          ? "text-red-700 font-bold"
                          : ""
                      }`}
                    >
                      <div
                        onClick={() => handleContentCase("selfemployed")}
                        className="justify-center items-start py-5 pr-16 pl-4 bg-black bg-opacity-0 max-md:pr-5 hover:text-red-700 cursor-pointer"
                      >
                        Self-Employed
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className={`flex flex-col justify-center mt-3 bg-black bg-opacity-0 border-b-[1px] border-gray-300 w-[80%] ${
                        selectedCategory === "investors"
                          ? "text-red-700 font-bold"
                          : ""
                      }`}
                    >
                      <div
                        onClick={() => handleContentCase("investors")}
                        className="justify-center items-start py-5 pr-16 pl-4 bg-black bg-opacity-0 max-md:pr-5 hover:text-red-700 cursor-pointer"
                      >
                        Investors
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row h-full gap-4 w-full items-start lg:items-center">
              <div className="flex flex-col ml-5 w-[50%] max-md:ml-0 max-md:w-full rounded-3xl">
                <img
                  loading="lazy"
                  src={currentCategoryData.mainImage}
                  className="w-full aspect-square object-cover max-md:max-w-[300px] rounded-3xl"
                />
              </div>
              <div className="flex flex-col ml-5 w-full lg:w-[50%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto text-zinc-900 max-md:mt-10">
                  <div className="text-3xl leading-10">
                    {currentCategoryData.mainTitle}
                  </div>
                  <div className="mt-7 text-sm leading-6">
                    {currentCategoryData.mainContent}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className=" flex flex-col px-5 text-zinc-900 mt-10 md:mt-20">
        <div className="container mx-auto">
          <h1 className="w-full lg:text-5xl text-3xl leading-10 max-md:max-w-full">
            Key Benefits for <br /> {currentCategoryData.mainTitle}
          </h1>
          <div
            className="flex pb-5 md:pb-0 flex-col-reverse md:flex-row gap-5 justify-between md:pl-10 xl:pl-20 mt-8 w-full text-xl leading-7 bg-gray-50 rounded-[48px] max-md:pl-5 max-md:max-w-full"
            aria-label="Benefits"
          >
            <div className="flex flex-col md:my-4 xl:my-auto md:w-[40%]">
              {currentCategoryData.keybenefits.map((benefit, index) => (
                <div key={index} className="flex gap-5 justify-between">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d32b20d3a19a9e3b54e515121182e149d790ac2cb0d9e00ea8e1b4e230adaf9?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&"
                    className="self-start w-6 aspect-square"
                    alt={benefit.title}
                  />
                  <div className="flex-auto">{benefit.title}</div>
                </div>
              ))}
            </div>
            <div className="w-full overflow-hidden max-h-[200px] md:max-h-full md:w-[45%] lg:w-[30%]">
              <img
                loading="lazy"
                src={currentCategoryData.mainImage}
                className="w-full max-h-auto object-cover rounded-3xl h-full"
                alt="Placeholder"
              />
            </div>
          </div>
        </div>
      </section>

      {currentCategoryData.keybenefits.map((section, index) => (
        <div
          key={index}
          className="flex flex-col px-5 max-w-[998px] text-zinc-900 mx-auto mt-8"
        >
          <div className="flex gap-5 justify-between text-2xl md:text-3xl leading-2 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d32b20d3a19a9e3b54e515121182e149d790ac2cb0d9e00ea8e1b4e230adaf9?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&"
              className="aspect-square w-[46px]"
              alt="ChatFiler"
            />
            <div className="flex-auto mt-2.5">{section.title}</div>
          </div>
          <div className="mt-4 md:mt-12 w-full text-sm leading-6 max-md:max-w-full">
            {section.description}
          </div>
        </div>
      ))}

      <Support />
    </Layout>
  );
}

export default TaxPayerDetail;
