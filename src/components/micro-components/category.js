import React from 'react'
import '../../styles/products.css'

function Category({image, title}) {
  return (
    <div className='category'>
      <div className='category-image'><img src={image}/></div>
      <small className='category-title'>{title}</small>
    </div>
  )
}

export default Category
