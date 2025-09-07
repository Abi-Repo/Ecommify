import React from 'react'
import { Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <h4>These are the only products that we sale</h4>
        <Outlet/>
    </div>
  )
}

export default Product