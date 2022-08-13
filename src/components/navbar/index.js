import React from "react";
import './navbar.css'
import {Link} from "react-router-dom";
import paaclogo from '../../assets/paaclogo.png'

export default function NavBar(){
    return <div>
      <nav>
      <a href="/"><img src={paaclogo}/></a>
        <div className="nav-links">
          <ul>
            <li className="nav-item">
                <Link to="/about" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
                <Link to="/projects" className="nav-link">Projects</Link>
            </li>
            <li className="nav-item">
                <Link to="/instruments" className="nav-link">Our Instruments</Link>
            </li>
            <li className="nav-item">
                <Link to="/events" className="nav-link">Events</Link>
            </li>
            <li className="nav-item">
                <Link to="/astrophotography" className="nav-link">Astrophotography</Link>
            </li>
            <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
}
