import React, { useState } from "react";
import EyePassword from "../EyePassword";
import ReCAPTCHA from "react-google-recaptcha";
export default function SignupDocLawPhd() {
  const [data, setData] = useState();
  function handleChange(e) {
    setData((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  }
  return (
    <div className="signup-doclawphd-main">
      <form>
        <div className="form-group ">
          <label htmlFor="profession">Select Profession</label>
          <select className="form-control brd94D7D3" id="profession" required>
            <option value="">Select</option>
            <option value="1">Chiropractor</option>
            <option value="2">Dentist</option>
            <option value="3">Doctor (Physician, MD or Equivalent)</option>
            <option value="4">Hospitals</option>
            <option value="5">Lawyer (Attorney or Equivalent)</option>
            <option value="6">Optometrist</option>
            <option value="7">Pharmacist</option>
            <option value="8">PhD</option>
            <option value="9">Podiatrist</option>
            <option value="10">Veterinarian</option>
          </select>
          <label className="mt-3" htmlFor="docsignupEmail">
            Email
          </label>
          <input
            className="form-control brd94D7D3"
            type="email"
            id="docsignupEmail"
            name="docsignupEmail"
            placeholder="Email Address"
            required
          />
          <label className="mt-3" htmlFor="signUpUsername">
            Username
          </label>
          <input
            className="form-control brd94D7D3 mb-3"
            type="text"
            id="signUpUsername"
            name="signUpUsername"
            placeholder="Please Choose Your Username"
            required
          />
          <label htmlFor="signUpReferralID">Enter Referral ID (Optional)</label>
          <input
            className="form-control brd94D7D3 mb-3"
            type="text"
            id="signUpReferralID"
            name="signUpReferralID"
            placeholder="Enter Refrral ID if Any"
            required
          />
          <div className="mt-3">
            <EyePassword
              name="password"
              id="docSignupPass"
              label="Password"
              placeholder="Password"
              handleChange={handleChange}
            />
          </div>
          {data?.password && (
            <div className="mt-3">
              <EyePassword
                name="docSignupPass"
                id="docSignupPass"
                label="Confirm Password"
                placeholder="Confirm Password"
              />
            </div>
          )}

          <ReCAPTCHA sitekey="YOUR_RECAPTCHA_API_KEY" />
          <div className="form-check mt-3 ">
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
          <button className="loginBtn mt-3 bdr font-weight-bold fa-lg">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
