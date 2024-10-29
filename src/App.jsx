import { useState } from 'react'
// import { IconName } from "react-icons/fa";
import 'swiper/css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './web.css'
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Footer from './components/Footer';
import Gallery from './components/Gallery'
import Blogs from './components/Blogs'
import Contact from './components/Contact';



function App() {

  return (
   <>
{/* <section className="grid-section mt-4">
            <Grid />
          </section>  */}
<Router>
< Navbar />
  <Routes>
    <Route path='/' element={< Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/gallery' element={<Gallery/>} />
    <Route path='/blogs' element={<Blogs />}/>
    <Route path='/contact' element={<Contact />}/>
  </Routes>
</Router>

<Footer />


    
  {/* <Home /> */}
  
 

   </>
  )
}

export default App
