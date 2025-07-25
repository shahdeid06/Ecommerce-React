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
    <div className="products-container py-5 bg-color" style={{ position: 'relative' }}>
      {message && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          backgroundColor: '#ce269e',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          zIndex: 1000
        }}>
          {message}
        </div>
      )}

      <h2 className="text-center mb-4">Products</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="product-card h-100 shadow-lg p-3">
              <Link to={`/productdetails/${product.id}`} className="text-decoration-none text-dark">
                <img src={product.image} className="card-img-top p-3" alt={product.title} style={{ height: '300px', objectFit: 'contain' }}/>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text fw-bold">${product.price}</p>
                </div>
              </Link>
              <div style={{width:250,}} className="bg-btn rounded text-center ">
                <button className="btn" onClick={() => handleAddToCart(product)}>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
