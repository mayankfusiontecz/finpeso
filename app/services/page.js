import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/services/HeroSection";
import ImageText1 from "@/components/imagetext1/ImageText1";
import ImageWithSlider from "@/components/imagewithslider/ImageWithSlider";
import PersonText from "@/components/persontext/PersonText";
import PhoneTextbg from "@/components/phonetextbg/PhoneTextbg";
import WhyItMatters from "@/components/whyitmatters/WhyItMatters";
import { ServicesContent } from "@/utils/services";
import TextImage from "@/components/services/TextImage";
import Accordian from "@/components/services/Accordion";
import Cards from "@/components/services/Card";
import MotionComp from "@/components/services/MotionComp";


export default function Services() {
    return (

        <div className="flex flex-col gap-[2rem] overflow-hidden">
            <HeroSection />
            <TextImage/>
            <WhyItMatters
                heading={ServicesContent.whyitmatters.heading}
                items={ServicesContent.whyitmatters.items}
            />
            <PhoneTextbg
                image1={ServicesContent.phonetextbg.img1}
                heading={ServicesContent.phonetextbg.heading}
                content2={ServicesContent.phonetextbg.content2}
            />
            <Accordian
                heading={ServicesContent.imageCard.heading}
                accordionData={ServicesContent.imageCard.card}
            />
            <PersonText
                img={ServicesContent.persontext.img}
                heading={ServicesContent.persontext.heading}
                content={ServicesContent.persontext.content}
            />
            {/* <ImageWithSlider
                heading="HOW FINPESO HELPS YOU SAVE MONEY"
                slides={ServicesContent.slides}
            /> */}
            <MotionComp/>
            <Cards
                heading={ServicesContent.cards.heading}
                items1={ServicesContent.cards.items1}
                
                />
            <ImageText1
                reverse = "flex-row-reverse"
                heading={ServicesContent.imageText1.heading}
                content1={ServicesContent.imageText1.content1}
                img={ServicesContent.imageText1.img}
                content={ServicesContent.imageText1.content}
                />
                <Footer/>
        </div>
    )
}