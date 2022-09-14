//import React from 'react';
import React, { useState } from 'react';

import "./HomeWhoWeHelp.scss";
import  {Decoration}  from "../../../Assets/Shared/Decoration/Decoration";
import { data } from "./allData";

const MAX_ITEMS = 3;

export const HomeWhoWeHelp = () => {
    const [currentViewData, setCurrentViewData] = useState(data.foundations);
    const [currentPage, setCurrentPage] = useState(0);

    const pagesNeeded = Math.ceil(currentViewData.items.length / MAX_ITEMS);
    const pagingItems = Array.from(Array(pagesNeeded)).map(
        (_elt, index) => index
    );

    const currentElements = currentViewData.items.slice(
        currentPage * MAX_ITEMS,
        (currentPage + 1) * MAX_ITEMS
    );

    const switchData = (newDataObj) => {
        // Resetujemy najpierw stronę
        setCurrentPage(0);

        // Ustawiamy nową strukturę
        setCurrentViewData(newDataObj);
    };

    const getButtonClass = (dataObj) => {
        return dataObj === currentViewData ? "selected" : "";
    }

    //
    // export const Button = ({active, className = "", size, ...rest}) => {
    //   const activeClass = active ? 'active' : '';
    //   const sizeClass = size === 'big' ? 'Button--big' : 'Button--small';
    //   return <button className={`Button ${sizeClass} ${activeClass} ${className}`} {...rest}/>
    // };

    // <Button active={currentViewData === data.foundations}>Fundacjom</Button>

    return (
        <div className="who-we-help">
            <div className="title">
                <h2>Komu pomagamy?</h2>
                <Decoration />
            </div>
            <div className="who-we-help-buttons">
                <button className={getButtonClass(data.foundations)} onClick={() => switchData(data.foundations)}>Fundacjom</button>
                <button className={getButtonClass(data.organizations)} onClick={() => switchData(data.organizations)}>Organizacjom pozarządowym</button>
                <button className={getButtonClass(data.local)} onClick={() => switchData(data.local)}>Lokalnym zbiórkom</button>
            </div>
            <div className="who-we-help-description">
                <p>{currentViewData.description}</p>
            </div>
            <div className="who-we-help-list">
                {currentElements.map((el, index) => (
                    <div key={index} className="who-we-help-list-element">
                        <div>
                            <h4>{el.title}</h4>
                            <p className="who-we-help-list-element-purpose">{el.purpose}</p>
                        </div>
                        <div><p className="who-we-help-list-element-what">{el.what}</p></div>
                    </div>
                ))}
            </div>
            <div className="who-we-help-paging">
                {pagingItems.length > 1 && pagingItems.map((item) => (
                    <button key={item} onClick={() => setCurrentPage(item)}>{item + 1}</button>
                ))}
            </div>
        </div>
    );
};