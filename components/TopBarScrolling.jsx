"use client";

import { useState } from "react";
import Marquee from "react-fast-marquee";

function TopBarScrolling({ apiKey }) {
  const [slides, setSlides] = useState([
    {
      id: 1,
      img: "https://i.ibb.co/LdQh8w7r/image.png",
      name: "Juice DAO",
      mcValue: "667M",
      percentage: "(+72%)",
    },
    {
      id: 2,
      img: "https://i.ibb.co/PGWG7ftp/image-1.png",
      name: "Retardio",
      mcValue: "130M",
      percentage: "(+59%)",
    },
    {
      id: 3,
      img: "https://i.ibb.co/xqmjXVrd/image-2.png",
      name: "Poopy guys",
      mcValue: "53M",
      percentage: "(+45%)",
    },
    {
      id: 4,
      img: "https://i.ibb.co/hRfbQm0S/image-3.png",
      name: "Ape",
      mcValue: "29M",
      percentage: "(+38%)",
    },
    {
      id: 5,
      img: "https://i.ibb.co/5hWHFvjz/image-4.png",
      name: "high eye order",
      mcValue: "13M",
      percentage: "(+22%)",
    },
    {
      id: 6,
      img: "https://i.ibb.co/LdQh8w7r/image.png",
      name: "Juice DAO",
      mcValue: "667M",
      percentage: "(+72%)",
    },
    {
      id: 7,
      img: "https://i.ibb.co/PGWG7ftp/image-1.png",
      name: "Retardio",
      mcValue: "130M",
      percentage: "(+59%)",
    },
    {
      id: 8,
      img: "https://i.ibb.co/xqmjXVrd/image-2.png",
      name: "Poopy guys",
      mcValue: "53M",
      percentage: "(+45%)",
    },
    {
      id: 9,
      img: "https://i.ibb.co/hRfbQm0S/image-3.png",
      name: "Ape",
      mcValue: "29M",
      percentage: "(+38%)",
    },
    {
      id: 10,
      img: "https://i.ibb.co/5hWHFvjz/image-4.png",
      name: "high eye order",
      mcValue: "13M",
      percentage: "(+22%)",
    },
  ]);

  const [isPaused, setIsPaused] = useState(false);

  const handleNext = () => {
    setSlides((prevSlides) => {
      const firstItem = prevSlides[0]; // Get the first item
      const newSlides = prevSlides.slice(1).concat(firstItem); // Move first item to the end
      return newSlides;
    });
  };

  return (
    <div className="relative flex items-center w-full p-2 text-white ">
      {/* Marquee Scrolling */}
      <Marquee pauseOnHover={!isPaused} speed={50} gradient={false}>
        {slides.map((item, index) => (
          <div
            key={index}
            className="flex gap-[14px] font-semibold items-center px-2"
          >
            <span className="text-[#ffde30]">#{item.id}</span>
            <img src={item.img} alt="" className="w-[25px] h-[25px]" />
            <span className="text-white text-[14px]">{item.name}</span>
            <h4 className="font-bold text-white text-[14px]">
              <span className="font-bold text-[#ffde30]">MCAP </span>
              {item.mcValue}
            </h4>
            <span className="text-[#64FF4A] text-[14px]">
              {item.percentage}
            </span>
          </div>
        ))}
      </Marquee>

      {/* Right Next Button */}
      <button
        onClick={handleNext}
        className="absolute z-50 p-2 text-[#ffde30] transition bg-[#0B0B12] rounded-full right-[-2rem] text-[23px] hidden 2xl:block lg:block xl:block "
      >
        <svg
          stroke="currentColor"
          fill="#ffde30"
          stroke-width="0"
          viewBox="0 0 24 24"
          height="40px"
          width="40px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
        </svg>
      </button>
    </div>
  );
}

export default TopBarScrolling;
