import React from 'react'
import "./Topbar.css"
import {Language, NotificationsNone, Settings} from "@material-ui/icons";

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topleft">
                    <span className="logo">Airplane-Seating</span>
                </div>
                <div className="topright">
                    <div className="topBarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topBarIconContainer">
                        <Language/>
                        <span className="topIconBadge">5</span>
                    </div>
                    <div className="topBarIconContainer">
                        <Settings/>
                    </div>
                    <img
                        src="https://images.pexels.com/photos/3775544/pexels-photo-3775544.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3775544.jpg&fm=jpg"
                        alt="" className="topAvatar"/>
                </div>
            </div>
        </div>
    )
}
