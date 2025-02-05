import thirdcomp1 from '@/public/assets/images/home/thirdcomp1.png'
import thirdcomp2 from '@/public/assets/images/home/thirdcomp2.png'
import thirdcomp3 from '@/public/assets/images/home/thirdcomp3.png'
import thirdicon1 from '@/public/assets/icons/home/thirdcomp1.png'
import thirdicon2 from '@/public/assets/icons/home/thirdcomp2.png'

export default function ImageCard(props) {
    return (
        <div className='flex flex-col justify-center gap-8 items-center'>
            <p className='text-[#172B85] mb-10 text-[2.2rem] font-bold'>{props.heading}</p>
            <div className='flex justify-between gap-8 bg-[#F2FEFE] px-[2rem] w-[90%]'>
                <div className='flex relative'>
                    <img src={thirdcomp1.src} alt='Mobile' />
                    <img src={thirdcomp2.src} alt='Mobile' className='ml-[-19%] mt-[10%] h-[85%]' />
                </div>
                <div className='flex flex-col justify-center w-[50%]'>
                    <p className='text-[1.8rem] mb-5 font-bold'>
                        {props.card1.heading}
                    </p>
                    <ul className='w-[70%] text-[1rem] list-disc pl-5'>
                        <li>{props.card1.span1 && (<span className='font-semibold'>{props.card1.span1}</span>)}{props.card1.li1}</li>
                        <li>{props.card1.span2 && (<span className='font-semibold'>{props.card1.span2}</span>)}{props.card1.li2}</li>
                    </ul>
                </div>

            </div>
            <div className='flex justify-center gap-[5rem] mx-[4rem]'>
                <div className='bg-[#F2FEFE] w-[50%] p-8 rounded-xl '>
                    <img src={thirdicon1.src} alt='icon' />
                    <p className='text-[2rem] font-bold mt-8 mb-4'>{props.card2.heading}</p>
                    <ul  className='w-[80%] text-[1rem] list-disc pl-5'>
                        {
                            props.card2.li.map((item)=>{
                                return <li><span className='font-semibold'>{item.span}</span>{item.content}</li>
                            })
                        }
                    </ul>
                </div>
                <div className="w-[50%] p-8 rounded-xl bg-[#001027] overflow-hidden">
                    <img src={thirdicon2.src} alt='icon' />
                    <p className='text-[2rem] text-white font-bold mt-8 mb-4'>{props.card3.heading}</p>
                    <ul className='w-[90%] mb-[4rem] text-[#A7A7A7] text-[1rem] list-disc pl-5'>
                        <li>{props.card3.span1 && (<span className='font-semibold'>{props.card3.span1}</span>)}{props.card3.li1}</li>
                        <li>{props.card3.span2 && (<span className='font-semibold'>{props.card3.span2}</span>)}{props.card3.li2}</li>
                    </ul>
                    <img src={thirdcomp3.src} alt='icon' className='mb-[-100%] h-[100%]' />
                </div>
            </div>
            <div className='flex justify-center gap-5 mx-[5rem]'>
                <div className='w-[40%] bg-[#E2FF54] rounded-xl p-8'>
                    <p className='text-[2rem] text-black font-bold mt-8 mb-4'>{props.card4.heading}</p>
                    <ul className='w-[90%] text-[#403F3F] text-[1.2rem] list-disc pl-5'>
                        <li>{props.card4.span1 && (<span className='font-semibold'>{props.card4.span1}</span>)}{props.card4.li1}</li>
                        <li>{props.card4.span2 && (<span className='font-semibold'>{props.card4.span2}</span>)}{props.card4.li2}</li>
                    </ul>
                </div>
                <div className='w-[40%] bg-[#F2FEFE] rounded-xl p-8'>
                    <img src={props.card5.img} alt=''/>
                    <p className='text-[2rem] text-black font-bold mt-8 mb-4'>{props.card5.heading}</p>
                    <ul className='w-[90%] text-[#403F3F] text-[1.2rem] list-disc pl-5'>
                        <li>{props.card5.span1 && (<span className='font-semibold'>{props.card5.span1}</span>)}{props.card5.li1}</li>
                        <li>{props.card5.span2 && (<span className='font-semibold'>{props.card5.span2}</span>)}{props.card5.li2}</li>
                    </ul>
                    <img src={props.card5.bottomimg} alt='' className='mb-[-2rem] ml-auto bottom-0 right-0 w-[150px] h-auto'/>
                </div>
                <div className='w-[40%] bg-[#71D5EC] rounded-xl p-8 pb-0 relative'>
                    <p className='text-[2rem] text-black font-bold mt-8 mb-4'>{props.card6.heading}</p>
                    <ul className='w-[90%] text-[#403F3F] text-[1.2rem] list-disc pl-5'>
                        <li>{props.card6.span1 && (<span className='font-semibold'>{props.card6.span1}</span>)}{props.card6.li1}</li>
                        <li>{props.card6.span2 && (<span className='font-semibold'>{props.card6.span2}</span>)}{props.card6.li2}</li>
                    </ul>
                    <img src={props.card6.img} alt='' className='bottom-0 absolute'/>
                </div>
            </div>
        </div>
    )
}