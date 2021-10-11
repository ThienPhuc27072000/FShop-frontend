import React from "react";

export default function Accessories() {
    return(
        <>
        <div className="w3laccessoriesaits">
            <div className="col-md-6 w3laccessoriesaits-grids w3laccessoriesaits-grids1">
                <div className="w3laccessoriesaits-grid w3laccessoriesaits-grid1">
                    <div className="grid">
                        <figure className="effect-apollo">
                            <img src="images/accessory-1.jpg" alt="Groovy Apparel"/>
                            <figcaption></figcaption>
                        </figure>
                    </div>
                    <h4>EAU FRAICHE</h4>
                    <p>Lorem Ipsum Dolor Site Amet</p>
                    <h6><a href="mens_accessories.html">Shop Now</a></h6>
                </div>
            </div>
            <div className="col-md-6 w3laccessoriesaits-grids w3laccessoriesaits-grids2">
                <div className="w3laccessoriesaits-grid w3laccessoriesaits-grid2">
                    <div className="grid">
                        <figure className="effect-apollo">
                            <img src="images/accessory-2.jpg" alt="Groovy Apparel"/>
                            <figcaption></figcaption>
                        </figure>
                    </div>
                    <h4>PIGMENT POWDER</h4>
                    <p>Lorem Ipsum Dolor Site Amet</p>
                    <h6><a href="womens_accessories.html">Shop Now</a></h6>
                </div>
            </div>
            <div className="clearfix"></div>
        </div>
        </>
    )
}