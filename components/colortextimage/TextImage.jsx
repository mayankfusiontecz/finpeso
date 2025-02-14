import thirdcomp1 from '@/public/assets/images/about/thirdcomp1.png'
import thirdcomp2 from '@/public/assets/images/about/thirdcomp2.png'
import thirdcomp3 from '@/public/assets/images/about/thirdcomp3.png'

export default function TextImage(){
    return(
        <div className='flex items-center justify-between '>
            <div className='bg-[#E0ECFDCC] w-[40%] p-20 rounded-r-3xl'>
                <p className='text-[#172B85] text-[1.8rem] font-bold'>OUR VISION</p>
                <p className='text-[#676666] mb-5'>To make managing money simple, smart, and productive for everyone, helping them achieve their dreams effortlessly.</p>
                <p className='text-[#172B85] text-[1.8rem] font-bold'>OUR MISSION</p>
                <p className='text-[#676666] '>To simplify and enhance financial management using innovative AI tools and Open Banking, empowering individuals and businesses to grow with confidence and clarity.</p>
            </div>
            <div className='flex gap-3 mr-12'> 
                <img src={thirdcomp1.src} alt="" />
                <div className='flex flex-col gap-3'>
                <img src={thirdcomp2.src} alt="" />
                <img src={thirdcomp3.src} alt="" />
                </div>
            </div>
        </div>
    )
}