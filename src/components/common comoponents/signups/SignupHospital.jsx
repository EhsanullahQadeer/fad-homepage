import React,{useState }from "react";
import EyePassword from "../EyePassword";
import ReCAPTCHA from "react-google-recaptcha";
export default function SignupHospital() {
  const [data,setData]=useState();
  function handleChange(e){
    setData((pre)=>({
       ...pre,[e.target.name]:e.target.value
    }))
  }
  return (
    <div className="signup-hospital">
      <form>
        <div className="form-group ">
          <label htmlFor="hospitalNameInput">
            Name of Hospital <span className="text-danger">*</span>
          </label>
          <input
            className="form-control brd94D7D3"
            type="text"
            id="hospitalNameInput"
            name="hospitalName"
            placeholder="Enter Name of Hospital"
            required
          />

          <label className="mt-3" htmlFor="hospitalUsernameInput">
            Username of Hospital Representative{" "}
            <span className="text-danger">*</span>
          </label>
          <input
            className="form-control brd94D7D3"
            type="text"
            id="hospitalUsernameInput"
            name="UserName"
            placeholder="Enter Username of Hospital Representative"
            required
          />
          <label className="mt-3" htmlFor="hospitalEmailInput">
            Representative Email <span className="text-danger">*</span>
          </label>
          <input
            className="form-control brd94D7D3 mb-3"
            type="email"
            id="hospitalEmailInput"
            name="email"
            placeholder="Enter Email"
            required
          />
          <label htmlFor="signupHospitalPhNO">
            Hospital Phone Number <span className="text-danger">*</span>
          </label>
          <input
            className="form-control brd94D7D3"
            type="text"
            id="signupHospitalPhNO"
            name="phoneNumberr"
            placeholder="Enter PhoneNumber"
            required
          />

          <div className="mt-3">
            <EyePassword
              name="password"
              id="hosptailPassword"
              placeholder={"Password"}
              label="Password"
              imp={true}
              handleChange={handleChange}
            />
          </div>
         {data?.password&&<div className="mt-3">
            <EyePassword
              name="confirmPassword"
              id="confirmHosptailPassword"
              placeholder={"Confirm Password"}
              label="Confirm Password"
              imp={true}
            />
          </div>}
          <ReCAPTCHA sitekey="YOUR_RECAPTCHA_API_KEY" />
          <div className="form-check mt-3 text-center">
            <input
              className="form-check-input"
              type="checkbox"
              id="loginCheck"
            />
            <label className="form-check-label" htmlFor="loginCheck">
              I agree to the
            </label>
            <label className="cl0fcb02 cur-pointer">Terms of Service</label>{" "}
            <label className="form-check-label" htmlFor="loginCheck">
              and
            </label>{" "}
            <label className="cl0fcb02 cur-pointer">Privacy Policy</label>.
          </div>
          <button
            type="submit"
            className="loginBtn mt-3 bdr font-weight-bold fa-lg"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
