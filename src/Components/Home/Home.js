import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

import {Header} from "../Header/Header";
import { HomeWelcome } from "./HomeWelcome/HomeWelcome";
import { HomeThreeColumns } from "./HomeThreeColums/HomeThreeColumns";
import { HomeSteps } from "./HomeSteps/HomeSteps";
import { HomeAboutUs } from "./HomeAboutUs/HomeAboutUs";
import { HomeWhoWeHelp } from "./HomeWhoWeHelp/HomeWhoWeHelp";
import { ContactUs } from "../ContactUs/ContactUs"

import { ROUTES_TO_CLASSNAMES_MAP } from "../../Constants/routes";

export const Home = () => {

    const pathname = useLocation().pathname;

    useEffect(() => {
        const scrollElement = ROUTES_TO_CLASSNAMES_MAP[pathname];

        if (scrollElement) {
            scroller.scrollTo(scrollElement, {
                duration: 1000,
                delay: 50,
                smooth: "easeInOutQuint"
            });
        }
    }, [pathname]);

    return (
        <>
            <Header />
            <HomeWelcome />
            <HomeThreeColumns />
            <HomeSteps />
            <HomeAboutUs />
            <HomeWhoWeHelp />
            <ContactUs/>
        </>
    );
};