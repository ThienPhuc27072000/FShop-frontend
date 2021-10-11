import React from 'react';
import NewLetter from '../components/common/NewLetter';

export default function Womens() {
    return(
        <>
        {/* Heading */}
        <h1 className="w3wthreeheadingaits">WOMEN'S CLOTHING</h1>

        {/* Men's-Product-Display */}
        <div className="wthreeproductdisplay">
            <div id="cbp-pgcontainer" className="cbp-pgcontainer">
                <ul className="cbp-pggrid">
                    <ProductItem product="Blazer" price="$25" size="XL"/>
                    <ProductItem product="Blazer" price="$25" size="XL"/>
                    <ProductItem product="Blazer" price="$25" size="XL"/>
                    <ProductItem product="Blazer" price="$25" size="XL"/>
                    <ProductItem product="Blazer" price="$25" size="XL"/>
                    <ProductItem product="Blazer" price="$25" size="XL"/>
                    <ProductItem product="Blazer" price="$25" size="XL"/>
                    <ProductItem product="Blazer" price="$25" size="XL"/>
                    <ProductItem product="Blazer" price="$25" size="XL"/>
                    <ProductItem product="Blazer" price="$25" size="XL"/>
                </ul>
            </div>
        </div>
        {/* //Men's-Product-Display */}
        <NewLetter />
        </>
    )
}

class ProductItem extends React.Component {
    render() {
        return(
            <>
            <li className="wthree aits w3l">
                <div className="cbp-pgcontent" id="men-8">
                    <span className="cbp-pgrotate">
                        <i className="fa fa-exchange" aria-hidden="true"></i>
                    </span>
                    <a href="mens_single.html">
                        <div className="cbp-pgitem a3ls">
                            <div className="cbp-pgitem-flip">
                                <img src="images/1-front.jpg" alt="Groovy Apparel"/>
                                <img src="images/1-back.jpg" alt="Groovy Apparel"/>
                            </div>
                        </div>
                    </a>
                    <ul className="cbp-pgoptions w3l">
                        <li className="cbp-pgoptcompare">
                            <input type="checkbox" name="checkboxG8" id="checkboxG8" className="css-checkbox w3"/><label htmlFor="checkboxG8" className="css-label"></label>
                        </li>
                        <li className="cbp-pgoptfav">
                            <span>5 <i className="fa fa-star" aria-hidden="true"></i></span>
                        </li>
                        <li className="cbp-pgoptsize agile">
                            <span data-size="XL">{this.props.size}</span>
                            <div className="cbp-pgopttooltip">
                                <span data-size="XL">XL</span>
                                <span data-size="L">L</span>
                                <span data-size="M">M</span>
                                <span data-size="S">S</span>
                            </div>
                        </li>
                        <li className="cbp-pgoptcart">
                            <form action="#" method="post">
                                <input type="hidden" name="cmd" value="_cart"/>
                                <input type="hidden" name="add" value="1"/> 
                                <input type="hidden" name="w3l_item" value="Sweater "/> 
                                <input type="hidden" name="amount" value="25.00"/> 
                                <button type="submit" className="w3l-cart pw3l-cart">
                                    <i className="fa fa-cart-plus" aria-hidden="true"></i>
                                </button>
                                <span className="w3-agile-line"> </span>
                                <a href="#" data-toggle="modal" data-target="#myModal1"></a>
                            </form>
                        </li>
                    </ul>
                </div>
                <a href="mens_single.html">
                    <div className="cbp-pginfo w3layouts">
                        <h3>{this.props.product}</h3>
                        <span className="cbp-pgprice">{this.props.price}</span>
                    </div>
                </a>
            </li>
            </>
        )
    }
}