import React from "react";

class WthreedenimColl extends React.Component {
  render() {
    return (
      <div className="wthreedenim-coll">
        <div className="style-grids">
          <div className="col-md-6 style-grid style-grid-1">
            <img src="images/style-1.jpg" alt="Groovy Apparel" />
            <div className="style-grid-1-text">
              <h3>DENIM JEANS</h3>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur.
              </p>
              <div className="wthreeshop-a">
                <a href="womens.html">SHOP DENIM COLLECTION</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 style-grid style-grid-2">
            <div className="style-image-1">
              <img src="images/style-2.jpg" alt="Groovy Apparel" />
              <div className="style-grid-2-text">
                <h3>WATER REPELLENT</h3>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC.
                </p>
              </div>
            </div>
            <div className="style-image-2">
              <img src="images/style-3.jpg" alt="Groovy Apparel" />
              <div className="style-grid-2-text">
                <h3>STITCHED TO PERFECTION</h3>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC.
                </p>
              </div>
            </div>
          </div>
          <div className="clearfix" />
        </div>
      </div>
    );
  }
}

export default WthreedenimColl;
