import ninecomp1 from '@/public/assets/images/home/ninecomp1.png'

export default function ImageText1(props) {
    return (
        <div className='px-[5rem] flex justify-between gap-[6rem]'>
            <div className='flex flex-col items-start justify-center gap-5 w-[80%]'>
                <p className='text-[#172B85] text-[2.2rem] font-bold'>{props.heading}</p>
                {props.li1 && (<ul className='w-[90%] text-[#403F3F] text-[1rem] list-disc pl-5'>
                    <li>{props.li1}</li>
                    <li>{props.li2}</li>
                    <li>{props.li3}</li>
                    <li>{props.li4}</li>
                    <li>{props.li5}</li>
                </ul>)}
                {props.content1 && (<p className='text-[1rem] w-[85%]'>{props.content1}</p>)}
                <p className='text-[1rem] w-[85%]'>{props.content}</p>
            </div>
            <img src={ninecomp1.src} alt='image' className='w-[40%]'/>
        </div>
    )
}


