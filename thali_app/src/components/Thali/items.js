import React from "react";
import Card from "../../Card/card";
import { useDispatch } from "react-redux";
import { FoodActions } from "../../Store/foodSlice";
import './items.css'

const Items = (props) => {
  const dispatch = useDispatch()
  const { title, id, price, image } = props
  console.log(image)
  const cartButton = () => {
    dispatch(FoodActions.addItems({ title, id, price, image }))
  }
  return (
    <>
      <li className="products">
        <Card>
          <header className="header">
            <h3 className="h3">{title}</h3>
            <div className="price">Rs:{price}</div>
          </header>
          <img className='img' src={image} alt="Food pic" />
          <div className="button1"><button className="button" onClick={cartButton}>Add to Cart</button></div>
        </Card>
      </li>
    </>
  )
}
export default Items;