"use client";
import Image from "next/image";
import Banners from "@/components/homepage/Banners";
import { useContext } from "react";
import { AllContexts } from "@/contexts/ContextProvider";
import Spinner from "@/components/Spinner";
import Brands from "@/components/homepage/Brands";
import DisplayCategory from "@/components/homepage/DisplayCategory";
import Products from "@/components/Products";

export default function Home() {
  const { featured }: any = useContext(AllContexts);

  return (
    <main className="container mx-auto p-3">
      {featured === null ? (
        <div className="my-10">
          <Spinner msg={"Getting Things Ready"} />
        </div>
      ) : (
        <>
          <Banners
            slides={featured?.banners}
            promotions={featured?.promotions}
            categories={featured?.categories}
          />
          <Brands brands={featured?.brands} />

          {featured?.categories?.map((category: any) => (
            <DisplayCategory key={category?._id} category={category} />
          ))}

          <div className="my-5">
            <h2 className="text-2xl font-bold p-1 text-center">
              Featured Products
            </h2>
            {/* <Products products={featured?.products} /> */}
          </div>
        </>
      )}
    </main>
  );
}
