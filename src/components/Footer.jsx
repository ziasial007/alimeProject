import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../assets/web-img/11.jpg'
import img2 from '../assets/web-img/12.jpg'
import img3 from '../assets/web-img/13.jpg'
import img4 from '../assets/web-img/14.jpg'
import img5 from '../assets/web-img/15.jpg'
import img6 from '../assets/web-img/16.jpg'
import { CiHeart } from "react-icons/ci";
import logo from '../assets/web-img/logo.png'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { Autoplay  } from 'swiper/modules'

export default function Footer() {
  return (
    <>
    <div className="footer-text">
    <h2 className='text-center pt-4'>Follow Instagram</h2>
    <p className='text-center pb-4'>@Alime_photographer</p>
    </div>
   
    <Swiper className='col-lg-12 col-md-12 col-sm-12 d-flex align-item-center justify-contennt-center'
  spaceBetween={0}
  slidesPerView={5}
  onSlideChange={() => console.log('slide change')}
  onSwiper={(swiper) => console.log(swiper)}
  loop={true}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  modules={[Autoplay]} 
>
  <SwiperSlide><img src={img1} alt="" style={{ height: '300px' }} /></SwiperSlide>
  <SwiperSlide><img src={img2} alt="" style={{ height: '300px' }} /></SwiperSlide>
  <SwiperSlide><img src={img3} alt="" style={{ height: '300px' }} /></SwiperSlide>
  <SwiperSlide><img src={img4} alt="" style={{ height: '300px' }} /></SwiperSlide>
  <SwiperSlide><img src={img5} alt="" style={{ height: '300px' }} /></SwiperSlide>
  <SwiperSlide><img src={img6} alt="" style={{ height: '300px' }} /></SwiperSlide>
  <SwiperSlide><img src={img1} alt="" style={{ height: '300px' }} /></SwiperSlide>
  <SwiperSlide><img src={img2} alt="" style={{ height: '300px' }} /></SwiperSlide>
  <SwiperSlide><img src={img3} alt="" style={{ height: '300px' }} /></SwiperSlide>
  <SwiperSlide><img src={img4} alt="" style={{ height: '300px' }} /></SwiperSlide>
  <SwiperSlide><img src={img5} alt="" style={{ height: '300px' }} /></SwiperSlide>
  <SwiperSlide><img src={img6} alt="" style={{ height: '300px' }} /></SwiperSlide>
</Swiper>


    <div className="copyright-area bg-light py-2  ">
        <p className='pt-4 ps-4'>Copyright ©2024 All rights reserved | This template is made with <CiHeart />  by <span style={{color:'red'}}>Colorlib</span> </p>
        <div className="logo">
    <img src={logo} alt="" style={{backgroundColor:'#000' , margin:'23px 40px'}}/>
        </div>
    <div className="footer-icons d-flex gap-4">
        <FaFacebookF />
        <FaLinkedin />
        <FaPinterestP />
        <FaTwitter />
    </div>
    </div>

    
    
    </>
  )
}
