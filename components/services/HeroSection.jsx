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
                <div className="flex items-center justify-between gap-[5rem] py-[3%] px-[8%]">
                    <div className="pt-5 w-[60%]">
                            <p className="text-[2.5rem] text-white font-bold w-[80%]">FINPESO - AI THAT SIMPLIFIES YOUR FINANCES</p>
                            <p className="text-[2.5rem] text-[#1EC9E4] font-bold">SMART TRACKING, SMARTER DECISIONS, STRESS-FREE MONEY MANAGEMENT</p>
                            
                    </div>
                    <div className="w-[40%]">
                        <img src={mobile.src} alt="Mobile" className=""/>

                    </div>
                    
                </div>
            </div>
    )
}