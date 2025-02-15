import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Project.css";

function Project() {

  return (
    <div className="slider-container" id="projects">

      <div className="project-heading">
        <h2>Latest Project</h2>
      </div>

      <div className="dynamic-project">
        <div>
          <img src="/assets/employee-management.png" alt="" />
        </div>
        <div>
          <img src="/assets/task-management.jpg" alt="" />
        </div>
        <div>
          <img src="/assets/vision care.webp" alt="" />
        </div>
        <div>
          <img src="/assets/Sass-landing-page.png" alt=""/>
        </div>
        
      </div>
      <div className="project-heading">
        <h2>Website Desigen</h2>
      </div>
      <div className="slider">
        <div className="slider-div">
          <div class="overlay">
            <a className="project-link" href="https://github.com/vikaspatel-900/Furniture-web-desigen.git">
              <i className="bi bi-github" title="github"></i>
            </a>
            <div class="tool-github">
              <p>Github</p>
            </div>
            <a href="https://charming-llama-3887de.netlify.app/">
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
            <a href="https://github.com/vikaspatel-900/Travel--website-template.git">
              <i className="bi bi-github" title="github"></i>
            </a>
            <div class="tool-github">
              <p>Github</p>
            </div>
            <a href="https://boisterous-narwhal-fb0d2b.netlify.app/">
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
            <a href="https://github.com/vikaspatel-900/Explore-new-place.git">
              <i className="bi bi-github" title="github"></i>
            </a>
            <div class="tool-github">
              <p>Github</p>
            </div>
            <a href="https://willowy-faloodeh-e167c1.netlify.app/">
              <i class="bi bi-arrow-up-right-circle-fill"></i>
            </a>
            <div class="tool-livedemo">
              <p>Live Demo</p>
            </div>
          </div>

          <img src="../assets/card 3.png" />
        </div>
      </div>
    </div>
  );
}

export default Project;
