import React from "react";
import AgileModelSlider from "./index-component/AgileModelSlider";
import WthreehomeLastest from "./index-component/WthreehomeLastest";
import WthreeWinterColl from "./index-component/WthreeWinterColl";
import WthreedenimColl from "./index-component/WthreedenimColl";
import AitsclearanceSales from "./index-component/AitsclearanceSales";
import AgilesShopping from "./index-component/AgilesShopping";
import Agileifonewsl from "./index-component/Agileifonewsl";
import HeaderSlider from "./index-component/HeaderSlider";
export default function BodyIndex() {
    return(
        <>
        <HeaderSlider />
        <AgileModelSlider />
        <WthreehomeLastest /> 
        <WthreeWinterColl />
        <WthreedenimColl />
        <AitsclearanceSales />
        <AgilesShopping />
        <Agileifonewsl />
        </>
    )
}