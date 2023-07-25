import { AiFillGithub, AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsFillPersonFill, BsPaypal } from "react-icons/bs";
import { FaFacebookF, FaHome } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
// import card5 from '../asset/card5.png'
// import card1 from '../asset/cards1.png'


const Footer = () => {
  return (
    <div className=" bg-gradient-to-b from-blue-950/20 to-blue-950/5 text-[#949494] w-full  py-20">
      <div className=" flex flex-col items-center  mx-auto md:px-12 md:grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-4">
        {/*////////////// logo///////// */}
        <div className=" g-green-500  flex flex-col gap-7">
          <h1 className="text-2xl  font-semibold">Filim.<span className="text-red-600">Fusion</span></h1>
          <p className=" text-white text-sm tracking-wide"> @Movie.App.com</p>
          <div className="w-40 g-red-400 h-10 flex flex-row">
            {/* <img className=" h-8" src={card5} alt="card"></img> */}
            {/* <img className=" h-8 " src={card1} alt="card"></img> */}
          </div>
          <div className=" flex gap-5 text-xl text-gray-400">
            <AiFillGithub className=" hover:text-white duration-300 cursor-pointer" />
            <AiFillYoutube className=" hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className=" hover:text-white duration-300 cursor-pointer" />
            <AiOutlineTwitter className=" hover:text-white duration-300 cursor-pointer" />
            <AiOutlineInstagram className=" hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
       
        {/* /////profile///////////////////// */}
        <div className="g-green-400">
          <h1 className=" text-2xl text-white font mb-4">Profile</h1>
          <div className=" flex flex-col gap-2 text-base">
            <p className=" flex items-center gap-3 hover:text-white duration-300">
              <span>
                <BsFillPersonFill />
              </span>
              My account
            </p>

            <p className=" flex items-center gap-3 hover:text-white duration-300">
              <span>
                <BsPaypal />
              </span>
              Check out
            </p>

            <p className=" flex items-center gap-3 hover:text-white duration-300">
              <span>
                <FaHome />
              </span>
              Order track
            </p>

            <p className=" flex items-center gap-3 hover:text-white duration-300">
              <span>
                <MdLocationOn />
              </span>
              Help & support
            </p>
          </div>
        </div>
         {/* ///////////////locate us///////////////// */}
         <div className="g-yellow-400 flex flex-col ">
          <h1 className=" text-2xl text-white font mb-4">Locate us</h1>
          <div className=" text-base flex flex-col gap-2 ">
            <p className=" hover:text-white duration-300">
              uzhunnan(h),kerala,india
            </p>
            <p className=" hover:text-white duration-300">Mob:7994951243</p>
            <p className=" hover:text-white duration-300">
              muhammeddanishu@gmai.com
            </p>
            <p className=" hover:text-white duration-300">Danish dani</p>
          </div>
        </div>
        {/* //////////////////////subscribe//////////////////////// */}
        <div className="flex flex-col justify-center g-orange-500">
            <input type="text" className="bg-transparent border px-4 py-2 text-sm" placeholder="e-mail"></input>
            <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Footer