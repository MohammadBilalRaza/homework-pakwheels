import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import React from 'react';
import Image from 'next/image';
import './AutoStore.css';
import Footer from "../components/Footer/Footer";

const AutoStore = () => {
  return (
    <div>
     <Navbar/>
     <a href="Home"></a>
     <a href="UsedCar"></a>
     <a href="NewCar"></a>
     <a href="Bikes"></a>

    <div className="AutoStore">
      <h1>Auto Store</h1>
      <li>Honda Civic</li>
      < Image src="/Civic.png" alt="Honda Civic" width = {400} height = {400}/>
      <li>Toyota Corolla</li>
      <Image src="/Corolla.jpeg" alt="Toyota Corolla" width = {400} height = {400}/>
      <li>Honda City</li>
      < Image  src="/City.png" alt="Honda City" width = {400} height = {400} />
      <li>Toyota Prius</li>
      < Image src="/Prius.jpeg" alt="Toyota Prius" width = {400} height = {400}/>
      <li>Honda CG-125</li>
      <Image src="/CG-125.jpg" alt="Honda CG-125" width = {400} height = {400}/>
       
    </div>
    <Footer/> 
    </div>
  );
};

export default AutoStore;