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
            <div className='mt-[-5%] w-[40%] bottom-0' data-aos="fade-right">
            <img src={props.img} alt='person'/>
            </div>
            <div className='flex flex-col gap-5 text-white justify-center w-[30%]' data-aos="fade-left">
                <p className='font-bold text-[2rem]'>{props.heading}</p>
                <p className='' dangerouslySetInnerHTML={{ __html: props.content }}/>
            </div>
        </div>
    )
}