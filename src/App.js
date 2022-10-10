import React from "react";
import Navbar from "./components/Navbar";
import "./App.css"
import Home from "./components/pages/Home";
import { Routes, Route } from "react-router-dom";
import Services from './components/pages/Services'
import Products from './components/pages/Products'
import SignUp from './components/pages/SignUp'
import CardItem from "./components/CardItem";
import HeroSection from "./components/HeroSection";
import Cards from "./components/Cards";
import { Button } from "./components/Button";
import Footer from "./components/Footer"




function App() {
  return (
    <>
        <Navbar />
        <CardItem />
        <HeroSection />
        <Cards />
        <Button />
        <Footer />
        <Routes>
         <Route path="/" exact component={Home}/>
         <Route path="/services" component={Services}/>
         <Route path="/products" component={Products}/>
         <Route path="/sign-up" component={SignUp}/>
        </Routes>
      </>
  )
}

export default App;