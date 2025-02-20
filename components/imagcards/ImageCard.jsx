"use client"
import { useEffect } from "react"

import AOS from 'aos'
import 'aos/dist/aos.css'
import thirdcomp1 from '@/public/assets/images/home/thirdcomp1.png'
import thirdcomp2 from '@/public/assets/images/home/thirdcomp2.png'
import thirdcomp3 from '@/public/assets/images/home/thirdcomp3.png'
import thirdicon1 from '@/public/assets/icons/home/thirdcomp1.png'
import thirdicon2 from '@/public/assets/icons/home/thirdcomp2.png'

export default function ImageCard(props) {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
    }, [])
    return (
        <div className='flex flex-col justify-center gap-8 items-center'>
            <p className='text-[#172B85] mb-10 text-[2.2rem] font-bold max-md:text-[1.5rem] max-md:text-center max-md:mb-2'>{props.heading}</p>
            <div className='flex justify-between gap-0 bg-[#F2FEFE] px-[2rem] w-[100%] max-md:p-[1rem] max-md:gap-[1rem]  rounded-xl max-md:w-[90%] max-md:items-end max-md:justify-center'>
                <div className='flex relative ml-12 w-[30%] max-md:ml-2 max-md:h-[30%] max-md:bottom-0 max-md:w-0' data-aos="fade-up-right">
                    <img src={thirdcomp1.src} alt='Mobile' className="max-md:mb-[-1rem] max-md:hidden"/>
                </div>
                <div className='flex flex-col justify-center w-[50%] max-md:w-[95%]' data-aos="fade-up-left">
                    <p className='text-[1.8rem] mb-5 font-bold max-md:text-[1.2rem] max-md:mb-1'>
                        {props.card1.heading}
                    </p>
                    <ul className='w-[70%] text-[1rem] list-disc pl-5 max-md:w-[100%]'>
                        <li>{props.card1.span1 && (<span className='font-semibold'>{props.card1.span1}</span>)}{props.card1.li1}</li>
                        <li>{props.card1.span2 && (<span className='font-semibold'>{props.card1.span2}</span>)}{props.card1.li2}</li>
                    </ul>
                </div>

            </div>
            <div className='flex justify-center gap-[5rem] mx-[4rem] max-md:flex-col max-md:p-[1rem] max-md:mx-0 max-md:items-center max-md:gap-8'>
                <div className='bg-[#F2FEFE] w-[50%] p-8 rounded-xl  max-md:w-[95%]' data-aos="fade-right">
                    <img src={thirdicon1.src} alt='icon' />
                    <p className='text-[2rem] font-bold mt-8 mb-4 max-md:text-[1.2rem]'>{props.card2.heading}</p>
                    <ul className='w-[80%] text-[1rem] list-disc pl-5 max-md:w-[100%]'>
                        {
                            props.card2.li.map((item,index) => {
                                return <li key={index}> <span className='font-semibold'>{item.span}</span>{item.content}</li>
                            })
                        }
                    </ul>
                </div>
                <div className="w-[50%] p-8 rounded-xl bg-[#001027] overflow-hidden max-md:w-[95%] max-md:mx-0" data-aos="fade-left">
                    <img src={thirdicon2.src} alt='icon' />
                    <p className='text-[2rem] text-white font-bold mt-8 mb-4 max-md:text-[1.2rem]'>{props.card3.heading}</p>
                    <ul className='w-[90%] mb-[4rem] text-[#A7A7A7] text-[1rem] list-disc pl-5'>
                        <li>{props.card3.span1 && (<span className='font-semibold'>{props.card3.span1}</span>)}{props.card3.li1}</li>
                        <li>{props.card3.span2 && (<span className='font-semibold'>{props.card3.span2}</span>)}{props.card3.li2}</li>
                    </ul>
                    <img src={thirdcomp3.src} alt='icon' className='mb-[-100%] h-[100%] max-md:h-[80%] max-lg:w-[90%]' />
                </div>
            </div>
            <div className='flex justify-center gap-5 mx-[5rem] max-md:flex-col max-md:mx-0 max-md:items-center max-md:p-[1rem]'>
                <div className='w-[40%] bg-[#E2FF54] rounded-xl p-8 max-md:w-[95%] max-md:p-[1rem]' data-aos="flip-left">
                    <p className='text-[2rem] text-black font-bold mt-8 mb-4 max-md:text-[1.2rem]'>{props.card4.heading}</p>
                    <ul className='w-[90%] text-[#403F3F] text-[1.2rem] list-disc pl-5 max-md:text-[1rem]'>
                        <li>{props.card4.span1 && (<span className='font-semibold'>{props.card4.span1}</span>)}{props.card4.li1}</li>
                        <li>{props.card4.span2 && (<span className='font-semibold'>{props.card4.span2}</span>)}{props.card4.li2}</li>
                    </ul>
                </div>
                <div className='w-[40%] bg-[#F2FEFE] rounded-xl p-8 relative  max-md:w-[95%] max-md:p-[1rem]' data-aos="flip-left">
                    <img src={props.card5.img} alt=''  className="max-md:hidden"/>
                    <p className='text-[2rem] text-black font-bold mt-8 mb-4  max-md:text-[1.2rem]'>{props.card5.heading}</p>
                    <ul className='w-[90%] text-[#403F3F] text-[1.2rem] list-disc pl-5 max-md:text-[1rem]'>
                        <li>{props.card5.span1 && (<span className='font-semibold'>{props.card5.span1}</span>)}{props.card5.li1}</li>
                        <li>{props.card5.span2 && (<span className='font-semibold'>{props.card5.span2}</span>)}{props.card5.li2}</li>
                    </ul>
                    <img src={props.card5.bottomimg} alt='' className='absolute bottom-0 right-0 w-[250px] h-auto  max-md:w-[150px]' />
                </div>
                <div className='w-[40%] bg-[#71D5EC] rounded-xl p-8 pb-0 max-md:w-[95%] max-md:p-[1rem]' data-aos="flip-left">
                    <p className='text-[2rem] text-black font-bold mt-8 mb-4 max-md:text-[1.2rem]'>{props.card6.heading}</p>
                    <ul className='w-[90%] text-[#403F3F] text-[1.2rem] list-disc pl-5 max-md:text-[1rem]'>
                        <li>{props.card6.span1 && (<span className='font-semibold'>{props.card6.span1}</span>)}{props.card6.li1}</li>
                        <li>{props.card6.span2 && (<span className='font-semibold'>{props.card6.span2}</span>)}{props.card6.li2}</li>
                    </ul>
                    <img src={props.card6.img} alt='' className='bottom-0 w-[20vw] mt-[2rem] max-md:mb-[-1rem] max-md:w-[60vw]' />
                </div>
            </div>
        </div>
    )
}