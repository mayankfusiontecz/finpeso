import imagetext from '@/public/assets/images/services/textimage.png'

export default function TextImage() {
    return (
        <div className='flex flex items-center gap-[8rem] px-[4rem]'>
            <div className='' data-aos="fade-right">
                <p className='text-[#172B85] text-[1.8rem] font-bold'>FINPESO: SIMPLIFY YOUR FINANCES IN MINUTES</p>
                <p className='text-[#676666] mb-5'>Managing your money doesn’t have to be complicated. With Finpeso, you can handle all your financial needs in one place, get instant clarity on your spending, and start saving smarter. Our goal is to make managing your finances easy, effective, and stress-free—all within minutes.</p>
            </div>

            <img src={imagetext.src} alt="" className='w-[50%]' />
        </div>
    )
}