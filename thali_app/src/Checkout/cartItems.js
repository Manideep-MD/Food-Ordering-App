import React from "react";
import { useDispatch } from "react-redux";
import { FoodActions } from "../Store/foodSlice";
import './cartItems.css'

const CartItems = (props) => {
    const { title, quantity, total,image, price, id} = props.item;
    const dispatch = useDispatch();
    const addItem = () => {
        dispatch(FoodActions.addItems({ id, title,image, price}))
    }
    const removeItem = () => {
        dispatch(FoodActions.removeItem(id))
    }

    return (
        <li className='item'>
            <header>
                <h3>{title}</h3>
                <div className='prices'>
                    Rs.{total}{' '}
                    <span className='itemprice'>(Rs.{price}/item)</span>
                </div>
                <div><img src={image} alt={image} className='images'/></div>
            </header>
            <div className='details'>
                <div className='quantity'>
                    x <span>{quantity}</span>
                </div>
                <div className='actions'>
                    <button onClick={removeItem}>-</button>
                    <button onClick={addItem}>+</button>
                </div>
            </div>
        </li>
    )
}

export default CartItems;