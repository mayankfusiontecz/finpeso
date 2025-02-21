"use client"

import styles from './Card.module.css'
import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules"; 
export default function Cards(props) {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
    return (
      <div
        className="flex flex-col gap-5 items-center px-[3rem] overflow-hidden max-md:text-center my-8 max-md:px-[1rem]"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <p
          className="text-[#172B85] font-bold text-[2rem] max-md:text-[1.5rem] max-md:text-center max-md:mb-2"
          data-aos="fade-up"
          data-aos-duration="1100"
        >
          {props.heading}
        </p>
        <div
          className="grid grid-cols-3 gap-[40px] items-center justify-center mt-[1rem] max-md:hidden"
          data-aos="fade-right"
          data-aos-duration="1100"
        >
          {props.items1.map((box, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-5 px-[0.5rem] py-[2rem] text-center bg-[#fff] rounded-xl h-[320px] w-[350px] transition-all duration-300 group hover:bg-[#163572]"
            >
              {/* Image - on hover make it white */}
              <img
                src={box.img}
                alt="security icon"
                className="transition-all duration-300 group-hover:grayscale-0 group-hover:brightness-100 group-hover:invert group-hover:filter"
              />
              {/* Title - on hover make text white */}
              <h6 className="text-[#061E42] font-[700] group-hover:text-white transition-all duration-300">
                {box.title}
              </h6>
              {/* Content - on hover make text white */}
              <p className="text-[#061E42] w-[70%] group-hover:text-white transition-all duration-300">
                {box.content}
              </p>
            </div>
          ))}
        </div>
        <div data-aos="fade-up" data-aos-duration="1100" className="hidden max-md:w-[100%] mt-5 max-md:flex max-md:flex-col max-md:items-center max-md:justify-center">
        <Swiper
                    modules={[Autoplay,Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    onSlideChange={({ realIndex }) => setActiveCardIndex(realIndex)} 
                    className="w-[100%]"
                >
          {
                    props.items1.map((box, index)=>(
                        <SwiperSlide key={index}>
                        <div className="flex flex-col items-center justify-center gap-4 px-[1rem] py-[2rem] h-[350px] bg-[#EAF9FF] rounded-xl w-[100%] max-md:items-center max-md:justify-center" data-aos="zoom-in-down">
                           <img src={box.img} alt="security icon"/>
                            <h6 className="text-[#061E42] font-[700] text-center">{box.title}</h6>
                            <p className="text-[#061E42] w-[70%] text-center">{box.content}</p>
                        </div>
                        </SwiperSlide>
                    ))
                }
        </Swiper>
        <div className="flex justify-center mt-4">
          {props.items1.map((_, dotIndex) => (
            <span
              className={`${styles.navdot} ${dotIndex === activeCardIndex ? styles.current : ''}`}
              key={dotIndex}
              onClick={() => setActiveCardIndex(dotIndex)}  
            >
              <GoDotFill className={styles.navinside} />
            </span>
          ))}
        </div>
        </div>
      </div>
    );
  }
  