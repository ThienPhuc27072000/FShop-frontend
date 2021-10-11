import React from "react";

class AgilesShopping extends React.Component {
  render() {
    return (
      <div className="agileshopping">
        <div className="container">
          <div className="agileshoppinggrids">
            <div className="col-md-6 agileshoppinggrid agileshoppinggrid1">
              <div className="grid">
                <figure className="effect-apollo">
                  <img src="images/mens.jpg" alt="Groovy Apparel" />
                  <figcaption />
                </figure>
              </div>
            </div>
            <div className="col-md-6 agileshoppinggrid agileshoppinggrid2">
              <div className="grid">
                <figure className="effect-apollo">
                  <img src="images/womens.jpg" alt="Groovy Apparel" />
                  <figcaption />
                </figure>
              </div>
            </div>
            <div className="clearfix" />
          </div>
          <div className="agileshoppinggrids-bottom">
            <h3>CHOOSE THE BEST FOR YOU</h3>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock.
            </p>
            <div className="agileshoppinggrids-bottom-grids">
              <div className="col-md-6 agileshoppinggrids-bottom-grid agileshoppinggrids-bottom-grid1">
                <div className="wthreeshop-a">
                  <a href="mens.html">SHOP MEN</a>
                </div>
              </div>
              <div className="col-md-6 agileshoppinggrids-bottom-grid agileshoppinggrids-bottom-grid2">
                <div className="wthreeshop-a">
                  <a href="womens.html">SHOP WOMEN</a>
                </div>
              </div>
              <div className="clearfix" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AgilesShopping;
