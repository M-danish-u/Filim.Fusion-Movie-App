import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineMessage,
  AiOutlineBell,
  AiOutlineMenuUnfold,
} from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { GoSortDesc } from "react-icons/go";
import { BiUserCircle } from "react-icons/bi";
import HeroSection from "./HeroSection";
import TodayTrending from "./TodayTrending";
import Popular from "./Popular";
import Footer from "./Footer";
import WeeklyTrending from "./WeeklyTrending";
import { TodayWeekly } from "./TodayWeekly";
import Header from "./Header";

const Home = () => {
  return (
    // ///////////////home///////////////////
    <div className="g-red-600 w-full overflow-x-auto p-2 md:p-10">
      {/*///////////////////// top header//////////////////////// */}
      <Header/>
      {/*/////////////////// Hero section/////////////// */}

      <HeroSection />
      {/*////////////////// Today trending/////////////////// */}
      {/* <TodayTrending/> */}
      <TodayWeekly />
      {/* <WeeklyTrending/> */}

      {/* //////////parties/////////////// */}
      <Popular />

      {/* /////////FOOTER/////////// */}
      <Footer />
    </div>
    // </div>
  );
};

export default Home;
