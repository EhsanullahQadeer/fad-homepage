import React, { useState, useEffect } from "react";
import Login from "../common comoponents/Login";
import Signups from "../common comoponents/Signups";
import { useLocation } from "react-router-dom";

export default function Regestration() {
  const [page, setPage] = useState("sign up");

let location =useLocation();
let hash =location.hash;
let goToLogin =(hash=="#registration-login");
let gotSignUp=(hash=="#registration-signup");
console.log("login",goToLogin,"sign",gotSignUp)
useEffect(()=>{
  if(goToLogin){
    setPage("sign up")
  }else if(gotSignUp){
    setPage("log in")
  }
},[location])



  
  return (
    <div id="registration" className="login-main mb-5 ">
      <div className="container">
        <div style={{width:"200%"}} className="d-flex">
          <div
            style={{ order: page === "sign up" ? "1" : "2" }}
            className={`${page == "sign up" ? "slide-in" : "slide-out"}`}
          >
            <Signups setPage={setPage} />
          </div>

          <div
            style={{ order: page === "log in" ? "1" : "2" }}
            className={`${page == "log in" ? "slide-in" : "slide-left"}`}
          >
            <Login setPage={setPage} />
          </div>
        </div>
      </div>
    </div>
  );
}
