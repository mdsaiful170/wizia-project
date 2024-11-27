import React from "react";
import Containerbox from "../material/Containerbox";
import Signupbutton from "../material/Signupbutton";
class Hero extends React.PureComponent {
  render() {
    return (
      <>
        <section className="bg-[url(../hero.svg)] pe-3 md:pe-0  bg-right-top object-cover w-screen bg-no-repeat lg:bg-center">
          <Containerbox
            className={
              "py-20 md:py-24  grid place-items-center md:place-items-start "
            }
          >
            <div className="space-y-3 text-center md:text-left">
              <span className="text-2xl font-normal font-montserrot text-primary">
                AI SDRs (aiDRs)
              </span>
              <h1 className="text-7xl  max-w-full lg:leading-[78px] md:max-w-[29rem] text-white font-bold">
                More <i className="font-medium text-white/80">leads,</i> less{" "}
                <i className="font-medium text-white/80">people</i>.
              </h1>
              <p className=" pb-5 pt-2 lg:pb-6 mx-auto md:mx-0 text-[1.2rem] xl:text-[1.3rem] max-w-[35rem] text-white/75 leading-[1.7rem]">
                Train an aiDR on your ICP and messaging matrix. Activate it on a
                patch. It will send personalized sequences to every target
                contact.
              </p>

              <Signupbutton>Sign Up for the Beta</Signupbutton>
            </div>
          </Containerbox>
        </section>
      </>
    );
  }
}

export default Hero;
