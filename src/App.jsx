import './App.css';

import image_01 from './images/image-01.jpg';
import image_02 from './images/image-02.jpg';
import image_03 from './images/image-03.jpg';
import image_04 from './images/image-04.jpg';

import Home from './components/homepage/Home';
import Slider from './components/slider/Slider';
import Navbar from './components/navbar/Navbar';


const navbarLinks = [
  {url: "#", title: "Home"}, 
  {url: "#", title: "Informations"},
  {url: "#", title: "Prices"}
];


function App() {
  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Home imageSrc={image_01}/>
      <Slider 
        imageSrc={image_02}
        title={"Be an explorer."}
        subtitle={"Get ready to work in one of the most demanded professions in the market."}
      />
      <Slider 
        imageSrc={image_03}
        title={"From basic to advanced."}
        subtitle={"You will learn data analysis, statistics and programming all the way to advanced aspects including data engineering and machine learning."}
        flipped={true}
      />
      <Slider 
        imageSrc={image_04}
        title={"Real projects."}
        subtitle={"You will work on projects contracted by companies, obtaining real experience in the development of an interface. "}
      />
    </div>
  )
}

export default App;
