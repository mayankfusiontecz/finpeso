import HeroSection from "@/components/aboutandcontacthero/herosection";
import ImageText from "@/components/aboutimagetext/ImageText";
import TextImage from "@/components/colortextimage/TextImage";
import Footer from "@/components/footer/Footer";
import OurLeadership from "@/components/ourleadership/OurLeadership";
import aboutus from '@/public/assets/background/home.png'
import herocomp from '@/public/assets/images/about/herocomp.png'

export default function Aboutus(){
    return(
        <div className="flex flex-col gap-[2rem] overflow-hidden">
            <HeroSection
                img={aboutus.src}
                img1={herocomp.src}
                heading={"MAKING MONEY MANAGEMENT SMART & SIMPLE"}
                subhead={""}
                path="/aboutus"
            />
            <ImageText/>
            <TextImage/>
            <OurLeadership/>
            <Footer/>
        </div>
    )
}