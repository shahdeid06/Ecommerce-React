import { useEffect, useState } from "react";

function Cart() {
  const [cart, setCart] = useState([]);
  const [showPayment, setShowPayment] = useState(false);
  



useEffect(() => {
  const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
}, []);

const handleDecrease = (idToDelete) => {
const updatedCart = cart.map((product) => {
  if (product.id === idToDelete) {
  if (product.quantity > 1) {
    return { ...product, quantity: product.quantity - 1 };
}
  return null; 
}
  return product; 
})
.filter(Boolean);

  setCart(updatedCart);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};
const handleDelete = (idToDelete) => {
    const updatedCart = cart.filter((product) => product.id !== idToDelete);
    setCart(updatedCart);
  };
  const handlePayment = (e) => {
    e.preventDefault();
    alert("✅ Payment successful! Thank you for your purchase.");
    setCart([]); 
    localStorage.removeItem("cart"); 
    setShowPayment(false);
  };

  
  return (
    <div className="container py-5" style={{marginTop:'80px'}}>
      <h2 className="text-center" style={{color:'#e7ded1'}}>Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center" style={{color:'#e7ded1'}}>No items in cart</p>
      ) : (
        cart.map((product, index) => (
          <div key={index} className="card p-3 my-3">
            <img src={product.image} alt={product.title} style={{ height: 300, width: 300 }}/>
            <h5>{product.title}</h5>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <button className="btn-qty" onClick={() => handleDecrease(product.id)}>-1</button>
             <button className="btn-shop"onClick={() => setShowPayment(true)}>Shop Now</button>
                         <button className="btn-delete" onClick={() => handleDelete(product.id)}>Delete</button>
          </div>
        ))
      )}
      <h4 style={{color:'#e7ded1'}}>Total: ${cart.reduce((acc, p) => acc + p.price * p.quantity, 0).toFixed(2)}</h4>
       {showPayment && (
        <div className="payment-container mt-5">
          <h3 style={{color:'#e7ded1'}}>Payment Method</h3>
          <form className="payment-form" onSubmit={handlePayment}>
            <label>
              Cardholder Name
              <input type="text" placeholder="John Doe" required />
            </label>
            <label>
              Card Number
              <input type="text" placeholder="1234 5678 9012 3456" required />
            </label>
            <label>
              Expiry Date
              <input type="text" placeholder="MM/YY" required />
            </label>
            <label>
              CVV
              <input type="password" placeholder="***" required />
            </label>
            <button type="submit" className="btn-pay">
              Pay Now
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Cart;
