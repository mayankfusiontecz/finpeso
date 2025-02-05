import Cards from "@/components/cards/Cards";
import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/homepage/services/HeroSection";
import ImageCard from "@/components/imagcards/ImageCard";
import ImageText from "@/components/imageText/ImageText";
import ImageText1 from "@/components/imagetext1/ImageText1";
import ImageWithSlider from "@/components/imagewithslider/ImageWithSlider";
import PersonText from "@/components/persontext/PersonText";
import PhoneTextbg from "@/components/phonetextbg/PhoneTextbg";
import WhyItMatters from "@/components/whyitmatters/WhyItMatters";
import { ServicesContent } from "@/utils/services";


export default function Services() {
    return (

        <div className="flex flex-col gap-8">
            <HeroSection />
            <ImageText
                img={ServicesContent.imageText.img}
                heading={ServicesContent.imageText.heading}
                content={ServicesContent.imageText.content}
            />
            <WhyItMatters
                heading={ServicesContent.whyitmatters.heading}
                items={ServicesContent.whyitmatters.items}
            />
            <PhoneTextbg
                heading={ServicesContent.phonetextbg.heading}
                content2={ServicesContent.phonetextbg.content2}
            />
            <ImageCard
                heading={ServicesContent.imageCard.heading}
                card1={ServicesContent.imageCard.card1}
                card2={ServicesContent.imageCard.card2}
                card3={ServicesContent.imageCard.card3}
                card4={ServicesContent.imageCard.card4}
                card5={ServicesContent.imageCard.card5}
                card6={ServicesContent.imageCard.card6}
            />
            <ImageWithSlider
                heading="HOW FINPESO HELPS YOU SAVE MONEY"
                slides={ServicesContent.slides}
            />
            <PersonText
                heading={ServicesContent.persontext.heading}
                content={ServicesContent.persontext.content}
            />
            <Cards
                heading={ServicesContent.cards.heading}
                items1={ServicesContent.cards.items1}

            />
            <ImageText1
                heading={ServicesContent.imageText1.heading}
                content1={ServicesContent.imageText1.content1}
                content={ServicesContent.imageText1.content}
            />
            <Footer/>
        </div>
    )
}