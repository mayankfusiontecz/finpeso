import logo from '@/public/assets/images/logo.png'
import Link from 'next/link'
import { FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="flex flex-row gap-[8rem] max-lg:gap-[2rem] px-15 bg-[#061E42] max-md:flex-col bg-[url('/assets/background/footer.png')] bg-cover bg-center">
            <div className="flex flex-col gap-5 w-[28%] px-[1.5rem] py-[1.5rem] mx-[5%] max-md:items-center max-md:justify-center max-md:text-center">
                <img src={logo.src} alt="Logo" className='w-[50%] mb-2' />
                <p className='text-white text-[1.2rem]'>
                    We will likely assistance organizations
                    keep up accomplish best class positions
                    their separate enterprises & our group
                    works happen that delights need to be
                    disavowed.
                </p>
            </div>
            <div className="flex py-10 gap-[8rem] max-lg:gap-[3rem] items-start justify-evenly text-[white] pr-5 max-md:p-[1rem]">
                    <div className="flex flex-col gap-2 max-md:w-[100%]">
                        <h6 className="w-[100%] text-[1.4rem] font-bold">Contact Us</h6>
                        {/* <p className='font-semibold'> Office Location</p>
                        <p>124, Queens walk 2nd cross Denmark</p> */}
                        <p className='font-semibold mt-2'>Phone No.</p>
                        <p><Link href={"tel:+15197315885"}>519-731-5885</Link></p>
                        <p className='font-semibold mt-2'>Email Address</p>
                        <p><Link href={"mailto:info@finpeso.com"}>info@finpeso.com</Link></p>
                    </div>
                    <div className="flex flex-col gap-3 max-md:w-[100%]">
                        <h6 className="w-[100%] text-[1.4rem] font-bold mb-5">Useful Links</h6>
                        <ul className="flex flex-col gap-5">
                            <li className="flex gap-2 items-center relative pl-4">
                                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-[#fff]"></span>
                                <Link href={"/aboutus"}>About</Link>
                            </li>
                            <li className="flex gap-2 items-center relative pl-4">
                                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-[#fff]"></span>
                                <Link href={"/services"}>Services</Link>
                            </li>
                            <li className="flex gap-2 items-center relative pl-4">
                                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-[#fff]"></span>
                                <Link href={"/contact"}>Contact</Link>
                            </li>
                        </ul>
                    </div>
            </div>
                <ul className="flex flex-col text-[white] items-center self-center justify-center gap-3">
                        {/* <li className="flex gap-2 items-center justify-center bg-[#00A3F7] w-[40px] h-[40px]"><FaTwitter /></Link></li> */}
                        <li className="flex gap-2 items-center justify-center border border-white rounded-3xl w-[40px] h-[40px]"><Link href="https://www.facebook.com"><FaFacebookF /></Link></li>
                        <li className="flex gap-2 items-center justify-center border border-white rounded-3xl w-[40px] h-[40px]"><Link href="https://www.pinterest.com"><FaPinterestP /></Link></li>
                        <li className="flex gap-2 items-center justify-center border border-white rounded-3xl w-[40px] h-[40px]"><Link href="https://www.x.com"><FaTwitter /></Link></li>
                        <li className="flex gap-2 items-center justify-center border border-white rounded-3xl w-[40px] h-[40px]"><Link href="https://www.linkedin.com/company/finpeso/"><FaLinkedinIn /></Link></li>
                    </ul>
        </div>
    )
}