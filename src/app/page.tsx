
import LandvistaAbout from "./components/About";
import Overview from "./components/Overview";
import Footer from "./components/Footer";
import LandingPage from "./components/Landing";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

export default function Landvista(){
  return(
    <main>
     <Navbar/>
     <LandingPage/>
     <Testimonials/>
    <LandvistaAbout/>
    <Overview/>
     <Footer/>
    </main>
    
  );
}