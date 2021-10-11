import React from "react";

class Copyright extends React.Component {
  render() {
    return (
      <div className="w3lscopyrightaits">
        <div className="col-md-8 w3lscopyrightaitsgrid w3lscopyrightaitsgrid1">
          <p>
            © 2017 Groovy Apparel. All Rights Reserved | Design by{" "}
            <a href="http://w3layouts.com/" target="=_blank">
              {" "}
              W3layouts{" "}
            </a>
          </p>
        </div>
        <div className="col-md-4 w3lscopyrightaitsgrid w3lscopyrightaitsgrid2">
          <div className="agilesocialwthree">
            <ul className="social-icons">
              <li>
                <a  href="#"  className="facebook w3ls"  title="Go to Our Facebook Page">
                  <i className="fa w3ls fa-facebook-square" aria-hidden="true"/>
                </a>
              </li>
              <li>
                <a  href="#"  className="twitter w3l"  title="Go to Our Twitter Account">
                  <i className="fa w3l fa-twitter-square" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a  href="#"  className="googleplus w3"  title="Go to Our Google Plus Account">
                  <i className="fa w3 fa-google-plus-square" aria-hidden="true"/>
                </a>
              </li>
              <li>
                <a href="#" className="instagram wthree" title="Go to Our Instagram Account" >
                  <i className="fa wthree fa-instagram" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#" className="youtube w3layouts" title="Go to Our Youtube Channel">
                  <i className="fa w3layouts fa-youtube-square" aria-hidden="true"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="clearfix" />
      </div>
    );
  }
}

export default Copyright;
