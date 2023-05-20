import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FcSearch } from "react-icons/fc";

export default function Search () {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const timerRef = useRef(null);

    const handleSearch = () => {
    
        // if (e) e.preventDefault();
        // if (query.length < 1) return;

        // fetch(`${getServer()}search?query=${query}`, {
        //     headers: {
        //         "Authorization": "Bearer " + process.env.REACT_APP_JWT_SECRET,
        //     }
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         setResults(data);
        //     })
    }

    useEffect(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        // timerRef.current = setTimeout(() => {
        //     handleSearch();
        // }, 1000);

        // return () => {
        //     clearTimeout(timerRef.current);
        // };
    }, [query]);

    return (
        <div className='relative w-11/12 mx-auto '>
            <form className='h-10 flex rounded-lg border-blue-500 border-2' onSubmit={handleSearch}>
                <input
                    type="search" placeholder="Search Products"
                    className="focus:outline-none bg-gray-50 w-full h-full p-3 font-serif rounded-lg"
                    autoComplete="off"
                    autoFocus={true}
                    onChange={(e) => { setQuery(e.target.value); setResults([]) }}
                />

                <button className='bg-blue-500 flex justify-around items-center rounded-r text-white w-28 p-3 text-base'>
                    <span className='hidden lg:block font-sans'>Search</span>
                    <FcSearch className='block lg:hidden h-10' />
                </button>
            </form>

            {/* results */}
            {
                results.length > 0 &&

                <div className='w-full border bg-white absolute'>
                    {/* <ul>
                        {
                            results.map((result, index) => {
                                return (
                                    <Link href={`/product/${replaceSpaceWithHyphen(result?.name)}`} key={index}>
                                        <li key={index} className='p-3 border my-1 flex justify-between'>
                                            <div>
                                                <img src={result.image[0]} alt="" />
                                                <p>{result.name}</p>
                                            </div>

                                            <span className='text-right'>{result.sell}</span>
                                        </li>
                                    </Link>
                                )
                            })
                        }
                    </ul> */}
                </div>
            }

        </div>
    );
}