import React, {useState,useEffect} from 'react';
import './App.css';

import Footer from './component/Footer';

import Navbar from './component/Navbar';
import { Switch, Route } from 'react-router-dom';
import { Home } from './Pages';
import Menu from './Pages/menu';
import About from './Pages/about';
import { Dropdown } from './component/Dropdown';
import Contact from './Pages/contact';
  

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });
  return (
    <>
       <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
        <Switch>
          <Route path="/" exact component ={Home} />
          <Route path="/menu" exact component ={Menu} />
          <Route path="/about" exact component ={About} />
          <Route path="/contact" exact component ={Contact} />
        
        </Switch>
        <Footer/>
    </>
  );
}

export default App;
