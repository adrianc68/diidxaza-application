import { React, useEffect, useState } from "react";
import "./checkprogress.scss";
import { useTranslation } from "react-i18next";
import ImageInformationAlt from "../../../assets/images/ide-47.svg";
import ImageInformationAlt2 from "../../../assets/images/ide-46.svg";
import { helpHttp, UrlAPI } from "../../../helpers/helpHttp";

export default function CheckProgress({ totalPoints, totalLessons }) {
    const { t } = useTranslation();

    return (
        <div className="checkprogress-main-container">
            <div className="checkprogress-content-container">
                <div className="checkprogress-description-container">
                    <ul>
                        <li>
                            <div className="checkprogress-progress-container">
                                <div className="checkprogress-presentation-left-side-container">
                                    <div className="checkprogress-presentation-up-side-container">
                                        <div className="checkprogress-side-img">
                                            <img src={ImageInformationAlt} alt={"AlternativeMessageImageDecorative"}></img>
                                        </div>
                                        <div className="checkprogress-side-text">
                                            <span className="semibold">{t("LearningPointsWon")}</span>
                                            <span>{t("CheckProgressTotalDiscussionsCommentedDescription")}</span>
                                        </div>
                                        <div className="checkprogress-user-value">
                                            <span>{totalPoints}</span>
                                        </div>
                                    </div>
                                    <div className="checkprogress-presentaiton-down-side-container">
                                        <progress className="progress-bar" max="1000000" value={totalPoints}></progress>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="checkprogress-progress-container">
                                <div className="checkprogress-presentation-left-side-container">
                                    <div className="checkprogress-presentation-up-side-container">
                                        <div className="checkprogress-side-img">
                                            <img src={ImageInformationAlt2} alt={"AlternativeMessageImageDecorative"}></img>
                                        </div>
                                        <div className="checkprogress-side-text">
                                            <span className="semibold">{t("LearningLessonCompleted")}</span>
                                            <span>{t("CheckProgressTotalDiscussionsCreatedDescription")}</span>
                                        </div>
                                        <div className="checkprogress-user-value">
                                            <span>{totalLessons}</span>
                                        </div>
                                    </div>
                                    <div className="checkprogress-presentaiton-down-side-container">
                                        <progress className="progress-bar" max="20" value={totalLessons}></progress>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
