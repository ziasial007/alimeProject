import React from 'react'
import img1 from '../assets/web-img/51.jpg'
import img2 from '../assets/web-img/52.jpg'
import img3 from '../assets/web-img/53.jpg'
import img4 from '../assets/web-img/50.jpg'
import img5 from '../assets/web-img/53.jpg'
import img6 from '../assets/web-img/36.jpg'
import img7 from '../assets/web-img/54.jpg'
import img8 from '../assets/web-img/53.jpg'
export default function Blogs() {


  const images = [
    { src: img1, height: '380px', width: '100%', colSize: 'col-lg-6 col-sm-12', 
      date:"May 19, 2019 3 Comment",
      heading :'May 19, 2019 3 Comment',
    },
    { src: img2, height: '380px', width: '100%', colSize: 'col-lg-3 col-sm-12',
      date:"May 19, 2019 3 Comment",
      heading :'May 19, 2019 3 Comment',
     },
    { src: img3, height: '380px', width: '100%', colSize: 'col-lg-3 col-sm-12' },
    { src: img7, height: '380px', width: '100%', colSize: 'col-lg-3 col-sm-12' },
    { src: img4, height: '380px', width: '100%', colSize: 'col-lg-3 col-sm-12' },
    { src: img6, height: '380px', width: '100%', colSize: 'col-lg-6 col-sm-12' },
    { src: img3, height: '380px', width: '100%', colSize: 'col-lg-3 col-sm-12' },
    { src: img4, height: '380px', width: '100%', colSize: 'col-lg-6 col-sm-12' },
    { src: img3, height: '380px', width: '100%', colSize: 'col-lg-3 col-sm-12' },
    


  ];

  return (
    <>


      <section className='one'>
        <div className="container-fluid p-0">

          <div className="about-img p-0 ">
            <div className="abot-img-text">
              <h1> <strong>Blogs</strong></h1>
              <span id='home' className='home-hover '><i class="fa-solid fa-house-chimney"></i> Home<i class="fa-solid fa-chevron-right"></i></span><span style={{ color: 'red' }}> Blogs </span>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row">
          {images.map((item, index) => (
            <div className={`col-12 card1 ${item.colSize} py-4`} key={index}>
              <div className='aa'>
              <img className='image' src={item.src} alt="" style={{ height: '380px', width: '100%' }} />

              </div>
              <div className="img-content">
                <p>{item.date}</p>
                <h5>{item.heading}</h5>
                
              </div>


            </div>

          ))}
          {/* <div className="col-12 col-lg-6 col-sm-12 py-4">
                <img src={img1} alt="" style={{height:'380px', width:'100%'}}/>
               </div>
               <div className="col-12 col-lg-3 col-sm-12 py-4">
                <img src={img2} alt=""style={{height:'380px', width:'100%'}} />
               </div>
               <div className="col-12 col-lg-3 col-sm-12 py-4">
                <img src={img3} alt="" style={{height:"380px", width:"100%"}} />
               </div> */}


        </div>

      </div>








    </>
  )
}
