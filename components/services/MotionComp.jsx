"use client";
import { useState } from "react";
import { hover, motion } from "framer-motion";
import { RiSearch2Fill } from "react-icons/ri";
import { SlNote } from "react-icons/sl";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import motioncomp1 from '@/public/assets/images/services/motioncomp1.png'
import { PiNetworkXFill } from "react-icons/pi";

const features = [
    {
        id: 1,
        icon: <SlNote />,
        title: "Identify Spending Patterns",
        description: "Spot unnecessary expenses and redirect that money toward savings."
    },
    {
        id: 2,
        icon: <RiSearch2Fill />,
        title: "Real-Time Alerts",
        description: "Stay updated on your spending to avoid overspending or missed bills.",
    },
    {
        id: 3,
        icon: <PiNetworkXFill />,
        title: "Actionable Tips",
        description: "Use AI-powered suggestions to tweak your budget and optimize your savings.",
    },
    {
        id: 4,
        icon: <SiHomeassistantcommunitystore />,
        title: "Goal-Focused Saving",
        description: "Break down your big financial goals into achievable milestones and track your progress easily.",
    },
];

export default function MotionComp() {
    const [hoveredId, setHoveredId] = useState(1);

    return (
        <div className="flex flex-col items-center px-[5rem]">
            <p className="text-[#172B85] mb-10 text-[2.2rem] font-bold max-md:text-[1.5rem] max-md:text-center max-md:mb-2">HOW FINPESO HELPS YOU SAVE MONEY</p>
            <div className="flex justify-between gap-[8rem] items-center max-md:flex-col-reverse max-md:gap-[1rem] max-md:p-2 max-md:items-center">
                <div className="max-w-lg mx-auto space-y-4 w-[100vw] max-md:w-[90vw]">
                    {features.map((feature) => (
                        <motion.div
                            key={feature.id}
                            onMouseEnter={() => setHoveredId(feature.id)}
                            // onMouseLeave={() => setHoveredId(null)}
                            className={`bg-white rounded-md shadow-md border cursor-pointer overflow-hidden transition-all`}
                            animate={{ height: hoveredId === feature.id ? "auto" : "80px" }}
                            style={{
                                backgroundColor: hoveredId === feature.id ? "#E0ECFD" : "white",
                                color: hoveredId === feature.id ? "black" : ""
                            }}
                             data-aos="flip-up"
                        >
                            <div className="flex items-center gap-3 p-8">
                                <span className="text-xl text-gray-700">{feature.icon}</span>
                                <h3 className={`font-bold transition-colors duration-200 ${
                                    hoveredId === feature.id ? "text-[#224277]" : "text-gray-900"
                                }`}>
                                    {feature.title}:
                                </h3>
                            </div>
                            {hoveredId === feature.id && (
                                <motion.p
                                    className="px-4 pb-4 ml-[3rem] text-[#224277]"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {feature.description}
                                </motion.p>
                            )}
                        </motion.div>
                    ))}
                </div>
                <div className="flex items-end justify-end w-[40%] max-md:w-[80%] max-md:items-center">
                    <img src={motioncomp1.src} alt="" className="" data-aos="flip-left"/>
                </div>
            </div>
        </div>
    );
}
