import React from "react";

export default function Address() {
    return(
        <>
        <div class="aitsstoreaddressw3">
            <div class="container">
                <div class="aitsstoreaddressw3-grids">
                    <div class="col-md-3 aitsstoreaddressw3-grid aitsstoreaddressw3-grid1">
                        <Country nameCountry="Italia" />
                    </div>
                    <div class="col-md-3 aitsstoreaddressw3-grid aitsstoreaddressw3-grid2">
                    <Country nameCountry="France" />
                        
                    </div>
                    <div class="col-md-3 aitsstoreaddressw3-grid aitsstoreaddressw3-grid3">
                        <Country nameCountry="Germany" />
                    </div>
                    <div class="col-md-3 aitsstoreaddressw3-grid aitsstoreaddressw3-grid4">
                        <Country nameCountry="Viet Nam" />      
                    </div>
                    <div class="col-md-3 aitsstoreaddressw3-grid aitsstoreaddressw3-grid5">
                        <Country nameCountry="Monaco" />
                    </div>
                    <div class="col-md-3 aitsstoreaddressw3-grid aitsstoreaddressw3-grid6">
                        <Country nameCountry="Spain" />
                    </div>
                    <div class="col-md-3 aitsstoreaddressw3-grid aitsstoreaddressw3-grid7">
                        <Country nameCountry="Lào" /> 
                    </div>
                    <div class="col-md-3 aitsstoreaddressw3-grid aitsstoreaddressw3-grid8">
                        <Country nameCountry="America" />            
                    </div>
                    <div class="col-md-3 aitsstoreaddressw3-grid aitsstoreaddressw3-grid9">
                        <Country nameCountry="Campuchia" />                       
                    </div>
                    <div class="col-md-3 aitsstoreaddressw3-grid aitsstoreaddressw3-grid10">
                        <Country nameCountry="China" />                       
                    </div>
                    <div class="col-md-3 aitsstoreaddressw3-grid aitsstoreaddressw3-grid11">
                        <Country nameCountry="Finland" />                        
                    </div>
                    <div class="col-md-3 aitsstoreaddressw3-grid aitsstoreaddressw3-grid12">
                        <Country nameCountry="Thailand" />                        
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

class Country extends React.Component {
    render() {
        return(
            <>
            <h5>{this.props.nameCountry}</h5>
            <address>
                <ul>
                    <li>Studio No: 41</li>
                    <li>Lorem Ipsum</li>
                    <li>Dolores Amet</li>
                    <li>Consect, 90210</li>
                    <li>Italy</li>
                    <li>Tel: +99937774623</li>
                </ul>
            </address>
            </>
        )
    }
}