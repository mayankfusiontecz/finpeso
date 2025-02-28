"use client"
import { useState } from 'react'

export default function Accordion(props) {
    const [openAccordion, setOpenAccordion] = useState(0);

    const handleAccordionToggle = (id) => {
        setOpenAccordion(prevState => (prevState === id ? null : id));
    }

    return (
        <div className="flex flex-col items-center justify-center mb-8">
            <p className="font-montserrat text-[2.2rem] font-bold text-center mb-4 text-[#172B85] max-md:text-[1.5rem] max-md:text-center max-md:mb-2">{props.heading}</p>
            {/* <p className="font-lato text-lg text-center mb-8 text-[#525252] w-1/2">When you work with us, you're getting a full team of specialists who can help with every aspect of your business:</p> */}
            <div className="flex flex-col gap-8 justify-center px-[10%] w-screen max-md:px-[1%] max-md:w-[95%]" data-aos="fade-down" data-aos-delay='400'>
                {props.accordionData.map((item,index) => (
                    <div key={index} className={`flex flex-col border border-white rounded-xl shadow-lg p-4 ${openAccordion === index ? 'bg-[#E0ECFD]' : ''}`}>
                        <button onClick={() => handleAccordionToggle(index)} className="bg-transparent border-none cursor-pointer w-full p-0 transition-transform duration-300">
                            <div className={`flex justify-between items-center w-full text-lg font-semibold  max-md:justify-between max-md:items-start ${openAccordion === index ? 'font-extrabold' : ''}`}>
                                <p className='max-md:text-start max-md:text-[1rem]'>{item.heading}</p>
                                <svg
                                    className={`w-5 h-5 transition-transform duration-300 ${openAccordion === index ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                        </button>
                        {openAccordion === index && (
                            // <p className="font-plus-jakarta-sans text-sm text-[#525252] mt-6">{content}</p>
                            <>
                                <ul className='w-[80%] text-[0.8rem] list-disc pl-5 mt-5 max-md:w-[100%]'>
                                    {
                                        item.li.map((item,index) => {
                                            return <li key={index}><span className='font-semibold'>{item.span}</span>{item.content}</li>
                                        })
                                    }
                                </ul>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
