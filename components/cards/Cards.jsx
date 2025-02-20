"use client"

import styles from './Card.module.css'
import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules"; 

export default function Cards (props){
    const items = [...props.items1 , ...props.items2]
    const [activeCardIndex, setActiveCardIndex] = useState(0);
    return(
        <>
        <div className="flex flex-col gap-5 items-center px-[3rem] overflow-hidden max-md:text-center" data-aos="fade-up" data-aos-duration="1000">
            <h6 className="text-[#172B85] font-bold text-[2rem] max-md:text-[1.2rem]"  data-aos="fade-up" data-aos-duration="1100">{props.heading}</h6>
            <div className="grid grid-cols-3 gap-[40px] items-center justify-center mt-[1rem] max-md:hidden"  data-aos="fade-right" data-aos-duration="1100">
                {
                    props.items1.map((box, index)=>(
                        <div key={index} className="flex flex-col items-center gap-5 px-[0.5rem] py-[2rem] text-center bg-[#EAF9FF] rounded-xl h-[320px] w-[350px] transition-transform duration-500 transform perspective-1000 hover:rotate-y-180"  data-aos="zoom-in-down">
                            <img src={box.img} alt="security icon"/>
                            <h6 className="text-[#061E42] font-[700]">{box.title}</h6>
                            <p className="text-[#061E42] w-[70%]">{box.content}</p>
                        </div>
                    ))
                }
            </div>
            <div className="grid grid-cols-2 gap-[40px] items-center justify-center mt-[0.5rem] max-md:hidden" >
                {
                    props.items2 && (props.items2.map((box, index)=>(
                        <div key={index} className="flex flex-col items-center gap-5 px-[0.5rem] py-[2rem] text-center bg-[#EAF9FF] rounded-xl h-[320px] w-[350px]"  data-aos="zoom-in-down">
                            <img src={box.img} alt="security icon"/>
                            <h6 className="text-[#061E42] font-[700]">{box.title}</h6>
                            <p className="text-[#061E42] w-[70%]">{box.content}</p>
                        </div>
                    )))
                }
            </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1100" className="hidden mt-5 max-md:flex max-md:flex-col max-md:items-center max-md:justify-center">
        <Swiper
                    modules={[Autoplay,Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    onSlideChange={({ realIndex }) => setActiveCardIndex(realIndex)} 
                    className="w-[90%]"
                >
          {
                    items.map((box, index)=>(
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
          {items.map((_, dotIndex) => (
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
    </>
    )
}