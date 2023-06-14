import React from "react";

export default function BenifitsCard({ src, title, desc }) {
  return (
    <div className="ben-card-main col-lg-4 mb-4">
      <div className="ben-card-bd px-2 py-5 h-100">
      <img className="mb-4" src={src} alt="icon" />
      <div>
        <h5 className="mb-4">{title}</h5>
        <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}
