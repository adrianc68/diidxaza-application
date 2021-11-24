import React, { useEffect, useState } from 'react'
import './answersection.scss'
import Button from '../../../components/Button/Button'
import { useTranslation } from "react-i18next";
import MultipleAnswer from '../../../components/learning/options/multiple/MultipleAnswer';
import UniqueAnswer from '../../../components/learning/options/unique/UniqueAnswer';
import { helpHttp, UrlAPI } from "../../../helpers/helpHttp";
import ImageInformationAlt from '../../../assets/images/ide-22.svg';
import { useLessonForm } from '../../../hooks/useLessonForm';
import { Link } from 'react-router-dom';
import { BiError } from 'react-icons/bi';

export default function AnswerSection({ lessonID }) {
    const { t } = useTranslation();
    const [questions, setQuestions] = useState([]);
    const [question, setQuestion] = useState({});
    const [questionsChange, setQuestionsChange] = useState({});
    const [answers, setAnswers] = useState([]);
    const [className, setClassName] = useState("errorDelete");

    useEffect(() => {
        helpHttp().get(UrlAPI + "questions/" + lessonID, {
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem("token")
            }
        }).then((response) => {
            if (response.length > 0) {
                helpHttp().get(UrlAPI + "answers/" + response[0]._id, {
                    headers: {
                        Accept: "application/json",
                        'Content-Type': 'application/json',
                        'Authorization': sessionStorage.getItem("token")
                    }
                }).then((responseAnswers) => {
                    if (responseAnswers.length > 0) {
                        setQuestions(response)
                        setQuestionsChange(response)
                        setQuestion(response[0])
                        setAnswers(responseAnswers)
                    } else {
                        setClassName("not-found-questions")
                    }
                })
            } else {
                setClassName("not-found-questions")
            }
        })
    }, []);

    const {
        handleClick,
        handleClickNext,
        handleChangeAnswerOnly,
        handleChangeAnswerMultiple,
        loading,
        loadingError,
        pointsObtained
    } = useLessonForm(setQuestion, questionsChange, setQuestionsChange, setAnswers, question, answers);

    return (
        questions.length > 0 && <form className="answersection-main-container">
            <div className="answersection-question-information-container">
                <div>
                    <span>{t("AnswerSectionQuesion")}</span>
                    <span>{question.question}</span>
                </div>
                <div>
                    <span>{t("AnswerSectionLevel")}</span>
                    <span>{t(question.level)}</span>
                </div>
                <div>
                    <span>{t("AnswerSectionQuestionType")}</span>
                    <span>{t(question.typeQuestion)}</span>
                </div>
                <div>
                    <span>{t("AnswerSectionPointsWon")}</span>
                    <span>{question.score} pts.</span>
                </div>
                <div>
                    <span>{t("AnswerSectionQuestionsRemaining")}</span>
                    <span>{questionsChange.length - 1}</span>
                </div>
                <div>
                    <span>{t("PointsObtained")}</span>
                    <span>{pointsObtained}</span>
                </div>
            </div>
            <div className="answersection-answers-container">
                <h3>{t("AnswerSectionSelectCorrectAnswer")}</h3>
                <h2> {question.question} </h2>
                <div className="answersection-answers-unique">
                </div>
                <div className="answersection-answers-multiple">
                    <div className="answersection-form-check-container">
                        {question.typeQuestion === "multiple" && <MultipleAnswer answers={answers} handleChange={handleChangeAnswerMultiple} />}
                        {question.typeQuestion === "only" && <UniqueAnswer answers={answers} handleChange={handleChangeAnswerOnly}></UniqueAnswer>}
                    </div>
                </div>
                <div className="system-message-container">
                    {loading && <p className="errorMessage"><BiError /> {t("NotFoundAnswer")}</p>}
                    {loadingError && <p className="errorMessage"><BiError />  {t("ErrorMessage")}</p>}
                </div>
            </div>
            <div className="answersection-button-panel">
                <div>
                    <Link className="link" to="/learning">
                        <Button styleName="orange-button" text={t("ButtonExit")} />
                    </Link>
                </div>
                {questionsChange.length > 1 && <div>
                    <Button styleName="primary-button" text={t("ButtonNext")} onClick={handleClickNext} />
                </div>}
                {questionsChange.length === 1 && <div>
                    <Button styleName="primary-button" text={t("ButtonFinish")} onClick={(e) => { handleClick(e, lessonID) }} />
                </div>}
            </div>
        </form> || <div className={className}>
            <h3>{t("LearningNotQuestion")}</h3>
            <img src={ImageInformationAlt} alt=""></img>
        </div>
    )
}
