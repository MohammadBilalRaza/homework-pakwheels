// import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';

export default function Navbar () {
   return (
    <header>
      <Image src="/Logo.png" alt="Logo" width= {200} height= {40} />
        <nav>
        <Link href="/#">Home</Link>  
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

