import { cn } from "../../../lib/cn";

const Slidercard = (props) => {
  const { id, icon, des, name, position, className } = props || {};
  return (
    <>
      <div
        key={id}
        className={cn(
          " flex items-center justify-center flex-col text-center p-1 h-auto max-lg md:max-xl lg:max-w-3xl",
          className
        )}
      >
        <div className=" px-4 py-5 rounded-full bg-[#183A40]">
          <img src={icon} alt="icon.svg" className="object-cover w-8" />
        </div>
        <p className="font-worksans pt-5 md:pt-8 lg:pt-10 font-[300] text-white/75 text-base md:text-xl lg:text-3xl">
          {des}
        </p>
        <div className="pt-5 md:pt-8 lg:pt-10">
          <h5 className="text-primary text-2xl font-semibold font-worksans">
            {name}
          </h5>
          <p className="font-worksans text-xl font-normal text-white/75">{position}</p>
        </div>
      </div>
    </>
  );
};

export default Slidercard;
