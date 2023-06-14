import React from "react";

export default function DetailCard({ title, desc, onClick }) {
  return (
    <div className="detail-card-main col-lg-4">
      <div className="detail-card-bd py-5 px-3 h-100 ">
      <div>
        <h5 className="mb-4">{title}</h5>
        <p className="mb-4">
        {desc}
        </p>
        </div>
        
        <button className="DetailsBtn mx-auto">
        Details
        </button>
      </div>
      
    </div>
  );
}
