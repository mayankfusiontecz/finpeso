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
                <div className="flex justify-between gap-[3rem] pl-[8%] py-[5%]">
                    <div className="pt-5">
                        <div className="w-[90%] mt-5">
                            <p className="text-[2.5rem] text-white font-bold ">Finpeso – AI That Simplifies Your Finances</p>
                            <p className="text-[2.5rem] text-[#1EC9E4] font-bold">Smart Tracking, Smarter Decisions, Stress-Free Money Management</p>
                            
                        </div>
                    </div>
                    <div className="w-[100%]">
                        <img src={mobile.src} alt="Mobile" className="h-full"/>

                    </div>
                    
                </div>
            </div>
    )
}