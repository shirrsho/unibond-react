import React, { useEffect, useState } from 'react'
import '../styles/products.css'
import Category from './micro-components/category'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
  }

  export const Toggle = ({ label, toggled, onClick }) => {
    const [isToggled, toggle] = useState(toggled)

    const callback = () => {
        toggle(!isToggled)
        onClick(!isToggled)
    }

    return (
        <label className='toggle-label'>
            <input className='toggle-input' type="checkbox" defaultChecked={isToggled} onClick={callback} />
            <span className='toggle-span'/>
        </label>
    )
}

function Products() {
    const [men, setMen] = useState(true)
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
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow />
      };

    const logState = state => {
        setMen(state)
    }

    return (
        <section id="products">
                <div className="gallery-hor" style={{marginBottom:'20vh'}}>
                    <div className='section-title'>Highlights</div>
                    {/* <div > */}
                    <Slider className="horbox" {...settings}>
                        {/* <button onClick={()=>cind!=0?setCind(cind-1):setCind(3)}>L</button> */}
                        <Category image={categories[0].src} title={categories[0].title}/>
                        <Category image={categories[1].src} title={categories[1].title}/>
                        <Category image={categories[2].src} title={categories[2].title}/>
                        <Category image={categories[2].src} title={categories[2].title}/>
                        <Category image={categories[2].src} title={categories[2].title}/>
                        <Category image={categories[2].src} title={categories[2].title}/>
                        {/* <button onClick={()=>cind!=3?setCind(cind+1):setCind(0)}>R</button> */}
                    </Slider>
                    {/* </div> */}
                </div>
                <div style={{display:'flex',gap:'5px', alignItems:'center', marginBottom:'10vh'}}>
                    <small>Men</small>
                    <Toggle
                        label="Toggle me"
                        toggled={true}
                        onClick={logState}
                    />
                    <small>Women</small>
                </div>
                {/* <div className='section-title'>Product<br/>Highlights</div> */}
                    {men==true && <Slider className="gallery" {...settings}>
                        <div class="first"><img src="./images/bg1.jpg"/><small>Black Shirt</small></div>
                        <div class="second"><img src="./images/bg2.jpg"/><small>Black Shirt</small></div>
                        <div class="third"><img src="./images/bg3.png"/><small>Black Shirt</small></div>
                        <div class="fourth"><img src="./images/bg1.jpg"/><small>Black Shirt</small></div>
                        <div class="fourth"><img src="./images/bg2.jpg"/><small>Black Shirt</small></div>
                    </Slider>}
                    {men==false && <Slider className="gallery" {...settings}>
                        <div class="first"><img src="./images/bg2.jpg"/><small>Black Saree</small></div>
                        <div class="second"><img src="./images/bg3.png"/><small>Black Saree</small></div>
                        <div class="third"><img src="./images/bg1.jpg"/><small>Black Saree</small></div>
                        <div class="fourth"><img src="./images/bg2.jpg"/><small>Black Saree</small></div>
                        <div class="fourth"><img src="./images/bg1.jpg"/><small>Black Saree</small></div>
                    </Slider>}
                {/* <div style={{height:'400px'}}></div> */}
        </section>
    )
}

export default Products
