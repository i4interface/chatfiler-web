import React from "react";
import FeatureComp from "./FeatureComp";

function KeyPoints() {
  const data = [
    {
      heading: "Simplicity at its Core",
      ImgUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/44cea3cbab6abd1eb809cbe24d559829b10594d1334506d6511a084e620db8b1?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/44cea3cbab6abd1eb809cbe24d559829b10594d1334506d6511a084e620db8b1?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/44cea3cbab6abd1eb809cbe24d559829b10594d1334506d6511a084e620db8b1?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/44cea3cbab6abd1eb809cbe24d559829b10594d1334506d6511a084e620db8b1?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/44cea3cbab6abd1eb809cbe24d559829b10594d1334506d6511a084e620db8b1?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/44cea3cbab6abd1eb809cbe24d559829b10594d1334506d6511a084e620db8b1?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/44cea3cbab6abd1eb809cbe24d559829b10594d1334506d6511a084e620db8b1?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/44cea3cbab6abd1eb809cbe24d559829b10594d1334506d6511a084e620db8b1?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&",
      description:
        "Our intuitive platform is built to simplify the tax filing process. No more daunting forms or confusing jargon – Chat Filer guides you step-by-step, making sure you understand each element of your return.",
    },
    {
      heading: "Accessible Anytime, Anywhere",
      ImgUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a5691a25ded4acb02881faa89bfb6f6116d3e241007ade4e6998bf3547131ea4?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5691a25ded4acb02881faa89bfb6f6116d3e241007ade4e6998bf3547131ea4?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5691a25ded4acb02881faa89bfb6f6116d3e241007ade4e6998bf3547131ea4?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5691a25ded4acb02881faa89bfb6f6116d3e241007ade4e6998bf3547131ea4?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5691a25ded4acb02881faa89bfb6f6116d3e241007ade4e6998bf3547131ea4?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5691a25ded4acb02881faa89bfb6f6116d3e241007ade4e6998bf3547131ea4?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5691a25ded4acb02881faa89bfb6f6116d3e241007ade4e6998bf3547131ea4?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5691a25ded4acb02881faa89bfb6f6116d3e241007ade4e6998bf3547131ea4?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&",
      description:
        "Whether you're on the go or relaxing at home, ChatFiler is accessible whenever you need it. File your taxes at your own pace, and rest easy knowing that our platform is available 24/7.",
    },
    {
      heading: "Real-time Support",
      ImgUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ee13fef29e45ab6e9fbf59ffe17cab1d49ba02911fb1707bab62687b61c4faa6?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee13fef29e45ab6e9fbf59ffe17cab1d49ba02911fb1707bab62687b61c4faa6?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee13fef29e45ab6e9fbf59ffe17cab1d49ba02911fb1707bab62687b61c4faa6?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee13fef29e45ab6e9fbf59ffe17cab1d49ba02911fb1707bab62687b61c4faa6?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee13fef29e45ab6e9fbf59ffe17cab1d49ba02911fb1707bab62687b61c4faa6?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee13fef29e45ab6e9fbf59ffe17cab1d49ba02911fb1707bab62687b61c4faa6?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee13fef29e45ab6e9fbf59ffe17cab1d49ba02911fb1707bab62687b61c4faa6?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee13fef29e45ab6e9fbf59ffe17cab1d49ba02911fb1707bab62687b61c4faa6?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&",
      description:
        "Need assistance during the filing process? Our live chat support is just a click away. Our team of experts is ready to provide real-time assistance and clarification on any queries you may have.",
    },
    {
      heading: "Security First",
      ImgUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8f16dd07e06b26270b7ef7e75ff2966938c85536124caaa2fb113b5cd4895dad?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f16dd07e06b26270b7ef7e75ff2966938c85536124caaa2fb113b5cd4895dad?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f16dd07e06b26270b7ef7e75ff2966938c85536124caaa2fb113b5cd4895dad?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f16dd07e06b26270b7ef7e75ff2966938c85536124caaa2fb113b5cd4895dad?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f16dd07e06b26270b7ef7e75ff2966938c85536124caaa2fb113b5cd4895dad?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f16dd07e06b26270b7ef7e75ff2966938c85536124caaa2fb113b5cd4895dad?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f16dd07e06b26270b7ef7e75ff2966938c85536124caaa2fb113b5cd4895dad?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f16dd07e06b26270b7ef7e75ff2966938c85536124caaa2fb113b5cd4895dad?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&",
      description:
        "Your financial information is of utmost importance, and we take security seriously. ChatFiler employs robust encryption protocols to safeguard your data, ensuring a secure and confidential filing experience.",
    },
    {
      heading: "Automated Guidance",
      ImgUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c622a73c8288432adc16a14363ec2a0275e046047b187daf43ec753993d227e1?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c622a73c8288432adc16a14363ec2a0275e046047b187daf43ec753993d227e1?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c622a73c8288432adc16a14363ec2a0275e046047b187daf43ec753993d227e1?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c622a73c8288432adc16a14363ec2a0275e046047b187daf43ec753993d227e1?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c622a73c8288432adc16a14363ec2a0275e046047b187daf43ec753993d227e1?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c622a73c8288432adc16a14363ec2a0275e046047b187daf43ec753993d227e1?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c622a73c8288432adc16a14363ec2a0275e046047b187daf43ec753993d227e1?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c622a73c8288432adc16a14363ec2a0275e046047b187daf43ec753993d227e1?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&",
      description:
        "Worried about missing out on potential deductions or credits? ChatFiler's intelligent algorithms analyze your information in real-time, providing suggestions and prompts to maximize your return.",
    },
    {
      heading: "Time-Efficient",
      ImgUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/03b461134b050e0f949c21664334060f32b892d076fe4b627bcee7231e64d055?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/03b461134b050e0f949c21664334060f32b892d076fe4b627bcee7231e64d055?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/03b461134b050e0f949c21664334060f32b892d076fe4b627bcee7231e64d055?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/03b461134b050e0f949c21664334060f32b892d076fe4b627bcee7231e64d055?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/03b461134b050e0f949c21664334060f32b892d076fe4b627bcee7231e64d055?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/03b461134b050e0f949c21664334060f32b892d076fe4b627bcee7231e64d055?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/03b461134b050e0f949c21664334060f32b892d076fe4b627bcee7231e64d055?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/03b461134b050e0f949c21664334060f32b892d076fe4b627bcee7231e64d055?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&",
      description:
        "We value your time. With ChatFiler, say goodbye to lengthy processes. Our platform streamlines the filing experience, allowing you to complete your tax return efficiently without unnecessary delays.",
    },
    {
      heading: "Year-Round Updates",
      ImgUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/020e8d8b62ed11f53111509bd7f239b7f17241647d987aa4f39895241fabe797?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/020e8d8b62ed11f53111509bd7f239b7f17241647d987aa4f39895241fabe797?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/020e8d8b62ed11f53111509bd7f239b7f17241647d987aa4f39895241fabe797?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/020e8d8b62ed11f53111509bd7f239b7f17241647d987aa4f39895241fabe797?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/020e8d8b62ed11f53111509bd7f239b7f17241647d987aa4f39895241fabe797?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/020e8d8b62ed11f53111509bd7f239b7f17241647d987aa4f39895241fabe797?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/020e8d8b62ed11f53111509bd7f239b7f17241647d987aa4f39895241fabe797?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/020e8d8b62ed11f53111509bd7f239b7f17241647d987aa4f39895241fabe797?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&",
      description:
        "Tax regulations can change, and we've got you covered. ChatFiler ensures that you stay informed with updates on tax laws and regulations throughout the year, giving you peace of mind.",
    },
  ];
  return (
    <section >
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mx-auto mt-10">
        <FeatureComp data={data}/>
      </div>
    </section>
  );
}

export default KeyPoints;
