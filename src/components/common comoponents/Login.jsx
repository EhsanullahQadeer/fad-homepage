import React from "react";
import "./login.css";
import EyePassword from "./EyePassword";
import img from "../../assets/images/authentication.svg";

export default function Login({ setPage }) {
  return (
    <div id="registration-login" className=" row rGa30 ">
    <div className="col-lg-5">
      <div className="text-center">
        <p>
          Don't have an account yet?{" "}
          <span
            onClick={() => setPage("sign up")}
            className="cl0fcb02 cur-pointer undLine"
          >
            Sign Up
          </span>
        </p>
      </div>
      <form>
        <div className="form-group ">
          <label htmlFor="acType">Login As</label>
          <select className="form-control brd94D7D3" id="acType" required>
            <option value="">Choose Account Type</option>
            <option value="doctor">Doctors, Lawyers & PhDs</option>
            <option value="patient">Patient / Client</option>
            <option value="hospital">Hospitals / Association</option>
          </select>
          <label className="mt-3" htmlFor="loginEmail">
            Email/Username
          </label>
          <input
            className="form-control brd94D7D3"
            type="text"
            id="loginEmail"
            name="loginEmail"
            placeholder="Email Address"
            required
          />
          <div className="mt-3">
            <EyePassword
              name="password"
              label="Password"
              placeholder="Password"
              eye={true}
            />
          </div>

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
          <button className="loginBtn mt-3 bdr">Log In</button>
          <div className="d-flex align-items-center justify-content-center my-4">
            <div className="LoginOR border-top flex-grow-1 "></div>
            <span className="mx-3 font-weight-bold ">OR</span>
            <div className="LoginOR border-top flex-grow-1"></div>
          </div>
        </div>
      </form>
      <form>
        <h2 className="text-center">Forgot Password</h2>
        <label className="mt-3" htmlFor="forgetEmail">
          Email/Username
        </label>
        <input
          className="form-control brd94D7D3"
          type="text"
          id="forgetEmail"
          name="forgetEmail"
          placeholder="Email Address"
          required
        />
        <button className="loginBtn mt-4 bdr">Submit</button>
      </form>
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
