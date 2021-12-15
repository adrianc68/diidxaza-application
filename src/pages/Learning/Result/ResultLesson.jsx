import "./resultLesson.scss";
import { useTranslation } from "react-i18next";
import QuestionUniqueAnswerSolved from "../../../components/learning/result_lesson/unique/QuestionUniqueAnswerSolved";
import QuestionMultipleAnswerSolved from "../../../components/learning/result_lesson/multiple/QuestionMultipleAnswerSolved";
import CongratulationsImage from "../../../assets/images/ide-44.svg";
import DiidxazaLogo from "../../../components/logo/DiidxazaLogo";
import { FiCheck, FiX, FiPlusSquare, FiDivide, FiPlus } from "react-icons/fi";
import { NUMBER } from "../../../helpers/Number";

export default function ResultLesson({ resultsQuestions, lesson, pointsObtained }) {
    const { t } = useTranslation();

    return (
        <div className="resultlesson-main-container">
            <div className="resultlesson-content-container">
                <div className="resultlesson-content">
                    <div className="resultlesson-general-data-container">
                        <div className="resultlesson-general-data-greetings">
                            <div className="resultlesson-general-data-greetings-information">
                                <div className="resutlesson-gdgi-congratulation">
                                    {lesson.pointsTotal === pointsObtained && <h2>{t("ResultLessonCongratulationsMessage").replace("$", sessionStorage.getItem("name") + " " + sessionStorage.getItem("lastname"))}</h2>}
                                    {lesson.pointsTotal !== pointsObtained && <h2>{t("ResultLessonWeCanImproveMessage").replace("$", sessionStorage.getItem("name") + " " + sessionStorage.getItem("lastname"))}</h2>}
                                    <div className="resultlesson-gdgic-lesson">
                                        {lesson.pointsTotal === pointsObtained && <h3>{t("ResultLessonCompletedLesson")}</h3>}
                                        {lesson.pointsTotal !== pointsObtained && <h3>{t("ResultLessonCompleted")}</h3>}
                                        <span className="">{lesson.name}</span>
                                    </div>
                                    <h3>{t("ResultLessonCompletedLessonPoints")}</h3>
                                    <span>{pointsObtained} pts</span>
                                </div>
                            </div>
                            <div className="resultlesson-general-data-greetins-image">
                                <img src={CongratulationsImage} alt={t("AlternativeMessageImageDecorative")} />
                            </div>
                        </div>
                        <div className="resultlesson-general-data-list">
                            <br />
                            <ul>
                                <li>
                                    <div className="resultlesson-general-data-list-item">
                                        <div className="resultlesson-general-data-li-img">
                                            <FiPlusSquare className="resultlesson-gdli-icon"></FiPlusSquare>
                                        </div>
                                        <div className="resultlesson-general-data-text">
                                            <span>{t("ResultLessonTotalQuestions")}</span>
                                            <span className="color-black">{resultsQuestions.length}</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="resultlesson-general-data-list-item">
                                        <div className="resultlesson-general-data-li-img">
                                            <FiCheck className="resultlesson-gdli-icon color-green"></FiCheck>
                                        </div>
                                        <div className="resultlesson-general-data-text">
                                            <span>{t("ResultLessonCorrectQuestions")}</span>
                                            <span className="color-darker-green">{resultsQuestions.filter((element) => element.isCorrect === true).length}</span>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="resultlesson-general-data-list-item">
                                        <div className="resultlesson-general-data-li-img">
                                            <FiX className="resultlesson-gdli-icon color-red"></FiX>
                                        </div>
                                        <div className="resultlesson-general-data-text">
                                            <span>{t("ResultLessonIncorrectQuestions")}</span>
                                            <span className="color-red">{resultsQuestions.filter((element) => element.isCorrect === false).length}</span>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="resultlesson-general-data-list-item">
                                        <div className="resultlesson-general-data-li-img">
                                            <FiPlus className="resultlesson-gdli-icon color-blue"></FiPlus>
                                        </div>
                                        <div className="resultlesson-general-data-text">
                                            <span>{t("ResultLessonEasyQuestions")}</span>
                                            <span className="color-blue">{resultsQuestions.filter((element) => element.question.level === "easy").length}</span>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="resultlesson-general-data-list-item">
                                        <div className="resultlesson-general-data-li-img">
                                            <FiDivide className="resultlesson-gdli-icon"></FiDivide>
                                        </div>
                                        <div className="resultlesson-general-data-text">
                                            <span>{t("ResultLessonHardQuestions")}</span>
                                            <span>{resultsQuestions.filter((element) => element.question.level === "difficult").length}</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h2>{t("ResultLessonTitleShowQuestions")}</h2>

                    <div className="questionResult-main-container">
                        <div className="questionresult-list-container">
                            <ul>
                                {resultsQuestions.length > NUMBER.ZERO &&
                                    resultsQuestions.map(
                                        (element) =>
                                            (element.question.typeQuestion === "only" && (
                                                <li>
                                                    <div className="questionResult-list-item">
                                                        <QuestionUniqueAnswerSolved question={element.question} answers={element.answers} answersUser={element.answerAccount}></QuestionUniqueAnswerSolved>
                                                        <span className="questionResult-points-span">
                                                            {element.pointsAnswer} pts de {element.question.score} pts
                                                        </span>
                                                    </div>
                                                </li>
                                            )) ||
                                            (element.question.typeQuestion === "multiple" && (
                                                <li>
                                                    <div className="questionResult-list-item">
                                                        <QuestionMultipleAnswerSolved question={element.question} answers={element.answers} answersUser={element.answerAccount}></QuestionMultipleAnswerSolved>
                                                        <span className="questionResult-points-span">
                                                            {element.pointsAnswer} pts de {element.question.score} pts
                                                        </span>
                                                    </div>
                                                </li>
                                            ))
                                    )}
                            </ul>
                        </div>
                        <DiidxazaLogo styleClass="logo-black-link just-icon"></DiidxazaLogo>
                    </div>
                </div>
            </div>
        </div>
    );
}
