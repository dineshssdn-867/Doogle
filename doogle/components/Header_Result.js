import Image from "next/image/";
import { useRouter } from "next/router";
import { SearchIcon, MicrophoneIcon, XIcon } from "@heroicons/react/solid";
import { useRef } from "react";
import Avatar from '../components/Avatar';
import HeaderOptions from "../components/header_options";


function Header_Result(){
    const router = useRouter();
    const serachInputRef = useRef(null)
    const search  = e => {
        e.preventDefault();
        const query = serachInputRef.current.value;
        if(!query) return;
        router.push(`/search?term=${query}`);
      }
    return (
    <header className="sticky top-0 bg-white">
        <div className="flex w-full p-6 items-center">
            <Image 
            src="https://res.cloudinary.com/dineshscloud/image/upload/v1622442901/doggle_gufarm.png"
            height={50}
            width={140}
            className="cursor-pointer"
            onClick={() => router.push('/')}
            />
            <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center" action='https://www.google.com/search?btnI=I&q=query'>
                <input type="text" name="query" value={router.query.term} ref={serachInputRef} className="flex-grow focus:outline-none w-full" />
                <XIcon className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125" onClick={() => {serachInputRef.current.value = ""}}/>
                <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300"/>
                <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex"/>
                <button hidden type="submit" onClick={search}></button>
            </form>
            <Avatar url={'https://res.cloudinary.com/dineshscloud/image/upload/v1621773471/blog/users/person-icon-blue-7560_kbuv5j_srefhg.png'} className="ml-auto"/>
        </div>
        <HeaderOptions />
    </header>
    );
}

export default Header_Result;