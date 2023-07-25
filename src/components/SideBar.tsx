import { FaCompass } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import {SlCalender  } from "react-icons/sl";
// import { CgProfile } from "react-icons/cg";
import { RiRadioButtonLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { fetchAllusers } from "../Api/TodayTrending";



const SideBar = () => {
const [users,setUsers]=useState([])
  useEffect(()=>{
const getUsers=async()=>{
  const user=await fetchAllusers()
  setUsers(user.users)
}
getUsers()

  },[])
  console.log('uuuu',users);
  
  return (
    <div className=" w-64 md:w-80 h-[100dvh] hidden md:block bg-gradient-to-l from-blue-950/20 border-r-8 border-white/5">
      <nav className="p-10 flex flex-col gap-8">
      <div className="w-full  border-b border-gray-500 pb-4 g-yellow-200">
        
        <h1 className="py-6 g-orange-400 text-white text-2xl flex gap-2 font-bold">Filim.<span className="text-red-600">Fusion</span></h1>
        
        <div className="py-6">
      <ul className=" text-white flex flex-col gap-3 font-semibold">
        <li>
          <p className=" py-3 font-normal text-gray-500">News Feed</p>
        </li>
        <li className=" flex py-3  gap-4 g-slate-500 items-center
         ">
        <FaCompass className="text-red-600  text-xl"/>
        <h1>Browse</h1>
        </li>
        <li className=" flex py-3 gap-4  g-slate-500 items-center">
       <AiOutlineHeart className=" text-2xl"/>
        <h1>Watchlist</h1>
        </li>
        <li className=" flex py-3 gap-4 g-slate-500 items-center">
        <SlCalender  className=" text-xl"/>
        <h1>Coming Soon</h1>
        </li>
      </ul>
      </div>
      </div>
      {/* ///////////following//////////////// */}
      <p className="text-gray-500">Following</p>
      <div className="w-full h-80 gap-6 flex flex-col overflow-x-auto g-slate-500">
        {/* <p className="text-gray-500">Following</p> */}
        {

          users.map((user)=>(

            <div className="flex flex-row g-yellow-400 gap-5 justify-between items-center ">
      <img className="w-8 h-8" src={user.image}></img>
      <p className=" font-semibold text-white">{user.lastName}</p>
      <RiRadioButtonLine className="text-green-500 text-lg"/>
      </div>
          ))
      
}
      </div>
      </nav>
    </div>
  )
}

export default SideBar
