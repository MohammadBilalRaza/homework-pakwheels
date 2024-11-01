import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';

export default function Navbar () {
   return (
    <header>
      <Image src="/Logo.png" alt="Logo" width= {250} height= {40} />
        <nav>
        <Link href="/#">Home</Link>  
        <Link href="/UsedCar">Used Cars</Link>
        <Link href="/NewCar">New Cars</Link>
        <Link href="/Bike">Bikes</Link>
        <Link href="/AutoStore">Auto Store</Link>
        <Link href="/Form">Book Now</Link>
        <button className="nav-btn nav-close-btn">
         
        </button>
      </nav>    
      <button className="nav-btn">

      </button>
    </header>
  );
}

