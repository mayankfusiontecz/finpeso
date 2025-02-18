"use client"
import { useEffect } from "react"

import AOS from 'aos'
import 'aos/dist/aos.css'
export default function PhoneTextbg(props){
    useEffect(()=>{
        AOS.init({
            duration:800,
            once:false,
        })
    },[])
    return(
        <div className="flex justify-center gap-[4rem] bg-[url('/assets/background/fourthbg.png')] h-[100%] bg-cover bg-center">
                {
                props.img1?(
                    <div className='flex justify-center items-center w-[50%] py-[2rem]'  data-aos="zoom-in">
                        <img src={props.img1} alt='phone 1' className='w-[50%]'/>
                    </div>
                    )
                    :
                    (
                        <div  className='flex justify-center items-end w-[25%] py-[3rem]' data-aos="zoom-in">
                            <img src={props.image1} alt='phone 1' className=''/>
                        </div>
                    )
                }
            <div className='flex flex-col justify-center gap-2 text-white items-start w-[40%]' data-aos="zoom-in-up">
                <p className='font-bold text-[2rem]'>{props.heading}</p>
                {props.content1 && (<p className='font-bold text-[1.2rem]'>{props.content1}</p>)}
                <p className='text-[1rem]'>{props.content2}</p>
            </div>
        </div>
    )
}