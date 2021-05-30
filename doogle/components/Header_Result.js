import Image from "next/image/";
import { useRouter } from "next/router";
import { SearchIcon, MicrophoneIcon, XIcon } from "@heroicons/react/solid";
import { useRef } from "react";
import Avatar from '../components/Avatar';


function Header_Result(){
    const router = useRouter();
    const serachInputRef = useRef(null)
    const search  = e => {
        e.preventDefault();
        const query = serachInputRef.current.value;
        if(!query) return;
        router.push(`/search?term=${query}`);
      }
    return (<header className="sticky top-0 bg-white ">
        <div className="flex w-full p-6 items-center">
            <Image 
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            height={40}
            width={120}
            className="cursor-pointer"
            onClick={() => router.push('/')}
            />
            <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
                <input type="text" ref={serachInputRef} className="flex-grow focus:outline-none w-full" />
                <XIcon className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125" onClick={() => {serachInputRef.current.value = ""}}/>
                <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300"/>
                <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex"/>
                <button hidden type="submit" onClick={search}></button>
            </form>
            <Avatar url={'https://res.cloudinary.com/dineshscloud/image/upload/v1/blog/users/WhatsApp_Image_2021-04-05_at_12.06.05_AM_csz6xn_qnjvs9_xdgeij'} className="ml-auto"/>
        </div>
    </header>
    );
}

export default Header_Result;