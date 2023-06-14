import React from "react";
import img from "../../assets/images/picWhocando.svg";
import { joinData } from "./data";

import ServicesCards from "./ServicesCards";
export default function Join() {
  
  return (
    <div className="join-main mb-4">
      <div className="container">
        <div className="text-center">
          <h2 className="mb-4">Who can join?</h2>
          <p className="mx-auto">
            ForAllDoctors.com is a private, secure and Free Professional and
            Social Networking website for medical, legal and Ph.D. professionals
            worldwide.
          </p>
        </div>

        <div className="row align-items-center mt-5">
          <div className="joinCard-main col-lg-7">
          {joinData.map((data)=>{
            return(
                <div className="mb-4">
                <ServicesCards 
                    title={data?.title}
                    desc={data?.desc}
                    src={data?.src}
                    join={true}
                />
                </div>
            )
          })}
          </div>
          <div className="joinImg col-lg-5">
            <img className="img-fluid d-none d-lg-block" src={img} alt="banner" />
          </div>
        </div>
      </div>
    </div>
  );
}
