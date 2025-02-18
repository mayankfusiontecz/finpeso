import HeroSection from "@/components/aboutandcontacthero/herosection";
import ContactPage from "@/components/ContactPage/ContactPage";
import Footer from "@/components/footer/Footer";
import contact from '@/public/assets/background/home.png'
import herocomp from '@/public/assets/images/contact/herocomp.png'

export default function Contact(){
    return(
        <div className="flex flex-col gap-8 overflow-hidden">
            <HeroSection
                img={contact.src}
                img1={herocomp.src}
                heading={"CONTACT US"}
                path={"/contact"}
            />
            <ContactPage/>
            <Footer/>
        </div>
    )
}