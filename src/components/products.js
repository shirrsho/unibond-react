import React, { useEffect, useState } from 'react'
import '../styles/products.css'
import Category from './micro-components/category'

function Products() {
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
            src:'/images/bg1.jpg',
            title:'Casual'
        },
        {
            src:'/images/bg1.jpg',
            title:'Casual'
        }
    ]
    const [cind, setCind] = useState(0);
    useEffect(()=>{
        console.log(cind);
    },[cind])
    return (
        <section id="products">
                <div className="gallery-hor">
                    <div className='section-title' style={{marginLeft:'20vh'}}>We Offer<br/>Quality</div>
                    <div className="horbox">
                        {/* <button onClick={()=>cind!=0?setCind(cind-1):setCind(3)}>L</button> */}
                        <Category image={categories[cind%4].src} title={categories[cind%4].title}/>
                        <Category image={categories[(cind+1)%4].src} title={categories[(cind+1)%4].title}/>
                        <Category image={categories[(cind+2)%4].src} title={categories[(cind+2)%4].title}/>
                        <Category image={categories[(cind+3)%4].src} title={categories[(cind+3)%4].title}/>
                        {/* <button onClick={()=>cind!=3?setCind(cind+1):setCind(0)}>R</button> */}
                    </div>
                </div>
                {/* <h1 style="font-size: 40px; color:#444">Product Highlights</h1>
                    <div id="gallery">
                        <div class="first"><img src="./images/bg1.jpg"/></div>
                        <div class="second"><img src="./images/bg1.jpg"/></div>
                        <div class="third"><img src="./images/bg1.jpg"/></div>
                        <div class="fourth"><img src="./images/bg1.jpg"/></div>
                    </div> */}
        </section>
    )
}

export default Products
