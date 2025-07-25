import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

function ProductDetails() {
  const navigate = useNavigate();
  const {id} = useParams();
  const [products , setProducts] = useState(null);
  const [loading , setLoading] = useState(true);
  const [error , setError] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        console.log('product id:' , id);
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("ERROR");
        setLoading(false);
      });
  }, [id]);
  if(!products) return <h1 className="p-6 text-success">Loading...</h1>;
  if (loading) return <h1 className="p-6 text-success">Loading...</h1>;
  if (error) return <h1 className="p-6 text-danger">{error}</h1>;

  return (
    <div className="bgd-color">
      
      <h2 className="text-center">{products.title}</h2>
      <img src={products.image} className="card-img-top p-3" alt={products.title} style={{ height: '300px', objectFit: 'contain' }}/>
      <h4 className="text-center">Price: {products.price}</h4>
      <p className="text-center"><h5> Description:</h5> {products.description}</p>
      <div className="text-center mt-4 ">
      <button className="back-btn px-4 rounded-pill fw-bold border-bold" onClick={()=> navigate('/products')}>🔙 Back to Products</button>
      </div>
    </div>
  )
}

export default ProductDetails;
