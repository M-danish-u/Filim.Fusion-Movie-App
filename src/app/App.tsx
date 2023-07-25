import './App.scss';
// import SideBar from '../components/SideBar';
// import Home from '../components/Home';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import MovieDetails from '../components/MovieDetails';
import Homecontainer from '../components/Homecontainer';
function App() {
  return (
    <div className=' bg-black/95 '>
      <div className='h-screen  flex flex-row'>
  {/* <SideBar/> */}
  <BrowserRouter>
  <Routes>
    {/* <Route element={<Home/>} path='/'/> */}
    <Route element={<Homecontainer/>} path='/'/>
    <Route element={<MovieDetails/>} path='/detail/:id'/>
  </Routes>
  </BrowserRouter>
  </div>
  </div>
  );
}
export default App;
