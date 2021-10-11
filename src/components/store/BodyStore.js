import React from "react";
import Location from "./store-component/Location";
import Address from "./store-component/Address";
import NewLetter from "../common/NewLetter";
import AgileheaderBanner from "../common/AgileheaderBanner";


export default function BodyStore() {
    return(
        <>
        <AgileheaderBanner />
        <Location/>
        <Address/>
        <NewLetter/>
        </>
    )
}