import { cn } from "../../../lib/cn";

const Systemcard = (props) => {
  const { id, icon, title, className, des } = props || {};
  return (
    <>
      <div key={id} className={cn("space-y-4 p-1 cursor-pointer border border-secondary  hover:border-primary/15 group/box rounded-md relative transition-all duration-250 ease-linear", className)}>
        <p className="pb-2 group-hover/box:translate-x-3 transition-all duration-250">{icon && icon}</p>
        <h3 className="text-white font-semibold text-2xl">{title && title}</h3>
        <p className="font-[300] font-worksans text-xl text-white/75 text-pretty">
          {des && des}
        </p>
      </div>
    </>
  );
};

export default Systemcard;
