import React from "react";
import "./contact.css";
export default function ContactUsForm() {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };
  function changesection(value) {
    // Handle the logic based on the selected value
    console.log("Selected value:", value);
  }
  return (
    <div className="contactus contactUs-main py-5">
      <div className="container">
        <div className="text-center">
          <h2>Contact Us</h2>
          <p>Any questions or remarks? Just write us a message!</p>
        </div>

        <div className="contactus-wrapper">
          <form
            className="contactus-form"
            id="contact_form"
            name="contact"
            method="POST"
            onSubmit={handleFormSubmit}
          >
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <label className="form-label" htmlFor="section">
                    Please choose your subject
                  </label>
                  <select
                    required
                    className="form-control w-100"
                    name="section"
                    id="section"
                    onChange={(e) => changesection(e.target.value)}
                  >
                    <option data-display="Please select" selected="">
                      Please select
                    </option>
                    <option value="I need login and account support">
                      I need login and account support
                    </option>
                    <option value="I want to report abusive behavior or sensitive content">
                      I want to report abusive behavior or sensitive content
                    </option>
                    <option value="I want to report an intellectual property issue">
                      I want to report an intellectual property issue
                    </option>
                    <option value="Other">None of the above.</option>
                  </select>
                </div>
              </div>
              <div className="col-12" id="abusediv" style={{ display: "none" }}>
                <div className="form-group">
                  <label
                    className="form-label"
                    htmlFor="contactusSensitiveContent"
                  >
                    I want to report abusive behavior or sensitive content
                  </label>
                  <select
                    required
                    className="form-control w-100"
                    name="sub_abuse_supp"
                    id="contactusSensitiveContent"
                  >
                    <option value="I want to report harassment or abuse">
                      I want to report harassment or abuse
                    </option>
                    <option value="I want to report impersonation">
                      I want to report impersonation
                    </option>
                    <option value="I want to report private information being posted">
                      I want to report private information being posted
                    </option>
                    <option value="I want to report self-harm">
                      I want to report self-harm
                    </option>
                    <option value="I want to report an offensive ad">
                      I want to report an offensive ad
                    </option>
                    <option value="I want to report an offensive content">
                      I want to report an offensive content
                    </option>
                    <option value="I want to report spam">
                      I want to report spam
                    </option>
                  </select>
                </div>
              </div>
              <div
                className="col-12"
                id="inteldiv"
                style={{ display: "block" }}
              >
                <div className="form-group">
                  <label
                    className="form-label"
                    htmlFor="contactusPropertyIssue"
                  >
                    I want to report an intellectual property issue
                  </label>
                  <select
                    required
                    className="form-control w-100"
                    name="sub_intel_supp"
                    id="contactusPropertyIssue"
                  >
                    <option data-display="Please Select">Please select</option>
                    <option value="I want to report a trademark infringement">
                      I want to report a trademark infringement
                    </option>
                    <option value="I want to report a copyright infringement">
                      I want to report a copyright infringement
                    </option>
                    <option value="I want to report counterfeit goods">
                      I want to report counterfeit goods
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder="Your name"
                    required
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label className="form-label" htmlFor="contact_email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="contact_email"
                    className="form-control"
                    placeholder="Your contact email address"
                    required
                  />
                  <span id="email_result"></span>
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label className="form-label" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    name="message"
                    id="message"
                    placeholder="Your message"
                    rows="7"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  
                  {/*  */}
                </div>
              </div>
              <div className="col-12">
                <div className="form-group mb-0 d-flex justify-content-center justify-content-md-end">
                  <button
                    type="submit"
                    className="contactus-form-button"
                    id="updatedoctors33"
                    name="loginStatus"
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
