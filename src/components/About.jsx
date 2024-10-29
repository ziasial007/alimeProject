import React from 'react'
import img1 from '../assets/web-img/about-img.png'
import { FaFilm } from "react-icons/fa6";
import { MdLocalMovies } from "react-icons/md";
import img2 from '../assets/web-img/19.jpg'
import img3 from '../assets/web-img/20.jpg'
import img4 from '../assets/web-img/21.jpg'
import img5 from '../assets/web-img/22.jpg'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";



export default function About() {
    const card =[
        {
            heading : "High Quality Images",
            para : "Lorem ipsum dolor sit amet, consectetur isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut elit, sed do eiusmod te",
            icon: < FaFilm/>
        },
        {
            heading : "Abundant Experience",
            para : "Lorem ipsum dolor sit amet, consectetur isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut elit, sed do eiusmod te",
            icon: < MdLocalMovies/>

        },
        {
            heading : "Modern Equipments",
            para : "Lorem ipsum dolor sit amet, consectetur isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut elit, sed do eiusmod te",
            icon: < FaFilm/>

        },
       

    ];
   const team=[
    {
            img : img2 ,
            heading : "Andrew Dean",
            para : "Photographer",
            icon : [<FaFacebookF />,  <FaTwitter />, <FaLinkedin />, <FaPinterestP /> ]
    },
    {
        img : img3 ,
        heading : "Tommy Kim",
        para : "Photographer",
        icon : [<FaFacebookF />,  <FaTwitter />, <FaLinkedin />, <FaPinterestP /> ]
},
{
    img : img4 ,
    heading : "Max McCormick",
    para : "Photographer",
    icon : [<FaFacebookF />,  <FaTwitter />, <FaLinkedin />, <FaPinterestP /> ]
},
{
    img : img5 ,
    heading : "Robert Ward",
    para : "Photographer",
    icon : [<FaFacebookF />,  <FaTwitter />, <FaLinkedin />, <FaPinterestP /> ]
},
   ]
  return (
 
    <>
    <section className='one'>
    <div className="container-fluid p-0">
      
            <div className="about-img p-0 ">
                <div className="abot-img-text">
                <h1> <strong>About Us</strong></h1>
                <span id='home' className='home-hover '><i class="fa-solid fa-house-chimney"></i> Home<i class="fa-solid fa-chevron-right"></i></span><span style={{color:'red'}}> About </span>
                </div>
            </div>
        </div>
        </section>
    
{/* ///////////////////////////////////////////////// */}

<section className='two py-5'>
<div className="container">
    <div className="row">
        <div className="col-12 col-lg-6 col-md-12">
            <div className="contact-us">
                <h2 style={{fontSize:'45px', fontWeight:'600'}}>We Live For Passion</h2>
                <p style={{lineHeight:'2'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum autem veniam expedita ab molestiae eligendi sint repudiandae excepturi. Possimus, eum? Blanditiis ex sint deserunt cupiditate ut iusto <br/>velitobcaecati voluptatibus dolore, quos doloribus eius, minima quaerat cumque suscipit aliquid laborum est non, exercitationem praesentium id perferendis! Mollitia debitis aspernatur qui. Aliquid alias sapiente hic reprehenderit nisi maiores veritatis quidem natus nam ex quos rerum, laboriosam omnis optio mollitia dolor. Ratione optio omnis ea quam </p>
                <button className='btn btn-outline-danger border-3 rounded-5 text-dark fs-5 pe-4 ps-4 mt-5'> Contact Us</button>
            </div>
        </div>
        <div className="col-12 col-lg-6 col-md-12">
        <img src={img1} alt="" className='rounded-4 shadow-0' />   
        </div>
    </div>
</div>
</section>

<section className='three py-5 bg-light'>
<div className="container ">
    <div className="row ">
        <h2 className='text-center py-4'>Why choose Us</h2>
        {card.map((item, i)=> (
             <div className="col-lg-4 col-sm-12 col-md-6 card  py-5 mt-4 text-center">
                <i className=' card-icons fs-4'>{item.icon}</i>
            <h3>{item.heading}</h3>
        <p>{item.para}</p>
          </div>
        ))}
    </div>
</div>
</section>

<section className='our-team py-5 bg-'>
<h2 className='text-center'>Our Team</h2>
<div className="container">
    <div className="row border gap-0" >
        {team.map((item, index)=>(
            <div className="card team-card py-5 px-5 text-center shadow-lg col-lg-3 col-sm-12 col-md-6" key={index}>
                <img src={item.img} alt=""  style={{width:'200px', borderRadius:'50%'}}/>
                <h4 style={{paddingTop:'20px'}}>{item.heading}</h4>
                <p style={{color:'red'}}>{item.para}</p>
                <i className='d-flex  gap-4 ms-4'>{item.icon} </i>
            </div>
        ))}
    </div>
</div>


</section>






    
    
    </>

  )
}
