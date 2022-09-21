import  React from "react";
import "./Footer.scss";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="copyright">Copyright by Coders Lab</div>
            <div className="social-icons">
                <a href="https://facebook.com"><div className="facebook-icon"/></a>
                <a href="https://instagram.com"><div className="instagram-icon"/></a>
            </div>
        </footer>
    );
};