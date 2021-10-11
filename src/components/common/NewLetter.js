import React from "react";

export default function NewLetter() {
    return (
        <>
        <div className="w3lsnewsletter" id="w3lsnewsletter">
            <div className="container">
                <div className="w3lsnewsletter-grids">
                    <div className="col-md-5 w3lsnewsletter-grid w3lsnewsletter-grid-1 subscribe">
                        <h2>Subscribe to our Newsletter</h2>
                    </div>
                    <div className="col-md-7 w3lsnewsletter-grid w3lsnewsletter-grid-2 email-form">
                        <form action="#" method="post">
                            <input className="email" type="email" name="Email" placeholder="Email Address" required=""/>
                            <input type="submit" className="submit" value="SUBSCRIBE"/>
                        </form>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </div>   
        </>
    )
}