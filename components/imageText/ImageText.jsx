
export default function ImageText(props) {
    return (
        <div className='p-12 flex justify-center gap-[5rem]'>
            <img src={props.img} alt='image' />
            <div className='flex flex-col items-start justify-center w-[40%] gap-5'>
                <p className='text-[#172B85] text-[2.2rem] font-bold'>{props.heading}</p>
                <p className='text-[1.2rem] w-[65%]'>{props.content}</p>
            </div>
        </div>
    )
}