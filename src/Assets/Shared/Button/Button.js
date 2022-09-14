import React from 'react';
import { Link } from 'react-router-dom';

import "./Button.scss";


export const Button = ({ url, text, classname }) => {
    return (
        <Link to={url} className={classname}>{text}</Link>
    );
};