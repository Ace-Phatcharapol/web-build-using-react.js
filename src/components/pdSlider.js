'use client';
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function PdSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 1000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div>
            <img src="https://dummyimage.com/300x300/000/fff" alt="Banner" />
            <div className="overlay"></div>
            <div className="content">
              <h3>Product 1</h3>
              <p>Product description.</p>
              <button type="button" className="btn btn-primary" data-bs-toggle="button"><span className="bi-plus-square-fill"></span>Add to cart</button>
              <></>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src="https://dummyimage.com/300x300/000/fff" alt="Banner" />
            <div className="overlay"></div>
            <div className="content">
            <h3>Product 2</h3>
              <p>Product description.</p>
              <button type="button" className="btn btn-primary" data-bs-toggle="button">Add to cart</button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src="https://dummyimage.com/300x300/000/fff" alt="Banner" />
            <div className="overlay"></div>
            <div className="content">
            <h3>Product 3</h3>
              <p>Product description.</p>
              <button type="button" className="btn btn-primary" data-bs-toggle="button">Add to cart</button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src="https://dummyimage.com/300x300/000/fff" alt="Banner" />
            <div className="overlay"></div>
            <div className="content">
              <h3>Product 4</h3>
              <p>Product description.</p>
              <button type="button" className="btn btn-primary" data-bs-toggle="button">Add to cart</button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src="https://dummyimage.com/300x300/000/fff" alt="Banner" />
            <div className="overlay"></div>
            <div className="content">
              <h3>Product 5</h3>
              <p>Product description.</p>
              <button type="button" className="btn btn-primary" data-bs-toggle="button">Add to cart</button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src="https://dummyimage.com/300x300/000/fff" alt="Banner" />
            <div className="overlay"></div>
            <div className="content">
              <h3>Product 6</h3>
              <p>Product description.</p>
              <button type="button" className="btn btn-primary" data-bs-toggle="button">Add to cart</button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default PdSlider;