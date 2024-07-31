import { Image } from "antd";
import React from "react";

export default function About() {
  return (
    <div className="my-20 w-full md:max-w-5xl mx-auto">
      <p className="text-3xl font-bold text-center mb-10">About Us</p>
      <div>
        <p className="text-2xl text-justify font-bold mb-10">
          Sarker Fitness Equipment and Accessories is a fitness brand
          specializing in all kind gym equipment. It is our goal to motivate you
          and provide you with the means to get healthy and Mighty Fit.
        </p>
        <div className="text-md space-y-6 text-justify my-7">
          <p>
            Sarker Fitness Equipment and Accessories is a leading provider of
            high-quality fitness solutions designed to meet the needs of both
            professional athletes and fitness enthusiasts. With a commitment to
            excellence and innovation, Sarker offers a diverse range of products
            that cater to various fitness levels and goals.
          </p>
          <p>
            Our product line includes state-of-the-art treadmills, ellipticals,
            stationary bikes, and strength training equipment. Each piece is
            meticulously engineered to ensure durability, safety, and optimal
            performance. Sarker's treadmills and ellipticals feature advanced
            technology, such as customizable workout programs, heart rate
            monitors, and interactive displays, enhancing the workout
            experience. Our strength training equipment, from dumbbells and
            kettlebells to multi-functional home gyms, is designed to help users
            build muscle, improve endurance, and achieve their fitness goals
            effectively.
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
        <Image src="about/aboutHappy.jpg" />

        <div className="text-md space-y-6 text-justify my-7">
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

          <h1 className="text-2xl font-bold mb-5">Vision</h1>
          <p>
            Our vision is to become a global leader in the fitness industry,
            recognized for our commitment to quality, innovation, and
            customer-centric solutions. We aspire to create a world where
            everyone has access to the best fitness tools and resources,
            enabling them to reach their full potential. By continually
            advancing our product offerings and embracing new technologies, we
            aim to inspire and support a community of fitness enthusiasts who
            prioritize their health and well-being. At Sarker Fitness Equipment
            and Accessories, we envision a future where fitness is an integral
            part of everyday life, and we are dedicated to making that vision a
            reality.
          </p>
        </div>
      </div>
      <div>
        
      </div>
      <div></div>
    </div>
  );
}
