
import TestimonialCaro from "../home/TestimonialCaro";

function Testimonials() {
  const details = [
    {
      id: 1,
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ff825c75c003228cbc5ab7a5b94fbac1f4197d251ee8ca120912d13a2d3b3cb3?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff825c75c003228cbc5ab7a5b94fbac1f4197d251ee8ca120912d13a2d3b3cb3?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff825c75c003228cbc5ab7a5b94fbac1f4197d251ee8ca120912d13a2d3b3cb3?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff825c75c003228cbc5ab7a5b94fbac1f4197d251ee8ca120912d13a2d3b3cb3?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff825c75c003228cbc5ab7a5b94fbac1f4197d251ee8ca120912d13a2d3b3cb3?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff825c75c003228cbc5ab7a5b94fbac1f4197d251ee8ca120912d13a2d3b3cb3?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff825c75c003228cbc5ab7a5b94fbac1f4197d251ee8ca120912d13a2d3b3cb3?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff825c75c003228cbc5ab7a5b94fbac1f4197d251ee8ca120912d13a2d3b3cb3?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&",
      name: "The Smith Family",
      testimonial:
        " Netfilers transformed our home internet experience. We feel secure knowing our kids are protected online.",
    },
    {
      id: 2,
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9a5ed83b477bb8c0923a45bf8d5bb540e4e8b82fdff5fbb3f37b2677d6af1c66?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a5ed83b477bb8c0923a45bf8d5bb540e4e8b82fdff5fbb3f37b2677d6af1c66?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a5ed83b477bb8c0923a45bf8d5bb540e4e8b82fdff5fbb3f37b2677d6af1c66?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a5ed83b477bb8c0923a45bf8d5bb540e4e8b82fdff5fbb3f37b2677d6af1c66?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a5ed83b477bb8c0923a45bf8d5bb540e4e8b82fdff5fbb3f37b2677d6af1c66?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a5ed83b477bb8c0923a45bf8d5bb540e4e8b82fdff5fbb3f37b2677d6af1c66?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a5ed83b477bb8c0923a45bf8d5bb540e4e8b82fdff5fbb3f37b2677d6af1c66?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a5ed83b477bb8c0923a45bf8d5bb540e4e8b82fdff5fbb3f37b2677d6af1c66?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&",
      name: "Jane Doe",
      testimonial:
        "As a business owner, Netfilers' network management features have been a game-changer. Efficient and reliable!",
    },
    {
      id: 3,
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/da4a55a150c736eb2a1a7ebc12f0c9e4a38a3eddfe97722c7f8e105b1330da61?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/da4a55a150c736eb2a1a7ebc12f0c9e4a38a3eddfe97722c7f8e105b1330da61?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/da4a55a150c736eb2a1a7ebc12f0c9e4a38a3eddfe97722c7f8e105b1330da61?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/da4a55a150c736eb2a1a7ebc12f0c9e4a38a3eddfe97722c7f8e105b1330da61?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/da4a55a150c736eb2a1a7ebc12f0c9e4a38a3eddfe97722c7f8e105b1330da61?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/da4a55a150c736eb2a1a7ebc12f0c9e4a38a3eddfe97722c7f8e105b1330da61?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/da4a55a150c736eb2a1a7ebc12f0c9e4a38a3eddfe97722c7f8e105b1330da61?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/da4a55a150c736eb2a1a7ebc12f0c9e4a38a3eddfe97722c7f8e105b1330da61?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&",
      name: "Sarah Jackson",
      testimonial:
        "I hesitated to invest in consulting services initially, but working with a business coach turned out to be one of my best decisions ever.",
    },
    {
      id: 4,
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9a5ed83b477bb8c0923a45bf8d5bb540e4e8b82fdff5fbb3f37b2677d6af1c66?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a5ed83b477bb8c0923a45bf8d5bb540e4e8b82fdff5fbb3f37b2677d6af1c66?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a5ed83b477bb8c0923a45bf8d5bb540e4e8b82fdff5fbb3f37b2677d6af1c66?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a5ed83b477bb8c0923a45bf8d5bb540e4e8b82fdff5fbb3f37b2677d6af1c66?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a5ed83b477bb8c0923a45bf8d5bb540e4e8b82fdff5fbb3f37b2677d6af1c66?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a5ed83b477bb8c0923a45bf8d5bb540e4e8b82fdff5fbb3f37b2677d6af1c66?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a5ed83b477bb8c0923a45bf8d5bb540e4e8b82fdff5fbb3f37b2677d6af1c66?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a5ed83b477bb8c0923a45bf8d5bb540e4e8b82fdff5fbb3f37b2677d6af1c66?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&",
      name: "Jane Doe",
      testimonial:
        "As a business owner, Netfilers' network management features have been a game-changer. Efficient and reliable!",
    },
    {
      id: 5,
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/da4a55a150c736eb2a1a7ebc12f0c9e4a38a3eddfe97722c7f8e105b1330da61?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/da4a55a150c736eb2a1a7ebc12f0c9e4a38a3eddfe97722c7f8e105b1330da61?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/da4a55a150c736eb2a1a7ebc12f0c9e4a38a3eddfe97722c7f8e105b1330da61?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/da4a55a150c736eb2a1a7ebc12f0c9e4a38a3eddfe97722c7f8e105b1330da61?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/da4a55a150c736eb2a1a7ebc12f0c9e4a38a3eddfe97722c7f8e105b1330da61?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/da4a55a150c736eb2a1a7ebc12f0c9e4a38a3eddfe97722c7f8e105b1330da61?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/da4a55a150c736eb2a1a7ebc12f0c9e4a38a3eddfe97722c7f8e105b1330da61?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/da4a55a150c736eb2a1a7ebc12f0c9e4a38a3eddfe97722c7f8e105b1330da61?apiKey=b0ebdb0531a54cd5ae83bb8ca11729d9&",
      name: "Sarah Jackson",
      testimonial:
        "I hesitated to invest in consulting services initially, but working with a business coach turned out to be one of my best decisions ever.",
    },
    // Add more slides as needed
  ];

  return (
    <section className="w-full max-md:px-5">
      <h1 className="w-full lg:px-20 2xl:text-5xl xl:text-3xl text-2xl font-medium mb-5 mt-10">Reviews</h1>
      <div className="flex flex-col px-14 py-12 bg-black shadow-sm rounded-[48px] max-md:px-5">
        <TestimonialCaro details={details} />
      </div>
    </section>
  )};
  export default Testimonials;
