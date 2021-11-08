import React from 'react'
import './answersection.scss'
import Button from '../../../components/Button/Button'
import { useTranslation } from "react-i18next";
import MultipleAnswer from '../../../components/learning/options/multiple/MultipleAnswer';
import UniqueAnswer from '../../../components/learning/options/unique/UniqueAnswer';
import OpenAnswer from '../../../components/learning/options/open/OpenAnswer';


export default function AnswerSection() {
    const { t } = useTranslation();
    return (
        <div className="answersection-main-container">
            <div className="answersection-question-information-container">
                <div>
                    <span>{t("AnswerSectionQuesion")}</span>
                    <span> ¿Como se dice cómo estás? </span>
                </div>
                <div>
                    <span>{t("AnswerSectionLevel")}</span>
                    <span>Dificil</span>
                </div>
                <div>
                    <span>{t("AnswerSectionQuestionType")}</span>
                    <span>Abierta</span>
                </div>
                <div>
                    <span>{t("AnswerSectionPointsWon")}</span>
                    <span>34903 pts.</span>
                </div>
                <div>
                    <span>{t("AnswerSectionQuestionsRemaining")}</span>
                    <span>3</span>
                </div>
            </div>

            <div className="answersection-answers-container">
                <h1>{t("AnswerSectionSelectCorrectAnswer")}</h1>

                <h2> ¿Cómo se dice cómo estás? </h2>
                <div className="answersection-answers-unique">

                </div>
                <div className="answersection-answers-multiple">
                        <div className="answersection-form-check-container">
                            {/* <MultipleAnswer/> */}
                            {/* <UniqueAnswer></UniqueAnswer> */}
                            {/* <OpenAnswer></OpenAnswer> */}
                        </div>
                </div>

            </div>


            <div className="answersection-button-panel">
                <Button styleName="primary-button" text={t("ButtonExit")} />
                <Button styleName="primary-button" text={t("ButtonNext")} />

            </div>
        </div>
    )
}
