import CategoryList from "@/components/CategoryList";
import Image from "next/image";
import optimizeImage from "@/utils/optimizeImage";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import { EffectCreative, Autoplay, Navigation } from "swiper";

export default function Banners({ slides, promotions }: any) {
  return (
    <div className="lg:h-[400px]  bg-white rounded-lg grid grid-cols-12 lg:py-5 border">
      <div className="lg:col-span-2 hidden lg:block h-[360px] mx-5 ">
        <CategoryList />
      </div>

      <div className="col-span-12 lg:col-span-8 lg:h-[360px] bg-slate-50 overflow-hidden my-1 lg:my-0">
        {slides && (
          <Swiper
            grabCursor={true}
            effect={"creative"}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            creativeEffect={{
              prev: {
                shadow: true,
                origin: "left center",
                translate: ["-5%", 0, -200],
                rotate: [0, 100, 0],
              },
              next: {
                origin: "right center",
                translate: ["5%", 0, -200],
                rotate: [0, -100, 0],
              },
            }}
            navigation={true}
            modules={[Navigation, EffectCreative, Autoplay]}
            className="h-full "
          >
            {slides.map((banner: any, i: any) => {
              return (
                <SwiperSlide key={i} className="">
                  <Image
                    src={optimizeImage(banner, "h_1050")}
                    alt="promo"
                    width={720}
                    height={520}
                    priority={false}
                    className="object-cover mx-auto"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>

      <div className="flex lg:flex-col col-span-12 lg:col-span-2 justify-center lg:h-[360px]">
        <div className="lg:grid grid-row-3 flex gap-1 w-full h-full">
          {promotions?.map((promotion:any, index:number) => (
            <div className="row-span-1 overflow-hidden" key={index}>
              <Image
                key={index}
                src={optimizeImage(promotion, "h_500")}
                height={500}
                width={500}
                alt="promo"
                className="object-contain h-full w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
