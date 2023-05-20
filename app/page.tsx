"use client"
import Image from "next/image";
import Banners from "@/components/homepage/Banners";
import { useContext } from "react";
import { AllContexts } from "@/contexts/ContextProvider";


export default function Home() {
  const { featured }:any = useContext(AllContexts);

  return (
    <main className="">
      <Banners
        slides={featured?.banners}
        promotions={featured?.promotions}
      />
    </main>
  );
}
