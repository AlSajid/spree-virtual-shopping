import { BiGift } from 'react-icons/bi';
import { ImSwitch } from 'react-icons/im';
import { TbJewishStar } from 'react-icons/tb';
import { BiUser } from 'react-icons/bi'
import { useContext } from 'react';
import Link from 'next/link';

export default function ProfileDropdown ({isDropdownOpen}) {
    const { user } = useContext(AllContexts);
    // const { logOut, setCart } = useContext(AllContexts);

    // const handleLogout = () => {
    //     logOut()
    //         .then(() => setCart([]))
    //         .catch((error:any) => console.log(error));
    // };

    const options = [
        { name: user?.displayName ? user?.displayName : 'Profile', icon: <BiUser className='text-lg' />, link: '/profile' },
        { name: 'Orders', icon: <BiGift className='text-lg' />, link: '/orders' },
        { name: 'Wishlist', icon: <TbJewishStar />, link: '/wishlist' },
        { name: 'Logout', icon: <ImSwitch className='text-lg' />, link: '/', onClick: handleLogout },
    ]

    return (
        <>
        <label className="text-white px-1 text-lg font-bold cursor-pointer"><BiUser className='text-2xl' /></label>
        {
            isDropdownOpen &&
            <div>
                <ul className='absolute right-0 top-12 px-3 py-2  border  bg-white z-50 shadow-lg rounded-lg w-52'>
                    {options.map((option, index) =>
                        <Link href={option.link} key={index}>
                            <li onClick={option.onClick}
                                className='p-2 cursor-pointer flex  hover:bg-blue-500
                                    hover:text-white items-center rounded-lg'
                            >
                                <span>{option.icon}</span>
                                <span className='ml-2 text-lg'>{option.name}</span>
                            </li>
                        </Link>
                    )}
                </ul>
            </div>
        }
    </>
    )
}