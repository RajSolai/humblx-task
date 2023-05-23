/* eslint-disable react/prop-types */
import React from "react";
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Carousel = ({ images }) => {
  return (
    <>
      <ReactOwlCarousel
        className="owl-theme"
        items={"1"}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img className="responsive-image" src={image} alt="Image 1" />
          </div>
        ))}
      </ReactOwlCarousel>
    </>
  );
};

export default Carousel;
