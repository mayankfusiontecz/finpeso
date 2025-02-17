

export default function OurLeadership(){
    const items=[
        {
            heading:"JASWINDER SINGH", 
            designation:"FOUNDER",
            content:"A globally certified financial and tech leader, Jaswinder brings a wealth of international experience and cutting-edge expertise to every project. Holding prestigious certifications from PMP, Google, IBM, CFI, and the New York Institute of Finance, he is committed to leveraging fintech innovation to transform financial management."
        },
        {
            heading:"PRAFULL CHAUHAN",
            designation:"CO-FOUNDER",
            content:"With 5 years of experience in full-stack development, project management, and team leadership, Prafull is the problem solver behind Finpeso’s seamless technology. He specializes in stack development, handling project issues, and managing technical teams, ensuring that our platform delivers efficiency, security, and smart financial insights."
        }
    ]
    return(
        <div className="flex flex-col items-center justify-center">
            <p className="text-[#172B85] mb-10 text-[2.2rem] font-bold">MEET OUT LEADERS</p>
            <div className="flex p-8 px-[15rem] justify-between gap-[8rem]">
                {
                    items.map((item,index)=>{
                        return(
                            <div key={index} 
                            className="relative p-8 bg-white rounded-lg shadow-lg transition-all ease-in-out duration-300 
                        hover:bg-[#E6F0FD] hover:before:absolute hover:before:right-0 hover:before:bottom-0 hover:before:w-[10px] hover:before:h-full hover:before:bg-[#172B85] hover:before:rounded-br-2xl hover:before:rounded-tr-lg
                        hover:after:absolute hover:after:right-0 hover:after:bottom-0 hover:after:h-[10px] hover:after:w-full hover:after:bg-[#172B85] hover:after:rounded-br-2xl hover:after:rounded-bl-lg"
                            style={{ boxShadow: '9px 13px 36.3px 8px rgba(0, 0, 0, 0.15)' }}
                                 data-aos="zoom-in"
                            >
                            <p className="text-[#172B85] text-[1.5rem] font-bold mb-2">{item.heading}</p>
                            <p className="text-[#676666] mb-4">{item.designation}</p>
                            <p className="text-[#676666]">{item.content}</p>
                            </div>

                        )
                    })
                }
            </div>
            <p className="text-[1.5rem] text-[#172B85] font-bold mt-12">SMARTER FINANCES, BETTER DECISIONS</p>
            <p className="text-[1.5rem] text-[#403F3F] font-bold mb-12">Let’s make managing your money stress-free and productive, together!</p>
        </div>
    )
}