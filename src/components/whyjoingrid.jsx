import React from "react";

const WhyJoinGrid = () => {
  const items = [
    {
      img: "/icon1.png",
      text: "Benefit from Founders’ transformative precedents in the business world and philanthropy via Reliance ecosystem",
    },
    {
      img: "/icon2.png",
      text: "Be an integral part of the core team that can take pride in laying a solid foundation for institution building in the long run",
    },
    {
      img: "/icon3.png",
      text: "A plethora of prospects to explore other than your core competencies",
    },
    {
      img: "/icon4.png",
      text: "Once-in-a-lifetime opportunity to implement a clearly charted out growth plan",
    },
    {
      img: "/icon5.png",
      text: "Be a part of a community where passion and ownership are contagious",
    },
    {
      img: "/icon6.png",
      text: "Be part of a digitally driven culture of innovation, collaboration and entrepreneurship.",
    },
  ];

  return (
    <section className="w-full bg-[#111826] py-12 px-6 md:px-16 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            {/* Icon */}
            <div className="flex-shrink-0 w-12 h-12">
              <img
                src={item.img}
                alt={`icon-${index}`}
                className="w-full h-full object-contain"
              />
            </div>
            {/* Text */}
            <p className="text-gray-300 text-base leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyJoinGrid;
