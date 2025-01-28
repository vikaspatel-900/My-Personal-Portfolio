import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Project.css";

function PauseOnHover() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };
  return (
    <div className="slider-container">
      <div className="project-heading">
        <h2>Latest project</h2>
      </div>
      <Slider {...settings} className="slider">
        <div className="slider-div">
          <div class="overlay">
            <a className="project-link" href="https://github.com/ARHUMUGHAL/Simply">
              <i className="bi bi-github" title="github"></i>
            </a>
            <div class="tool-github">
              <p>Github</p>
            </div>
            <a href="https://arhumughal.github.io/Simply/">
              <i class="bi bi-arrow-up-right-circle-fill"></i>
            </a>
            <div class="tool-livedemo">
              <p>Live Demo</p>
            </div>
          </div>

          <img src="../assets/card 1.jpg" />
        </div>

        <div className="slider-div">
          <div class="overlay">
            <a href="https://github.com/ARHUMUGHAL/Simply">
              <i className="bi bi-github" title="github"></i>
            </a>
            <div class="tool-github">
              <p>Github</p>
            </div>
            <a href="https://arhumughal.github.io/Simply/">
              <i class="bi bi-arrow-up-right-circle-fill"></i>
            </a>
            <div class="tool-livedemo">
              <p>Live Demo</p>
            </div>
          </div>

          <img src="../assets/card 2.jpg" />
        </div>

        <div className="slider-div">
          <div class="overlay">
            <a href="https://github.com/ARHUMUGHAL/Simply">
              <i className="bi bi-github" title="github"></i>
            </a>
            <div class="tool-github">
              <p>Github</p>
            </div>
            <a href="https://arhumughal.github.io/Simply/">
              <i class="bi bi-arrow-up-right-circle-fill"></i>
            </a>
            <div class="tool-livedemo">
              <p>Live Demo</p>
            </div>
          </div>

          <img src="../assets/card 3.png" />
        </div>

        <div className="slider-div">
          <div class="overlay">
            <a href="https://github.com/ARHUMUGHAL/Simply">
              <i className="bi bi-github" title="github"></i>
            </a>
            <div class="tool-github">
              <p>Github</p>
            </div>
            <a href="https://arhumughal.github.io/Simply/">
              <i class="bi bi-arrow-up-right-circle-fill"></i>
            </a>
            <div class="tool-livedemo">
              <p>Live Demo</p>
            </div>
          </div>

          <img src="../assets/card 4.png" />
        </div>

        <div className="slider-div">
          <div class="overlay">
            <a href="https://github.com/ARHUMUGHAL/Simply">
              <i className="bi bi-github" title="github"></i>
            </a>
            <div class="tool-github">
              <p>Github</p>
            </div>
            <a href="https://arhumughal.github.io/Simply/">
              <i class="bi bi-arrow-up-right-circle-fill"></i>
            </a>
            <div class="tool-livedemo">
              <p>Live Demo</p>
            </div>
          </div>

          <img src="../assets/card 5.png" />
        </div>

        <div className="slider-div">
          <div class="overlay">
            <a href="https://github.com/ARHUMUGHAL/Simply">
              <i className="bi bi-github" title="github"></i>
            </a>
            <div class="tool-github">
              <p>Github</p>
            </div>
            <a href="https://arhumughal.github.io/Simply/">
              <i class="bi bi-arrow-up-right-circle-fill"></i>
            </a>
            <div class="tool-livedemo">
              <p>Live Demo</p>
            </div>
          </div>

          <img src="../assets/card 7.png" />
        </div>
      </Slider>
    </div>
  );
}

export default PauseOnHover;
