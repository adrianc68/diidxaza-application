import React from 'react'
import './topbar.scss'
import DiidxazaLogo from '../logo/DiidxazaLogo'


export default function Topbar({ children }) {
    return (
        <div className="topbar">
            <div className="topbar-logo-details">
                <div className="topbar-center">
                    <DiidxazaLogo styleClass="logo-white-link"></DiidxazaLogo>
                </div>
            </div>
            <div className="nav-links-container">
                <ul>
                    <li>
                        {children}
                    </li>

                </ul>
            </div>
        </div>
    )
}
