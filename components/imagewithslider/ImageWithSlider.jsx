"use client";
import { useEffect, useState, useRef } from "react";

import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion } from "framer-motion";
import fifthcomp1 from "@/public/assets/images/home/fifthcomp1.png";

export default function ImageWithSlider(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [barHeight, setBarHeight] = useState(0); // Dynamic height of the active card
  const [barOffset, setBarOffset] = useState(0); // Dynamic position offset
  const cardRefs = useRef([]); // Refs for all cards

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % props.slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [props.slides.length]);

  useEffect(() => {
    if (cardRefs.current[activeIndex]) {
      const activeCard = cardRefs.current[activeIndex];
      const { height, top } = activeCard.getBoundingClientRect();

      const containerTop = cardRefs.current[0]?.getBoundingClientRect().top || 0;
      setBarHeight(height); // Set height of the active card
      setBarOffset(top - containerTop); // Set position offset
    }
  }, [activeIndex]);

  useEffect(()=>{
    AOS.init({
        duration:800,
        once:false,
    })
},[])

  return (
    <div className="flex flex-col justify-center items-center p-5">
      <p className="text-[#172B85] mb-10 text-[2.2rem] font-bold">{props.heading}</p>
      <div className="flex items-center max-md:flex-col">
        {/* Left section with cards */}
        <div className="flex flex-col justify-center items-center gap-5 ml-[5rem] relative max-md:ml-[1.5rem]"  data-aos="zoom-out">
          {props.slides.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`border border-[#E5E5E5] w-[80%] h-[80%] rounded-xl flex flex-col gap-5 p-5 transition-all duration-500 max-md:w-[100%] ${
                activeIndex === index ? "bg-[#F2FEFE]" : "bg-white"
              }`}
            >
              <p className="font-bold text-[1.2rem]">{item.heading}</p>
              <ul className="text-[1rem] list-disc pl-5">
                {item.li1 && <li>{item.li1}</li>}
                {item.li2 && <li>{item.li2}</li>}
              </ul>
            </div>
          ))}

          {/* Tube effect */}
          <div className="absolute left-[-40px] top-0 h-full w-4 bg-gray-300 rounded-full max-md:w-2 max-md:left-[-30px]">
            {/* Dynamic fill for the active card */}
            <motion.div
              className="bg-[#172B85] rounded-full w-full"
              initial={{ height: 0, y: 0 }}
              animate={{ height: `${barHeight}px`, y: `${barOffset}px` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Right section with image */}
        <img src={fifthcomp1.src} alt="fifthcomp" className="w-[40%] h-[40%] max-md:w-[80%]"  data-aos="zoom-out-up"/>
      </div>
    </div>
  );
}
