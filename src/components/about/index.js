import React from "react";
import './about.css';
import NavBar from "../navbar";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function About () {
    return (
        <>
        <section className="about">
          <NavBar></NavBar>
          <div className="about">
            <div class="max-width">
              <div class="carousel3 owl-carousel">
                <div class="card">
                  <div class="box">
                    <img src="../../assets/members/18311006.jpeg"/>
                    <div class="text">Someone name</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </div>
                <div class="card">
                  <div class="box">
                    <img src="../../src/assets/members/18311006.jpeg"/>
                    <div class="text">Someone name</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </div>
                <div class="card">
                  <div class="box">
                    <img src="../../src/assets/members/18311006.jpeg"/>
                    <div class="text">Someone name</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </div>
              </div>
              <div class="carousel3 owl-carousel">
                <div class="card">
                  <div class="box">
                    <div class="text">Someone name</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </div>
                <div class="card">
                  <div class="box">
                    
                    <div class="text">Someone name</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </section>
    </>
    )
}

export default About;