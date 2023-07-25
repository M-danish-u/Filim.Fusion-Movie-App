//////////today trending///////////

import axios from "axios";
const API_KEY = "be3936a601da64b90d1555ee296d0991";

export const fetchTodaymovie = async () => {
  
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
     );
     return data;
  
  } catch (error) {
    console.log(error);
  }
};

//////////// weekly trending///////////
export const fetchWeeklymovie= async()=>{
  
  try {
    const {data}=await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
    //  console.log(data, "kkkkk")

    return data
  } catch (error) {
    console.log(error);
    
  }
}

//////////////popular Api//////////
export const fetchPopularmovie= async()=>{
  

  try {
    const {data}=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
    return data
  } catch (error) {
    console.log(error);
  
  }
}



//////////////popular Api//////////
export const fetchNowmovie= async()=>{
  

  try {
    const {data}=await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`)
    return data
  } catch (error) {
    console.log(error);
  
  }
}

// All users////////////

export const fetchAllusers= async()=>{

  try {
    const {data}=await axios.get(`https://dummyjson.com/users`)

    return data
    
  } catch (error) {
    console.log(error);
    
  }
}
// /////////Details////////////

export const fetchDetails = async(id:number)=>{
  
  try {
    const {data}=await axios.get(` https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}` )
    return data
  } catch (error) {
    console.log(error);
    
  }
}

//////////// Video//////////////////

export const fetchVideo = async (id:number)=>{
  
  try {
    const {data}=await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`)
    console.log("hy,",data);
    
    return data
  } catch (error) {
    console.log(error);
    
  }
}

/////////////////////Search///////////////

export const fetchSearch = async (query:string)=>{

try {
  const {data}= await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`)
  // console.log('data',data);
  return data;
 
  
} catch (error) {
  console.log(error);
  
}

}
