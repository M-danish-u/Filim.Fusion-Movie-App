import { useEffect, useState } from "react";
import { fetchNowmovie } from "../Api/TodayTrending";
import { Nowplaying } from "../models/NowplayingType";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [nowPlaying,setNowplaying]=useState<Nowplaying[]>([])

  useEffect(()=>{
    const getNowplaying= async ()=>{
      const nowPlayingMovie= await fetchNowmovie()
      setNowplaying(nowPlayingMovie.results
      )
    }
    getNowplaying()
  },[])
  const getImage=(poster_path:string)=>{
    return `https://image.tmdb.org/t/p/original/${poster_path}`
  }
  console.log('nnn',nowPlaying);
  //Owl Carousel Settings
  const options = {
    margin: 30,
    // responsiveClass: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 3000,
    responsive: {
      0: {
        items: 1,
      },
    },
  };
 
  return (
    // <OwlCarousel className='owl-theme' loop margin={10} nav>
    // <div className=" md:pt-4 h-700px pt-4 md:h-[28rem] flex overflow-x-auto bg-green-500 w-full  ">
      

          
         
          <OwlCarousel className="owl-theme g-green-700  w-full py-6 " {...options}>
      {nowPlaying?.map((movie) => (
        <div className=" " key={movie.id}>
          <div className="md:h-[500px] w-full h-[350px] rounded-3xl overflow-hidden relative">
            <img
              src={getImage(movie.backdrop_path)}
              alt=""
              className="w-full h-full md:h-full  object-cover relative"
            />
            {/* overlay */}
            <div className="absolute top-0 px-4 bottom-0 flex flex-col gap-6 md:p-16 left-0 right-0 bg-gradient-to-r from-black to-black/30 text-white">
              <h1 className=" text-2xl md:text-3xl font-extrabold ">{movie.title}</h1>
              <div className="flex gap-2 p-4 flex-col ">
              <p className=" text-yellow-300 font-semibold text-lg">Rating : {movie.vote_average}</p>
              <p className=" text-xl ">Release : {movie.release_date}</p>
              <p className=" text-xl "> {movie.original_language ? "English" : "Malayalam"}</p>

              </div>
              <Link to={`detail/${movie.id}`}>
               <button   className="bg-red-600 text-xl ml-2 font-semibold w-[90px] py-3 flex items-center justify-center rounded-2xl"> Watch</button>
               </Link>
            </div>
          </div>
        </div>
      ))}
    </OwlCarousel>
         
       
    // </div>
  
  );
};

export default HeroSection;
