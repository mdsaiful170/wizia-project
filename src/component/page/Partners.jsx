import { partnerLogo } from "../../../lib/data";
import Containerbox from "../material/Containerbox";

const Partners = () => {
  return (
    <>
      <section className="bg-[#07292F] px-3">
        <Containerbox className={"max-w-3xl mx-auto pb-10 pt-8"}>
          <h4 className="text-center text-base font-normal text-[#0FF1F6] uppercase mb-4 lg:pb-6">
            our trusted partners
          </h4>

          <div className=" flex-wrap flex items-center gap-x-5 justify-center  ">
            {partnerLogo.map((logo, i) => (
              <div key={i} className="max-w-full">
                <img src={logo} className="max-w-full object-cover" alt="svg.img" />
              </div>
            ))}
          </div>
        </Containerbox>
      </section>
    </>
  );
};

export default Partners;
