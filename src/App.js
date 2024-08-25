import Navbar from "./components/Layout/Navbar";
// import Carousel from "./components/CarouselComp";
// import Challenge from "./components/Challenge";
import Homepage from "./pages/Homepage";
import OtherPage from './pages/OtherPage'


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


const App = () => {
  return (
    <>
    <Router>
    <Navbar />
    <img src="/images/thin-line.svg" alt='thin purple brush stroke'/>
    <Homepage/>
    <Routes>
      {/* <Route path='/' exact element={<Homepage/>}/> */}
      
      <Route path='/other' element={<OtherPage/>}/>
    </Routes>

      {/* <img src='/images/thin-line.svg' alt='A thin purple brush line' />
      <div className="bg-gray-200 h-fit px-4">
        <Carousel />
      </div>
      <img src='/images/purple-line.svg' alt="A thick purple bursh line" />
      <div className="bg-gray-200 h-fit px-4">
        <Challenge />
      </div> */}
    </Router>
    </>
  )
}

export default App;

