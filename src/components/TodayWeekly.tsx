
import { useState } from 'react'
import TodayTrending from './TodayTrending'
import WeeklyTrending from './WeeklyTrending'

export const TodayWeekly = () => {
    const activeTextColor ="bg-clip-text bg-gradient-to-r  from-[#C0FECF] to-[#1ED5A9]  text-transparent ";

    const [Istoggle, setToggle] = useState(false);
    const handleToggle = (toggleState: boolean) => {
      setToggle(toggleState);
    };

  return (
    <div >
        <div className='g-green-600 md:flex gap-4 items-center-center fl'>
            <h1 className='font-bold text-white g-yellow-300 pt-1 text-2xl'>Trending Movies</h1>
            <div className="flex text-white font-semibold  gap-5">
                        <button
                            className={`${Istoggle ? 'bg-[#32313e9e] shadow-lg ' : 'bg-red-600 '} px-5 py-1 rounded-xl text-xs`}
                            onClick={() => setToggle(false)}>
                            Day
                        </button>
                        <button
                            className={`${Istoggle ? 'bg-red-600' : 'bg-[#32313e9e] shadow-lg'} px-5 py-1 rounded-xl text-xs`}
                            onClick={() => setToggle(true)}>
                            Week
                        </button>
                    </div>
          </div>
          {
            Istoggle?<WeeklyTrending />:<TodayTrending />
          }
       
      
      
    </div>
  )
}
{/* <div className="flex bg-transparent w-40 border hover:cursor-pointer border-black/50 rounded-full overflow-hidden relative">
<div
  onClick={handleToggle.bind(null, false)}
  className={`px-4 font-bold  py-2 ${Istoggle || activeTextColor}`}
>
  Today
</div>
<div
  onClick={handleToggle.bind(null, true)}
  className={`px-4 font-bold  py-2 ${Istoggle && activeTextColor}`}
>
  Week
</div>
<div
  className="bg-green-900  h-full absolute  z-[-1] transition-all duration-150 ease-in"
  style={
    Istoggle
      ? { left: "80px", width: "160px" }
      : { left: "0", width: "80px" }
  }
>
  
</div>
</div> */}