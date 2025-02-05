import seventhcomp1 from '@/public/assets/images/home/seventhcomp1.png'

export default function PersonText(props){
    return(
        <div className='flex justify-center items-center mt-8 gap-[5rem] bg-[url("/assets/background/fourthbg.png")] bg-cover bg-center'>
            <div className='mt-[-5%] ml-[2rem] w-[40%]'>
            <img src={seventhcomp1.src} alt='person'/>
            </div>
            <div className='flex flex-col gap-5 text-white justify-center w-[30%]'>
                <p className='font-bold text-[2rem]'>{props.heading}</p>
                <p className='' dangerouslySetInnerHTML={{ __html: props.content }}/>
            </div>
        </div>
    )
}