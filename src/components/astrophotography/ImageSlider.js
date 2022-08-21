import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./astrophotography.css"
import NavBar from "../navbar";
import React from 'react'

/*function Astrophotography () {
    return (
        <>
        <section className="astrophotography">
          <NavBar></NavBar>
      		<div className="astrophotography">
      		</div>
    	</section>
        </>
    )
}

export default Astrophotography;*/

const Astrophotography = ({images}) => {

const settings = {
	infinite: true,
	dots: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	lazyLoad: true,
	autoplay: true,
autoplaySpeed: 10000,

};
return (
	<>
	<section className="astrophotography">
        <NavBar></NavBar>
    	<div className="astrophotography">
      	</div>
    </section> 
	<div className="tag">
		<h1>Image Gallery</h1>
	</div>
	<div className="imgslider">
		<Slider {...settings}>
		{images.map((item) => (
			<div key={item.id}>
			<img src={item.src} alt={item.alt} />
			</div>
		))}
		</Slider>
	</div>
		</>
)
}
export default Astrophotography;
