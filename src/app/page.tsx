import React from 'react';
import dynamic from 'next/dynamic';
import Script from 'next/script';
import Banner from '../components/banner.js';
import PdSlider from '../components/pdSlider';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
      <section id="home-banner" className="w-100">
        <div className="z-10 w-full items-center justify-between font-mono text-sm lg:block">
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <Banner />
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
      <section id="about-us">
        <div className="container">
          <div className="row">
            <div className="col-6 about-img">
            </div>
            <div className="col-6 content">
              <h2>About us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas quis ipsum suspendisse ultrices gravida dictum. Hac habitasse platea dictumst quisque. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Scelerisque felis imperdiet proin fermentum. Tellus at urna condimentum mattis pellentesque id nibh tortor. Quis blandit turpis cursus in hac habitasse platea dictumst quisque. Velit laoreet id donec ultrices. Pellentesque diam volutpat commodo sed. Ut porttitor leo a diam sollicitudin tempor. Mi proin sed libero enim. Accumsan lacus vel facilisis volutpat est velit. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Libero id faucibus nisl tincidunt. Condimentum vitae sapien pellentesque habitant. Faucibus a pellentesque sit amet porttitor eget dolor. Etiam sit amet nisl purus in mollis nunc sed. Quisque egestas diam in arcu cursus euismod quis viverra nibh.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="slider-products">
        <div className='container align-center text-center'>
          <h2>Online Shop</h2><br />
          <PdSlider />
        </div>
      </section>
    </>
  );
}