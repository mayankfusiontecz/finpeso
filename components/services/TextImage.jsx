import imagetext from '@/public/assets/images/services/textimage.png'

export default function TextImage() {
    return (
        <div className='flex items-center gap-[8rem] px-[4rem] max-md:flex-col max-md:gap-[1rem] max-md:p-2 max-md:items-center max-md:justify-center max-lg:gap-[2rem]'>
            <div className=' max-md:w-[100%] max-md:items-center max-md:justify-center max-md:flex max-md:flex-col' data-aos="fade-right">
                <p className='text-[#172B85] text-[1.8rem] font-bold max-md:text-[1.5rem] max-md:text-center max-md:w-[90%]'>FINPESO: SIMPLIFY YOUR FINANCES WITH THE BEST EXPENSE MANAGEMENT SYSTEM</p>
                <p className='text-[#676666] mb-5 max-md:text-[1rem] max-md:w-[90%] max-md:text-justify'>Managing your money doesn’t have to be complicated. With Finpeso, the best financial management app in Canada, you can handle all your financial needs in one place, get instant clarity on your spending, and start saving smarter. Our goal is to make managing your finances easy, effective, and stress-free—all within minutes.</p>
            </div>

            <img src={imagetext.src} alt="best spending tracker app" className='w-[50%] max-md:w-[80%] max-md:items-center max-md:mr-[1.5rem]'  data-aos="fade-left"/>
        </div>
    )
}