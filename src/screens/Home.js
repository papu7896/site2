import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cart from '../components/Cart'
import Carosoul from '../components/Carosoul'
import Founder from '../components/Founder'



export default function Home() {
  return (
    <div>
      <div><Navbar /></div>
      <div><Carosoul/></div>
      <div><Cart/></div>
      <div><Founder/></div>
      
      
    </div>
  )
}
