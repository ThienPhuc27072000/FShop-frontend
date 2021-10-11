import React from "react";
import AboutUs from './about-component/AboutUs';
import BeYourself from './about-component/BeYourself';
import Commercial from './about-component/Commercial';
import Accessories from './about-component/Accessories';
import Shoe from './about-component/Shoe';
import NewFashion from './about-component/NewFashion';
import AgileheaderBanner from "../common/AgileheaderBanner";
import NewLetter from "../common/NewLetter";

export default function About() {
    return (
        <>
        <AgileheaderBanner />
        <AboutUs />
        <BeYourself />
        <Commercial />
        <Accessories />
        <Shoe />
        <NewFashion />
        <NewLetter />
        </>
    )
}