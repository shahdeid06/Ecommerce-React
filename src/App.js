import { Route , Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar></Navbar>
  
      <Routes> 
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='products' element={<Products></Products>}></Route>
        <Route path='/productdetails/:id' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route> 
      </Routes>
  
      <Footer></Footer>

    </>
  );
}

export default App;
