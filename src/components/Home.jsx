import React from 'react'
import hero from '../assets/web-img/1.jpg'
import hero1 from '../assets/web-img/2.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, EffectCube, EffectFade } from 'swiper/modules'
import Grid from './Grid';

export default function Home() {
  // const slide =[
  //   {
  //     img : 1,
  //     src : hero,
  //     heading: "Hello, I'm Alime",
  //     para: "I photograph very instinctively. I see how it is taken like that. I do not follow certain styles, philosophies or teachers.",
  //     email : "helloamli@gmail.com"
  //   },
  //   {
  //     img : 2,
  //     src : hero1,
  //     heading: "Welcome to My Portfolio",
  //     para: "Capturing moments is my passion. Every photograph tells a unique story, filled with emotion and perspective.",
  //     email : "contact@photographer.com"

  //   }
  // ];
  return (
    <>





      {/* //////////  HERO SECTION  /////////// */}

      <section className='hero-section p-0'>
        <div className="container-fluid p-0">
          <div>
            <div className="hero-img">

           
              <Swiper
                modules={[EffectCoverflow, Autoplay]}
                effect='coverflow'
                spaceBetween={0}
                loop={true}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                autoplay={{
                  delay: 6500,
                  disableOnInteraction: false
                }}
              >
                


                <SwiperSlide>
                  <img src={hero1} alt="" width={'100%'} height={'100%'} />

                  <div className="slide-text">
                    <h1><span>Hello </span><br /> I'm Alime</h1>
                    <p>I photograph very instinctively. I see how it is taken like that. I do not follow certain styles, philosophies or teachers.</p>
                    <button type="button" class="btn btn-outline-danger rounded-4 me-5">Get A Quote</button>      
                    <a href="">helloamli@gmail.com</a>
                  </div>
                </SwiperSlide>
                <SwiperSlide><img src={hero} alt="" width={'100%'} height={'50%'} />
                  <div className="slide-text">
                    <h1><span>Hello </span><br /> I'm Alime</h1>
                    <p>I photograph very instinctively. I see how it is taken like that. I do not follow certain styles, philosophies or teachers.</p>
                    <button type="button" class="btn btn-outline-danger rounded-4 me-5">Get A Quote</button>
                    <a href="">helloamli@gmail.com</a>
                  </div></SwiperSlide> 
              </Swiper>
 

            </div>
          </div>
        </div>
    
      </section>
      <Grid/>
     
    </>
    
  )
  
}
