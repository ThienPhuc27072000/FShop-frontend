import React from "react"; 
import {Link} from "react-router-dom";

export default function HeaderHidden() {
    return(
        <>
        <div className="agileheader-topbar">
          <div className="container">
            <div className="col-md-6 agileheader-topbar-grid agileheader-topbar-grid1">
              <p>Free shipping on orders over $150. <a> <Link to="/payment">Details</Link></a></p>
            </div>
            <div className="col-md-6 agileheader-topbar-grid agileheader-topbar-grid2">
              <ul>
                <li><a href="stores.html">Store Locator</a></li>
                <li><a href="faq.html">FAQ</a></li>
                <li><a className="popup-with-zoom-anim" href="#small-dialog1">Login</a></li>
                <li><a className="popup-with-zoom-anim" href="#small-dialog2">Sign Up</a></li>
                <li><a href="codes.html">Codes</a></li>
                <li><a href="icons.html">Icons</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </div>
            <div className="clearfix"></div>
          </div>

            {/* Popup-Box */}
            <div id="popup1">
              <div id="small-dialog1" className="mfp-hide agileinfo">
                <div className="pop_up">
                  <form action="#" method="post">
                    <h3>LOGIN</h3>
                    <input type="text" Name="Userame" placeholder="Username" required=""/>
                    <input type="password" Name="Password" placeholder="Password" required=""/>
                    <ul className="tick w3layouts agileinfo">
                      <li>
                        <input type="checkbox" id="brand1" value=""/>
                        <label htmlFor="brand1"><span></span>Remember me</label>
                      </li>
                      <li>
                        <a href="#">Forgot Password?</a>
                      </li>
                    </ul>
                    <div className="send-button wthree agileits">
                      <input type="submit" value="LOGIN"/>
                    </div>
                  </form>
                </div>
              </div>
              <div id="small-dialog2" className="mfp-hide agileinfo">
                <div className="pop_up">
                  <form action="#" method="post">
                    <h3>SIGN UP</h3>
                    <input type="text" Name="Name" placeholder="Name" required=""/>
                    <input type="text" Name="Email" placeholder="Email" required=""/>
                    <input type="password" Name="Password" placeholder="Password" required=""/>
                    <input type="text" Name="Phone Number" placeholder="Phone Number" required=""/>
                    <div className="send-button wthree agileits">
                      <input type="submit" value="SIGN UP"/>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* //Popup-Box */}
        </div>
        </>
    )
}