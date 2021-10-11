import React from "react";
import NewLetter from "../components/common/NewLetter";

export default function MenSingle() {
    return(
        <>
        <div className="w3aitssinglewthree">
            <div className="container">
                <div className="products">
                    <div className="single-page">
                        <div className="single-page-row" id="detail-21">
                            <div className="col-md-6 single-top-left">
                                <div className="flexslider">
                                    <ul className="slides">
                                        <li data-thumb="images/s1.jpg">
                                            <div className="thumb-image detail_images"> 
                                            <img src="images/s1.jpg" data-imagezoom="true" className="img-responsive" alt="Groovy Apparel"/></div>
                                        </li>
                                        <li data-thumb="images/s2.jpg">
                                            <div className="thumb-image"> 
                                            <img src="images/s2.jpg" data-imagezoom="true" className="img-responsive" alt="Groovy Apparel"/></div>
                                        </li>
                                        <li data-thumb="images/s3.jpg">
                                            <div className="thumb-image"> 
                                            <img src="images/s3.jpg" data-imagezoom="true" className="img-responsive" alt="Groovy Apparel"/></div>
                                        </li> 
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 single-top-right">
                                <h1 className="item_name">Black Leather Jacket</h1>
                                <p>This item will be delivered within 5-10 working days.</p>
                                <div className="rating">
                                    <span className="starRating">
                                        <input id="rating5" type="radio" name="rating" value="5"/>
                                        <label htmlFor="rating5">5</label>
                                        <input id="rating4" type="radio" name="rating" value="4" checked/>
                                        <label htmlFor="rating4">4</label>
                                        <input id="rating3" type="radio" name="rating" value="3"/>
                                        <label htmlFor="rating3">3</label>
                                        <input id="rating2" type="radio" name="rating" value="2"/>
                                        <label htmlFor="rating2">2</label>
                                        <input id="rating1" type="radio" name="rating" value="1"/>
                                        <label htmlFor="rating1">1</label>
                                    </span>
                                </div>
                                <div className="single-price">
                                    <ul>
                                        <li>$67.5 <small>10% Off</small></li>
                                        <li><del>$75</del></li>
                                        <li>Ends on: Nov,15th</li>
                                        <li><a href="#"><i className="fa fa-gift" aria-hidden="true"></i>Apply Coupon</a></li>
                                    </ul>
                                </div>
                                <p className="single-price-text">Fusce a egestas nibh, eget ornare erat. Proin placerat, urna et consequat efficitur, sem odio blandit enim, sit amet euismod turpis est mattis lectus. Vestibulum maximus quam et quam egestas imperdiet. In dignissim auctor viverra.</p>
                                <div className="cbp-pgcontent aitssinglew3" id="mens_single">
                                    <button className="btn btn-danger agileits my-cart-btn" data-id="mens_single" data-name="Black Leather Jacket" data-summary="Black Leather Jacket" data-price="67.5" data-quantity="1" data-image="images/s1.jpg"><i className="fa fa-cart-plus" aria-hidden="true"></i> Add To Cart</button>
                                    <div className="clearfix"></div>
                                </div>

                                <div className="agilesocialwthree">
                                    <h4>Share this Product</h4>
                                    <ul className="social-icons">
                                        <li><a href="#" className="facebook w3ls" title="Go to Our Facebook Page"><i className="fa w3ls fa-facebook-square" aria-hidden="true"></i></a></li>
                                        <li><a href="#" className="twitter w3l" title="Go to Our Twitter Account"><i className="fa w3l fa-twitter-square" aria-hidden="true"></i></a></li>
                                        <li><a href="#" className="googleplus w3" title="Go to Our Google Plus Account"><i className="fa w3 fa-google-plus-square" aria-hidden="true"></i></a></li>
                                        <li><a href="#" className="instagram wthree" title="Go to Our Instagram Account"><i className="fa wthree fa-instagram" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>

                    <div className="aitsaccordionw3layouts">
                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingOne">
                                    <h4 className="panel-title asd">
                                        <a className="pa_italic" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Description <span className="glyphicon glyphicon glyphicon-chevron-down" aria-hidden="true"></span><i className="glyphicon glyphicon-menu-up" aria-hidden="true"></i>
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                    <div className="panel-body panel_text">
                                        <div className="scrollbar" id="style-2">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingTwo">
                                    <h4 className="panel-title asd">
                                        <a className="pa_italic collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">More Colors (2) <span className="glyphicon glyphicon glyphicon-chevron-down" aria-hidden="true"></span><i className="glyphicon glyphicon-menu-up" aria-hidden="true"></i>
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                    <div className="accordion-image">
                                        <div className="ac-img">
                                            <a href="#"><img src="images/product-1.jpg" alt="Groovy Apparel"/></a>
                                        </div>
                                        <div className="ac-img">
                                            <a href="#"><img src="images/product-2.jpg" alt="Groovy Apparel"/></a>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingThree">
                                    <h4 className="panel-title asd">
                                        <a className="pa_italic collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Rating & Reviews (40+) <span className="glyphicon glyphicon glyphicon-chevron-down" aria-hidden="true"></span><i className="glyphicon glyphicon-menu-up" aria-hidden="true"></i>
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                    <h3>"Excellent Quality & Fitting!"</h3>
                                    <h4>Léon, Certified Buyer.</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                    <span>5 Stars</span>
                                    <a href="#" className="next">Next Review &rarr;</a>
                                </div>
                            </div>

                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingFour">
                                    <h4 className="panel-title asd">
                                        <a className="pa_italic collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Shipping Info <span className="glyphicon glyphicon glyphicon-chevron-down" aria-hidden="true"></span><i className="glyphicon glyphicon-menu-up" aria-hidden="true"></i>
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                                    <h3>Shipping</h3>
                                    <ul className="ship">
                                        <li className="day"><i className="fa fa-calendar" aria-hidden="true"></i> 5-10 Business Days</li>
                                        <li className="home"><i className="fa fa-truck" aria-hidden="true"></i> Free Home Delivery</li>
                                        <li className="cod"><i className="fa fa-male" aria-hidden="true"></i> Cash On Delivery Available*</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <NewLetter />
        </>
    ) 
}