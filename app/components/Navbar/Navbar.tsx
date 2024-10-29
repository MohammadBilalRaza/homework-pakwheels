import { useState } from "react";
import Link from "next/link";


export default function Navbar () {
   return (
    <header>
      <img src="/Logo.png" alt="Logo" />
        <nav>
        <a href="/#">Home</a>  
        <a href="/UsedCar">Used Cars</a>
        <a href="/NewCar">New Cars</a>
        <a href="/Bike">Bikes</a>
        <a href="/AutoStore">Auto Store</a>
        <a href="/Form">Book Now</a>
        <button className="nav-btn nav-close-btn">
         
        </button>
      </nav>    
      <button className="nav-btn">

      </button>
    </header>
  );
}

