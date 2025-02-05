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
        <div className='p-12 flex justify-center gap-[5rem]'>
            <img src={props.img} alt='image'  data-aos="fade-down-right"/>
            <div className='flex flex-col items-start justify-center w-[40%] gap-5' data-aos="fade-down-left">
                <p className='text-[#172B85] text-[2.2rem] font-bold'>{props.heading}</p>
                <p className='text-[1.2rem] w-[65%]'>{props.content}</p>
            </div>
        </div>
    )
}