import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Home from '..pages/Home';
import Home from "../pages/Home";
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import ShopAll from '../pages/ShopAll';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { CartProvider } from 'react-use-cart';






const AppRouter = () => {
  return (
    <BrowserRouter>
    <CartProvider>
    <Nav/>
    <Switch>
      <Route path="/" exact component={Home}></Route>
        <Route path="/shop" component={ShopAll} ></Route>
        <Route path="/blog" component={Blog} ></Route>
        <Route path="/contact" component={Contact} ></Route>
    </Switch>
    <Footer/>
    </CartProvider>
    </BrowserRouter>
  )
}

export default AppRouter;