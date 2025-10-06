import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/products");
  };
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
    <>
    <div className="hero-section bg">
      <div className="hero-text">
        <h1>New Arrivals<br />Are Here</h1>
        <button onClick={handleClick} className="shop-btn">
          Shop Now ➯
        </button>
      </div>
    </div>
     <div className="products-container py-5 bg-color" style={{marginTop:'20px'}}>
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
      <div className="row" style={{marginTop:'-60px'}}>
        {products.slice(0, 3).map((product) => (
          <div className="col-12 col-sm-6 col-md-4 mb-4" key={product.id}>
            <div className="product-card h-100 shadow-lg p-3">
              <Link to={`/productdetails/${product.id}`} className="text-decoration-none text-dark">
                <img src={product.image} className="card-img-top p-3" alt={product.title} style={{ height: '250px', objectFit: 'contain' }}/>
                <div className="card-body text-center">
                  <h5 className="card-title" style={{color:'white'}}>{product.title}</h5>
                  <p className="card-text fw-bold">${product.price}</p>
                </div>
              </Link>
              <div style={{width:250,}} className="shop-now-container ">
                <button className="shop-now2" onClick={() => handleAddToCart(product)}>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
       <button onClick={handleClick} className="shop-now3" style={{fontSize:20, marginBottom:20}}>
          Show More ➯
        </button>
    </div>
    </>
  );
}

export default Home;
