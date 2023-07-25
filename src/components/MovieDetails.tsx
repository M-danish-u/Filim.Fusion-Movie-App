import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDetails, fetchVideo } from "../Api/TodayTrending";
import ProgressBar from "./ProgressBar";
import dayjs from "dayjs";
import { Detailtype } from "../models/MovieDetailtype";
import Header from "./Header";

const MovieDetails = () => {
  const [detailData, setDetailData] = useState<Detailtype>('');
  const [videoplay, setVideoplay] = useState([]);


  const { id } = useParams();
  useEffect(() => {
    const getDetails = async () => {
      const fetchingDetailData = await fetchDetails(id);
      const fetchplayvideo = await fetchVideo(id);
      
      setDetailData(fetchingDetailData);
      setVideoplay(fetchplayvideo.videos.results)
    };
    getDetails();
  }, []);
  console.log("dddd", detailData);

  const getImage = (backdrop_path: string) => {
    return `https://image.tmdb.org/t/p/original/${backdrop_path}`;
  };
  // console.log("kooi",videoplay);
  
  return (
    <div className="w-full h-screen p-2 md:p-10">
      <Header/>
    <div className="g-yellow-300 w-full h-[400px] py5 md:h-[800px] justify-end flex mt-8 relative ">
      <img className=" h-full  " src={getImage(detailData.backdrop_path)} />

      <div className="absolute md:pt- md:justify-center w-full h-full top-0 p-6 flex flex-col left-0 bg-gradient-to-r md: from-black md:via-black/90  ">
        <div className="flex gap-3 md:gap-4 flex-col">
          <h1 className="text-white md:text-3xl text-2xl font-extrabold">
            {detailData.title}
          </h1>
          <div className="flex  gap-4 items-center flex-row">
            <p className="text-white text-xl">
              {" "}
              Voting Average:
            </p>
            <div className=" top-[330px]  left-6 w-12 h-16 text-xl">
              <ProgressBar percentage={detailData.vote_average * 10} />
            </div>
          </div>
          <p className=" text-xl text-white">
            popularity : {detailData.popularity}
          </p>

          <div className="flex  g-yellow-300 items-center gap-5 flex-row">
            <h1 className="text-white text-xl">
              {" "}
            Release : {dayjs(detailData.release_date).format("DD MM YYYY ")}
            </h1>
         
          </div>
          <p className="text-white md:w-[700px] text-xl">{detailData.overview}</p>
          {
            videoplay.length > 0 &&(
                <div className="rounded-xl">
            <iframe className="w-[300px] h-[180px] md:w-[400px] md:h-[300px]"
           
              src={`https://www.youtube.com/embed/${videoplay[1].key}`}
              title="movie trailer"
              allowFullScreen
            ></iframe>
          </div>
            )
          }
        </div>
      </div>
    </div>
    </div>
  );
};

export default MovieDetails;
