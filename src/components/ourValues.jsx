import React from "react";

const OurValues = () => {
  const values = [
    {
      title: "Inclusiveness",
      text: "We foster an inclusive and caring environment that embraces diverse backgrounds, identities and perspectives. We treat all people with respect and dignity. We listen to and encourage each other’s input and opinion.",
    },
    {
      title: "Integrity",
      text: "We take accountability and responsibility for our actions, decisions and behaviours. We are honest and do the right thing in order to preserve both our personal and the Institute’s reputations. We work together in a collaborative and collegiate manner.",
    },
    {
      title: "Excellence",
      text: "We have a mind-set of giving our best, seeking new and better ways to approach challenges, utilizing a digital first approach and continually work to improve ourselves. We hold ourselves and our colleagues accountable to this value.",
    },
    {
      title: "Freedom of inquiry",
      text: "We provide an environment where bright, curious and critical minds work together to advance new ideas and technologies. We collaborate to explore, persevere and ultimately resolve challenges. All research upholds the highest standards of academic rigour.",
    },
    {
      title: "Growth Mindset",
      text: "We possess a love of learning and continually strive to develop and improve ourselves and support others to do the same. We are resilient and accept challenges and failures as opportunities to grow.",
    },
    {
      title: "Courage",
      text: "We are resilient, patient and tenacious. We embrace new (and old) challenges with passion and conviction. We stand up for what is right.",
    },
  ];

  return (
    <section className="w-full bg-[#111826] py-12 px-6 md:px-16 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((item, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <div className="w-72 h-72 md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-lg">
            <img
              src="/your-image.jpg" // replace manually with your image
              alt="Our Values"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
