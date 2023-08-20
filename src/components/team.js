import React from 'react'
import '../styles/products.css'
import '../styles/team.css'
import 'gestalt/dist/gestalt.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Profile from './micro-components/profile';

function Team() {
    const categories = [
        {
            src:'/images/bg1.jpg',
            title:'Casual'
        },
        {
            src:'/images/bg2.jpg',
            title:'Formal'
        },
        {
            src:'/images/bg3.png',
            title:'Semi Formal'
        }
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      };
  return (
    <section id='team'>
    <div className="gallery-hor" style={{marginBottom:'20vh'}}>
                    <div className='section-title'>Team</div>
                    {/* <div > */}
                    <Slider className="horbox" {...settings}>
                        {/* <button onClick={()=>cind!=0?setCind(cind-1):setCind(3)}>L</button> */}
                        {/* <Category image={categories[0].src} title={categories[0].title}/>
                        <Category image={categories[1].src} title={categories[1].title}/>
                        <Category image={categories[2].src} title={categories[2].title}/>
                        <Category image={categories[2].src} title={categories[2].title}/>
                        <Category image={categories[2].src} title={categories[2].title}/>
                        <Category image={categories[2].src} title={categories[2].title}/> */}
                        {/* <button onClick={()=>cind!=3?setCind(cind+1):setCind(0)}>R</button> */}
                        <Profile/>
                        <Profile/>
                        <Profile/>
                        <Profile/>
                        <Profile/>
                        <Profile/>
                    </Slider>
                    {/* </div> */}
                </div>
                </section>
  )
}

export default Team