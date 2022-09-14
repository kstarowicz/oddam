import React from 'react';

import {Button} from "../../../Assets/Shared/Button/Button";
import {Decoration} from "../../../Assets/Shared/Decoration/Decoration";
import "./HomeWelcome.scss";

export const HomeWelcome = () => {
    return(
    <section className="welcome">
        <div className="welcome-left"/>
        <div className="welcome-right">
            <div className="title">
                <h2>Zacznij pomagać!</h2>
                <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                <Decoration/>
                <div className="welcome-buttons">
                    <Button url='/login' text={`ODDAJ RZECZY`} classname={"button-xl"}/>
                    <Button url='/login' text={`ZORGANIZUJ ZBIÓRKĘ`} classname={"button-xl"}/>
                </div>
            </div>
        </div>
    </section>
    );
};