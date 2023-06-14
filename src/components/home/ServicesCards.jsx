import React from "react";

export default function ServicesCards({ title, desc, src ,join}) {
  return (
    <div className={`${join?"col-lg-12":"col-lg-6"}`}>
      <div className="d-flex flex-column text-center text-sm-start flex-sm-row servicesCards-mn pt-sm-5 pt-2 pb-2 pb-sm-4  px-4">
        <img className="mx-auto mb-3 mb-sm-0"  src={src} alt="icons" />
        <div className="serv-card-content ml-4">
          <h5 >{title}</h5>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}
