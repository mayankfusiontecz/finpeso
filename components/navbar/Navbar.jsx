"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/images/logo.svg";
import style from "../navbar/navbar.module.css";
import { useState, useEffect } from "react";
import WhiteMenu from '@/public/assets/icons/menu.svg'
import { useRouter } from "next/navigation";

export default function Navbar({activePath,setActivePath}) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [isDrawerOpen,setDrawerOpen] = useState(false);
    const router = useRouter();

    const toggleDrawer =()=>{
        setDrawerOpen(!isDrawerOpen)
    };

    const closeDrawer = () =>{
        setDrawerOpen(false)
    }

    const handleLinkClick = (path) => {
        setActivePath(path);
        setShowDropdown(false);
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.dropdown') && !event.target.closest('.services-link')) {
                setShowDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="flex w-full justify-between items-center py-[2rem] px-[2.6rem] max-md:px-[1rem] max-md:py-[0.8rem]">
            <Link href="/" onClick={() => handleLinkClick("/")}
                className={style.navLink}>
                <Image src={logo} alt="company-logo" className="w-[200px] max-md:w-[120px]" />
            </Link>
            <div className="flex gap-[3rem] max-md:hidden">
                    <Link href="/" onClick={() => handleLinkClick("/")}
                        className={`${style.navLink} ${activePath === "/" ? style.navActive : ''}`}
                    >Home</Link>
                     <Link href="/aboutus" onClick={() => handleLinkClick("/aboutus")}
                        className={`${style.navLink} ${activePath === "/aboutus" ? style.navActive : ''}`}
                    >About Us</Link>
                     <Link href="/services" onClick={() => handleLinkClick("/services")}
                        className={`${style.navLink} ${activePath === "/services" ? style.navActive : ''}`}
                    >Services</Link>
            </div>
            <div>

            <button onClick={()=> router.push("/contact")} className={`${activePath === "/contact" ? "bg-[#113471] text-white px-[1.5rem] py-[0.5rem] rounded-3xl font-bold border-2 border-white  max-md:hidden" : "bg-[#fff] text-[#113471] text-[1.2rem] rounded-3xl font-bold self-start px-[1.5rem] py-[0.5rem] max-md:hidden"}`}>
                Contact
            </button>
            </div>
            <img src={WhiteMenu.src} className="hidden max-md:flex text-[#fff]" onClick={toggleDrawer} alt="Menu"/>
            {isDrawerOpen && (
                <>
                <div className="flex flex-col gap-[2rem] top-[12%] left-[60%] fixed z-1000 bg-[#061E42] p-[5%] rounded-sm">
                    <Link href="/" onClick={() => handleLinkClick("/")}
                        className={`${style.navLink} ${activePath === "/" ? 'font-bold' : ''}`}
                    >Home</Link>
                     <Link href="/aboutus" onClick={() => handleLinkClick("/aboutus")}
                        className={`${style.navLink} ${activePath === "/aboutus" ? 'font-bold' : ''}`}
                    >About Us</Link>
                    <Link href="/services" onClick={() => handleLinkClick("/services")}
                        className={`${style.navLink} ${activePath === "/services" ? 'font-bold' : ''}`}
                    >Services</Link>
                    <Link href="/contact" onClick={() => handleLinkClick("/contact")}
                        className={`${style.navLink} ${activePath === "/contact" ? 'font-bold' : ''}`}
                    >Contact</Link>
                    
            </div>
            </>)}
        </nav>
    );
}
