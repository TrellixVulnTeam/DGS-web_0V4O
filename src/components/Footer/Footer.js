import React from "react";
import SocialMedia from "../SocialMedia/SocialMedia";
import imageUrl from '../Images/Website logo.png'
import "./Footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <div id="footer-wrap">
        <footer className="footer">
          <div className="top-footer">
            <div className="row">
              <div className="col-md">
                <div className="footer-logo">
                  <a href="/" title="Mercury">
                    <img
                      src={imageUrl}
                      width="72"
                      alt="Mercury-Logo"
                      className="img-fluid"
                    />
                    Daniel Games.
                  </a>
                  <p className="tagline">Games Made With Passion.</p>
                </div>
              </div>
              <div className="col-md">
                <h4>Links</h4>
                <ul className="footer-link">
                  <li>
                    <a href="/" title="Home">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/about" title="About">
                      About
                    </a>
                  </li>
                  {/* <li>
                    <a href="/news" title="News">
                      News
                    </a>
                  </li> */}
                  <li>
                    <a href="mailto:info@danielgamestudios.com"> Contact</a>
                    {/* <a href="/contact" title="Contact">
                     
                    </a> */}
                  </li>
                </ul>
              </div>
              <div className="col-md">
                <h4>Contact</h4>
                <ul className="footer-link">
                  <li>
                    <a href="mail-to:smartlight.eip@gmail.com" title="Contact">
                    info@danielgamestudios.com
                    </a>
                  </li>
                </ul>
                <div className="icons m-n2">
                    <SocialMedia />
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-footer">
            <div className="row">
              <div className="col-md text-center text-white">
                <p className="copyright pt-3">
                  Copyright &copy; {new Date().getFullYear()} Daniel Games
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
