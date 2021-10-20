import React from 'react'
import { School } from "@material-ui/icons"
import './welcome.scss'
import Footer from '../../components/footer/Footer'
import { useTranslation } from "react-i18next";
import "../../translations/i18n";
import { Link } from 'react-router-dom';
import Topbar from '../../components/topbar/Topbar'
import Button from '../../components/Button/Button'

import ImageInformationAlt from '../../assets/images/ide-02.svg'

export default function Welcome() {
    const { t } = useTranslation();

    return (
        <div className="welcome-main-container">


            <Topbar/>
            <Button text="Iniciar " styleName=".primary-button"/>



            <div className="welcome-main-information-container">
                <div className="welcome-main-information-text">
                    <h1>{t("WelcomeHeader")}</h1>
                    <h2>{t("WelcomeSubtitle")}</h2>
                    <p>{t("WelcomeIntroduction")}</p>
                </div>
                <div className="welcome-main-information-image">
                    <img src={ImageInformationAlt} className="welcome-information-image" alt={t("WelcomeInformationAlt")}></img>
                </div>

            </div>

            <div className="welcome-problems-information-container">
                <h1>Language Problems</h1>
            </div>

            <div className="welcome-benefits-information-container">
                <h1>Benefits Information</h1>
            </div>

            <div className="welcome-choose-account-type-container">
                <h1>Start choosing your account type free / premium (no available)</h1>
            </div>

            <Footer></Footer>


        </div >
    )
}
