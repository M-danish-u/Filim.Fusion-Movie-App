import { useEffect, useState } from "react";
import { fetchTodaymovie, fetchWeeklymovie } from "../Api/TodayTrending";
import { todaytrendingResponse } from "../models/todaytrending.model";
import ProgressBar from "./ProgressBar";
import { Link } from "react-router-dom";

const TodayTrending = () => {
  const [data, setData] = useState<todaytrendingResponse[]>([]);
  // const [weeklyData,setWeeklydata]=useState([])
  // const [weeklyOn,setWeeklyOn]=useState(false)
  
//  const handleWeekly=()=>{
//   setWeeklyOn(true)
//  }

  useEffect(() => {
    const getTodyApi = async () => {
      const TodaytrendingData = await fetchTodaymovie();
      // console.log(TodaytrendingData);
      setData(TodaytrendingData.results);
    };
     ////////////////weekly/////////////
    // const getWeeklyApi= async()=>{
      // const weeklyTrendingData= await fetchWeeklymovie();
      // console.log('wwww',weeklyTrendingData);
      // setWeeklydata(weeklyTrendingData.results)
    // }
    getTodyApi()
    // getWeeklyApi()
  }, []);
  
//   const activeTextColor ="bg-clip-text bg-gradient-to-r  from-[#C0FECF] to-[#1ED5A9]  text-transparent ";

// // const [Istoggle, setToggle] = useState(false);
// const handleToggle = (toggleState: boolean) => {
//   setToggle(toggleState);
// };

  const getImage=(poster_path:string)=>{
    return `https://image.tmdb.org/t/p/original/${poster_path}`
  }
  return (
    <div>
    
    <div className="w-full   g-red-500  flex flex-col ">
    <div className=" flex md:flex-row flex-col b-yellow-300 md:items-center g-slate-500 py-6 gap-6">
        <h1 className="font-bold text-white g-yellow-300 text-2xl">Today Trending</h1>
        
      </div>
      <div className="w-full h-[28rem]  flex flex-row gap-3 overflow-x-auto g-green-500">
        {data.map((items) => (
          <Link to={`detail/${items.id}`} key={items.id} className=" g-yellow-200 ">
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
  );
};
export default TodayTrending;
