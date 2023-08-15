import { useState } from "react";
import './DailyForm.css'

export const DailyForm = () => {

    return (
        <>
            <input type="checkbox" className="openSidebarMenu unselectable" id="openSidebarMenu" />
            <label htmlFor="openSidebarMenu" id="openSidebarMenu" className="menuButton unselectable">Open me</label>
            <div id="sidebarMenu">
                <label htmlFor="openSidebarMenu" id="openSidebarMenu" className="unselectable">Hide me</label>
            </div>
        </>
    );
};
