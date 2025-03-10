"use client"
import { useEffect, useState } from "react";
import style from './HeroSection.module.css'
import mobile from '@/public/assets/images/services/firstcomp1.png'
import mobile1 from '@/public/assets/images/services/herocomp.png'
import mobile2 from '@/public/assets/images/services/herocomp1.png'
import Navbar from "@/components/navbar/Navbar";
import { motion } from "framer-motion";

export default function HeroSection(){
    const [activePath , setActivePath] = useState("/services");
    const fullText="Track Smart. \nDecide Smarter. \nLive Stress-Free."

    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
      let index = -1;
      const interval = setInterval(() => {
        if (index  < fullText.length) {
          setDisplayText((prev) => prev + fullText[index]);
          index++;
        } else {
          clearInterval(interval);
        }
      }, 100); // Adjust speed here (100ms per letter)
  
      return () => clearInterval(interval);
    }, []);

    return(
            <div className={style['backgroundImage']}>
                <Navbar activePath={activePath } setActivePath={setActivePath}/>
                <div className="flex items-center justify-between gap-[2rem] py-[3%] px-[8%] max-md:gap-1 max-md:px-[3%] max-md:pb-[25%] max-md:pt-[20%] max-lg:pt-[15%] max-lg:pb-[20%]">
                    <div className="pt-5 w-[60%]">
                            <h1 className="text-[2.5rem] text-white font-bold w-[95%] max-md:text-[1.2rem] max-lg:text-[1.5rem] uppercase">FINPESO – AI That Thinks Finance for You</h1>
                            {fullText.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: index * 0.1, // Each letter appears with a small delay
                                    duration: 0.4,
                                    ease: "easeOut",
                                }}
                                className="text-[2.5rem] text-[#1EC9E4] font-bold max-md:text-[1rem] max-lg:text-[1.2rem] uppercase"
                                >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                        {/* <p  className="text-[2.5rem] text-[#1EC9E4] font-bold w-[90%] animate-fade max-md:text-[1rem] max-lg:text-[1.2rem]">{fullText}</p> */}
                    </div>
                    <div className="w-[40%] flex gap-0 items-end" >
                        <img src={mobile.src} alt="best budget planner" className=""/>
                        {/* <img src={mobile2.src} alt="Mobile" className="w-[30%] h-[30%] ml-[-3%] z-10"/> */}

                    </div>
                    
                </div>
            </div>
    )
}