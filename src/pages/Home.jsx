import { Link, useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";



function Home() {
  const navigate= useNavigate();
  const handleClick =()=>{
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

useEffect(() => {
  const elements = document.querySelectorAll(".fade-in-left");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // عشان يشتغل مرة بس
      }
    });
  }, { threshold: 0.2 });

  elements.forEach((el) => observer.observe(el));
}, []);


  if (loading) return <h1 className="p-6 text-success">Loading...</h1>;
  if (error) return <h1 className="p-6 text-danger">{error}</h1>;



  return ( 
<div className="home-bg text-black " style={{marginTop:'1750px',marginBottom:'1650px'}} >
  <div className="container">
    <section className="text-center mb-5">
      <h1 className="display-6">Welcome To Our Website</h1>
      <p className="mt-3 px-2">We offer a wide collection...</p>

      <div className="d-flex justify-content-center gap-3 mt-3 flex-wrap">
        <div><i className="bi bi-star-fill text-pink"></i> Top Brands</div>
        <div><i className="bi bi-gem text-pink me-2"></i> High Quality</div>
        <div><i className="bi bi-truck text-pink me-2"></i> Free Delivery</div>
      </div>
      <button onClick={handleClick} className="btn btn-lg mt-4 rounded-5 my-btn" style={{ backgroundColor: '#4b4023', color: 'white' }}>
        Shop Now
      </button>
    </section>
    <section className="products mb-5" style={{marginBottom:'1750px'}}>
      <h2 className="text-center mb-4">Products</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="product-card h-100 shadow-lg p-3">
              <Link to={`/productdetails/${product.id}`} className="text-decoration-none text-dark">
                <img src={product.image} className="card-img-top p-3" alt={product.title} style={{ height: '300px', objectFit: 'contain' }} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text fw-bold">${product.price}</p>
                </div>
              </Link>
              <div className="bg-btn rounded text-center">
                <button className="btn" onClick={() => handleAddToCart(product)}>Add To Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
</div>


    
 
  )
}

export default Home;
