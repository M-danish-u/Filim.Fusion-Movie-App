import { useEffect, useState } from "react"
import { AiOutlineBell, AiOutlineLeft, AiOutlineMenuUnfold, AiOutlineMessage, AiOutlineRight } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import { BsSearch } from "react-icons/bs"
// import { GoSortDesc } from "react-icons/go"
import { fetchSearch } from "../Api/TodayTrending"
import { Link } from "react-router-dom"


const Header = ()  => {
  const [name,setName]=useState('')
  const [movies,setMovies]=useState([])
  const [itemdiv, setItemdiv] = useState(false);

  useEffect(()=>{
    const getSearch= async () => {
      const searchApi = await fetchSearch(name)
      setMovies(searchApi.results)
    }
    getSearch()
  },[name])
  // console.log(movies,'mmmm');
  

  const getImage=(poster_path:string)=>{
    return `https://image.tmdb.org/t/p/original/${poster_path}`
  }
  
  return (
    <div>

      <div className="flex py- items-center justify-center flex-col gap-2 md:gap-0 md:flex-row md:justify-between brder-     g-green-700">
        <h1 className="text-white text-2xl md:hidden font-bold">
          {" "}
          Filim.<span className="text-red-600">Fusion</span>
        </h1>
        <div className="flex gap-4 flex-row md:items-center md:gap-12 justify-center md:justify-start w-full  g-slate-600">
          <AiOutlineMenuUnfold className="text-slate-200 mt-2 text-4xl md:hidden "/>
          {/* <div className="md:flex hidden  text-2xl md:gap-3 text-gray-600 font-semibold flex-row">
            <AiOutlineLeft />
            <AiOutlineRight />
          </div> */}
          <div className="  flex flex-row relative gap- items-center g-purple-500  border-gray-500  rounded-3xl border-[1px]  text-lg  md:px-2">
            <BsSearch className="hidden  md:block text-2xl text-gray-600" />
            <input
             onFocus={() => setItemdiv(true)}
            //  onBlur={() => setItemdiv(false)}
            value={name}
              type="text "
              className="py-3 px-3  bg-transparent text-slate-400 outline-none "
              placeholder="Search  everithing"
            onChange={ (e)=>setName(e.target.value)}/>

            {/* <GoSortDesc className="hidden  md:block text-3xl text-gray-600" /> */}
            {itemdiv&& movies.length>0 &&(
            <div className="absolute w-full overflow-y-auto h-64 px-2 flex flex-col gap-2 rounded-md bg-white left-0 top-14 z-10">
              
              {  movies.map((movie)=>(
                  <Link to={`detail/${movie.id}`} key={movie.id}  className="flex flex-row items-center shadow-lg hover:text-white hover:bg-blue-600 gap-2">
                    <img className="w-16 h-16" src= {getImage(movie.poster_path)}/>
                  <p>{movie.title}</p>
                  </Link>
                ))
              }
            </div>
            )}
          </div>
          
        </div>

        <div className=" md:flex hidden  flex-row gap-3 items-center text-4xl text-slate-400 g-red-600">
          <AiOutlineMessage />
          <AiOutlineBell />
          <BiUserCircle/>
        </div>
      </div>
    </div>
  )
}

export default Header