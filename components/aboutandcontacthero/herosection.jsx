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
                <div className="flex justify-between gap-[4rem] p-[5%]">
                                    <div className="py-10 w-[60%]">
                                        <p className="text-[3.2rem] text-white font-bold w-[100%]">{props.heading}</p>
                                    </div>
                                    {
                                        props.img1 && (
                                            <div className='w-[70%]'>
                                            <img src={props.img1} alt=''/>
                                            </div>
                                        )
                                    }
                                </div>
            </div>
        </>
    )
}