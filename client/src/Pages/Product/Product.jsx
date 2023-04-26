import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from "react";
import List from '../../Components/List/List'
import "./Products.scss";

const Products = () => {
  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null)
  return (
    <div className='products'>
      <div className="left">
        <div className="filetItem">
          <h2>Products Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id='1' value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id='2' value={2} />
            <label htmlFor="2">Skirts</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id='3' value={3} />
            <label htmlFor="3">Coats</label>
          </div>
        </div>
        <div className="filetItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filetItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" value="asc" id="asc" name="price" onChange={() => setSort('asc')} />
            <label htmlFor="asc">Price (Lowest First)</label>
          </div>
          <div className="inputItem">
            <input type="radio" value="desc" id="desc" name="price" onChange={() => setSort('desc')} />
            <label htmlFor="desc">Price (Highest First)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" className='catImg' alt="" />
        <List catId={catId} maxPrice = {maxPrice} sort = {sort} />
      </div>
    </div>
  )
}

export default Products
