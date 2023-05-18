import { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";

export default function ProfileHeader() {
  // const { user } = useContext(AllContexts);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      className="flex justify-center items-center h-10 relative"
      onClick={() => setIsDropdownOpen((prev) => !prev)}
    >
      {/* {user?.uid ?
            <ProfileDropdown isDropdownOpen={isDropdownOpen} />
            :
            <Link to="/signin">
                <div className='h-10 px-2 lg:px-3 rounded-lg flex justify-center items-center flex-col text-white'>
                    <IoEnter className="text-xl leading-3" />
                    <p className='text-xs font-semibold lg:block'>Login</p>
                </div>
            </Link>
        } */}
    </div>
  );
}
