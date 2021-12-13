import React, { useEffect, useState, useContext } from "react";
import "./answerSection.scss";
import Button from "../../../components/Button/Button";
import { useTranslation } from "react-i18next";
import MultipleAnswer from "../../../components/learning/options/multiple/MultipleAnswer";
import UniqueAnswer from "../../../components/learning/options/unique/UniqueAnswer";
import { helpHttp, UrlAPI } from "../../../helpers/HelpHttp";
import ImageInformationAlt from "../../../assets/images/ide-22.svg";
import { useLessonForm } from "../../../hooks/useLessonForm";
import { Link } from "react-router-dom";
import { BiError } from "react-icons/bi";
import LessonResults from "../../../components/learning/lessonresults/LessonResults";
import AlertMessage from "../../../components/alert/AlertMessage";
import { NUMBER } from "../../../helpers/Number";
import { RESPONSE_STATUS } from "../../../helpers/Response";
import { ModalContext } from "../../../helpers/ModalContext";

export default function AnswerSection({ lesson }) {
    const { t } = useTranslation();
    const [questions, setQuestions] = useState([]);
    const [question, setQuestion] = useState({});
    const [questionsChange, setQuestionsChange] = useState({});
    const [answers, setAnswers] = useState([]);
    const [className, setClassName] = useState("errorDelete");
    const [isVisible, setVisible] = useState(false);

    const { setStatusModal, setComponent } = useContext(ModalContext);

    const handleModal = (ComponentTagA, sizeHeightA, sizeWidthA, handleModalFunction,  titleA) => {
        const initialValue = {
        sizeHeight: sizeHeightA,
        sizeWidth: sizeWidthA,
        title: titleA,
        object: ComponentTagA,
        handleModal: handleModalFunction,
        };
        setComponent(initialValue);
        setStatusModal(true);
    };
    
    const handleModalAnswer =  (content, handleModalFunction, title) => {
        handleModal(<AlertMessage content={content} handleModal={handleModalFunction}></AlertMessage>,"180px","450px",handleModalFunction,title);
    } 


    useEffect(() => {
        helpHttp().get(UrlAPI + "questions/" + lesson._id, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Authorization": sessionStorage.getItem("token")
            }
        }).then((response) => {
            if (response.length > NUMBER.ZERO) {
                helpHttp().get(UrlAPI + "answers/" + response[0]._id, {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Authorization": sessionStorage.getItem("token")
                    }
                }).then((responseAnswers) => {
                    if (responseAnswers.length > NUMBER.ZERO) {
                        setQuestions(response);
                        setQuestionsChange(response);
                        setQuestion(response[0]);
                        setAnswers(responseAnswers);
                    } else {
                        setClassName("not-found-questions");
                        if (responseAnswers.status === RESPONSE_STATUS.INSUFFICIENT_SPACE) {
                            handleModalAnswer(t("RefreshToken"),() => { window.location.href = "../login";});
                        } else {
                            if (responseAnswers.status === RESPONSE_STATUS.UNAUTHORIZED) {
                                handleModalAnswer(t("ErrorToken"),() => { setStatusModal(false); });
                            }
                        }
                    }
                });
            } else {
                setClassName("not-found-questions");
                if (response.status === RESPONSE_STATUS.INSUFFICIENT_SPACE) {
                    handleModalAnswer(t("RefreshToken"),() => { window.location.href = "../login";});
                } else {
                    if (response.status === RESPONSE_STATUS.UNAUTHORIZED) {
                        handleModalAnswer(t("ErrorToken"),() => { setStatusModal(false); });
                    }
                }
            }
        });
    }, []);

    const {
        handleClick,
        handleClickNext,
        handleChangeAnswerOnly,
        handleChangeAnswerMultiple,
        loading,
        loadingError,
        resultsQuestions,
        pointsObtained
    } = useLessonForm(setQuestion, questionsChange, setQuestionsChange, setAnswers, question, answers, setVisible, lesson._id);

    function placeLessonResults() {
        const sytleLesson = { top: "0px", left: "0px" };
        var lessonResults = <LessonResults style={sytleLesson} pointsObtained={pointsObtained} resultsQuestions={resultsQuestions} lesson={lesson}></LessonResults>;
        return lessonResults;
    }

    return (
        questions.length > NUMBER.ZERO && <form className="answersection-main-container">
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
            <div className="result-container">
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
                        {loading && <p className="errorInput">{t("NotFoundAnswer")}</p>}
                        {loadingError && <p className="errorMessage"><BiError />  {t("ErrorMessage")}</p>}
                    </div>
                </div>
                {isVisible ? placeLessonResults() : null}
            </div>
            {!isVisible && <div className="answersection-button-panel">
                <div>
                    <Link className="link" to="/learning">
                        <Button styleName="orange-button" text={t("ButtonExit")} />
                    </Link>
                </div>
                {questionsChange.length > NUMBER.ONE && <div>
                    <Button styleName="primary-button" text={t("ButtonNext")} onClick={handleClickNext} />
                </div>}
                {questionsChange.length === NUMBER.ONE && <div>
                    <Button styleName="primary-button" text={t("ButtonFinish")} onClick={handleClick} />
                </div>}
            </div>}
        </form> || <div className={className}>
            <h3>{t("LearningNotQuestion")}</h3>
            <img src={ImageInformationAlt} alt=""></img>
        </div>
    );
}
