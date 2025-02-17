"use client"
import { useState } from 'react'

export default function Accordion(props) {
    const [openAccordion, setOpenAccordion] = useState(null);

    const handleAccordionToggle = (id) => {
        setOpenAccordion(prevState => (prevState === id ? null : id));
    }

    return (
        <div className="flex flex-col items-center justify-center mt-8">
            <p className="font-montserrat text-2xl font-bold text-center mb-4">{props.heading}</p>
            {/* <p className="font-lato text-lg text-center mb-8 text-[#525252] w-1/2">When you work with us, you're getting a full team of specialists who can help with every aspect of your business:</p> */}
            <div className="flex flex-col gap-8" data-aos="fade-down" data-aos-delay='400'>
                {props.accordionData.map((item,index) => (
                    <div key={index} className={`flex flex-col border border-white rounded-xl shadow-lg p-4 w-[800px] ${openAccordion === index ? 'bg-[#E0ECFD]' : ''}`}>
                        <button onClick={() => handleAccordionToggle(index)} className="bg-transparent border-none cursor-pointer w-full p-0 transition-transform duration-300">
                            <div className={`flex justify-between items-center w-full text-lg font-semibold ${openAccordion === index ? 'font-extrabold' : ''}`}>
                                <p>{item.heading}</p>
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
                                <ul className='w-[80%] text-[1rem] list-disc pl-5 mt-5'>
                                    {
                                        item.li.map((item) => {
                                            return <li><span className='font-semibold'>{item.span}</span>{item.content}</li>
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
