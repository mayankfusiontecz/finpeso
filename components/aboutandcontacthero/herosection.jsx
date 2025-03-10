"use client"
import { useState } from 'react';
import Navbar from '../navbar/Navbar';
import style from './herosection.module.css'
import { motion } from "framer-motion";

export default function HeroSection(props){
    const [activePath , setActivePath] = useState(props.path);
    
    return( 
        <>
            <div className={style['backgroundImage']}  style={{ backgroundImage: `url(${props.img})` }}>
                <Navbar activePath={activePath} setActivePath={setActivePath}/>
                <div className="flex items-center justify-between gap-[4rem] py-[8%] px-[8%] max-md:gap-[1rem] max-md:px-[4%]">
                                    <div className="py-10 w-[40%]">
                                        <h1 className="text-[2.5rem] text-white font-bold w-[100%] max-md:text-[1.2rem] max-lg:text-[1.5rem] uppercase">{props.heading}</h1>
                                        
                                        <div className="w-[80%] inline-block">
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
                                    className="text-[2.5rem] text-[#1EC9E4] font-bold max-md:text-[1rem] max-lg:text-[1.2rem] uppercase"
                                    style={{ display: 'inline' }} // Ensuring inline behavior
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </div>
                        
                        {/* <p  className="text-[2.5rem] text-[#1EC9E4] font-bold w-[90%] max-md:[100%] animate-fade max-md:text-[0.9rem] max-lg:text-[1.2rem]">{props.subhead}</p> */}
                                    </div>
                                    {
                                        props.img1 && (
                                            <div className='w-[50%] max-md:w-[60%]'>
                                            <img src={props.img1} alt='budget calendar app'/>
                                            </div>
                                        )
                                    }
                                </div>
            </div>
        </>
    )
}