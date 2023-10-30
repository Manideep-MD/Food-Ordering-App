import React from "react";
import './Home.css'
import { useDispatch } from "react-redux";
import { FoodActions } from './Store/foodSlice';
import { Link } from "react-router-dom";


const Home = () => {
  const dispactch = useDispatch()
  const onClick = () => {
    dispactch(FoodActions.toogleHandler())
  }
  return (
    <>
      <Link to='/order'>
        <button className="botton" onClick={onClick}>Place Order</button>
      </Link>

      <div className="main">
        <h1 className="pic">Chunky Monkey</h1><br />
        <h3 className="pic2">You'll Find Delicious Food Here</h3>
      </div>
    </>
  )
}
export default Home;