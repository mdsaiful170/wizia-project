
import { cn } from "../../../lib/cn";

const Slidercard = (props) => {
  const { id, icon, des, name, subtext, className } = props || {};
  return (
    <>
      <div
        key={id}
        className={cn(
          "max-w-md md:max-w-xl lg:max-w-4xl mx-auto w-full p-1 inline-flex flex-col items-center justify-center",
          className
        )}
      >
        <div className="p-5 rounded-full bg-[#183A40]">{icon}</div>
        <p className="font-worksans pt-5 md:pt-8 lg:pt-10 font-[300] text-white/75 text-base md:text-xl lg:text-3xl">
          {des}
        </p>
        <div className="pt-5 md:pt-8 lg:pt-10">
          <h5 className="text-primary text-2xl font-semibold font-worksans">
            {name}
          </h5>
          <p className="font-worksans text-xl font-normal">{subtext}</p>
        </div>
      </div>
    </>
  );
};

export default Slidercard;
