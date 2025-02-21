"use client"
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules"; 
import styles from './whyitmatters.module.css'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { GoDotFill } from "react-icons/go";
export default function WhyItMatters(props) {
    
        const [activeCardIndex, setActiveCardIndex] = useState(0);
    useEffect(()=>{
        AOS.init({
            duration:800,
            once:false,
        })
    },[])
    return (
        <div className='flex flex-col justify-center items-center px-12 max-md:px-5 max-lg:px-0'>
            <p className='text-[#172B85] text-[2.2rem] font-bold max-md:text-[1.2rem]'>{props.heading}</p>
            <div className='flex gap-8 w-full p-8 justify-items-center max-md:hidden  max-lg:gap-2' data-aos="flip-down">
                {
                    props.items.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={`group w-full py-10 p-8 rounded-xl gap-[2rem] text-[#161919] bg-[#F2FEFE] hover:bg-[#163572] hover:text-white`}
                            >
                                <img src={item.img} alt="" className='mb-5 group-hover:hidden' />
                                <img src={item.img1} alt="" className='mb-5 hidden group-hover:block' />
                                <p className='mb-2 font-semibold'>{item.heading}</p>
                                <p className='w-[90%]'>{item.content}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div data-aos="fade-up" data-aos-duration="1100" className="hidden w-[100%] mt-5 max-md:flex max-md:flex-col max-md:items-center max-md:justify-center">
            <Swiper
                    modules={[Autoplay,Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    onSlideChange={({ realIndex }) => setActiveCardIndex(realIndex)} 
                    className="w-[100%] justify-start flex"
                >
                     {
                    props.items.map((item, index) => (
                            <SwiperSlide key={index}>
                            <div className="flex flex-col items-center justify-start gap-4 px-[1rem] py-[1rem] h-[250px] bg-[#163572] text-white rounded-xl w-[100%] max-md:items-center max-md:justify-center">
                                <img src={item.img1} alt="" className='mb-5 ml-5 self-start' />
                                <p className='mb-2 font-semibold text-center'>{item.heading}</p>
                                <p className='w-[90%] text-center'>{item.content}</p>
                            </div>
                            </SwiperSlide>
                        )
                    )
                }
                </Swiper>
                <div className="flex justify-center mt-4">
          {props.items.map((_, dotIndex) => (
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
    )
}
