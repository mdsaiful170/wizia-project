import Containerbox from "../material/Containerbox";
import { sliderData } from "../../../lib/data";
import Slidercard from "../material/Slidercard";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ArrowRight, ArrowLeft } from "lucide-react";

const Slider = () => {
  return (
    <>
      <section className="px-3 py-20 lg:py-28">
        <Containerbox className={"relative max-w-screen-lg "}>
          <Swiper
            grabCursor={true}
            loop={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            className="relative   mx-auto flex items-center justify-center max-xl md:max-xl lg:max-w-3xl"
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
              clickable: true,
            }}
          >
            {sliderData.map((res, i) => (
              <SwiperSlide key={i}>
                <Slidercard className={" mx-auto"} key={res.id} {...res} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute swiper-next z-10 bg-[#96ACAF33]/20 active:bg-primary -left-[3px]  rounded-lg p-2 lg:p-3 cursor-pointer md:top-[50%]">
            <ArrowLeft
              size={17}
              className="text-primary font-extrabold  active:text-secondary"
            />
          </div>
          <div className="absolute swiper-prev active:bg-primary  bg-[#96ACAF33]/20 z-10  rounded-lg p-2 lg:p-3 cursor-pointer right-0 md:top-[50%]">
            <ArrowRight
              size={17}
              className="text-primary font-extrabold  active:text-secondary"
            />
          </div>
          <br />
          <br />
          <br />
          <div className="swiper-pagination"></div>
        </Containerbox>
      </section>
    </>
  );
};

export default Slider;
