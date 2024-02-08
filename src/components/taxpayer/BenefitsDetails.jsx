import React from "react";

function InterfaceSection({ logoSrc, altText, title, description }) {
  return (
    <div className="flex flex-col px-5 max-w-[998px] text-zinc-900 mx-auto mt-8">
      <div className="flex gap-5 justify-between text-3xl leading-2 max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          src={logoSrc}
          className="aspect-square w-[46px]"
          alt={altText}
        />
        <div className="flex-auto mt-2.5">{title}</div>
      </div>
      <div className="mt-12 w-full text-sm leading-6 max-md:mt-10 max-md:max-w-full">
        {description}
      </div>
    </div>
  );
}

function BenefitsDetails() {
  const interfaceSections = [
    {
      logoSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4d32b20d3a19a9e3b54e515121182e149d790ac2cb0d9e00ea8e1b4e230adaf9?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&',
      altText: 'Logo 1',
      title: 'Student-Friendly Interface',
      description: `Our platform is designed with students in mind. Enjoy an easy-to-navigate interface that simplifies the tax filing process, making it accessible for students of all levels.
        Welcome to Chatfilers, where we've crafted a seamless and student-friendly interface to simplify the often daunting task of tax filing for students.
        Our platform is designed with intuitive features that guide you through the tax process effortlessly, ensuring a stress-free experience.`,
    },
    {
        logoSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4d32b20d3a19a9e3b54e515121182e149d790ac2cb0d9e00ea8e1b4e230adaf9?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&',
        altText: 'Logo 1',
        title: 'Maximise Your Deductions',
        description: `We guide you through potential deductions relevant to students, helping you maximize your return. From education-related expenses to eligible credits, we've got you covered.
        Students, embark on a journey of financial empowerment with Chatfilers, your dedicated partner in maximizing deductions during tax season. 
        Our platform is tailored to meet the unique needs of students, providing a straightforward and user-friendly interface that guides you through the process of identifying 
        and claiming every eligible deduction. From tuition expenses to educational credits and work-related deductions, Chatfilers ensures that you receive the maximum return on your investment in education. `,
      },
      {
        logoSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4d32b20d3a19a9e3b54e515121182e149d790ac2cb0d9e00ea8e1b4e230adaf9?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&',
        altText: 'Logo 1',
        title: 'Real-Time Guidance',
        description: `Uncover all the education credits available to you. We help you optimise your tax return by ensuring you take full advantage of the credits applicable to your student status.
        Elevate your financial returns with Chatfilers, where we specialise in optimising education credits to maximise your tax benefits. Our platform recognises the unique challenges
        students face and is committed to ensuring you get the most out of your educational expenses. Chatfilers provides a tailored approach, guiding you through the intricacies of claiming education credits effortlessly`,
      },
      {
        logoSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4d32b20d3a19a9e3b54e515121182e149d790ac2cb0d9e00ea8e1b4e230adaf9?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&',
        altText: 'Logo 1',
        title: 'Secure Document Storage',
        description: `Safely store and manage your important tax documents in one place. Our secure document storage ensures that you have easy access to your records whenever you need them.
        Trust Chatfilers to provide secure document storage tailored to safeguard your important tax-related records. Our platform understands the significance of keeping your financial information safe and easily accessible. 
        Rest assured that your sensitive information is protected with robust security measures, ensuring compliance with the highest standards of data security. `,
      },
      {
        logoSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4d32b20d3a19a9e3b54e515121182e149d790ac2cb0d9e00ea8e1b4e230adaf9?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&',
        altText: 'Logo 1',
        title: 'Educational Resource Center',
        description: `Explore our Educational Resource Center, packed with articles, guides, and FAQs specifically curated for student taxpayers. Enhance your understanding of the tax implications related to your education.
        We proudly present our Educational Resource Center, a comprehensive hub tailored to equip you with the knowledge needed for successful tax management. 
        Dive into a wealth of resources, including guides, FAQs, and tutorials, specifically crafted to demystify tax-related concepts for students.`,
      },
   
  ];

  return (
    <>
      {interfaceSections.map((section, index) => (
        <InterfaceSection key={index} {...section} />
      ))}
    </>
  );
}

export default BenefitsDetails;
