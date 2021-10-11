import React from 'react';

export default function Commercial() {
    return(
        <>
        <div className="aitscommercial">			
            <div className="col-md-6 aitscommercial-grid aitscommercial-grid1">
                <h2>DERNIÈRE MODE</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo varius vehicula. Mauris porta metus vitae nulla dignissim egestas. Aliquam sed molestie eros, in pharetra purus. Praesent consequat porta viverra. Praesent gravida dapibus condimentum. Vestibulum vel lacus aliquet, laoreet mi eu, tempor est. Quisque volutpat finibus tristique. Duis at nibh eget nulla pretium pretium. Quisque arcu sem, dignissim eu egestas quis, vulputate non mauris.</p>
                <p className="w3teaseraits">Check out our latest commercial, teaser and behind the scenes film.</p>
                <a className="popup-with-zoom-anim" href="#small-dialog4">WATCH NOW</a>
            </div>  
            <div className="col-md-6 aitscommercial-grid aitscommercial-grid2">
                <img src="images/commercial.jpg" alt="Groovy Apparel"/>
            </div>
            <div className="clearfix"></div>   
            <div id="small-dialog4" className="mfp-hide agileinfo">
                <div className="pop_up">
                    <iframe src="https://player.vimeo.com/video/184401441"></iframe>
                </div>
            </div>
        </div>
        </>
    )
}