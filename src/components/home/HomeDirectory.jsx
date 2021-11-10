import React from 'react'
import './homedirectory.scss'
import ImageAlt from '../../assets/images/ide-17.svg'
import ImageAlt2 from '../../assets/images/ide-15.svg'
import ImageAlt3 from '../../assets/images/ide-16.svg'
import { useTranslation } from "react-i18next";


export default function HomeDirectory() {
    const { t } = useTranslation();
    return (
        <div className="home-container">
            <div className="home-covid-container">
                <div className="home-covid-description">
                    <h2>{t("HomeWelcomeCovidTitle")}</h2>
                    <span>{t("HomeWelcomeCovidDescription")}</span>
                </div>
                <div className="home-img-banner"></div>
            </div>

            <div className="home-welcome-title-container">
                <div className="home-welcome-container">
                    <h2>{t("HomeWelcomeTitle")}</h2>
                    <span>{t("HomeWelcomeDescription")}</span>
                </div>
                <div className="home-welcome-history-container">
                    <h3>{t("HomeWelcomeHistoryTitle")}</h3>
                    <span>{t("HomeWelcomeHistoryDescription")}</span>
                </div>
            </div>

            <div className="home-features-container">
                <h2>{t("HomeWelcomeFeaturesTitle")}</h2>
                <div className="home-features-content">
                    <div className="home-features-forum">
                        <h2>{t("SidebarForum")}</h2>
                        <div>
                            <img src={ImageAlt} alt={"AlternativeMessageImageDecorative"}></img>
                            <span>{t("HomeWelcomeFeaturesForum")}</span>
                        </div>
                    </div>
                    <div className="home-features-songs">
                        <h2>{t("SidebarSongs")}</h2>
                        <div>
                            <img src={ImageAlt2} alt={"AlternativeMessageImageDecorative"}></img>
                            <span>{t("HomeWelcomeFeaturesSongs")}</span>
                        </div>
                    </div>
                    <div className="home-features-dictionary">
                        <h2>{t("SidebarDictionary")}</h2>
                        <div>
                            <img src={ImageAlt3} alt={"AlternativeMessageImageDecorative"}></img>
                            <span>{t("HomWelcomeFeaturesDictionary")}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
