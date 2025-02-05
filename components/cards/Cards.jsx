

export default function Cards (props){
    return(
        <div className="flex flex-col gap-5 items-center px-[3rem] overflow-hidden max-md:text-center" data-aos="fade-up" data-aos-duration="1000">
            <h6 className="text-[#090909] font-bold text-[2rem]"  data-aos="fade-up" data-aos-duration="1100">{props.heading}</h6>
            <div className="grid grid-cols-3 gap-[40px] items-center justify-center mt-[1rem] max-md:hidden"  data-aos="fade-right" data-aos-duration="1100">
                {
                    props.items1.map((box, index)=>(
                    <div key={index} className="flex flex-col items-center gap-5 px-[0.5rem] py-[2rem] text-center bg-[#EAF9FF] rounded-xl h-[320px] w-[350px]"  data-aos="zoom-in-down">
                            <img src={box.img} alt="security icon"/>
                            <h6 className="text-[#061E42] font-[700]">{box.title}</h6>
                            <p className="text-[#061E42] w-[70%]">{box.content}</p>
                        </div>
                    ))
                }
            </div>
            <div className="grid grid-cols-2 gap-[40px] items-center justify-center mt-[0.5rem] max-md:hidden" >
                {
                    props.items2 && (props.items2.map((box, index)=>(
                    <div key={index} className="flex flex-col items-center gap-5 px-[0.5rem] py-[2rem] text-center bg-[#EAF9FF] rounded-xl h-[320px] w-[350px]"  data-aos="zoom-in-down">
                            <img src={box.img} alt="security icon"/>
                            <h6 className="text-[#061E42] font-[700]">{box.title}</h6>
                            <p className="text-[#061E42] w-[70%]">{box.content}</p>
                        </div>
                    )))
                }
            </div>
        </div>
    )
}