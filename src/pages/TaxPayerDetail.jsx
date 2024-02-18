import React from "react";
import Layout from "../layout/Layout";

import Dropdown from "../components/taxpayer/Dropdown";
import Support from "../components/taxpayer/Support";

function TaxPayerDetail() {
  const taxPayerData = {
    students: {
      mainTitle: "Students",
      mainImage: "",
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
      mainImage: "",
      mainContent: "",
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
    newcommers: {
      mainTitle: "Newcommers",
      mainImage: "",
      mainContent: "",
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
    selfemployed: {
      mainTitle: "Self-Employed",
      mainImage: "",
      mainContent: "",
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
    investors: {
      mainTitle: "Investors",
      mainImage: "",
      mainContent: "",
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
  };

  return (
    <Layout>
      <div className="flex justify-center items-center px-16 md:py-12 bg-white max-md:px-5">
        <div className="mt-1.5 w-full max-w-[1500px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col items-end lg:items-center ">
            <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-base leading-7 text-gray-600 whitespace-nowrap">
                <div className="flex gap-2 justify-between text-zinc-900">
                  <div className="grow">Tax Payers</div>
                  <div className="my-auto">&gt;</div>
                  <div className="grow">{mainTitle}</div>
                </div>
                <div className="mt-16 lg:text-5xl text-3xl font-medium text-zinc-900 max-md:mt-10 border-b-[1px] border-gray-300 w-full md:w-[80%]">
                  Tax Payers
                </div>
                <Dropdown className="md:hidden" />
                <ul className="hidden md:block">
                  <li>
                    <div className="flex flex-col justify-center mt-3 text-red-700 bg-black bg-opacity-0 border-b-[1px] border-gray-300 w-[80%]">
                      <div className="justify-center items-start py-5 pr-16 pl-4 font-bold bg-black bg-opacity-0 max-md:pr-5 hover:text-red-700 cursor-pointer">
                        Students
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-col justify-center mt-2.5 bg-black bg-opacity-0 border-b-[1px] border-gray-300 w-[80%]">
                      <div className="justify-center items-start py-5 pr-16 pl-4 bg-black bg-opacity-0 max-md:pr-5 hover:text-red-700 cursor-pointer">
                        Workers
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-col justify-center mt-3 bg-black bg-opacity-0 border-b-[1px] border-gray-300 w-[80%]">
                      <div className="justify-center items-start py-5 pr-16 pl-4 bg-black bg-opacity-0 max-md:pr-5 hover:text-red-700 cursor-pointer">
                        Newcomers
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-col justify-center mt-3 bg-black bg-opacity-0 border-b-[1px] border-gray-300 w-[80%]">
                      <div className="justify-center items-start py-5 pr-16 pl-4 bg-black bg-opacity-0 max-md:pr-5 hover:text-red-700 cursor-pointer">
                        Self-Employed
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-col justify-center mt-3 bg-black bg-opacity-0 border-b-[1px] border-gray-300 w-[80%]">
                      <div className="justify-center items-start py-5 pr-16 pl-4 bg-black bg-opacity-0 max-md:pr-5 hover:text-red-700 cursor-pointer">
                        Investors
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row h-full gap-4 w-full items-start lg:items-center">
              <div className="flex flex-col ml-5 w-[50%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src={mainImage}
                  className=" w-full aspect-square max-md:max-w-[300px]"
                />
              </div>
              <div className="flex flex-col ml-5 w-full lg:w-[50%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto text-zinc-900 max-md:mt-10">
                  <div className="text-3xl leading-10">{mainTitle}</div>
                  <div className="mt-7 text-sm leading-6">{mainContent}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className=" flex flex-col px-5 text-zinc-900 mt-10 md:mt-20">
        <div className="container mx-auto">
          <h1 className="w-full lg:text-5xl text-3xl leading-10 max-md:max-w-full">
            Key Benefits for <br /> {mainTitle}
          </h1>
          <div
            className="flex pb-5 md:pb-0 flex-col-reverse md:flex-row gap-5 justify-between md:pl-10 xl:pl-20 mt-8 w-full text-xl leading-7 bg-gray-50 rounded-[48px] max-md:pl-5 max-md:max-w-full"
            aria-label="Benefits"
          >
            <div className="flex flex-col md:my-4 xl:my-auto md:w-[40%]">
              {keybenefits.map((benefit, index) => (
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
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8cb90bbeaabb801eb9c546ebe70710f992b17100ca9c5a04217529435bf65339?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8cb90bbeaabb801eb9c546ebe70710f992b17100ca9c5a04217529435bf65339?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8cb90bbeaabb801eb9c546ebe70710f992b17100ca9c5a04217529435bf65339?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8cb90bbeaabb801eb9c546ebe70710f992b17100ca9c5a04217529435bf65339?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8cb90bbeaabb801eb9c546ebe70710f992b17100ca9c5a04217529435bf65339?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8cb90bbeaabb801eb9c546ebe70710f992b17100ca9c5a04217529435bf65339?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8cb90bbeaabb801eb9c546ebe70710f992b17100ca9c5a04217529435bf65339?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8cb90bbeaabb801eb9c546ebe70710f992b17100ca9c5a04217529435bf65339?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&"
                className="w-full max-h-auto object-cover rounded-3xl h-full"
                alt="Placeholder"
              />
            </div>
          </div>
        </div>
      </section>

      {taxPayerData.keybenefits.map((section, index) => (
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
