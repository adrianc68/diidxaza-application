import './resultlesson.scss'
import { useTranslation } from "react-i18next";
import QuestionUniqueAnswerSolved from '../../../components/learning/resultlesson/unique/QuestionUniqueAnswerSolved';
import QuestionMultipleAnswerSolved from '../../../components/learning/resultlesson/multiple/QuestionMultipleAnswerSolved';
import QuestionOpenAnswerSolved from '../../../components/learning/resultlesson/open/QuestionOpenAnswerSolved';
import CongratulationsImage from '../../../assets/images/ide-44.svg'
import DiidxazaLogo from '../../../components/logo/DiidxazaLogo';
import { FiCheck, FiX, FiPlusSquare, FiDivide, FiPlus } from 'react-icons/fi';


export default function ResultLesson() {
    const { t } = useTranslation();

    return (
        <div className="resultlesson-main-container">
            <div className="resultlesson-content-container">
                {/* <div className="h1-title-black">
                    <h1>Nombre de la lección</h1>
                </div> */}
                <div className="resultlesson-content">
                    <div className="resultlesson-general-data-container">
                        <div className="resultlesson-general-data-greetings">
                            <div className="resultlesson-general-data-greetings-information">
                                <div className="resutlesson-gdgi-congratulation">
                                    {/* Win  */}
                                    {/* <h1>{t("ResultLessonWeCanImproveMessage").replace('$', sessionStorage.getItem("name") + " " + sessionStorage.getItem("lastname"))}</h1> */}
                                    {/* Lose */}
                                    <h1>{t("ResultLessonCongratulationsMessage").replace('$', sessionStorage.getItem("name") + " " + sessionStorage.getItem("lastname"))}</h1>
                                    <div className="resultlesson-gdgic-lesson">
                                        <h4>{t("ResultLessonCompletedLesson")}</h4>
                                        {/* Nombre de la lección */}
                                        <h1>Estupefacientes</h1>
                                    </div>
                                    <h4>{t("ResultLessonCompletedLessonPoints")}</h4>
                                    {/* Puntos obtenidos de la lección */}
                                    <span>505 pts</span>
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
                                            <span className="color-black">15</span>
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
                                            <span className="color-green">13</span>
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
                                            <span className="color-red">2</span>
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
                                            <span className="color-blue">5</span>
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
                                            <span>10</span>
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
                                <li>
                                    <div className="questionResult-list-item">
                                        <QuestionUniqueAnswerSolved></QuestionUniqueAnswerSolved>
                                        <span className="questionResult-points-span">50 pts de 100 pts.</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="questionResult-list-item">
                                        <QuestionMultipleAnswerSolved></QuestionMultipleAnswerSolved>
                                        <span className="questionResult-points-span">50 pts de 100 pts</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="questionResult-list-item">
                                        <QuestionOpenAnswerSolved></QuestionOpenAnswerSolved>
                                        <span className="questionResult-points-span">0 pts de 100 pts</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <DiidxazaLogo styleClass="logo-black-link just-icon"></DiidxazaLogo>
                    </div>
                </div>
            </div>


        </div>
    )
}
