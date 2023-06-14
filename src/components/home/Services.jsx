import React from "react";
import ServicesCards from "./ServicesCards";
import { serviceData } from "./data";
export default function Services() {
  return (
    <div id="services" className="hm-services-main py-5">
      <div className=" container">
        <div className="services-header">
          <h2 className="mb-4">Our Core Services</h2>
          <p className="mb-4">
            Welcome to ForAllDoctors.com, the most extensive, secure, private,
            and free professional and social networking website of its kind for
            Medical, Legal and PhD professionals; providing a secure and
            exclusive space where you can enjoy a world of FREE features.
          </p>
          <button className="bdr">Join For Free</button>
        </div>

        <div className="mt-5 serv-cards-main row justify-content-center justify-content-lg-between">
          {serviceData.map((data, i) => {
            return (
              <>
                {data.bannerSrc ? (
                  <div className="col-lg-12 mt-4">
                    <img
                      src={data?.bannerSrc}
                      alt="banner"
                      className="img-fluid bg-white w-100 serviceBannerImg"
                    />
                  </div>
                ) : (
                  <ServicesCards
                    title={data?.title}
                    desc={data?.desc}
                    src={data?.src}
                  />
                )}
              </>
            );
          })}
        </div>
        <div className="text-center mt-4">
        <button className="serv-moreBtn bdr">More</button>
        </div>
      </div>
    </div>
  );
}
