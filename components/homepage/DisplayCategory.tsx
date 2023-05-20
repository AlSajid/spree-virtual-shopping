import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import replaceSpaceWithHyphen from "@/utils/replaceSpaceWithHyphen";
import Image from "next/image";

export default function DisplayCategory({ category }: any) {
  return (
    <div className="bg-white lg:border lg:rounded-lg my-5 lg:my-5">
      <div className="lg:grid grid-cols-12">
        <Link
          href={`/products/${category.name}`}
          className="col-span-3 flex justify-center items-center text-center rounded-lg border"
        >
          <h1 className="text-2xl font-bold w-44 my-5">{category.name}</h1>
        </Link>

        <div className="col-span-9">
          <Swiper
            grabCursor={true}
            slidesPerView={1}
            spaceBetween={7}
            freeMode={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            breakpoints={{
              768: { slidesPerView: 3 },
            }}
            navigation={true}
            modules={[Navigation, FreeMode, Autoplay]}
            className="h-full "
          >
            {category.sub.map((subcategory: any) => (
              <SwiperSlide
                className="border hover:shadow-md hover:cursor-pointer"
                key={subcategory?.name}
              >
                {/* <Link
                  className="h-32"
                  href={`category/${category}/${replaceSpaceWithHyphen(
                    subcategory.name
                  )}`}
                > */}
                <div className="flex flex-col justify-evenly items-center p-5">
                  <div className="">
                    <p className="font-semibold text-xl font-serif">
                      {subcategory?.name}
                    </p>
                  </div>

                  <div className="">
                    <Image
                      src={subcategory?.icon}
                      className="h-20 w-auto"
                      height={96}
                      width={96}
                      alt={subcategory?.name}
                    />
                  </div>
                </div>
                {/* </Link> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
