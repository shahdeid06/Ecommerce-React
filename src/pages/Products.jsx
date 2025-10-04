import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading , setLoading] = useState(true);
  const [error , setError] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("ERROR");
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    const oldCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingIndex = oldCart.findIndex((item) => item.id === product.id);

    if (existingIndex !== -1) {
      oldCart[existingIndex].quantity += 1;
    } else {
      oldCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(oldCart));

  
    setMessage('Added to cart successfully!');
    setTimeout(() => {
      setMessage('');
    }, 2000);
  };

  if (loading) return <h1 className="p-6 text-success">Loading...</h1>;
  if (error) return <h1 className="p-6 text-danger">{error}</h1>;

  return (
    <div className="products-container2 py-5 bg-color" style={{ position: 'relative' ,marginTop:'20px'}}>
      {message && (
        <div style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)', 
            color: 'var(--gold)', 
            padding: '12px 24px',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(10px)', 
            border: '1px solid var(--border-white)', 
            zIndex: 9999, 
            fontWeight: 'bold',
            marginTop: '40px'
  }}>
          {message}
        </div>
      )}
     
  <div className="products-grid2">
    {products.map((product) => (
      <div className="product-card2" key={product.id}>
        <Link to={`/productdetails/${product.id}`} className="product-link">
          <img src={product.image} alt={product.title} className="product-img" />
          <div className="card-body">
            <h5 className="card-title" style={{color:'#e7ded1'}}>{product.title}</h5>
            <p className="card-price">${product.price}</p>
          </div>
        </Link>
        <div className="add-btn">
          <button className="btn" onClick={() => handleAddToCart(product)}>
            Add To Cart
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
  );
}

export default Products;
