import Link from "next/link";
import { BsCart2 } from "react-icons/bs";
import { useContext } from "react";

export default function CartHeader() {
    // const { cart } = useContext(AllContexts);

    return (
        <Link href='/cart' className='flex flex-col justify-center items-center h-10 font-extrabold text-white text-center'>
            {/* <h1 className='text-xs leading-3'>{cart.length > 0 && cart.length}</h1> */}
            <h1 className='text-xl px-2 lg:px-3'><BsCart2 className='text-xl font-bold' /></h1>
        </Link>
    );
}