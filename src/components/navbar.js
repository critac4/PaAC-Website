import React from "react"
import "../../styles/home.css"
import paaclogo from "../../static/images/paaclogo.png"
export default function NavBar(){
    return <div>
      <nav>
      <a href="/"><img src={paaclogo}/></a>
        <div className="nav-links">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Our Instruments</a></li>
            <li><a href="">Events</a></li>
            <li><a href="">Astrophotography</a></li>
            <li><a href="">Contact Us</a></li>
          </ul>
        </div>
      </nav>
    </div>
}
