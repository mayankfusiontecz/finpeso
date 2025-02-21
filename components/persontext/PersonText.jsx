"use client"
import { useEffect } from "react"

import AOS from 'aos'
import 'aos/dist/aos.css'

export default function PersonText(props){
    useEffect(()=>{
        AOS.init({
            duration:800,
            once:false,
        })
    },[])
    return(
        <div className='flex justify-center items-center mt-8 gap-[8rem] bg-[url("/assets/background/fourthbg.png")] bg-cover bg-center'>
            <div className='mt-[-5%] w-[40%] bottom-0 max-md:hidden' data-aos="fade-right">
            <img src={props.img} alt='person'/>
            </div>
            <div className='flex flex-col gap-5 text-white justify-center w-[30%] max-md:w-[95%] max-md:p-5 ' data-aos="fade-left">
                <p className='font-bold text-[2rem] max-md:text-[1.2rem] max-md:text-center'>{props.heading}</p>
                <p className='max-md:text-[1rem] max-md:text-justify' dangerouslySetInnerHTML={{ __html: props.content }}/>
            </div>
        </div>
    )
}