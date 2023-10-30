import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { FoodActions } from "../../Store/foodSlice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './thali.css'

const Thali = () => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.totalQuantity);
  const toggleCart = useSelector((state) => state.cartButtonIsVisible);
  const checkItems = useSelector((state) => state.items)
  const navigate = useNavigate()
  const onclick = () => {
    dispatch(FoodActions.nameToogleHandler())
  }

  const checkCart = () => {
    if (checkItems.length < 2) {
      alert('Please add atleast 2 items')
      return
    } else {
      navigate('/order/cart')
    }
  }

  return (
    <>
      <div className="container">
        <Link to="/">
          <button className="chunky" onClick={onclick}>Chunky Monkey</button>
        </Link>
        {toggleCart && (
          <button className="btn" onClick={checkCart}>My Cart <span className="total">{totalQuantity}</span></button>
        )}
      </div>
    </>
  )
}
export default Thali;