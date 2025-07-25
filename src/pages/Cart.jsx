import { useEffect, useState } from "react";

function Cart() {
  const [cart, setCart] = useState([]);
  



  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const handleDelete = (idToDelete) => {
    const updatedCart = cart.filter((product) => product.id !== idToDelete);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
 
  return (
    <div className="container py-5" style={{marginTop:'80px'}}>
      <h2 className="text-center">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center">No items in cart</p>
      ) : (
        cart.map((product, index) => (
          <div key={index} className="card p-3 my-3">
            <img src={product.image} alt={product.title} style={{ height: 300, width: 300 }}/>
            <h5>{product.title}</h5>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <button className="btn-delete" onClick={() => handleDelete(product.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
