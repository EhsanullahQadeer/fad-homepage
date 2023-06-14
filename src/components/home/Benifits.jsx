import React from "react";
import BenifitsCard from "./BenifitsCard";
import { benfitsData } from "./data";
export default function Benifits() {
  return (
    <div className="benifits-main text-center bg-white mb-5">
      <div className="container">
        <h2 className="mb-5">Benefits</h2>

        <div className="row justify-content-center justify-content-lg-between">
          {benfitsData.map((data) => {
            return (
              <BenifitsCard
                src={data?.src}
                title={data?.title}
                desc={data?.desc}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
