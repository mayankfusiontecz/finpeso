import thirdcomp from '@/public/assets/images/about/thirdcomp.png'
import thirdcomp2 from '@/public/assets/images/about/thirdcomp2.png'
import thirdcomp3 from '@/public/assets/images/about/thirdcomp3.png'

export default function TextImage(){
    return(
        <div className='flex items-center justify-between pl-[5rem] '>
            <div className='w-[60%]' data-aos="fade-right">
                <p className='text-[#172B85] text-[1.8rem] font-bold'>OUR VISION</p>
                <p className='text-[#676666] mb-5'>To make managing money simple, smart, and productive for everyone, helping them achieve their dreams effortlessly.</p>
                <p className='text-[#172B85] text-[1.8rem] font-bold'>OUR MISSION</p>
                <p className='text-[#676666] '>To simplify and enhance financial management using innovative AI tools and Open Banking, empowering individuals and businesses to grow with confidence and clarity.</p>
            </div>
            <div>

            <img src={thirdcomp.src} alt=""  data-aos="flip-left"/>
            </div>
        </div>
    )
}