import React from "react";
import DetailCard from "./DetailCard";
import { detailsData } from "./data";

export default function Details() {
  return (
    <div id="about-us">
      <div className="container text-center">
        <div className="row justify-content-center justify-content-lg-start rGa30">
          {detailsData.map((data) => {
            return (
              <>
                {data.bannerSrc ? (
                  <div className="col-lg-12">
                    <img
                      className="img-fluid serviceBannerImg"
                      src={data?.bannerSrc}
                      alt="banner"
                    />
                  </div>
                ) : (
                  <DetailCard
                    title={data?.title}
                    desc={data?.desc}
                    onClick={data?.onClick}
                  />
                )}
              </>
            );
          })}
        </div>
        <div className="my-5">
        <a href="#/" >
          <button className="QuickSignUpBtn bdr">Quick Sign Up</button>
        </a>
        </div>
      </div>
    </div>
  );
}
