import "./App.css";
import { useEffect } from "react";
import Aos from "aos";
import Header from "./components/Header/Header";
import Exercises from "./components/UI/Exercises";
import Her from "./components/UI/Her";
import 'remixicon/fonts/remixicon.css'
import Start from "./components/UI/Start";
import Pricing from "./components/UI/Pricing";
import Testimonials from "./components/UI/Testimonials";
import Footer from "./components/UI/Footer";
function App() {
  useEffect(()=>{
    Aos.init();
  },[]);
  return <>
  <Header />
  <Her />
  <Exercises />
  <Start />
  <Pricing />
  <Testimonials />
  <Footer />
  </>
}

export default App;