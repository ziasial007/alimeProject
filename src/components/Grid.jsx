import React from 'react'
import img1 from '../assets/web-img/3.jpg'
import img2 from '../assets/web-img/4.jpg'
import img3 from '../assets/web-img/5.jpg'
import img4 from '../assets/web-img/6.jpg'
import img5 from '../assets/web-img/7.jpg'
import img6 from '../assets/web-img/8.jpg'
import img7 from '../assets/web-img/9.jpg'
import img8 from '../assets/web-img/10.jpg'
import img10 from '../assets/web-img/37.jpg'
import img14 from '../assets/web-img/36.jpg'
export default function Grid() {




    return (
        <>
            <div className="all-button text-center bg-light py-5 ">
                <button className='btn border-0 '>All</button>
                <button className='btn border-0 '>Human</button>
                <button className='btn border-0 '>Nature</button>
                <button className='btn border-0 '>Country</button>
                <button className='btn border-0 '>Video</button>
            </div>



            <div className="container grid pb-5 ">
                <div className="divi ">
                    <div className="grid-img main3  ">
                        <div className="img-box "><img src={img1} alt="" /></div>
                        <div id='row-size' className="img-box"><img src={img2} alt="" /></div>
                        <div className="img-box"><img src={img3} alt="" /></div>
                        <div id='row-size' className="img-box"><img src={img4} alt="" /></div>
                        <div id='row-size' className="img-box"><img src={img5} alt="" /></div>
                        <div id='row-size' className="img-box"><img src={img6} alt="" /></div>
                        <div id='row-size' className="img-box"><img src={img7} alt="" /></div>
                        <div className="img-box"><img src={img8} alt="" /></div>
                        <div id='row-size' className="img-box"><img src={img10} alt="" /></div>
                        <div id='col-size' className="img-box"><img src={img14} alt="" /></div>
                        <div className="img-box"><img src={img3} alt="" /></div>
                    </div>
                    <div className="view-more">
                        <button className='btn btn-outline-danger my-4'> View More</button>
                    </div>
                </div>
            </div>
        </>
    )
}
