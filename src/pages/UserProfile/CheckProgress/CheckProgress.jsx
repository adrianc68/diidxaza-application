import React from 'react'
import './checkprogress.scss'
import { useTranslation } from "react-i18next";
import ImageInformationAlt from '../../../assets/images/ide-02.svg'
import Button from '../../../components/Button/Button'
import { Link } from 'react-router-dom'


export default function CheckProgress() {
    const { t } = useTranslation();

    return (
        <div className="checkprogress-main-container">
            <div className="checkprogress-description-container">
                <ul>
                    <li>
                        <div className="checkprogress-progress-container">
                            <div className="checkprogress-presentation-left-side-container">
                                <div className="checkprogress-presentation-up-side-container">
                                    <div className="checkprogress-side-img">
                                        <img src={ImageInformationAlt} alt={t("WelcomeInformationAlt")}></img>
                                    </div>
                                    <div className="checkprogress-side-text">
                                        <h1>{t("CheckProgressTotalDiscussionsCommented")}</h1>
                                        <span>{t("CheckProgressTotalDiscussionsCommentedDescription")}</span>
                                    </div>
                                    <div className="checkprogress-user-value">
                                        <span>1</span>
                                    </div>
                                </div>
                                <div className="checkprogress-presentaiton-down-side-container">
                                    <h1> progress bar </h1>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="checkprogress-progress-container">
                            <div className="checkprogress-presentation-left-side-container">
                                <div className="checkprogress-presentation-up-side-container">
                                    <div className="checkprogress-side-img">
                                        <img src={ImageInformationAlt} alt={t("WelcomeInformationAlt")}></img>
                                    </div>
                                    <div className="checkprogress-side-text">
                                        <h1>{t("CheckProgressTotalDiscussionsCreated")}</h1>
                                        <span>{t("CheckProgressTotalDiscussionsCreatedDescription")}</span>
                                    </div>
                                    <div className="checkprogress-user-value">
                                        <span>1</span>
                                    </div>
                                </div>
                                <div className="checkprogress-presentaiton-down-side-container">
                                    <h1> progress bar </h1>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="checkprogress-progress-container">
                            <div className="checkprogress-presentation-left-side-container">
                                <div className="checkprogress-presentation-up-side-container">
                                    <div className="checkprogress-side-img">
                                        <img src={ImageInformationAlt} alt={t("WelcomeInformationAlt")}></img>
                                    </div>
                                    <div className="checkprogress-side-text">
                                        <h1>{t("CheckProgressTotalWordsLearned")}</h1>
                                        <span>{t("CheckProgressTotalWordsLearnedDescription")}</span>
                                    </div>
                                    <div className="checkprogress-user-value">
                                        <span>1</span>
                                    </div>
                                </div>
                                <div className="checkprogress-presentaiton-down-side-container">
                                    <h1> progress bar </h1>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="checkprogress-progress-container">
                            <div className="checkprogress-presentation-left-side-container">
                                <div className="checkprogress-presentation-up-side-container">
                                    <div className="checkprogress-side-img">
                                        <img src={ImageInformationAlt} alt={t("WelcomeInformationAlt")}></img>
                                    </div>
                                    <div className="checkprogress-side-text">
                                        <h1>{t("CheckProgressTotalLessonsRemaining")}</h1>
                                        <span>{t("CheckProgressTotalLessonsRemainingDescription")}</span>
                                    </div>
                                    <div className="checkprogress-user-value">
                                        <span>0</span>
                                    </div>
                                </div>
                                <div className="checkprogress-presentaiton-down-side-container">
                                    <h1> progress bar </h1>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="checkprogress-progress-container">
                            <div className="checkprogress-presentation-left-side-container">
                                <div className="checkprogress-presentation-up-side-container">
                                    <div className="checkprogress-side-img">
                                        <img src={ImageInformationAlt} alt={t("WelcomeInformationAlt")}></img>
                                    </div>
                                    <div className="checkprogress-side-text">
                                        <h1>{t("CheckProgressTotalLessonsRealized")}</h1>
                                        <span>{t("CheckProgressTotalLessonsRealizedDescription")}</span>
                                    </div>
                                    <div className="checkprogress-user-value">
                                        <span>13453453453453</span>
                                    </div>
                                </div>
                                <div className="checkprogress-presentaiton-down-side-container">
                                    <h1> progress bar </h1>
                                </div>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>

            <div className="checkprogress-display-graphic-container">
                <h1>{t("CheckProgressGraphic")}</h1>
                <span>{t("CheckProgressGraphicDescription")}</span>
                <div className="checkprogress-graphic-container">
                    <img src={ImageInformationAlt} alt={t("WelcomeInformationAlt")}></img>
                </div>
                <div className="checkprogress-button-panel">
                    <Button styleName="primary-button" text={t("ButtonClose")}></Button>
                </div>
            </div>

        </div>
    )
}
