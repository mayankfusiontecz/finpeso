"use client"
import { useState } from 'react';
import Navbar from '../navbar/Navbar';
import style from './herosection.module.css'

export default function HeroSection(props){
    const [activePath , setActivePath] = useState(props.path);;
    
    return( 
        <>
            <div className={style['backgroundImage']}  style={{ backgroundImage: `url(${props.img})` }}>
                <Navbar activePath={activePath} setActivePath={setActivePath}/>
                <div className="flex items-center justify-between gap-[4rem]  py-[3%] px-[8%]">
                                    <div className="py-10 w-[40%]">
                                        <p className="text-[3.2rem] text-white font-bold w-[100%]">{props.heading}</p>
                                    </div>
                                    {
                                        props.img1 && (
                                            <div className=''>
                                            <img src={props.img1} alt=''/>
                                            </div>
                                        )
                                    }
                                </div>
            </div>
        </>
    )
}