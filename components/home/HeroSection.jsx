"use client"
import { useState } from "react";
import style from './HeroSection.module.css'
import Navbar from "../navbar/Navbar";
import fire from '@/public/assets/icons/home/firstcomp2.png'
import mobile from '@/public/assets/images/home/firstcomp1.png'
import arrow from '@/public/assets/icons/home/firstcomp1.png'
import { useRouter } from "next/navigation";

export default function HeroSection(){
    const [activePath , setActivePath] = useState("/");
    const router = useRouter()

    return(
            <div className={style['backgroundImage']}>
                <Navbar activePath={activePath } setActivePath={setActivePath}/>
                <div className="flex justify-center gap-[8rem] py-[3%] px-[8%]">
                    <div className="pt-5">
                        <div className="inline-flex w-auto rounded-2xl text-sm text-white bg-white bg-opacity-20 px-[16px] py-[6px]">
                        <img className="mr-2" src={fire.src} alt="Fire"/>
                        <p>100% TRUSTED PLATFORM</p>
                        </div>
                        <div className="w-[90%] mt-5">
                            <p className="text-[2.5rem] text-white font-bold ">WELCOME TO FINPESO – YOUR PERSONAL</p>
                            <p className="text-[2.5rem] text-[#1EC9E4] font-bold">FINANCIAL GATEWAY</p>
                            <div className="flex justify-start items-center">
                            <button onClick={()=>router.push('/contact')} className="bg-[#1EC9E4] text-white rounded-3xl mt-5 font-bold py-[12px] px-[28px]">Know More</button>
                                <img src={arrow.src} alt="arrow" className="self-center h-[15%] ml-[-2%] pt-5"/>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <img src={mobile.src} alt="Mobile" className="h-full"/>

                    </div>
                    
                </div>
            </div>
    )
}