// To moje stałe, które opisują ścieżki
// Wydzielono je w tym pliku, aby nie konfliktowały z projektem (tzw. "circular dependencies")
// routes -> App -> Home -> Navbar -> routes -> App -> Home itp (czyli po polsku - zależności cykliczne)

export const HOME_ROUTE = "/";
export const FOUR_STEPS_ROUTE = "/four-steps"
export const ABOUT_US_ROUTE = "/about-us";
export const WHO_WE_HELP_ROUTE = "/who-we-help";
//export const CONTACT_ROUTE = "contact";
export const LOGIN_ROUTE = "/Login";
//export const REGISTER_ROUTE = "/Register";
export const LOGOUT_ROUTE = "/Logout";
//export const NOT_FOUND_ROUTE = "*";