import React from "react"
import "../../styles/home.css"
import NavBar from "../components/navbar"
export default function Home() {
  return <div>
        <section className="header">
          <NavBar></NavBar>
      <div className="text-box">
        <h1>Physics and Astronomy Club</h1>
        <p>IIT Roorkee</p>
      </div>
    </section>

  </div>
}
