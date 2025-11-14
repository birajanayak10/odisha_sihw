// import React from 'react'
// import Navbar from './components/NavBar/Navbar'
// import { div } from 'motion/react-client';
// const bgImage = {
//   backgroundImage: `url(${HeroImg})`,
//   backgroundRepeat: "no-repeat",
//   backgroundPosition: "bottom",
//   backgroundSize: "cover",
//   position: "relative",
// };
// const App = () => {
//   return (
//   <div className="overflow-x-hidden bg-brandDark text-white">
//     <div  style={bgImage}><Navbar/></div>
//     </div>
//   )
// }

// export default App


// import React from "react";
// import Navbar from "./components/NavBar/Navbar";
// import Hero from "./components/Hero/Hero";
// import HeroImg from "./assets/hero.jpg";
// import Explore from "./components/Explore/Explore";
// import Journal from "./components/Journal/Journal";
// import Footer from "./components/Footer/Footer";
import React from "react";
import Navbar from "./components/NavBar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import HeroImg from "./assets/hero.jpg";



const bgImage = {
  backgroundImage: `url(${HeroImg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom",
  backgroundSize: "cover",
  position: "relative",
};
const App = () => {
  return (
    <div className="overflow-x-hidden bg-brandDark text-white">
      <div style={bgImage}>
        <Navbar />
        <Hero />
      </div>
      {/* <Explore />
      <Journal />
      <Footer /> */}
    </div>
  );
};

export default App;