

import  { useEffect, useState } from 'react'
import { fetchWeeklymovie } from '../Api/TodayTrending'
import ProgressBar from './ProgressBar'
import { Link } from 'react-router-dom'
import { Weeklytype } from '../models/WeeklyType'

const WeeklyTrending = () => {
    const [weeklyData,setWeeklydata]=useState<Weeklytype[]>([])
    useEffect(()=>{
        const getWeeklyApi= async()=>{
            const weeklyTrendingData= await fetchWeeklymovie();
            // console.log('wwww',weeklyTrendingData);
            setWeeklydata(weeklyTrendingData.results)
          }
          getWeeklyApi()
    },[])
    // console.log('www',weeklyData);
  
    const getImage=(poster_path:string)=>{
      return `https://image.tmdb.org/t/p/original/${poster_path}`
    }
  return (
    <div>
 <div className="w-full   g-red-500  flex flex-col ">
      <div className=" flex md:flex-row flex-col g-yellow-300 md:items-center g-slate-500 py-6 gap-6">
        <h1 className="font-bold text-white g-yellow-300 text-2xl">Weekly Trending</h1>
       
      </div>
      <div className="w-full h-[28rem]  flex flex-row gap-3 overflow-x-auto g-green-500">
        {weeklyData.map((items) => (
           <Link to={`detail/${items.id}`}  key={items.id} className="  ">
            <div className="w-[19rem] flex flex-col items-center gap-6 h-full rounded-2xl p-2 overflow-hidden  b-yellow-400 relative">
              <img
                className="w-full brder-red-600 boder rounded-lg h-[22rem] "
                src={
                  getImage(items.poster_path)
                }
              ></img>
              
              <h1 className="text-white text-center font-semibold ">{items.title}</h1>
              <div className="absolute top-[330px] left-6 w-12 h-12 text-lg">
                <ProgressBar percentage={items.vote_average * 10}/>
              </div>
            </div>
          </Link>
        ))} 
      </div>
    </div>
    </div>
  )
}

export default WeeklyTrending


