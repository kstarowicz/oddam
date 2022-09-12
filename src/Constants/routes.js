import { Home } from "../Components/Home/Home";
import { Login } from "../Components/Login/Login";
import { Register } from "../Components/Register/Register";
import { Logout } from "../Components/Logout/Logout";
import { NotFound } from "../Components/NotFound";

import {
    HOME_ROUTE,
    NOT_FOUND_ROUTE,
    LOGOUT_ROUTE,
    REGISTER_ROUTE,
    LOGIN_ROUTE,
    FOUR_STEPS_ROUTE,
    ABOUT_US_ROUTE,
    WHO_WE_HELP_ROUTE,
    CONTACT_ROUTE
} from "./routeNames";


// Tego użyjemy do mapowania url-i na scrollowanie do elementów oraz w klasach obiektów
// Klucze do ścieżki, a wartości to klasy, których użyjemy w elementach
// Dzięki takiej hierarchii trudniej popełnić literówki i łatwiej przepisywać kod


export const ROUTES_TO_CLASSNAMES_MAP = {
    [HOME_ROUTE]: "welcome",
    [FOUR_STEPS_ROUTE]: "four-steps",
    [ABOUT_US_ROUTE]: "about-us",
    [WHO_WE_HELP_ROUTE]: "who-we-help",
    [CONTACT_ROUTE]: "contact",
};

export const ROUTES = [
    {
        path: HOME_ROUTE,
        element: <Home />
    },
    {
        path: LOGIN_ROUTE,
        element: <Login />
    },
    {
        path: REGISTER_ROUTE,
        element: <Register />
    },
    {
        path: LOGOUT_ROUTE,
        element: <Logout />
    },
    {
        path: NOT_FOUND_ROUTE,
        element: <NotFound />
    },
];