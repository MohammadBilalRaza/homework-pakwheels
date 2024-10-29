import Link from "next/link";
import Navbar from "../components/navbar/Navbar"
import React from 'react';
import './NewCar.css';
import Footer from "../components/Footer/Footer";

const NewCar = () => {
  return (
    <div>
     <Navbar/>
     <a href="NewCar"></a>

     <div className="new-car">
      <h1>Honda Civic 2024 Price in Pakistan, Images, Reviews & Specs</h1>
      <img src="/Civic.png" alt="Honda Civic 2024" />
      <p>
      Honda Civic 2024 offers a blend of reliability, fuel efficiency, and comfortable driving experience.
      It's known for its spacious interior, advanced safety features, and smooth handling, making it a popular choice for daily commuting and family outings
 </p>
      <div className="price">
        <p>PKR 98,000,000</p>
        <div className="button-row">
      <button>Make Payment</button>
      <button>Request Bank Finance</button>
      <button>Visit Place</button>
      <button>Car Ispection</button>
    </div>
               
      </div>
    </div>
    <br/>
    <br/>
    <Footer/>
    </div>
    
  );
};
export default NewCar;
    