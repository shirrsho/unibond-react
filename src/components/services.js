import React from 'react'
import { Card } from 'flowbite-react'
import '../styles/services.css'

function Services() {
  return (
    <section id="services">
    <div className='section-title mb-5'>Services</div>
    <div style={{
        display:'flex',
        gap:'10px'
    }}>
    <Card style={{
            borderRadius:'5%',
            overflow:'hidden',
        }}
        className='card'
      imgSrc="images/bg3.png"
    >
      <h5 className="text-2xl font-bold tracking-tight text-black dark:text-white m-2">
        
          Stock Export
        
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 m-2">

          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.

      </p>
    </Card>
    <Card style={{
            borderRadius:'5%',
            overflow:'hidden',
        }}
        className='card'
      imgSrc="images/bg3.png"
    >
      <h5 className="text-2xl font-bold tracking-tight text-black dark:text-white m-2">
        
          Production Export
        
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 m-2">

          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.

      </p>
    </Card>
    <Card style={{
            borderRadius:'5%',
            overflow:'hidden',
        }}
        className='card'
      imgSrc="images/bg3.png"
    >
      <h5 className="text-2xl font-bold tracking-tight text-black dark:text-white m-2">
        
          Local Wholesale
        
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 m-2">

          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.

      </p>
    </Card>
    <Card style={{
            borderRadius:'5%',
            overflow:'hidden',
        }}
        className='card'
      imgSrc="images/bg3.png"
    >
      <h5 className="text-2xl font-bold tracking-tight text-black dark:text-white m-2">
        
          Brand Formation
        
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 m-2">

          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.

      </p>
    </Card>
    </div>
<div className="pt-20 mt-20">
  <div className="-black h-screen">
    <div className="row-span-2 grid h-3/5 grid-cols-5 bg-red-1000 p-1 shadow-lg">
      <div className="row-span-2 border border-black pl-4 pt-4 transition-transform hover:scale-105 mr-2">
        <h3 className="font-semibold">Unibond Vestir<br/><br/></h3>
        <li>All Stock Export</li>
        <li>Market Expansion</li>
        <li>International Trading</li>
      </div>
      <div class="row-span-1 border pl-4 pt-4 transition-transform hover:scale-105 mr-2 mb-2">
        <h3 class="font-semibold">Unbond Production</h3>
        <li>All Manufacturing</li>
        <li>Accessories</li>
      </div>
      <div class="row-span-2 border pl-4 pt-4 transition-transform hover:scale-105 mr-2">
        <h3 class="font-semibold">UniStore</h3>
        <li>All B2B Wholesale</li>
        <li>Bulk Supply</li>
      </div>
      <div class="border pl-4 pt-4 transition-transform hover:scale-105 mr-2 mb-2">
        <h3 class="font-semibold">
          VagaBond
        </h3>
        Mens Lifestyle Brand
      </div>
      <div class="row-span-2 border pl-4 pt-4 transition-transform hover:scale-105">
        <h3 class="font-semibold">BondDiva</h3>
        <li>Traditional Brand</li>
      </div>
      <div class="border pl-4 pt-4 transition-transform hover:scale-105 mr-2">
        <h3 class="font-semibold">LadyBond</h3>
        <li>Lingerie and Sleepwears</li>
        <li>Activewears</li>
      </div>
      <div class="border pl-4 pt-4 transition-transform hover:scale-105 mr-2">
        <h3 class="font-semibold">BondDage & Bond De Vu</h3>
        <li>Luxury Brand</li>
      </div>
    </div>
  </div>

</div>
    </section>
  )
}

export default Services
