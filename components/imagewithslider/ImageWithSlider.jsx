import fifthcomp1 from '@/public/assets/images/home/fifthcomp1.png'

export default function ImageWithSlider(props){
    return(
        <div className='flex flex-col justify-center items-center'>
            <p className='text-[#172B85] mb-10 text-[2.2rem] font-bold'>{props.heading}</p>
            <div className="">

            </div>
            <img src={fifthcomp1.src} alt='fifthcomp'/>
        </div>
    )
}