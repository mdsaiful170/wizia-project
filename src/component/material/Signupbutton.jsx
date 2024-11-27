import { Button } from "@nextui-org/react";
import { cn } from "../../../lib/cn";
import { SquareArrowUpRight } from "lucide-react";

const Signupbutton = ({ children, className }) => {
  return (
    <Button
      color="primary"
      size="md"
      radius="full"
      endContent={<SquareArrowUpRight size={15} />}
      className={cn(
        " py-7 lg:py-6 text-secondary w-full md:w-[40%] text-base font-semibold hover:!opacity-100 border border-secondary/15 hover:text-slate-800 hover:bg-white px-4 ",
        className
      )}
    >
      {children}
    </Button>
  );
};

export default Signupbutton;
