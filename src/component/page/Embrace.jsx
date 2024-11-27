import Containerbox from "../material/Containerbox";
import Signupbutton from "../material/Signupbutton";
import React from "react";
class Embrace extends React.PureComponent {
  render() {
    return (
      <>
        <section className="px-3 py-20 lg:py-24">
          <Containerbox>
            <div className="space-y-[23px] text-center grid place-items-center ">
              <p className="text-lg font-normal text-[#0FF1F6] font-montserrot uppercase">
                get started
              </p>
              <h2 className="font-montserrot  text-4xl font-bold text-white">
                <span className="font-medium italic">Embrace</span>
                the new era of
                <span className="font-medium italic">outbound.</span>
              </h2>
              <p className="text-center text-white/75 font-[300] text-lg font-worksans ">
                Wizia lets you train, activate, and optimize aiDRs.<br/> Take your 
                outbound to new levels of performance and efficiency.
              </p>
              <Signupbutton className={"md:w-[30%] lg:w-[22%] px-0"} >Sign up for the demo</Signupbutton>
            </div>
          </Containerbox>
        </section>
      </>
    );
  }
}
export default Embrace;
