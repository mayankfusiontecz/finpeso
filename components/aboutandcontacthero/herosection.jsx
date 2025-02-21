"use client"
import { useState } from 'react';
import Navbar from '../navbar/Navbar';
import style from './herosection.module.css'
import { motion } from "framer-motion";

export default function HeroSection(props){
    const [activePath , setActivePath] = useState(props.path);;
    
    return( 
        <>
            <div className={style['backgroundImage']}  style={{ backgroundImage: `url(${props.img})` }}>
                <Navbar activePath={activePath} setActivePath={setActivePath}/>
                <div className="flex items-center justify-between gap-[4rem]  py-[8%] px-[8%]">
                                    <div className="py-10 w-[40%]">
                                        <h1 className="text-[3.2rem] text-white font-bold w-[100%] max-md:text-[1rem] max-lg:text-[2rem]">{props.heading}</h1>
                                        {props.subhead.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: index * 0.1, // Each letter appears with a small delay
                                    duration: 0.4,
                                    ease: "easeOut",
                                }}
                                 className="text-[2.5rem] text-[#1EC9E4] font-bold w-[80%] max-sm:text-[1rem]"
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                                    </div>
                                    {
                                        props.img1 && (
                                            <div className='w-[50%] max-md:w-[70%]'>
                                            <img src={props.img1} alt=''/>
                                            </div>
                                        )
                                    }
                                </div>
            </div>
        </>
    )
}