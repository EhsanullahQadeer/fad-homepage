import React from "react";
import "./home.css";
export default function Hero() {
  return (
    <div className="home-heroMain py-5">
      <div  className="container ">
        <div className="row heroCard-mn justify-content-center justify-content-lg-between">

          <div className="col-lg-4">
          <div className="heroCard w-100 pt-3 pb-4  px-2">
            <h3>For <br /> Doctors, Lawyers & PhDs Only</h3>
            <button className="hero-learnMore-btn mt-2 bdr">Learn More</button>
            </div>
          </div>

          <div className="col-lg-4">
          <div className="heroCard w-100 pt-3 pb-4 px-2">
            <h3>Posted By <br /> Doctors, Lawyers & PhDs Only</h3>
            <button className="hero-learnMore-btn mt-2 bdr">Learn More</button>
            </div>
          </div>

          <div className="col-lg-4">
          <div className="heroCard w-100 pt-3 pb-4 px-2">
            <h3>Viewed By <br /> Doctors, Lawyers & PhDs Only</h3>
            <button className="hero-learnMore-btn mt-2 bdr">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
