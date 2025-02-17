import imagetext1 from '@/public/assets/images/services/textimage1.png'
import imagetext2 from '@/public/assets/images/services/textimage2.png'
import imagetext3 from '@/public/assets/images/services/textimage3.png'
import imagetext4 from '@/public/assets/images/services/textimage4.png'
import imagetext5 from '@/public/assets/images/services/textimage5.png'
import imagetext6 from '@/public/assets/images/services/textimage6.png'
import imagetext7 from '@/public/assets/images/services/textimage7.png'

export default function TextImage(){
    return(
        <div className='flex flex-col gap-5'>
            <div className='flex gap-8 items-center justify-center'>
                        <img src={imagetext1.src} alt=''/>
                        <img src={imagetext2.src} alt=''/>
                        <img src={imagetext3.src} alt=''/>
                        <img src={imagetext4.src} alt=''/>
                    </div>
            <div className='flex items-center justify-between '>  
                    <div className='bg-[#E0ECFDCC] w-[40%] p-20 rounded-r-3xl' data-aos="fade-right">
                        <p className='text-[#172B85] text-[1.8rem] font-bold'>Finpeso: Simplify Your Finances in Minutes</p>
                        <p className='text-[#676666] mb-5'>Managing your money doesn’t have to be complicated. With Finpeso, you can handle all your financial needs in one place, get instant clarity on your spending, and start saving smarter. Our goal is to make managing your finances easy, effective, and stress-free—all within minutes.</p>
                    </div>
                    <div className='flex gap-3 mr-12'> 
                        <img src={imagetext5.src} alt=""  data-aos="flip-left"/>
                        <div className='flex flex-col gap-3' data-aos="flip-right">
                        <img src={imagetext6.src} alt="" />
                        <img src={imagetext7.src} alt="" />
                        </div>
                    </div>
            </div>
        </div>
    )
}