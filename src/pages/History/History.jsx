import React from 'react'
import './history.scss'
import { useTranslation } from "react-i18next";
import ImageAlt1 from '../../assets/images/history-01.jpeg'
import ImageAlt2 from '../../assets/images/history-02.jpeg'

export default function History() {
    const { t } = useTranslation();
    return (
        <div className="history-main-container">
            <h1>{t("HistoryTitle")}</h1>
            <div className="history-background-content">
                <div>
                    <h2>{t("HistoryBackgroundTitle")}</h2>
                    <span className="history-span-bleeding">{t("HistoryBackgroundDescription")}</span>
                </div>
                <img src={ImageAlt1} alt={t("AlternativeMessageImageDecorative")}></img>
            </div>

            <div className="history-ubication-content">
                <div>
                    <h2>{t("HistoryUbicationTitle")}</h2>
                    <span className="history-span-bleeding">{t("HistoryUbicationDescription")}</span>
                </div>
            </div>

            <div className="history-features-content">
                <img src={ImageAlt2} alt={t("AlternativeMessageImageDecorative")}></img>
                <div>
                    <h2>{t("HistoryFeaturesTitle")}</h2>
                    <span className="history-span-bleeding">{t("HistoryFeaturesDescription")}</span>
                    <ul>
                        <li>
                            <span className="semibold">{t("HistoryFeatures01")}</span>
                            <span>{t("HistoryFeatures01Description")}</span>
                        </li>
                        <li>
                            <span className="semibold">{t("HistoryFeatures02")}</span>
                            <span>{t("HistoryFeatures02Description")}</span>
                        </li>
                        <li>
                            <span className="semibold">{t("HistoryFeatures03")}</span>
                            <span>{t("HistoryFeatures03Description")}</span>
                        </li>
                        <li>
                            <span className="semibold">{t("HistoryFeatures04")}</span>
                            <span>{t("HistoryFeatures04Description")}</span>
                        </li>
                        <li>
                            <span className="semibold">{t("HistoryFeatures05")}</span>
                            <span>{t("HistoryFeatures05Description")}</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="history-costumes-content">
                <h2>{t("HistoryCostumeTitle")}</h2>
                <span className="history-span-bleeding">{t("HistoryCostumeDescription")}</span>
                <ul>
                    <li>
                        <span className="semibold">{t("HistoryCostumbe01")}</span>
                        <span>{t("HistoryCostumbe01Description")}</span>
                    </li>
                    <li>
                        <span className="semibold">{t("HistoryCostumbe02")}</span>
                        <span>{t("HistoryCostumbe02Description")}</span>
                    </li>
                    <li>
                        <span className="semibold">{t("HistoryCostumbe03")}</span>
                        <span>{t("HistoryCostumbe03Description")}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

