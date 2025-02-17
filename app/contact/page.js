import HeroSection from "@/components/aboutandcontacthero/herosection";
import ContactPage from "@/components/ContactPage/ContactPage";
import Footer from "@/components/footer/Footer";
import contact from '@/public/assets/background/contact.png'

export default function Contact(){
    return(
        <div className="flex flex-col gap-8 overflow-hidden">
            <HeroSection
                img={contact.src}
                heading={"CONTACT US"}
                path={"/contact"}
            />
            <ContactPage/>
            <Footer/>
        </div>
    )
}