import React from "react";
import NotFound from "../../assets/images/ide-07.svg";
import { IoMdHome } from "react-icons/io";
import { useTranslation } from "react-i18next";
import "../../translations/i18n";
import { Link } from "react-router-dom";
import "./pageNotFound.scss";
import Topbar from "../../components/topbar/Topbar";
import Button from "../../components/Button/Button";

export default function PageNotFound() {
    const { t } = useTranslation();
    return (
        <>
            <div className="pagenotfound-main-container">
                <Topbar />
                <div className="pagenotfound-img-container">
                    <img className="pagenotfound-image" src={NotFound} alt={t("altPageNotFoundImage")}></img>
                </div>
                <div className="pagenotfound-text-container">
                    <h1>{t("PageNotFound404")}</h1>
                    <h2>{t("PageNotFound")}</h2>
                    <Link className="link" to="/">
                        <Button text={t("PageNotFoundReturnHomeButton")} styleName="primary-button">
                            <IoMdHome className="icon-button" />
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
}
