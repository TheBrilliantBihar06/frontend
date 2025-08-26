import React, { useRef, useEffect } from "react";

export default function TeachersSection() {
  const scrollRef = useRef(null);

  const teachers = [
    { name: "Shimon", subject: "Math Master Teacher", college: "IIT Madras", exp: "7+ years exp" },
    { name: "Pahul", subject: "Chemistry Master Teacher", college: "IIT Bombay", exp: "10+ years exp" },
    { name: "Harsh Priyam", subject: "Math Master Teacher", college: "BIT Durg", exp: "9+ years exp" },
    { name: "Shreyas", subject: "Physics Master Teacher", college: "NIT Nagpur", exp: "12+ years exp" },
    { name: "Ritika", subject: "Biology Master Teacher", college: "AIIMS Delhi", exp: "8+ years exp" },
    { name: "Arjun", subject: "CS Master Teacher", college: "IIT Kanpur", exp: "11+ years exp" },
  ];

  // Auto-slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const cardWidth = scrollRef.current.firstChild.offsetWidth + 24; // card width + gap
        scrollRef.current.scrollBy({
          left: cardWidth * 3, // slide 3 cards at a time
          behavior: "smooth",
        });

        if (
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
          scrollRef.current.scrollWidth - 10
        ) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#1e2836] py-16 px-6 md:px-16">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
        Greatest <span className="text-orange-500">teachers</span> inspire
      </h2>

      {/* Info Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-center">
        <div className="bg-[#2b374b] p-6 rounded-xl shadow-sm">
          <p className="text-gray-300 font-medium">
            From Top-tier colleges with many years of experience
          </p>
        </div>
        <div className="bg-[#2b374b] p-6 rounded-xl shadow-sm">
          <p className="text-gray-300 font-medium">
            Specially-trained teachers to bring out the best in every student.
          </p>
        </div>
        <div className="bg-[#2b374b] p-6 rounded-xl shadow-sm">
          <p className="text-gray-300 font-medium">
            Teaching experience of over 4.5 crore hours to 10 lakh students in
            1000+ cities in 57 countries.
          </p>
        </div>
      </div>

      {/* Teachers Auto-Slider */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex space-x-6 px-2 scroll-smooth overflow-x-auto"
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none" // IE 10+
          }}
        >
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="min-w-[300px] md:min-w-[320px] bg-[#2b374b] rounded-xl shadow-md border border-gray-700 flex-shrink-0 transition transform hover:scale-105 hover:shadow-xl duration-500"
            >
              {/* Image Placeholder */}
              <div className="h-60 bg-gray-800 flex items-center justify-center rounded-t-xl">
                <span className="text-gray-400">[ Teacher Image ]</span>
              </div>

              {/* Card Info */}
              <div className="p-4 text-center">
                <span className="inline-block bg-gray-700 text-white text-xs px-3 py-1 rounded-full mb-3">
                  {teacher.exp}
                </span>
                <h3 className="text-lg font-semibold text-white">{teacher.name}</h3>
                <p className="text-gray-300 text-sm">{teacher.subject}</p>
                <p className="text-white font-bold text-sm">{teacher.college}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
