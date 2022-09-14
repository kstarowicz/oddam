import React from 'react';

import { Header } from "../Header/Header";

import "./Login.scss"
import { Decoration } from "../../Assets/Shared/Decoration/Decoration";

export const Login = () => {
    return (
        <>
            <Header/>
            <form>
                <div className="login-container">
                    <h1>Zaloguj się</h1>
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
                    </div>
                    <div className="buttons-login">
                        <div className="create-account-button">Załóż konto</div>
                        <div className="login-button">Zaloguj się</div>
                    </div>
                </div>
            </form>
        </>

    );
};