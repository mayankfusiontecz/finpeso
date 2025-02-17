"use client"
import { PiPhoneCallBold } from "react-icons/pi"
import { MdOutlineFax } from "react-icons/md";
import { LiaEnvelopeOpenTextSolid } from "react-icons/lia";
// import Map from "../Map/Map";
import 'leaflet/dist/leaflet.css';
import dynamic from "next/dynamic";


const Map = dynamic(() => import('../Map/Map'), { ssr: false });


export default function ContactPage() {

    const items = [
        {
            icon: <PiPhoneCallBold />,
            title: "PHONE",
            span: "519-731-5885"
        },
        {
            icon: <MdOutlineFax />,
            title: "FAX",
            span: "03 5432 1234"
        },
        {
            icon: <LiaEnvelopeOpenTextSolid />,
            title: "EMAIL",
            span: "info@finpeso.com"
        }
    ]
    return (
        <div className="flex gap-[3rem] p-[3rem] px-[8rem]">
            <div className="w-[50%]">
                <p className="text-[2.5rem] text-[#000] font-bold"> Get in <span className="text-[#224277]">Touch</span></p>
                <p className="text-[#161919] font-semibold">Services from us are trusted, reliable and professional. Please fill out the form completely, and we will get back to you as soon as possible</p>
                <form className="flex flex-col gap-5 py-5">
                    <input type="text" name="name" placeholder="Name *" requred={true} className="border-2 text-[#070030] px-[1rem] py-[0.8rem] outline-non text-[1rem]" />
                    <input type="email" name="email" placeholder="Email" className="border-2 text-[#070030] px-[1rem] py-[0.8rem] outline-non text-[1rem]" />
                    <input type="number" name="phoneNumber" placeholder="Phone Number *" required={true} className="border-2 text-[#070030] px-[1rem] py-[0.8rem] outline-non text-[1rem]" />
                    <input type="text" name="comment" placeholder="Comment" className="border-2 text-[#070030] px-[1rem] py-[0.8rem] outline-non text-[1rem]" />
                    <button type="submit" className="text-[white] bg-[#224277] px-[1.2rem] py-[0.8rem] font-bold">SEND</button>
                </form>
                <div className="flex flex-row justify-between items-center px-0">
                    {
                        items.map((item, index) => (
                            <div key={index} className="flex gap-1 max-md:flex max-md:flex-row items-center max-md:self-start">
                                <div className="text-[2rem] flex justify-center items-center">{item.icon}</div>
                                <div className="flex flex-col ml-2">
                                    <div className="text-[#000000] font-[700]">{item.title}</div>
                                    <div className="text-[#224277] font-[600] text-sm">{item.span}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
            <div className="w-[50%] p-5">
                <Map />
            </div>
        </div>
    )
}