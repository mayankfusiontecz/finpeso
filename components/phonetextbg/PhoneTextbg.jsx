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
        <div className="flex justify-center gap-[2rem] bg-[url('/assets/background/fourthbg.png')] h-[100%] bg-cover bg-center">
                {
                props.img1?(
                    <div className='flex justify-center items-center w-[40%] mb-[3rem]' data-aos="zoom-in">
                    <>
                        <img src={props.img1} alt='phone 1' className='h-[70%]'/>
                        <img src={props.img2} alt='phone 2' className='h-[65%] mt-[10rem]'/>
                    </>
                    </div>
                    )
                    :
                    (
                        <div  className='flex justify-center items-end w-[40%] mb-[3rem] gap-5' data-aos="zoom-in">
                        <>
                            <img src={props.image1} alt='phone 1' className='h-[90%]'/>
                            <img src={props.image2} alt='phone 2' className='h-[65%]'/>
                        </>
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