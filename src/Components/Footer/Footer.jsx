import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
  faSoundcloud,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer id="footer" className="footer" data-media-query="d">
      <div className="footer-primary container">
        <div className="row">
          <div className="column1 col-xs-4 col-md-4">
            <span className="footer-column-headline headline-shop-service">
              Shop &amp; service
            </span>
            <ul>
              <li>
                <a href="/en/shop-information/">Shop info &amp; faq</a>
              </li>
              <li>
                <a href="https://www.native-instruments.com/en/my-account/">
                  My account &amp; order history
                </a>
              </li>
              <li>
                <a href="/en/company/resellers/">Find a dealer</a>
              </li>
              <li>
                <a href="/en/specials/native-access-2/">Native Access</a>
              </li>
            </ul>
            <span>
              <a
                className="freeshipping country-gh"
                href="/en/shop-information/shipping-fees-payment/"
              >
                <span className="freeshipping__text">Free shipping*</span>
                <span className="freeshipping__logos"></span>
              </a>
            </span>
          </div>
          <div className="column2 col-xs-5 col-md-5">
            <span className="footer-column-headline hidden-xs connect-text">
              Connect with us
            </span>
            <ul className="connect-container hidden-xs">
              <li>
                <a href="#" className="connect-facebook">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="#" className="connect-facebook">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="#" className="connect-facebook">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <li>
                  <a href="#" className="connect-facebook">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                  <li>
                    <a href="#" className="connect-facebook">
                      <FontAwesomeIcon icon={faSoundcloud} />
                    </a>
                  </li>
                </li>
              </li>
            </ul>
            <span className="footer-column-headline headline-newsletter">
              Newsletter subscription
            </span>
            <ul className="newsletter-container">
              <li>
                <div id="" className="">
                  <form
                    method="post"
                    name="participant"
                    className="ni-inline-form"
                    noValidate="true"
                    role="form"
                    action=""
                    data-ajax-action=""
                    data-ajax-target=""
                    data-media-query=""
                  >
                    <div className="form-group">
                      <div className="input-group">
                        <input
                          data-error="This is not a valid email address."
                          placeholder="Enter email address"
                          className="form-control email-suggest fill-email email-address"
                          type="email"
                          required="required"
                        />

                        <div className="input-group-btn">
                          <input
                            className="btn btn-primary"
                            title="SUBSCRIBE"
                            type="submit"
                            value="SUBSCRIBE"
                          />
                        </div>
                      </div>
                      <div className="help-block with-errors">
                        <ul className="list-unstyled"></ul>
                      </div>
                    </div>

                    <div className="form-group" style={{ marginTop: "15px" }}>
                      <input
                        type="hidden"
                        name="tx_niforms_niforms[participant][form]"
                        value="footer"
                      />
                    </div>

                    <input
                      type="hidden"
                      name="tx_niforms_niforms[module]"
                      value=""
                    />
                  </form>
                </div>
              </li>
            </ul>
          </div>
          <div className="column3 col-xs-3 col-md-3">
            <span className="footer-column-headline company-text">Company</span>
            <ul>
              <li>
                <a href="https://blog.native-instruments.com/">Blog</a>
              </li>
              <li>
                <a href="/en/company/">Corporate info</a>
              </li>
              <li>
                <a href="/en/company/ni-locations/">Contact us</a>
              </li>
              <li>
                <a href="/en/careers/">Careers</a>
              </li>
              <li>
                <a href="/en/press-area/">Press area</a>
              </li>
              <li>
                <a href="/en/company/education-program/">Education</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-secondary">
        <div className="container-fluid">
          <ul>
            <li className="column1">© 2023 Native Instruments GmbH</li>
            <li className="column2">
              <a href="/en/company/legal-information/">Legal Information</a> |{" "}
              <a href="/en/company/legal-information/privacy-policy/">
                Privacy Policy
              </a>
              <span data-cookie-consent-toggle="" className="hide">
                | <a href="#">Manage Cookies</a>
              </span>{" "}
              | <a href="/en/company/ni-locations/">Contact</a>
            </li>
            <li className="column3 lang-switcher">
              <a href="/en/" data-code="en" rel="alternate" hrefLang="en">
                English
              </a>{" "}
              |{" "}
              <a href="/de/" data-code="de" rel="alternate" hrefLang="de">
                Deutsch
              </a>{" "}
              |{" "}
              <a href="/jp/" data-code="jp" rel="alternate" hrefLang="ja">
                日本語
              </a>{" "}
              |{" "}
              <a href="/fr/" data-code="fr" rel="alternate" hrefLang="fr">
                Français
              </a>{" "}
              |{" "}
              <a href="/es/" data-code="es" rel="alternate" hrefLang="es">
                Español
              </a>{" "}
              |{" "}
              <a href="/zh/" data-code="zh" rel="alternate" hrefLang="zh">
                简体中文
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>

      <div
        className="modal fade"
        id="niModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="niModalLabel"
        aria-hidden="true"
        data-keyboard="true"
      >
        <div className="modal-header">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-hidden="true"
          >
            ×
          </button>
          <h3 className="notitle" id="niModalLabel"></h3>
        </div>
        <div className="modal-body">Loading...</div>
      </div>
      <div
        className="modal fade"
        id="1niAccountModal"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
        data-keyboard="true"
        style={{ minHeight: "343px" }}
      >
        <div className="modal-header">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-hidden="true"
          >
            ×
          </button>
        </div>
        <div className="modal-body">Loading...</div>
      </div>
      <div
        className="modal fade"
        id="niAccountModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                ×
              </button>
              <h4 className="modal-title" id="myModalLabel">
                Modal title
              </h4>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
