import Cards from "@/components/cards/Cards";
import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/home/HeroSection";
import ImageCard from "@/components/imagcards/ImageCard";
import ImageText from "@/components/imageText/ImageText";
import ImageText1 from "@/components/imagetext1/ImageText1";
import ImageWithSlider from "@/components/imagewithslider/ImageWithSlider";
import PersonText from "@/components/persontext/PersonText";
import PhoneTextbg from "@/components/phonetextbg/PhoneTextbg";
import WhyItMatters from "@/components/whyitmatters/WhyItMatters";
import { homeContent } from "@/utils/home";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 overflow-hidden">
      <HeroSection/>
      <ImageText
        img={homeContent.imageText.img}
        heading={homeContent.imageText.heading}
        content={homeContent.imageText.content}
      />
      <ImageCard
        heading={homeContent.imageCard.heading}
        card1={homeContent.imageCard.card1}
        card2={homeContent.imageCard.card2}
        card3={homeContent.imageCard.card3}
        card4={homeContent.imageCard.card4}
        card5={homeContent.imageCard.card5}
        card6={homeContent.imageCard.card6}
      />
      <PhoneTextbg
        img1={homeContent.phonetextbg.img1}
        img2={homeContent.phonetextbg.img2}
        heading={homeContent.phonetextbg.heading}
        content1={homeContent.phonetextbg.content1}
        content2={homeContent.phonetextbg.content2}
      />
      <ImageWithSlider
        slides={homeContent.slides}
      />
      <WhyItMatters
        heading={homeContent.whyitmatters.heading}
        items={homeContent.whyitmatters.items}
      />
      <PersonText
        img={homeContent.persontext.img}
        heading={homeContent.persontext.heading}
        content={homeContent.persontext.content}
      />
      <Cards
        heading={homeContent.cards.heading}
        items1={homeContent.cards.items1}
        items2={homeContent.cards.items2}
        
      />
      <ImageText1
        reverse="flex-row"
        heading={homeContent.imageText1.heading}
        li1={homeContent.imageText1.li1}
        li2={homeContent.imageText1.li2}
        li3={homeContent.imageText1.li3}
        li4={homeContent.imageText1.li4}
        li5={homeContent.imageText1.li5}
        img={homeContent.imageText1.img}
        content={homeContent.imageText1.content}
      />
      <Footer/>
    </div>
  );
}
