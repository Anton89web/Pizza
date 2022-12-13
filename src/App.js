import './App.css';
import NavHeader from "./Components/NavHeader";
import Pizza from "./Pages/Pizza";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Menu from "./Pages/Menu";
import Main from "./Pages/Main";
import NoFound from "./Pages/404";
import PizzasMenu from "./Components/Menu/PizzasMenu";
import SliceMenu from "./Components/Menu/SliceMenu";
import RollsMenu from "./Components/Menu/RollsMenu";
import DrinksMenu from "./Components/Menu/DrinksMenu";
import SaucesMenu from "./Components/Menu/SaucesMenu";
import React from "react";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavHeader/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="menu" element={<Menu/>}>
            <Route path="pizzas" element={<PizzasMenu/>}/>
            <Route path="pizza-slice" element={<SliceMenu/>}/>
            <Route path="pizza-rolls" element={<RollsMenu/>}/>
            <Route path="drinks" element={<DrinksMenu/>}/>
            <Route path="sauces" element={<SaucesMenu/>}/>
          </Route>
          <Route path="pizza" element={<Pizza/>}/>
          <Route path="blog" element={<Blog/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contacts" element={<Contact/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="*" element={<NoFound/>}/>

        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
