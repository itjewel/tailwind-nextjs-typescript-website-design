import { useEffect, useState } from 'react';
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { Movie } from "../typings";
interface Props{
    netflixOriginals:Movie[];
}
 const Banner = ({netflixOriginals}: Props) => {
    const [movie, setMovie] = useState<Movie | null>(null)
    useEffect(() => {
      setMovie(
        netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
      )
    }, [netflixOriginals])
    //  console.log(netflixOriginals)
    return (
        <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-4">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-full">
        
      </div>

      <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-xs text-gray-200 text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-1xl">
        {movie?.overview}
      </p>
      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
          Play
        </button>

        <button
          className="bannerButton bg-[gray]/70"
         
        >
          <IoIosInformationCircle className="h-5 w-5 md:h-8 md:w-8" /> More Info
        </button>
      </div>
    </div>
    )
}
export default Banner;
