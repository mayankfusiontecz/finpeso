"use client"

import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules"; 
import styles from './OurLeadership.module.css'

export default function OurLeadership(){
    const [activeCardIndex, setActiveCardIndex] = useState(0);
    const items=[
        {
            heading:"JAZ SINGH", 
            designation:"FOUNDER",
            content:"A globally certified financial and tech leader, Jaswinder brings a wealth of international experience and cutting-edge expertise to every project. Holding prestigious certifications from PMP, Google, IBM, CFI, and the New York Institute of Finance, he is committed to leveraging fintech innovation to transform financial management."
        },
        {
            heading:"PRAFULL CHAUHAN",
            designation:"CO-FOUNDER",
            content:"With 5 years of experience in full-stack development, project management, and team leadership, Prafull is the problem solver behind Finpeso’s seamless technology. He specializes in stack development, handling project issues, and managing technical teams, ensuring that our platform delivers efficiency, security, and smart financial insights."
        }
    ]
    return(
        <div className="flex flex-col items-center justify-center">
            <p className="text-[#172B85] mb-10 text-[2.2rem] font-bold max-md:text-[1.5rem] max-md:text-center max-md:mb-2">MEET OUT LEADERS</p>
            <div className="flex p-8 px-[15rem] justify-between gap-[8rem] max-md:hidden max-lg:gap-[2rem]">
                {
                    items.map((item,index)=>{
                        return(
                            <div key={index} 
                            className="relative p-8 bg-white rounded-lg shadow-lg transition-all ease-in-out duration-300
                            max-lg:w-[40vw]
                        hover:bg-[#E6F0FD] hover:before:absolute hover:before:right-0 hover:before:bottom-0 hover:before:w-[10px] hover:before:h-full hover:before:bg-[#172B85] hover:before:rounded-br-2xl hover:before:rounded-tr-lg
                        hover:after:absolute hover:after:right-0 hover:after:bottom-0 hover:after:h-[10px] hover:after:w-full hover:after:bg-[#172B85] hover:after:rounded-br-2xl hover:after:rounded-bl-lg"
                            style={{ boxShadow: '9px 13px 36.3px 8px rgba(0, 0, 0, 0.15)' }}
                                 data-aos="zoom-in"
                            >
                            <p className="text-[#172B85] text-[1.5rem] font-bold mb-2">{item.heading}</p>
                            <p className="text-[#676666] mb-4">{item.designation}</p>
                            <p className="text-[#676666] text-justify">{item.content}</p>
                            </div>

                        )
                    })
                }
            </div>
            <div data-aos="fade-up" data-aos-duration="1100" className="hidden w-[90%] mt-5 max-md:flex max-md:flex-col max-md:items-center max-md:justify-center">
        <Swiper
                    modules={[Autoplay,Pagination]}
                    spaceBetween={20}
                    slidesPerView={1} 
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    onSlideChange={({ realIndex }) => setActiveCardIndex(realIndex)} 
                    className="w-[90%] rounded-lg shadow-lg"
                >
          {
                    items.map((item, index)=>(
                        <SwiperSlide key={index} className="h-full flex items-stretch">
                         <div key={index} 
                            className="relative p-8 bg-white rounded-lg shadow-lg transition-all ease-in-out duration-300 self-stretch  h-[420px]
                       "
                            style={{ boxShadow: '9px 13px 36.3px 8px rgba(0, 0, 0, 0.15)' }}
                                 data-aos="zoom-in"
                            >
                            <p className="text-[#172B85] text-[1.5rem] font-bold mb-2">{item.heading}</p>
                            <p className="text-[#676666] mb-4">{item.designation}</p>
                            <p className="text-[#676666] text-justify">{item.content}</p>
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
            <p className="text-[1.5rem] text-[#172B85] font-bold mt-12 max-md:text-[1.5rem] max-md:text-center max-md:mb-2">SMARTER FINANCES, BETTER DECISIONS</p>
            <p className="text-[1.5rem] text-[#403F3F] font-bold mb-12 max-md:text-[1rem] max-md:w-[90%] max-md:text-justif">Let’s make managing your money stress-free and productive, together!</p>
        </div>
    )
}