import React from "react";
import {Link} from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import { IconButton } from "@mui/material";
import Faqs from "../components/common comoponents/Faqs";
import "./index.css";
export default function Faq() {
  return (
    <div className="Faq-page-main pb-4">
      <div className="container pb-5">
        <div className="faqPage-header d-flex justify-content-between py-4 align-items-center">
           <h2></h2>
          <h2>FAQ</h2>
          <Link to="/">
          <IconButton>
            <ClearIcon style={{fontSize:"45px"}}/>
          </IconButton>
          </Link>
        </div>
        <Faqs className="my-3" />
      </div>
    </div>
  );
}
