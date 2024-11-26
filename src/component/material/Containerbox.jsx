import { cn } from "../../../lib/cn";

const Containerbox = ({ children, className }) => {
  return (
    <>
      <div className={cn(" max-w-screen-xl mx-auto px-3 lg:px-4  ", className)}>
        {children}
      </div>
    </>
  );
};

export default Containerbox;
