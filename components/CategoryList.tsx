import { AllContexts } from "@/contexts/ContextProvider";
import Link from "next/link";
import { useContext } from "react";

export default function CategoryList() {
  const { featured }: any = useContext(AllContexts);

  return (
    <div
      className="lg:h-[360px] overflow-y-scroll bg-gray-100 rounded-lg border-gray-100 border-4 
        lg:static fixed top-14 left-0 right-0 lg:z-0 z-10 shadow-md-2xl lg:shadow-md-none transition duration-75 ease-in"
    >
      {/* <ul className="">
        {featured.categories?.map(category, index => (
          <li key={category._id}>
            <Link href={`products/${category.name}`}>
              <div
                className="flex items-center px-3 border-b-2 border-white mx-1 my-2 hover:cursor-pointer
                         font-semibold
                        hover:shadow-md h-10 hover:bg-blue-500 hover:text-white text-gray-900 rounded-lg"
              >
                {category.name}
              </div>
            </Link>
          </li>
        ))}
      </ul> */}
    </div>
  );
}
