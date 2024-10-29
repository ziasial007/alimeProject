import React from 'react'

export default function Contact() {
  return (
    <>
    
    
    
    <section className='one'>
        <div className="container-fluid p-0">

          <div className="about-img p-0 ">
            <div className="abot-img-text">
              <h1> <strong>Contact</strong></h1>
              <span id='home' className='home-hover '><i class="fa-solid fa-house-chimney"></i> Home<i class="fa-solid fa-chevron-right"></i></span><span style={{ color: 'red' }}> Contact </span>
            </div>
          </div>
        </div>
      </section>


        <section className='contact-area'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 py-5">
                        <h1 style={{fontSize:'60px', fontWeight:'600', lineHeight:'1.3'}}>Let’s Work <br /> Together</h1>
                    </div>
                    <div className="col-12 col-lg-6 py-5 info">
                        <div className="row">
                        <div className=" col-lg-6">
                            <p>Email</p>
                            <a href="">info.deercreative@gmail.com</a>
                        </div>
                        <div className="col-12 col-lg-6">
                            <p>Visit Us </p>
                            <a href="#">60-49 Road 11378 New York</a>
                        </div>
                        </div>
                        <div className="call py-4">
                            <p>Call Us</p>
                            <a href="#">+6511.188.888</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    <div className="container">
    <div className="google-map">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56146.70624511882!2d70.26271695220267!3d28.414152767621424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39375c713b45db39%3A0x28af23c1672a0170!2sRahim%20Yar%20Khan%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1729581087868!5m2!1sen!2s"
    width="100%"
    height="600"
    style={{borderRadius:'10px'}}
  ></iframe>
</div>

    </div>





    
    </>
  )
}
