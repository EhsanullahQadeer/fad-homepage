import React from "react";
import Faqs from "../common comoponents/Faqs";
import { Link } from "react-router-dom";
export default function Faq() {
  return (
    <div id="faq-section" className="faqs-main py-5">
      <div className="container">
        <Faqs count={8} />
      </div>
      <div className="text-center mt-4 ">
        <Link to="/faq">
          <button className="faqSeemoreBtn bglinear bdr px-4 py-2 text-sm fas-sm fa-pop">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
}
