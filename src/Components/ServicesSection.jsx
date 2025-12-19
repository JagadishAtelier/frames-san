import React from "react";

const services = [
  {
    number: "01",
    title: "TV & Digital Commercial Production",
    desc: "High-impact commercials crafted for television and digital platforms. From concept to final cut, we create visually powerful stories that connect brands with their audience and drive measurable results.",
    img: "https://img.freepik.com/free-photo/press-reporter-fallowing-leads-case_23-2149579746.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80",
  },
  {
    number: "02",
    title: "Brand & Corporate Film Production",
    desc: "Cinematic brand and corporate films that communicate your vision, values, and culture. We help businesses tell authentic stories that build trust and leave a lasting impression.",
    img: "https://img.freepik.com/free-photo/man-filming-with-professional-camera_23-2149066324.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80",
  },
  {
    number: "03",
    title: "Social Media Video Campaigns",
    desc: "Fast-paced, scroll-stopping video content designed for social platforms. We create campaigns optimized for engagement, reach, and brand recall across Instagram, YouTube, and digital channels.",
    img: "https://img.freepik.com/premium-photo/four-young-women-with-cameras-headphones-posing-with-social-media-icons_1077802-351986.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80",
  },
  {
    number: "04",
    title: "Product & Promotional Video Shoots",
    desc: "Visually refined product and promotional videos that highlight details, quality, and usability. Perfect for launches, ads, and digital showcases that demand attention.",
    img: "https://img.freepik.com/free-photo/receiving-new-equipment_1098-17799.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80",
  },
  {
    number: "05",
    title: "Branding",
    desc: "Strategic branding that defines how your brand looks, feels, and communicates. From visual identity to creative direction, we build brands that are bold, consistent, and memorable.",
    img: "https://img.freepik.com/free-photo/marketing-strategy-planning-strategy-concept_53876-42950.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80",
  },
];


const ServicesSection = () => {
  return (
    <section className="lg:py-5 py-5">
      <div className="mx-auto lg:px-10 px-5">
        {/* Heading */}
        <div className="grid md:grid-cols-2 gap-10 lg:mb-20 mb-7">
          <div>
            <div className="flex lg:flex-row flex-col lg:items-center gap-3 ">
              <div className="flex gap-1 items-center">
              <span className="w-2 h-2 rounded-full bg-black" />
              <span className="uppercase tracking-widest text-sm text-gray-600">
                Services
              </span>
              </div>
                <h2 className="lg:text-7xl text-5xl font-semibold">What we do</h2>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="space-y-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative grid md:grid-cols-[80px_1fr_1fr] gap-6 items-start bg-[#ececec] hover:bg-white lg:px-8 px-3 py-10 overflow-visible rounded-2xl relative"
            >
              {/* Number */}
              <div className="text-2xl font-medium text-gray-500">
                {service.number}
              </div>

              {/* Text */}
              <div className="flex lg:flex-row flex-col gap-5 items-start">
                <h3 className="text-4xl font-semibold mb-2 lg:w-[15vw]">
                  {service.title}
                </h3>
                <p className="text-gray-600 lg:w-1/2">
                  {service.desc}
                </p>
              </div>

              {/* Hover Image */}
              <div className="lg:block hidden absolute right-10 z-10 top-1/2 -translate-y-1/2 opacity-0 translate-x-[-10%] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 pointer-events-none">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-[35vw] h-[45vh] object-cover border-white border-8 rounded-2xl"
                />
              </div>
              <div className="lg:hidden black">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-[30vh] object-cover border-white border-8 rounded-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
