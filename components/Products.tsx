import optimizeImage from "@/utils/optimizeImage";
import replaceSpaceWithHyphen from "@/utils/replaceSpaceWithHyphen";
import addCommas from "@/utils/addCommas";
import {RiShoppingBasketLine} from "react-icons/ri";
import {MdAddShoppingCart} from "react-icons/md";
import Link from "next/link";

export default function Products({ productList: products }: any) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-1">
      {products?.map((product: any) => (
        <div
          key={product?._id}
          className="relative bg-white rounded-lg m-2 cursor-pointer hover:shadow-md shadow hover:scale-105 transition ease-out duration-150"
        >
          <Link href={`/product/${replaceSpaceWithHyphen(product?.name)}`}>
            {/* product image */}
            <div className="h-auto w-11/12 rounded-lg overflow-hidden mx-auto">
              <div>
                {product?.price > product?.sell && (
                  <span className="bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-lg absolute top-0 right-0">
                    {Math.round(
                      ((product?.price - product?.sell) / product?.price) * 100
                    )}
                    % save
                  </span>
                )}
              </div>
              <image
                src={optimizeImage(product?.image, "w_600")}
                alt={product?.name}
                className="h-full mx-auto"
              />
            </div>

            <div className="mb-10">
              <div className="m-1 text-center">
                <span className="font-bold ">{product?.brand} </span>
                <span className="font-semibold">{product?.name}</span>
              </div>

              <div className=" m-1">
                {/* product selling price */}
                <div className="flex justify-between items-center">
                  <span className="">
                    <span className="text-lg text-blue-500 font-semibold">
                      ৳{addCommas(product?.sell)}
                    </span>
                  </span>

                  {/* product offer price */}
                  {product?.price > product?.sell && (
                    <del className="text-sm text-gray-500">
                      ৳{addCommas(product?.price)}
                    </del>
                  )}
                </div>
              </div>
            </div>
          </Link>

          {/* product card buttons */}
          <div className="text-center text-xl flex absolute bottom-0 left-0 right-0 ">
            <Link
              className="bg-blue-500 rounded-bl-lg text-white w-1/2 py-2 flex justify-center"
              href={`/buy/${replaceSpaceWithHyphen(product.name)}`}
            >
              <RiShoppingBasketLine />
            </Link>
            <button
              className="w-1/2 py-2 rounded-br-lg flex justify-center bg-blue-400 text-white"
              onClick={() => handleAddToCart(product._id)}
            >
              <MdAddShoppingCart />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
