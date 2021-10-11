import React from "react";
import {Link} from 'react-router-dom';  
import HeaderHidden from "../index/index-component/HeaderHidden";
import HeaderSlider from "../index/index-component/HeaderSlider";

export default function Header() {
    return (
      <>
      <div className="agileheader" id="agileitshome" >
        {/* Navigation */}
        <nav className="navbar navbar-default w3ls navbar-fixed-top">
          <div className="container">
            <div className="navbar-header wthree nav_2">
              <button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand agileinfo" to="/"><span>GROOVY</span> APPAREL</Link> 
              <ul className="w3header-cart">
                <li className="wthreecartaits">
                  <span className="my-cart-icon">
                    <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                    <span className="badge badge-notify my-cart-badge"></span>
                  </span>
                </li>
              </ul>
            </div>
            <div id="bs-megadropdown-tabs" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <Dropdown nameHeader="MEN" linkHeader="/men"/>
                <Dropdown nameHeader="WOMEN" linkHeader="/women"/>
                <Dropdown nameHeader="ACCESSORIES" linkHeader="/menaccessories" />
                <Dropdown nameHeader="HOT LIST" linkHeader=""/>
                <Dropdown nameHeader="ABOUT" linkHeader="/about" />
                {/* <li><a href="about.html">ABOUT</a></li>  */}
                <li className="wthreesearch">
                  <form action="#" method="post">
                    <input type="search" name="Search" placeholder="Search for a Product" required=""/>
                    <button type="submit" className="btn btn-default search" aria-label="Left Align">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </form>
                </li>
                <li className="wthreecartaits wthreecartaits2 cart cart box_1"> 
                <form action="#" method="post" className="last"> 
                    <input type="hidden" name="cmd" value="_cart" />
                    <input type="hidden" name="display" value="1" />
                    <button className="w3view-cart" type="submit" name="submit" value=""><i className="fa fa-cart-arrow-down" aria-hidden="true"></i></button>
                  </form>   
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* //Navigation */}

        {/* Header-Top-Bar-(Hidden) */}
        <HeaderHidden />
        
        {/* <HeaderSlider /> */}
        {/* //Header-Top-Bar-(Hidden) */}
      </div>   
      </>
    );
  }


class MultiColumnDropdown extends React.Component {
  render() {
    return (
    <>
    <li>
      <Link to ={this.props.link}>
        <i className="fa fa-angle-right" aria-hidden="true"></i>
        {this.props.content}
      </Link>
      </li>
    </>
    )
  }
}

class Imgcloth extends React.Component {
  render(){
    return(
      <>
      <div className="col-sm-3 w3layouts-nav-agile w3layouts-mens-nav-agileits w3layouts-mens-nav-agileits-2">
        <p>{this.props.namecloth}</p>
        <a href="mens.html"><img src={this.props.linkimg} alt="Groovy Apparel"/></a>
      </div>
      </>
    )
  }
}

class Dropdown extends React.Component {
  render() {
    return(
    <>
    <li className="dropdown">
      <Link to={this.props.linkHeader} className="dropdown-toggle w3-agile hyper" data-toggle="dropdown">
        <span> {this.props.nameHeader} </span>
      </Link>
      {/* <ul className="dropdown-menu aits-w3 multi multi1">
        <div className="row">
          <div className="col-sm-3 w3layouts-nav-agile w3layouts-mens-nav-agileits w3layouts-mens-nav-agileits-1">
            <ul className="multi-column-dropdown">
              <li className="heading">FEATURED</li>
              <MultiColumnDropdown link="/men" content="New Arrival" />
              <MultiColumnDropdown link="/men" content="Online Only" />
              <MultiColumnDropdown link="/men" content="Brand" />
              <MultiColumnDropdown link="/men" content="Clearance Sale" />
              <MultiColumnDropdown link="/men" content="Discount Store" />
              <MultiColumnDropdown link="/men" content="Editor's Pick" />
            </ul>
          </div>
          <Imgcloth namecloth="JACKET" linkimg="images/men-nav-1.jpg" />
          <Imgcloth namecloth="LEGS" linkimg="images/men-nav-2.jpg" />
          <Imgcloth namecloth="ACCESSORIES" linkimg="images/men-nav-3.jpg" />         
          <div className="clearfix"></div>
          <p className="promo">Use Promo Code <span>#CFFGTY56</span> and take 30% off the products. 
            <a href="#">Details</a>
          </p>
        </div>
      </ul> */}
    </li>
    </>
    )
  }
}


