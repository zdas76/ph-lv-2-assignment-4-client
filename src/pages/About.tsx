import { Button, Form, Image, Input, Rate } from "antd";
import TextArea from "antd/es/input/TextArea";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const team = [
  {
    name: "Saswata Mrinal",
    image: "https://i.ibb.co/zRPBH3T/20211225-224608.jpg",
    designation: "CEO",
  },
  {
    name: "Sarah Thompson",
    image: "https://i.ibb.co/WFK3C0R/SM-15000.jpg",
    designation: "FEO",
  },

  {
    name: "John Davis",
    star: 5,
    image: "https://i.ibb.co/1b6mJVQ/hridoy.jpg",
    designation: "Founder",
  },
  {
    name: "Michael Brown",
    image: "https://i.ibb.co/BzxQmY1/DSC-0257.jpg",
    designation: "Globex Corporation",
  },
];

const customerReview = [
  {
    review_id: "001",
    customer_name: "John Doe",
    rating: 5,
    review:
      "Excellent quality fitness equipment. The dumbbells I purchased are durable and easy to grip. Fast delivery and great customer service.",
  },
  {
    review_id: "002",
    customer_name: "Jane Smith",
    rating: 4,
    review:
      "Bought a yoga mat and resistance bands. The mat is non-slip and comfortable. The bands offer good resistance. Would have given 5 stars if the delivery was a bit faster.",
  },
  {
    review_id: "003",
    customer_name: "Alex Johnson",
    rating: 3,
    review:
      "Ordered a treadmill. The product works fine, but the assembly instructions were confusing. It took longer than expected to set it up.",
  },
  {
    review_id: "004",
    customer_name: "Maria Garcia",
    rating: 5,
    review:
      "The jump rope and kettlebells I bought are top-notch. I’m very satisfied with my purchase. Great value for the price.",
  },
  {
    review_id: "005",
    customer_name: "Mike Brown",
    rating: 4,
    review:
      "Bought a set of resistance bands. They are of good quality and come in different resistance levels. Delivery was on time.",
  },
  {
    review_id: "006",
    customer_name: "Emily Davis",
    rating: 2,
    review:
      "The stability ball I received had a puncture. Customer service was responsive, but the replacement process took longer than expected.",
  },
  {
    review_id: "007",
    customer_name: "David Wilson",
    rating: 5,
    review:
      "Purchased a pull-up bar. It’s sturdy and easy to install. The price was reasonable, and I’m very happy with the product.",
  },
  {
    review_id: "008",
    customer_name: "Sophia Lee",
    rating: 4,
    review:
      "I ordered a set of yoga blocks and a foam roller. The blocks are firm, and the roller is great for post-workout recovery. Delivery was slightly delayed.",
  },
  {
    review_id: "009",
    customer_name: "James Miller",
    rating: 3,
    review:
      "Bought a pair of adjustable dumbbells. The weights are fine, but the adjustment mechanism feels a bit flimsy. Not bad for the price, though.",
  },
  {
    review_id: "010",
    customer_name: "Olivia Martinez",
    rating: 5,
    review:
      "The resistance bands and jump rope I ordered exceeded my expectations. High quality, and the shipping was faster than anticipated. Will buy again!",
  },
];
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function About() {
  return (
    <div className="my-20 w-full container mx-auto px-2">
      <p className="text-3xl font-bold text-center mb-10">About Us</p>
      <div>
        <p className="text-xl text-justify font-bold mb-10">
          Sarker Fitness Equipment and Accessories is a fitness brand
          specializing in all kind gym equipment. It is our goal to motivate you
          and provide you with the means to get healthy and Mighty Fit.
        </p>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="text-md space-y-6 text-justify flex-1">
            <p>
              Sarker Fitness Equipment and Accessories is a leading provider of
              high-quality fitness solutions designed to meet the needs of both
              professional athletes and fitness enthusiasts. With a commitment
              to excellence and innovation, Sarker offers a diverse range of
              products that cater to various fitness levels and goals.
            </p>
            <p>
              Our product line includes state-of-the-art treadmills,
              ellipticals, stationary bikes, and strength training equipment.
              Each piece is meticulously engineered to ensure durability,
              safety, and optimal performance. Sarker's treadmills and
              ellipticals feature advanced technology, such as customizable
              workout programs, heart rate monitors, and interactive displays,
              enhancing the workout experience. Our strength training equipment,
              from dumbbells and kettlebells to multi-functional home gyms, is
              designed to help users build muscle, improve endurance, and
              achieve their fitness goals effectively.
            </p>
            <p>
              In addition to fitness equipment, Sarker also provides a
              comprehensive selection of accessories, including yoga mats,
              resistance bands, foam rollers, and fitness trackers. These
              accessories are crafted from premium materials to ensure longevity
              and comfort, aiding users in their fitness journey.
            </p>
            <p>
              At Sarker Fitness Equipment and Accessories, customer satisfaction
              is our top priority. We offer exceptional customer service, with a
              team of knowledgeable experts ready to assist with product
              selection, usage tips, and maintenance advice. Our mission is to
              empower individuals to lead healthier, more active lives by
              providing them with the tools they need to succeed. Choose Sarker
              for reliable, innovative, and effective fitness solutions that
              support your health and wellness goals.
            </p>
          </div>
          <div className="text-center">
            <Image
              src="about/aboutHappy.jpg"
              alt="Image"
              width="500px"
              className="mx-auto block "
            />
          </div>
        </div>

        {/* Missing and Vission */}
        <p className="text-3xl mt-28 mb-5 uppercase font-bold">
          Missing and Vission
        </p>
        <div className="text-md text-justify flex gap-5 items-center mb-24 flex-col lg:flex-row">
          <div className="border p-5 bg-white">
            <h1 className="text-2xl font-bold mb-5">Mission</h1>
            <p>
              At Sarker Fitness Equipment and Accessories, our mission is to
              empower individuals to achieve their fitness goals by providing
              high-quality, innovative, and reliable fitness solutions. We are
              committed to enhancing the health and well-being of our customers
              through a diverse range of products designed to meet the needs of
              all fitness levels. Our dedication to excellence, customer
              satisfaction, and continuous improvement drives us to deliver
              superior fitness equipment and accessories that help users lead
              healthier, more active lives.
            </p>
          </div>

          <div className="border p-5 bg-white">
            <h1 className="text-2xl font-bold mb-5">Vision</h1>
            <p>
              Our vision is to become a global leader in the fitness industry,
              recognized for our commitment to quality, innovation, and
              customer-centric solutions. We aspire to create a world where
              everyone has access to the best fitness tools and resources,
              enabling them to reach their full potential. By continually
              advancing our product offerings and embracing new technologies, we
              aim to inspire and support a community of fitness enthusiasts who
              prioritize their health and well-being. At Sarker Fitness
              Equipment and Accessories, we envision a future where fitness is
              an integral part of everyday life, and we are dedicated to making
              that vision a reality.
            </p>
          </div>
        </div>
      </div>

      <p className="text-3xl mt-28 mb-5 uppercase font-bold">Team Members</p>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 text-center gap-5 mb-28">
        {team.map((item) => (
          <div className="border rounded-xl p-5 shadow-xl ">
            <p>
              <Image
                src={item.image}
                width={200}
                height={200}
                className="w-[250px] h-[250px] rounded-full"
              />
            </p>
            <p className="text-xl font-bold uppercase">{item.name}</p>
            <p className="font-bold">{item.designation}</p>
          </div>
        ))}
      </div>

      <p className="text-3xl mt-28 mb-5 uppercase font-bold">
        Customer Testimonials
      </p>
      <div className="my-10 ">
        <Carousel
          responsive={responsive}
          keyBoardControl={true}
          itemClass="carousel-item-padding-40-px"
          swipeable={false}
          draggable={false}
        >
          {customerReview.map((review, index) => (
            <div
              key={index}
              className="border p-3 shadow max-h-full bg-white rounded-md h-full gap-3 mx-1"
            >
              <div>
                <p className="font-bold text-xl mb-2">{review.customer_name}</p>
                <p className="text-justify my-3">{review.review}</p>
              </div>
              <div>
                <p>
                  <Rate defaultValue={review.rating} allowClear={false} />
                </p>
              </div>
            </div>
          ))}
        </Carousel>
        <div className="grid grid-cols-4 gap-5"></div>
      </div>
      <div>
        <div className="flex flex-col lg:flex-row gap-5  bg-white rounded-xl">
          <div className="w-full p-10 lg:w-1/2  lg:border-r-2">
            <h1 className="uppercase text-black mb-6 text-2xl font-bold ">
              contact for Support
            </h1>
            <Form className="space-y-5">
              <Input placeholder="Your Email" />
              <Input placeholder="Your Name" />
              <TextArea placeholder="Your Message" rows={3} />
              <Button
                type="primary"
                htmlType="submit"
                className="px-10 py-5 mt-5"
              >
                Send
              </Button>
            </Form>
          </div>
          <div className="w-full  mx-auto px-5 py-10  bg-white rounded-xl lg:w-1/2 text-center p-5">
            <h1 className="text-2xl mb-4">Contact Person :</h1>
            <p className="text-lg font-bold mt-6"> Saswata Das Mrinal</p>
            <p className="font-semibold">CEO</p>
            <p>01000000000</p>
            <p>Email: mrinal_ceo@mail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
