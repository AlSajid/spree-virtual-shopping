import { useContext, useState } from "react";
import ProfileDropdown from "./ProfileDropdown";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { AllContexts } from "@/contexts/ContextProvider";

export default function ProfileHeader() {
  const { user }: any = useContext(AllContexts);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      className="flex justify-center items-center h-10 relative"
      onClick={() => setIsDropdownOpen((prev) => !prev)}
    >
      <Link href="/signin">
        <div className="h-10 px-2 lg:px-3 rounded-full flex justify-center items-center flex-col text-white">
          <CgProfile className="text-xl leading-3" />
        </div>
      </Link>
    </div>
  );
}
