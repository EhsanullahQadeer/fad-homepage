import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <div className="footer-main pt-5">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col">
            <article className="pb-4">
              <div className="font-15">
                {" "}
                Foralldoctors.com has a valid certificate issued by a trusted
                authority.
              </div>
              <div className="font-15">
                The page you are viewing was encrypted before being transmitted
                over the internet.
              </div>
              <div className="font-15">
                Encryption makes it difficult for unauthorized people to view
                information traveling between computers. It is therefore
                unlikely that anyone read this page as it traveled across the
                network.
              </div>
              <p></p>
            </article>
            <div className="lock-box d-flex">
              <span>
                <img
                  className="img-fluid d-block footerIcons"
                  alt="Lock Icon"
                  src="https://pas1.foralldoctors.com/themecomp/images/lock-icon-green.png"
                />
              </span>
              <span className="mx-2">
                This site works only in browsers with SNI support.
              </span>
            </div>
            <div
              className="lock-box d-flex my-3"
              //   style="align-items:center;color:white;"
            >
              <span>
                <div className="img-fluid d-block footerIcons"></div>
              </span>
              <span className="ml-3">
                The validity of the certificate issued by the trusted authority
                to ForAllDoctors.com can be verified on the browser link address
                bar.
              </span>
            </div>
            <div
              className="tls-box d-flex my-2"
              //   style="align-items:center;color:white;"
            >
              <span>
                <img
                  width="43"
                  className="img-fluid d-block footerIcons"
                  alt="SSL Icon"
                  src="https://pas1.foralldoctors.com/themecomp/images/ssl-shield-green.png"
                />
              </span>
              <span className="mx-2">This server supports TLS 1.3.</span>
            </div>
          </div>
          <div className="col-md-auto quickLinkSection">
            <section className="">
              <div className="container quickLinks">
                <h5 className="">Quick Links</h5>
                {/* style="white" */}
                <ul type="none" className="flex-wrap quickLinksItems">
                  <li>
                    <a href="#AboutUsPage">ABOUT Us</a>
                  </li>
                  <li>
                    <a href="#SERVICESECTION">OUR SERVICES</a>
                  </li>
                  <li>
                    <a href="https://pas1.foralldoctors.com/home/contact">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="https://pas1.foralldoctors.com/home/terms">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="https://pas1.foralldoctors.com/home/privacy">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="https://pas1.foralldoctors.com/sitemap">
                      Site Map
                    </a>
                  </li>
                </ul>
              </div>
            </section>
            {/*  </div>
           <div className="contactuslinks col col-lg-2">
      <h4> Contact Us</h4>
      <div>Mailing Address:xx00 E. Union Ave</div>
      <div>Suite 1100. Denver, CO 80237</div>
      <div>+999 90932 627</div>
      <div>support@yourdomain.com</div>
      <div className='my-2 socialFooterBox'>
        <span className="socialFooterIcon" ><img src="https://pas1.foralldoctors.com/themecomp/images/icons/twitter.svg" alt="" /></span>
        <span className="socialFooterIcon" style="padding: 3px 12px;" ><img src="https://pas1.foralldoctors.com/themecomp/images/icons/facebook.svg" alt="" /></span>
        <span className="socialFooterIcon" ><img src="https://pas1.foralldoctors.com/themecomp/images/icons/instagram.svg" alt="" /></span>
        <span className="socialFooterIcon" ><img src="https://pas1.foralldoctors.com/themecomp/images/icons/pinterest.svg" alt="" /></span>
      </div>*/}
          </div>
        </div>
      </div>

      <div className=" mt-2 p-2 CopyRightBox ">
        <div className="container LeastFooterSection d-flex justify-content-between align-items-center">
        <div className="row">
          <p className="text-center col-md-7 col-lg-8 cfff">
            Copyright © 2023 For All Doctors Inc. All Rights Reserved. Other
            products or services may be trademarks and copyrights of their
            respective companies. Beta Version. Patent filed.
          </p>
          <div className="col-md-5 col-lg-4 ">
            <div className="d-flex align-items-center justify-content-lg-end justify-content-center">
              <div className="certificate-icons-item d-flex  ssl-secured">
                <div className="icon bg-dark p-2 rounded-left">
                  <img
                    width="24"
                    className="img-fluid d-block"
                    alt="SSL Secured"
                    src="https://pas1.foralldoctors.com/themecomp/images/lock-icon.png"
                  />
                </div>
                <div className="pe-none text d-flex justify-content-center bg-white rounded-right flex-column   px-4 c000 fa-nun">
                  <span>AES 256-BIT</span>
                  <span>SSL SECURED</span>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
