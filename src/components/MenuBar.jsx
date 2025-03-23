
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from "./About";
import Products from "./Products";
import IconButtonWithBadge from './Cart';
import Error from './error';
import ShoppingCart from './ShoppingCart';
import "../App.css"

const MenuBar=()=>{
    return (
        <BrowserRouter>
          <nav>
            <NavLink to="/" activeClassName="active">Home </NavLink>
            <NavLink to="/products" activeClassName="active">Products  </NavLink>
            <NavLink to="/about" activeClassName="active">About  </NavLink>
            <NavLink to="/cart" activeClassName="active"> 
            <IconButtonWithBadge />
            </NavLink>
          </nav>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/about' element={<About />} />
            <Route path='/error' element={<Error />}/>
            <Route path='/cart' element={<ShoppingCart />}/>
          </Routes>
        </BrowserRouter>
      );
};
export default MenuBar;