import thirdcomp from '@/public/assets/images/about/thirdcomp.png'
import thirdcomp2 from '@/public/assets/images/about/thirdcomp2.png'
import thirdcomp3 from '@/public/assets/images/about/thirdcomp3.png'

export default function TextImage(){
    return(
        <div className='flex items-center justify-between gap-[5rem] pl-[5rem]  max-md:flex-col-reverse max-md:gap-[1rem] max-md:p-2 max-md:items-center max-md:justify-center'>
            <div className='flex flex-col w-[40%] max-md:w-[100%] max-md:justify-center max-md:items-center' data-aos="fade-right">
                <p className='text-[#172B85] text-[1.8rem] font-bold mb-2 max-md:text-[1.5rem] max-md:text-center max-md:w-[90%]'>OUR VISION</p>
                <p className='text-[#676666] mb-8 max-md:text-[1rem] max-md:w-[90%] max-md:text-justify'>To make managing money simple, smart, and productive for everyone, helping them achieve their dreams effortlessly.</p>
                <p className='text-[#172B85] text-[1.8rem] font-bold mb-2 max-md:text-[1.5rem] max-md:text-center max-md:w-[90%]'>OUR MISSION</p>
                <p className='text-[#676666]  max-md:text-[1rem] max-md:w-[90%] max-md:text-justify'>To simplify and enhance financial management using innovative AI tools and Open Banking, empowering individuals and businesses to grow with confidence and clarity.</p>
            </div>
            <div className='w-[40%] mr-[5rem] max-md:w-[80%] max-md:mr-0 max-md:items-center'>

            <img src={thirdcomp.src} alt="" data-aos="flip-left"/>
            </div>
        </div>
    )
}