import React, { useState } from 'react'
import img1 from '../assets/web-img/4.jpg'
import img2 from '../assets/web-img/5.jpg'
import img3 from '../assets/web-img/6.jpg'
import img4 from '../assets/web-img/7.jpg'
import img5 from '../assets/web-img/8.jpg'
import img6 from '../assets/web-img/9.jpg'
import img7 from '../assets/web-img/11.jpg'
import img8 from '../assets/web-img/12.jpg'
import img9 from '../assets/web-img/13.jpg'
import img10 from '../assets/web-img/14.jpg'
import img11 from '../assets/web-img/15.jpg'
import img12 from '../assets/web-img/36.jpg'
export default function Gallery() {


  const gallery = [
    { src: img1, category: 'Human' },
    { src: img2, category: 'Nature' },
    { src: img3, category: 'Country' },
    { src: img4, category: 'Human' },
    { src: img5, category: 'Nature' },
    { src: img6, category: 'Video' },
    { src: img7, category: 'Human' },
    { src: img8, category: 'Country' },
    { src: img9, category: 'Video' },
    { src: img10, category: 'Nature' },
    { src: img11, category: 'Country' },
    { src: img12, category: 'Video' }
  ];
  
  const [items, setItems] = useState(gallery);
  
  const filterItem = (category) => {
    if (category === 'All') {
      setItems(gallery); // Reset to show all items
    } else {
      const updateItems = gallery.filter((item) => item.category === category);
      setItems(updateItems); // Update with filtered items
    }
  };


  return (
   <>
   <section className='one'>
    <div className="container-fluid p-0">
      
            <div className="about-img p-0 ">
                <div className="abot-img-text">
                <h1> <strong>Gallery</strong></h1>
                <span id='home' className='home-hover '><i class="fa-solid fa-house-chimney"></i> Home<i class="fa-solid fa-chevron-right"></i></span><span style={{color:'red'}}> Gallery </span>
                </div>
            </div>
        </div>
        </section>
   
    <section className='gallery'>
    <div className="portfolio-menu text-center pt-4">
      <button className="btn border-0 active" onClick={() => filterItem('All')}>All</button>
      <button className="btn border-0 active" onClick={() => filterItem('Human')}>Human</button>
      <button className="btn border-0 active" onClick={() => filterItem('Nature')}>Nature</button>
      <button className="btn border-0 active" onClick={() => filterItem('Country')}>Country</button>
      <button className="btn border-0 active" onClick={() => filterItem('Video')}>Video</button>
    </div>
    </section>

    <div className="container">
      <div className="row py-4">
        {items.map((item, index) => (
          <div className="col-12 col-lg-3" key={index}>
            <img src={item.src} alt="" style={{ height: '220px', width: '100%', margin: '10px' }} />
          </div>
    ))}



    {/* <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
      <img src={img1} alt="" style={{ height: '220px', width: '100%' }} />
    </div>
    <div className="col-6 col-md-6 col-lg-3 mb-4">
      <img src={img2} alt="" style={{ height: '220px', width: '100%' }} />
    </div>
    <div className="col-6 col-md-6 col-lg-3 mb-4">
      <img src={img3} alt="" style={{ height: '220px', width: '100%' }} />
    </div>
    <div className="col-6 col-md-6  col-lg-3 mb-4">
      <img src={img4} alt="" style={{ height: '220px', width: '100%' }} />
    </div>
    <div className="col-6 col-md-6  col-lg-3 mb-4">
      <img src={img5} alt="" style={{ height: '220px', width: '100%' }} />
    </div>
    <div className="col-6 col-md-6  col-lg-3 mb-4">
      <img src={img6} alt="" style={{ height: '220px', width: '100%' }} />
    </div>
    <div className="col-6 col-md-6  col-lg-3 mb-4">
      <img src={img7} alt="" style={{ height: '220px', width: '100%' }} />
    </div>
    <div className="col-6 col-md-6  col-lg-3 mb-4">
      <img src={img8} alt="" style={{ height: '220px', width: '100%' }} />
    </div>
    <div className="col-6 col-md-6  col-lg-3 mb-4">
      <img src={img9} alt="" style={{ height: '220px', width: '100%' }} />
    </div>
    <div className="col-6 col-md-6  col-lg-3 mb-4">
      <img src={img10} alt="" style={{ height: '220px', width: '100%' }} />
    </div>
    <div className="col-6 col-md-6  col-lg-3 mb-4">
      <img src={img11} alt="" style={{ height: '220px', width: '100%' }} />
    </div>
    <div className="col-6 col-md-6  col-lg-3 mb-4">
      <img src={img12} alt="" style={{ height: '220px', width: '100%' }} />
    </div> */}

  </div>
</div>


   
   
   
   </>
  )
}
