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
        <div className='p-12 flex justify-center gap-[5rem]'>
            <img src={secondcomp1.src} alt='image'  data-aos="fade-down-right"/>
            <div className='flex flex-col items-start justify-center w-[40%] gap-5' data-aos="fade-down-left">
            <p className='text-[#172B85] text-[2.2rem] font-bold'>ABOUT US – FINPESO</p>
            <p>At Finpeso, we’re on a mission to make money management effortless and intelligent. Using Open Banking and AI-driven insights, we securely connect your financial accounts, providing a unified view of your finances so you can track spending, set goals, and make better financial decisions—whether for personal budgeting or business growth.</p>
            <p>Our AI-powered tools analyze financial data to identify opportunities for optimization, enhance productivity, and maximize every dollar to help you reach your goals with clarity and confidence.</p>
            <p>We believe managing your finances shouldn’t be complicated. With Finpeso, you save time, stay in control, and focus on what truly matters.</p>
            </div>
        </div>
    )
}