export default function Cards(props) {
    return (
      <div
        className="flex flex-col gap-5 items-center px-[3rem] overflow-hidden max-md:text-center my-8"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h6
          className="text-[#090909] font-bold text-[2rem]"
          data-aos="fade-up"
          data-aos-duration="1100"
        >
          {props.heading}
        </h6>
        <div
          className="grid grid-cols-3 gap-[40px] items-center justify-center mt-[1rem]"
          data-aos="fade-right"
          data-aos-duration="1100"
        >
          {props.items1.map((box, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-5 px-[0.5rem] py-[2rem] text-center bg-[#fff] rounded-xl h-[320px] w-[350px] transition-all duration-300 group hover:bg-[#163572]"
            >
              {/* Image - on hover make it white */}
              <img
                src={box.img}
                alt="security icon"
                className="transition-all duration-300 group-hover:grayscale-0 group-hover:brightness-100 group-hover:invert group-hover:filter"
              />
              {/* Title - on hover make text white */}
              <h6 className="text-[#061E42] font-[700] group-hover:text-white transition-all duration-300">
                {box.title}
              </h6>
              {/* Content - on hover make text white */}
              <p className="text-[#061E42] w-[70%] group-hover:text-white transition-all duration-300">
                {box.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  