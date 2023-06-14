import React from "react";
import img from "../../assets/images/services-providers-image.png";
import ban1 from "../../assets/images/expect-rec1.png";
import ban2 from "../../assets/images/missing-children-1.jpg";

export default function QuickSignUp() {
  return (
    <div className="quickSignup-main text-center">
      <img src={img} alt="banner" className="img-fluid" />
      <h3 className="my-4">For Quick Sign Up & Login</h3>
      <div className="d-flex justify-content-center">
        <button className="mx-3 bglinear bdr quickSignupBtns">Quick Sign Up</button>
        <button className="mx-3 bglinear bdr quickSignupBtns">Login</button>
      </div>
       <div className="container mb-3">
        <img src={ban1} alt="banner" className="img-fluid serviceBannerImg my-5" />
        <img src={ban2} alt="banner" className="img-fluid serviceBannerImg  mb-5" />

       </div>
    </div>
  );
}
