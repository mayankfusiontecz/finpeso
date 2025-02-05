"use client"
import { useEffect } from "react"

import AOS from 'aos'
import 'aos/dist/aos.css'
export default function WhyItMatters(props) {
    useEffect(()=>{
        AOS.init({
            duration:800,
            once:false,
        })
    },[])
    return (
        <div className='flex flex-col justify-center items-center px-12'>
            <p className='text-[#172B85] text-[2.2rem] font-bold'>{props.heading}</p>
            <div className='flex gap-8 w-full p-8 justify-items-center' data-aos="flip-down">
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
        </div>
    )
}
