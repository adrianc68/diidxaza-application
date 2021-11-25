import React from 'react';
import './lessonresults.scss';
import Button from '../../../components/Button/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

export default function LessonResults({pointsObtained}) {
    const { t } = useTranslation();

    return (
        <div className="lessonresults-main-container">
            <div className="lessonresults-indicator-container">
                <div className="lessonresults-indicator"></div>
            </div>
            <div className="lessonresults-information-content">
                <div>
                    <span>{t("LearningLessonStatus")}</span>
                    <span>{t("Completed")}</span>
                </div>
                <div>
                    <span>{t("LearningLessonPointsWon")}</span>
                    <span>{pointsObtained}</span>
                </div>
            </div>
            <div className="lessonresults-description-content">
                <span>
                    {t("LearningLessonResultsDescription")}
                </span>
            </div>
            <div className="lessonresults-button-panel">
                <div className="div-result">
                    <Link className="link" to="/learning">
                        <Button styleName="primary-button" text={t("ButtonClose")} />
                    </Link>
                </div>
                <div className="div-result">
                    <Button styleName="green-button" text={t("ButtonShowResults")} />
                </div>
            </div>
        </div>
    )
}
