import React from "react";
import Copyright from "../common/Copyright";
import {Link} from "react-router-dom";

export default function Footer() {
    return (
      <>
      <div className="agileinfofooter">
        <div className="agileinfofooter-grids">
          <div className="col-md-4 agileinfofooter-grid agileinfofooter-grid1">
            <ul>
              <li><a href="about.html">ABOUT</a></li>
              <li><a href="mens.html">MEN'S</a></li>
              <li><a href="mens_accessories.html">MEN'S ACCESSORIES</a></li>
              <li><a href="womens.html">WOMEN'S</a></li>
              <li><a href="womens_accessories.html">WOMEN'S ACCESSORIES</a></li>
            </ul>
          </div>
          <div className="col-md-4 agileinfofooter-grid agileinfofooter-grid2">
            <ul>
              <li><a><Link to="/store">STORE LOCATOR</Link></a></li>
              <li><a><Link to="/faq">FAQs</Link></a></li>
              <li><a href="codes.html">CODES</a></li>
              <li><a href="icons.html">ICONS</a></li>
              <li><a><Link to="/contact">CONTACT</Link></a></li>
            </ul>
          </div>
          <div className="col-md-4 agileinfofooter-grid agileinfofooter-grid3">
            <address>
              <ul>
                <li>40019 Parma Via Modena</li>
                <li>Sant'Agata Bolognese</li>
                <li>BO, Italy</li>
                <li>+1 (734) 123-4567</li>
                <li><a className="mail" href="mailto:mail@example.com">info@example.com</a></li>
              </ul>
            </address>
          </div>
          <div className="clearfix" />
        </div>
      </div>
      <Copyright />
      </>
    );
  }


