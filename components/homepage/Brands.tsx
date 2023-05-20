import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

export default function Brands({ brands }: any) {
  return (
    <div className="bg-white my-3 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center p-5">Available Brands</h1>

      <Swiper
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        breakpoints={{
          768: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        modules={[Autoplay]}
        className=" m-0"
      >
        {brands?.map((brand: any) => (
          <SwiperSlide
            key={brand._id}
            className="p-4 border hover:shadow-md-lg cursor-pointer"
          >
            <Link href={"/brands/" + brand.name}>
              <div className="h-32 flex justify-center flex-col rounded-lg">
                <Image
                  src={brand?.logo}
                  alt="brand logo"
                  className="object-contain h-full w-full"
                  width={100}
                  height={100}
                />
              </div>

              <p className="product-name font-semibold mt-2 text-xl text-center">
                {brand?.name}
              </p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
