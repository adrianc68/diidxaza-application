import React from 'react'
import NotFound from '../../assets/images/ide-07.svg'
import { Home } from "@material-ui/icons"
import { useTranslation } from "react-i18next";
import "../../translations/i18n";
import { Link } from 'react-router-dom';
import './pageNotFound.scss';
import Topbar from '../../components/topbar/Topbar'

export default function PageNotFound() {
    const { t } = useTranslation();
    return (
        <>
            <div className="pagenotfound-main-container">
                <Topbar></Topbar>
                <div className="pagenotfound-img-container">
                    <img className="pagenotfound-image" src={NotFound} alt={t("altPageNotFoundImage")}></img>
                </div>
                <div className="pagenotfound-text-container">
                    <h1>{t("PageNotFound404")}</h1>
                    <h2>{t("PageNotFound")}</h2>
                    <Link className="pagenotfound-linkto" to="/home">
                        <button className="pagenotfound-home-button">
                            <Home className="pagenotfound-icon-button" />
                            <span className="pagenotfound-text-button">{t("PageNotFoundReturnHomeButton")}</span>
                        </button>
                    </Link>
                </div>

            </div>
        </>
    )
}
