import React from "react";
import Containerbox from "../material/Containerbox";
import { trainData } from "../../../lib/data";
import { CheckCircle } from "lucide-react";
// train list data destructuring
const [list1, list2, list3, list4] = trainData.listdata;
class Train extends React.PureComponent {
  render() {
    return (
      <>
        <section className="px-3 ">
          <Containerbox
            className={
              "bg-[url(../trainbg.svg)] bg-left-top bg-cover bg-no-repeat w-full rounded-[24px]  border border-primary/10 py-24 lg:py-28 "
            }
          >
            <div className="max-w-2xl mx-auto lg:ms-[35%] ">
              <h2 className="text-4xl font-semibold text-white">
                {trainData.title}
              </h2>
              <h4 className="text-4xl font-medium italic text-primary lg:pb-7 pb-5">
                {trainData.subtitle}
              </h4>
              <p className="text-white/75 max-w-full sm:max-w-[450px] text-2xl font-[300] font-worksans">
                {trainData.des}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-6  md:pt-14 pt-10 ">
                <p className="flex text-lg font-medium text-[#14BCB2] font-montserrot items-center gap-2">
                  <CheckCircle size={17} className="text-[#14BCB2]" />
                  {list1}
                </p>
                <p className="flex text-lg font-medium text-[#14BCB2] font-montserrot items-center gap-2 col-span-2">
                  <CheckCircle size={17} className="text-[#14BCB2]" />
                  {list2}
                </p>

                <p className="flex text-lg font-medium text-[#14BCB2] font-montserrot items-center gap-2">
                  <CheckCircle size={17} className="text-[#14BCB2]" />
                  {list3}
                </p>
                <p className="flex text-lg font-medium text-[#14BCB2] font-montserrot items-center gap-2 col-span-2 ms-0 md:ms-4">
                  <CheckCircle size={17} className="text-[#14BCB2]" />
                  {list4}
                </p>
              </div>
            </div>
          </Containerbox>
        </section>
      </>
    );
  }
}

export default Train;
