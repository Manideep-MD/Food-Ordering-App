import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Thali from './components/Thali/thali';
import Order from './components/Thali/order';
import Cart from './Checkout/cart';
import OrderPlaced from './Checkout/orderPlaced'

function App() {
  return (
    <BrowserRouter>
      <Thali />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/order/cart" element={<Cart />} />
        <Route path="/order/cart/succes" element={<OrderPlaced />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;