import { useEffect, useState } from "react"
import { fetchPopularmovie } from "../Api/TodayTrending"
import ProgressBar from "./ProgressBar"
import { PoularMovieResponsive } from "../models/PopularType"
import { Link } from "react-router-dom"

const Popular = () => {
const [popularData,setPopularData]=useState<PoularMovieResponsive[]>([])
  useEffect(()=>{
    const getPopular= async ()=>{
      const popularmovieData= await fetchPopularmovie()
      setPopularData(popularmovieData.results
        )
    }
    getPopular()
  },[])
  
// console.log(popularData,'ppppp');

const getImage=(poster_path:string)=>{
  return`https://image.tmdb.org/t/p/original/${poster_path}`
}

  return (
    <div className="w-full py-4  g-red-500  flex flex-col ">
     
    <div className=" flex md:flex-row flex-col g-yellow-300 md:items-center g-slate-500 py-6 gap-6">
      <h1 className="font-bold text-white g-yellow-300 text-2xl">Popular Movies</h1>
      
    </div>
    <div className="w-full h-[28rem]  flex flex-row gap-3 overflow-x-auto g-green-500">
      {popularData.map((items) => (
        <Link to={`detail/${items.id}`}  key={items.id} className=" g-yellow-400">
          <div className="w-[19rem] flex flex-col items-center h-full gap-6 rounded-2xl relative p-2 overflow-hidden  b-yellow-400">
            <img
              className="w-full brder-red-600 boder rounded-lg h-[22rem] "
              src={
                getImage(items.poster_path)
              }
            ></img>
            
            <h1 className="text-white text-center font-semibold text-lg ">{items.title}</h1>
            <div className="absolute top-[330px] left-6 w-12 h-12 text-lg">
                <ProgressBar percentage={items.vote_average*10}/>
              </div>
          
          </div>
        </Link>
      ))} 
    </div>
  </div>
  )
}

export default Popular