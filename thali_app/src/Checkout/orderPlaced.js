import './orderPlaced.css'

const SuccessOrder = () => {

  return (
    <section className='order'>
      <h1>Your Order Succesfully Placed</h1>
      <p>Our delivery partner is on the way to delivery your order</p>
      <div><img src="/images/deliveryboy.png" alt="delivery boy" className='imges'/></div>
      <h3 className='h3'>-- Enjoy your food --</h3>
    </section>
  )

}

export default SuccessOrder;