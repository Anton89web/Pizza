import './App.css';
import NavMenu from "./Components/NavMenu";
import Pizza from "./Pages/Pizza";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Menu from "./Pages/Menu";
import Main from "./Pages/Main";


function App() {
  return (
    <Router>
      <div className="App">
        <NavMenu/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/pizza" element={<Pizza/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contacts" element={<Contact/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
