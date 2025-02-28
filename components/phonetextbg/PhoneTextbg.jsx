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
        <div className="flex justify-between px-[8%] gap-[5rem] bg-[url('/assets/background/fourthbg.png')] h-[100%] bg-cover bg-center max-md:p-[5%] max-md:flex-col-reverse max-md:gap-2">
                {/* {
                props.img1?(
                    <div className='flex justify-center items-center w-[50%] py-[2rem]'  data-aos="zoom-in">
                        <img src={props.img1} alt='phone 1' className='w-[50%]'/>
                    </div>
                    )
                    :
                    ( */}
                        <div  className='flex justify-center items-end w-[30%] py-[3rem] max-md:w-[100%] max-md:items-center max-md:py-0' data-aos="zoom-in">
                            <img src={props.image1} alt='best financial management app' className=''/>
                        </div>
                    {/* )
                } */}
            <div className='flex flex-col justify-center gap-2 text-white items-start w-[60%] max-md:w-[95%] max-md:items-center' data-aos="zoom-in-up">
                <p className='font-bold text-[2rem] max-md:text-[1.2rem] max-md:text-center '>{props.heading}</p>
                {props.content1 && (<p className='font-bold text-[1.2rem] max-md:text-[1rem] max-md:text-center text-justify'>{props.content1}</p>)}
                <p className='text-[1rem]  max-md:text-[0.8rem] max-md:text-center text-justify'>{props.content2}</p>
            </div>
        </div>
    )
}