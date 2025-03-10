"use client"
import { useEffect } from "react"

import AOS from 'aos'
import 'aos/dist/aos.css'

export default function ImageText1(props) {
    useEffect(()=>{
        AOS.init({
            duration:800,
            once:false,
        })
    },[])
    return (
        <div className={`px-[5rem] flex ${props.reverse} justify-between gap-[6rem] max-md:flex-col max-md:px-[1rem] max-md:items-center  max-md:gap-5 max-lg:px-[2rem] max-lg:gap-[1rem]`}>
            <div className='flex flex-col items-start justify-center gap-5 w-[80%] max-md:w-[95%] max-md:items-center' data-aos="zoom-out-down">
                <p className='text-[#172B85] text-[2.2rem] font-bold max-md:text-[1.5rem] max-md:text-center uppercase'>{props.heading}</p>
                {props.li1 && (<ul className='w-[90%] text-[#403F3F] text-[1rem] list-disc pl-5'>
                    <li>{props.li1}</li>
                    <li>{props.li2}</li>
                    <li>{props.li3}</li>
                    <li>{props.li4}</li>
                    <li>{props.li5}</li>
                </ul>)}
                {props.content1 && (<p className='text-[1rem] w-[85%]'>{props.content1}</p>)}
                {props.bottomli1 && (<ul className='w-[90%] text-[#403F3F] text-[1rem] list-disc pl-5'>
                    <li>{props.bottomli1}</li>
                    <li>{props.bottomli2}</li>
                    <li>{props.bottomli3}</li>
                </ul>)}
                <p className='text-[1rem] w-[85%]'>{props.content}</p>
            </div>
            <img src={props.img} alt='travel and expense management software' className='w-[40%] h-full self-center max-md:w-[80%] max-lg:h-[40%] max-lg:self-center' data-aos="zoom-out-right"/>
        </div>
    )
}


