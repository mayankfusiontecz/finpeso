"use client"
import { useState } from "react";
import style from './HeroSection.module.css'
import mobile from '@/public/assets/images/services/firstcomp1.png'
import Navbar from "@/components/navbar/Navbar";

export default function HeroSection(){
    const [activePath , setActivePath] = useState("/services");;

    return(
            <div className={style['backgroundImage']}>
                <Navbar activePath={activePath } setActivePath={setActivePath}/>
                <div className="flex items-center justify-between gap-[2rem] py-[3%] px-[8%]">
                    <div className="pt-5 w-[50%]">
                        <div className="w-[90%] mt-5">
                            <p className="text-[2.5rem] text-white font-bold ">FINPESO - AI THAT SIMPLIFIES YOUR FINANCES</p>
                            <p className="text-[2.5rem] text-[#1EC9E4] font-bold">SMART TRACKING, SMARTER DECISIONS, STRESS-FREE MONEY MANAGEMENT</p>
                            
                        </div>
                    </div>
                    <div className="w-[40%]">
                        <img src={mobile.src} alt="Mobile" className="h-full"/>

                    </div>
                    
                </div>
            </div>
    )
}