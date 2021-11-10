import React from 'react'
import './lessonresults.scss'
import Button from '../../../components/Button/Button'
import { useTranslation } from "react-i18next";

export default function LessonResults() {
    const { t } = useTranslation();

    return (
        <div className="lessonresults-main-container">
            <div className="lessonresults-indicator-container">
                <div className="lessonresults-indicator"></div>
            </div>
            <div className="lessonresults-information-content">
                <div>
                    <span>{t("LearningLessonStatus")}</span>
                    <span>Completado</span>
                </div>
                <div>
                    <span>{t("LearningLessonPointsWon")}</span>
                    <span>3000</span>
                </div>
            </div>
            <div className="lessonresults-description-content">
                <span>
                    {t("LearningLessonResultsDescription")}
                </span>
            </div>
            <div className="lessonresults-button-panel">
                <Button styleName="primary-button" text={t("ButtonClose")} />
                <Button styleName="primary-button" text={t("ButtonShowResults")} />

            </div>
        </div>
    )
}
