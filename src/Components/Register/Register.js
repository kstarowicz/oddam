import React from 'react';

import { Header } from "../Header/Header";

import "./Register.scss"
import {Decoration} from "../../Assets/Shared/Decoration/Decoration";

export const Register = () => {
    return (
        <>
            <Header/>
            <form>
                <div className="login-container">
                    <h1>Załóź konto</h1>
                    <Decoration />
                    <div className="login-box">
                        <label className="email">Email</label>
                        <input type="email"
                               value="email"
                               className="input-email"
                        />
                        <label className="password">Hasło</label>
                        <input type="password"
                               value="password"
                               className="input-password"

                        />
                        <label className="repeat-password">Powtórz Hasło</label>
                        <input type="password"
                               value="password"
                               className="input-repeat-password"/>

                    </div>
                    <div className="buttons-login">
                        <div className="create-account-button">Zaloguj się</div>
                        <div className="login-button">Załóż konto</div>
                    </div>
                </div>
            </form>
        </>

    );
};