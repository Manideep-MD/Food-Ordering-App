import React from "react";
import Items from "./items";
import { useSelector } from "react-redux";
import './order.css'

const Order = () => {
  const DUMMY_ITEMS = useSelector((state) => state.DUMMY_ITEMS)
  console.log(DUMMY_ITEMS)
  return (
    <>
      <section className="items">
        <h2 className="h2">Select Your Favourite Food</h2>
        <ul className="ul">
          {DUMMY_ITEMS.map((item, index) => (
            <Items key={index}
              id={index}
              title={item.title}
              price={item.price}
              image={item.image} />
          ))
          }
        </ul>
      </section>
    </>
  )
}
export default Order;