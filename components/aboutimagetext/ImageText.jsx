"use client"
import { useEffect } from "react"

import AOS from 'aos'
import 'aos/dist/aos.css'
import secondcomp1 from '@/public/assets/images/about/secondcomp1.png'

export default function ImageText(){
    useEffect(()=>{
            AOS.init({
                duration:800,
                once:false,
            })
        },[])
    return(
        <div className='p-12 flex flex-col items-center justify-center max-md:flex-col max-md:gap-[1rem] max-lg:[4rem] max-md:p-2 max-md:items-center max-lg:p-8'>
            <p className='text-[#172B85] text-[2.2rem] font-bold max-md:text-[1.5rem] max-md:text-center max-md:w-[90%] max-lg:mb-5'>ABOUT US – FINPESO</p>
            <div className="flex max-md:flex-col gap-[5rem]  items-center justify-center max-lg:gap-[3rem]">
            <img src={secondcomp1.src} alt='image' className='max-md:w-[80%] max-md:items-center max-lg:w-[40%]'  data-aos="fade-down-right"/>
            <div className='flex flex-col items-start justify-center w-[40%] gap-5 max-md:w-[100%] max-md:items-center' data-aos="fade-down-left">
            <p className=" max-md:text-[1rem] max-md:w-[90%] max-lg:text-justify">At Finpeso, we’re on a mission to make money management effortless and intelligent. Using Open Banking and AI-driven insights, we securely connect your financial accounts, providing a unified view of your finances so you can track spending, set goals, and make better financial decisions—whether for personal budgeting or business growth.</p>
            <p className=" max-md:text-[1rem] max-md:w-[90%] max-lg:text-justify">Our AI-powered tools analyze financial data to identify opportunities for optimization, enhance productivity, and maximize every dollar to help you reach your goals with clarity and confidence.</p>
            <p className=" max-md:text-[1rem] max-md:w-[90%] max-lg:text-justify">We believe managing your finances shouldn’t be complicated. With Finpeso, you save time, stay in control, and focus on what truly matters.</p>
            </div>
            </div>
        </div>
    )
}