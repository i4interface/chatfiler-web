import React from "react";
import Layout from "../layout/Layout";
import NewsComp from "../components/home/NewsComp";

function News() {
  const data = [
    {
      imageUrl: "https://i.postimg.cc/3wsdWbFC/equity.png",
      title: "Equity",
      description: "Description 1",
    },
    {
      imageUrl: "https://i.postimg.cc/76zJVyZW/diversity.png",
      title: "Diversity",
      description: "Description 2",
    },
    {
      imageUrl: "https://i.postimg.cc/c1Mr4hgw/financial.png",
      title: "Financial",
      description: "Description 2",
    },
    // Add more objects as needed
  ];
  return (
    <Layout>
      <section className="w-full min-h-screen bg-gray-100 rounded-t-3xl pb-5">
        <div className="w-full flex justify-between px-5 lg:px-20 gap-4 py-10">
          <h1 className=" lg:text-6xl md:text-4xl text-2xl font-medium">
            News / Updates
          </h1>
          
        </div>

        <div className="grid max-w-[1500px] mx-auto px-5 lg:px-20 md:gap-6 grid-cols-1 md:grid-cols-3">
          <NewsComp data={data} />
        </div>
      </section>
    </Layout>
  );
}

export default News;
