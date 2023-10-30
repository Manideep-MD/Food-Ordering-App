import './cart.css'
import { useSelector, useDispatch } from "react-redux";
import Card from '../Card/card'
import CartItems from "./cartItems";
import { useNavigate } from 'react-router-dom'
import { FoodActions } from '../Store/foodSlice';

const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.items);

    const cartLength = cartItems.length;
    const orderButton = () => {
        if (cartLength < 2) {
            alert("Please add atleast 2 items to proceed");
        } else {
            navigate("/order/cart/succes");
            dispatch(FoodActions.toogleHandler());
        }
    };

    const cartItemsMap = (
        <ul className='ul'>
            {cartItems.map((item) => (
                 <CartItems
                 key={item.id}
                 item={{
                     id: item.id,
                     title: item.name,
                     quantity: item.quantity,
                     total: item.totalPrice,
                     image: item.image,
                     price: item.price,
                 }}
             />
            ))}
        </ul>
    );
    const getTotalAmount = cartItems.map((item) => item.totalPrice);
    const totalAmount = getTotalAmount.reduce((pre, current) => {
        return pre + current;
    }, 0)
    return (
        <Card >
            <div className='cart'>
            {cartLength > 0 && <h2 className='customize'>Your Added Items - Customize Your Thali</h2>}

            {cartLength === 0 ? <p className='p'>Pleases add some Items first</p> : cartItemsMap}
            {cartLength > 0 && (
                <button className='orderButton' onClick={orderButton}>
                    <span className='amount'>₹{totalAmount} <span className='total1'> TOTAL</span></span> Place Order
                </button>
            )}
            </div>
        </Card>
    );
};
export default Cart;