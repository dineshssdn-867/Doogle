import { SearchIcon, MicrophoneIcon } from "@heroicons/react/solid";
import Image from "next/image/";
import { useRef } from "react";
import { useRouter } from "next/router";


function Search() {
    const serachInputRef = useRef(null);
    const router = useRouter();
    const search  = e => {
        e.preventDefault();
        const query = serachInputRef.current.value;
        if(!query) return;
        router.push(`/search?term=${query}`);
      }
    const lucky = e => {
        e.preventDefault();
        const query = serachInputRef.current.value;
        if(!query) return;
        return <a href={`https://www.google.com/search?btnI=I&q=${query}`}></a>;
    }
    return <form className="flex flex-col items-center mt-40 md:mt-52 lg:mt-64 flex-grow w-4/5 mb-16">
        <Image 
        src="https://res.cloudinary.com/dineshscloud/image/upload/v1622442901/doggle_gufarm.png"
        height={95}
        width={295}
        className={'md:w-10'}
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl" action="https://www.google.com/search?btnI=I&q=query">
            <SearchIcon className="h-5 mr-3 text-gray-500 "/>
            <input type="text" ref={serachInputRef} name="query" className="flex-grow focus:outline-none" />
            <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
            <button onClick={search} className="btn">Doogle Search</button>
            <button className="btn" onClick={lucky}>I'm Feeling Happy</button>
        </div>
      </form>;
}

export default Search;
