import React, { useEffect, useLayoutEffect, useRef } from 'react'
import './welcome.scss'
import Footer from '../../components/footer/Footer'
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom'
import Topbar from '../../components/topbar/Topbar'
import Button from '../../components/Button/Button'

import ImageInformationAlt from '../../assets/images/ide-02.svg'
import { MdLogin, MdLogout } from 'react-icons/md'

export default function Welcome() {
    const { t } = useTranslation();
    const chooseContainerRef = useRef()

    function scrollToChooseContainer() {
        chooseContainerRef.current.scrollIntoView({ behavior: 'smooth' })
    }


    return (
        <div className="welcome-main-container">
            <Topbar>
                <Link className="link" to="/login">
                    <Button text={t("ButtonLogin")} styleName="primary-button">
                        <MdLogin className="icon-button" />
                    </Button>
                </Link>
                <div>
                    <Button text={t("ButtonSignUp")} styleName="secondary-button" onClick={scrollToChooseContainer}>
                        <MdLogout className="icon-button" />
                    </Button>

                </div>

            </Topbar>

            <div className="welcome-main-information-container">
                <div className="welcome-main-information-text">
                    <h1>{t("WelcomeHeader")}</h1>
                    <h2>{t("WelcomeSubtitle")}</h2>
                    <p>{t("WelcomeIntroduction")}</p>
                    <div>
                        <Button text={t("ButtonStartNow")} styleName="primary-button" onClick={scrollToChooseContainer}></Button>
                    </div>
                </div>
                <div className="welcome-main-information-image">
                    <img src={ImageInformationAlt} className="welcome-information-image" alt={t("WelcomeInformationAlt")}></img>
                </div>
            </div>


            <div className="welcome-problems-information-container">
                <h1>Language Problems Container</h1>
            </div>

            <div className="welcome-benefits-information-container">
                <div className="welcome-benefits-description-container">
                    <h1>{t("WelcomeBenefitsTitle")}</h1>
                    <span>{t("WelcomeBenefitsDescription")}</span>
                    <img src={ImageInformationAlt} alt={t("WelcomeInformationAlt")}></img>
                </div>
                <div className="welcome-benefits-list-container">
                    <ul>
                        <li>
                            <div className="welcome-benefits-listItem-container">
                                <img src={ImageInformationAlt} alt={t("WelcomeInformationAlt")}></img>
                                <h3>{t("WelcomeBenefitsFirstOneTitle")}</h3>
                                <span>{t("WelcomeBenefitsFirstOne")}</span>
                            </div>
                        </li>
                        <li>
                            <div className="welcome-benefits-listItem-container">
                                <img src={ImageInformationAlt} alt={t("WelcomeInformationAlt")}></img>
                                <h3>{t("WelcomeBenefitsSecondOneTitle")}</h3>
                                <span> {t("WelcomeBenefitsSecondOne")}</span>
                            </div>
                        </li>
                        <li>
                            <div className="welcome-benefits-listItem-container">
                                <img src={ImageInformationAlt} alt={t("WelcomeInformationAlt")}></img>
                                <h3>{t("WelcomeBenefitsThirdOneTitle")}</h3>
                                <span>{t("WelcomeBenefitsThirdOne")}</span>
                            </div>
                        </li>
                        <li>
                            <div className="welcome-benefits-listItem-container">
                                <img src={ImageInformationAlt} alt={t("WelcomeInformationAlt")}></img>
                                <h3>{t("WelcomeBenefitsFourOneTitle")}</h3>
                                <span>{t("WelcomeBenefitsFourOne")}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div ref={chooseContainerRef} className="welcome-choose-account-type-container">
                <div className="welcome-choose-list-container">
                    <ul>
                        <li>
                            <div className="welcome-choose-listItem-container">
                                <div className="welcome-choose-image-container">
                                    <img src={ImageInformationAlt} alt={t("WelcomeInformationAlt")}></img>
                                </div>
                                <div className="welcome-choose-description-container">
                                    <div className="welcome-choose-description-text-container">
                                        <h1>{t("WelcomeAccountTypeFree")}</h1>
                                        <span>{t("WelcomeAccountTypeFreeDescription")}</span>
                                    </div>
                                    <div className="welcome-choose-description-button-container">
                                        <Link className="link" to="/signUp">
                                            <Button text={t("ButtonSignUp")} styleName="primary-button" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
            <h1> Footer </h1>

            <Footer></Footer>


        </div >
    )
}
