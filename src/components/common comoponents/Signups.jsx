import React, { useState } from "react";
import "./signups.css";
import "./login.css";
import SignupDocLawPhd from "./signups/SignupDocLawPhd";
import SignupHospital from "./signups/SignupHospital";
import img from "../../assets/images/authentication.svg";


export default function Signups({setPage}) {
  const [signupType, setSignupType] = useState(1);
  return (
    <div id="registration-signup" className="row rGa30 ">
    <div className="col-lg-5">
    <div className="signups-main">
      <div className="signups-head text-center">
        <h2 className="mb-3">Quick Registration</h2>
        <p className="fa-sm opacity-75 mb-3">Doctors, Lawyers and PhDs only</p>
        <p>
          Already A Member?{" "}
          <span onClick={()=>{setPage("log in")}} className="cur-pointer cl0fcb02">
            Log In
          </span>
        </p>
        <div className="form-group text-start mt-5">
          <label htmlFor="signupAs">Select Sign Up As</label>
          <select
            className="form-control brd94D7D3 mb-3"
            id="signupAs"
            required
            onChange={(e) => setSignupType(e.target.value)}
          >
            <option value="">Choose Sign Up Type</option>
            <option selected value={1}>
              Sign Up Doctors, Lawyers & PhDs
            </option>
            <option value={2}>Sign Up For Hospitals / Association</option>
          </select>
          {signupType == 1 ? (
            <SignupDocLawPhd />
          ) : (
            signupType == 2 && <SignupHospital />
          )}
        </div>
      </div>
    </div>
    </div>
    
    <div className="col-lg-7">
    <img
      src={img}
      alt="banner"
      className="img-fluid d-none d-lg-block float-right"
    />
    </div>
  </div>
  );
}
