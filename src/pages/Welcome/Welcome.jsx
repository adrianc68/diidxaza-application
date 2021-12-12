import React, { useRef } from "react";
import "./welcome.scss";
import Footer from "../../components/footer/Footer";
import { useTranslation } from "react-i18next";
import Topbar from "../../components/topbar/Topbar";
import Button from "../../components/button/Button";
import SubtitlesVideo from "../../assets/vtt/Subtitles.vtt";
import WelcomeImage from "../../assets/images/ide-22.svg";
import ImageBenefit01 from "../../assets/images/ide-11.svg";
import ImageBenefit02 from "../../assets/images/ide-15.svg";
import ImageBenefit03 from "../../assets/images/ide-12.svg";
import ImageBenefit04 from "../../assets/images/ide-14.svg";
import VideoBenefit01 from "../../assets/images/vid-02.mp4";
import AccountTypeImage from "../../assets/images/ide-23.svg";
import AccountTypePremiumImage from "../../assets/images/ide-18.svg";
import { MdLogin, MdLogout } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../helpers/Context";
import { Redirect } from "react-router-dom";

export default function Welcome() {
    const { t } = useTranslation();
    const chooseContainerRef = useRef();
    const history = useHistory();
    const { isLogged } = useContext(Context);

    function scrollToChooseContainer() {
        chooseContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }

    return (
        !isLogged ?
            <div className="welcome-main-container">
                <Topbar>
                    <div>
                        <Button text={t("ButtonLogin")} styleName="primary-button" onClick={() => history.push("/login")}>
                            <MdLogin className="icon-button" />
                        </Button>
                    </div>
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
                        <img src={WelcomeImage} className="welcome-information-image" alt={t("AlternativeMessageImageDecorative")}></img>
                    </div>
                </div>


                <div className="welcome-problems-information-container">
                    <video src={VideoBenefit01} autoPlay loop>
                        <track src={SubtitlesVideo} kind="subtitles" label="eS"></track>

                    </video>
                    <div className="welcome-problems-information">
                        <h1>{t("WelcomeProblemsInformationTitle")}</h1>
                        <p>{t("WelcomeProblemasInformationDescription")}</p>

                    </div>
                </div>

                <div className="welcome-benefits-information-container">
                    <div className="welcome-benefits-description-container">
                        <h1>{t("WelcomeBenefitsTitle")}</h1>
                        <span>{t("WelcomeBenefitsDescription")}</span>
                    </div>
                    <div className="welcome-benefits-list-container">
                        <ul>
                            <li>
                                <div className="welcome-benefits-listItem-container">
                                    <img src={ImageBenefit01} alt={t("AlternativeMessageImageDecorative")}></img>
                                    <h3>{t("WelcomeBenefitsFirstOneTitle")}</h3>
                                    <span>{t("WelcomeBenefitsFirstOne")}</span>
                                </div>
                            </li>
                            <li>
                                <div className="welcome-benefits-listItem-container">
                                    <img src={ImageBenefit02} alt={t("AlternativeMessageImageDecorative")}></img>
                                    <h3>{t("WelcomeBenefitsSecondOneTitle")}</h3>
                                    <span> {t("WelcomeBenefitsSecondOne")}</span>
                                </div>
                            </li>
                            <li>
                                <div className="welcome-benefits-listItem-container">
                                    <img src={ImageBenefit03} alt={t("AlternativeMessageImageDecorative")}></img>
                                    <h3>{t("WelcomeBenefitsThirdOneTitle")}</h3>
                                    <span>{t("WelcomeBenefitsThirdOne")}</span>
                                </div>
                            </li>
                            <li>
                                <div className="welcome-benefits-listItem-container">
                                    <img src={ImageBenefit04} alt={t("AlternativeMessageImageDecorative")}></img>
                                    <h3>{t("WelcomeBenefitsFourOneTitle")}</h3>
                                    <span>{t("WelcomeBenefitsFourOne")}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div ref={chooseContainerRef} className="welcome-choose-account-type-container">
                    <div className="welcome-choose-title">
                        <h1>{t("WelcomeChooseAccountTitle")}</h1>
                        <div className="welcome-choose-description">
                            <p>{t("WelcomeChooseAccountTitleDescription")}</p>
                        </div>
                    </div>
                    <div className="welcome-choose-list-container">
                        <ul className="welcome-choose-account-type-ul">

                            <li className="welcome-choose-account-type-li">
                                <div className="welcome-choose-listItem-container">
                                    <div className="welcome-choose-image-container">
                                        <img src={AccountTypeImage} alt={t("AlternativeMessageImageDecorative")}></img>
                                    </div>
                                    <div className="welcome-choose-description-container">
                                        <div className="welcome-choose-description-text-container">
                                            <h2>{t("WelcomeAccountTypeFree")}</h2>
                                            <span>{t("WelcomeAccountTypeFreeDescription")}</span>
                                            <ul>
                                                <li className="valid-li">{t("WelcomeAccountTypeFreeBenefit01")}</li>
                                                <li className="valid-li">{t("WelcomeAccountTypeFreeBenefit02")}</li>
                                                <li className="valid-li">{t("WelcomeAccountTypeFreeBenefit03")}</li>
                                                <li className="valid-li">{t("WelcomeAccountTypeFreeBenefit04")}</li>
                                                <li className="valid-li">{t("WelcomeAccountTypeFreeBenefit05")}</li>
                                            </ul>

                                        </div>
                                        <div className="welcome-choose-description-button-container">
                                            {/* <Link className="link" to="/signUp"> */}
                                            <Button text={t("ButtonSignUp")} styleName="primary-button" onClick={() => history.push("/signUP")} />
                                            {/* </Link> */}
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="welcome-choose-account-type-li">
                                <div className="welcome-choose-listItem-container">
                                    <div className="welcome-choose-image-container">
                                        <img src={AccountTypePremiumImage} alt={t("AlternativeMessageImageDecorative")}></img>
                                    </div>
                                    <div className="welcome-choose-description-container">
                                        <div className="welcome-choose-description-text-container">
                                            <h2>{t("WelcomeAccountTypePremium")}</h2>
                                            <span>{t("WelcomeAccountTypePremiumDescription")}</span>
                                            <ul>
                                                <li className="invalid-li">{t("WelcomeAccountTypePremiumBenefit01")}</li>
                                            </ul>
                                        </div>
                                        <div className="welcome-choose-description-button-container">
                                            <span>{t("WelcomeAccountTypeNoAvailable")}</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <Footer></Footer>
            </div >
            :
            <Redirect exact to={"/"} />        
    );
}
