
import Containerbox from "../material/Containerbox";
import { effortData } from "../../../lib/data";
import CountUp from "react-countup";
const Effort = () => {
  return (
    <>
      <section className="px-3">
        <Containerbox
          className={
            "bg-[url(../effortbg.svg)] bg-right-top bg-cover lg:bg-center  bg-no-repeat w-full   px-6 py-8 lg:pb-24 lg:px-16  lg:pt-[68px]"
          }
        >
          <div>
            <div>
              <h2 className="text-3xl max-w-full pb-2 md:max-w-lg font-semibold text-white">
                {effortData.title}
              </h2>
              <h4 className="text-3xl font-medium italic text-primary pb-5">
                {effortData.subtitle}
              </h4>
              <p className="text-white/75 max-w-xl sm:max-w-lg text-lg font-[300] font-worksans">
                {effortData.des}
              </p>
            </div>
            <div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3 max-w-xl pt-12 l md:pt-16 lg:pt-20">
                {effortData.couter.length &&
                  effortData.couter.map((cout, i) => (
                    <div key={i}>
                      <p className="text-primary font-bold text-4xl lg:text-[40px]">
                        <CountUp
                          duration={11}
                          delay={1}
                          start={0}
                          end={cout.num}
                        ></CountUp>{" "}
                        %
                      </p>
                      <p className="text-white/75 font-montserrot text-lg font-medium pt-2">
                        {cout.text}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </Containerbox>
      </section>
    </>
  );
};

export default Effort;
