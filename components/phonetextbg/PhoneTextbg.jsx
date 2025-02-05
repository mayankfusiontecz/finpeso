import fourthcomp1 from '@/public/assets/images/home/fourthcomp1.png'
import fourthcomp2 from '@/public/assets/images/home/fourthcomp2.png'
export default function PhoneTextbg(props){
    return(
        <div className="flex justify-center gap-[2rem] bg-[url('/assets/background/fourthbg.png')] h-[100%] bg-cover bg-center">
            <div className='flex justify-center items-center w-[40%] mb-[3rem]'>
                <img src={fourthcomp1.src} alt='phone 1' className='h-[70%]'/>
                <img src={fourthcomp2.src} alt='phone 2' className='h-[65%] mt-[10rem]'/>
            </div>
            <div className='flex flex-col justify-center gap-2 text-white items-start w-[40%]'>
                <p className='font-bold text-[2rem]'>{props.heading}</p>
                {props.content1 && (<p className='font-bold text-[1.2rem]'>{props.content1}</p>)}
                <p className='text-[1rem]'>{props.content2}</p>
            </div>
        </div>
    )
}