"use client"
import { useEffect } from "react"

import AOS from 'aos'
import 'aos/dist/aos.css'
export default function ImageText(props) {
    useEffect(()=>{
        AOS.init({
            duration:800,
            once:false,
        })
    },[])
    return (
        <div className='p-12 flex justify-center gap-[5rem] max-md:flex-col-reverse max-md:gap-[1rem] max-md:p-2 max-md:items-center max-lg:gap-[2rem] max-lg:p-8'>
            <img src={props.img} alt='finance management app'  data-aos="fade-down-right" className="w-[50%] max-md:w-[80%] max-md:items-center max-lg:h-[40%] max-lg:self-center"/>
            <div className='flex flex-col items-start justify-center w-[40%] gap-5 max-md:w-[100%] max-md:items-center' data-aos="fade-down-left">
                <p className='text-[#172B85] text-[2.2rem] font-bold max-md:text-[1.5rem] max-md:text-center max-md:w-[90%]'>{props.heading}</p>
                <p className='text-[1.2rem] w-[65%] max-md:text-[1rem] max-md:w-[90%] max-md:text-justify max-lg:w-[80%] text-justify'>{props.content}</p>
            </div>
        </div>
    )
}