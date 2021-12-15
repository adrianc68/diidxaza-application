import React, { useState, useRef, useEffect, useContext } from "react";
import "./learning.scss";
import { useTranslation } from "react-i18next";
import LessonListItem from "../../components/learning/lesson_list_item/LessonListItem";
import LessonInformation from "../../components/learning/lesson_information/LessonInformation";
import { helpHttp, UrlAPI } from "../../helpers/helpHttp";
import AlertMessage from "../../components/alert/AlertMessage";
import { NUMBER } from "../../helpers/Number";
import { RESPONSE_STATUS } from "../../helpers/Response";
import { ModalContext } from "../../hooks/ModalContext";

const totalPoints = (lessonRecords) => {
    let totalPointsRecord = 0;
    if (lessonRecords.length > NUMBER.ZERO) {
        lessonRecords.map((element) => (totalPointsRecord = totalPointsRecord + element.pointsObtained));
    }
    return totalPointsRecord;
};

export default function Learning() {
    const { t } = useTranslation();
    const [isVisible, setVisible] = useState(false);
    const itemRef = useRef();
    const [lessons, setLessons] = useState([]);
    const [lesson, setLesson] = useState({});
    const [lessonRecords, setLessonRecords] = useState([]);

    const { setStatusModal, setComponent } = useContext(ModalContext);

    const handleModal = (ComponentTagA, sizeHeightA, sizeWidthA, handleModalFunction, titleA) => {
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

    const handleModalLearning = (content, handleModal, title) => {
        handleModal(<AlertMessage content={content} handleModal={handleModal}></AlertMessage>, "180px", "450px", handleModal, title);
    };

    useEffect(() => {
        helpHttp()
            .get(UrlAPI + "lessons", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: sessionStorage.getItem("token"),
                },
            })
            .then((response) => {
                if (response.length > NUMBER.ZERO) {
                    setLessons(response);
                    helpHttp()
                        .get(UrlAPI + "lessonRecords/" + sessionStorage.getItem("id"), {
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                                Authorization: sessionStorage.getItem("token"),
                            },
                        })
                        .then((responseRecords) => {
                            if (responseRecords.length > NUMBER.ZERO) {
                                setLessonRecords(responseRecords);
                            } else {
                                if (responseRecords.status === RESPONSE_STATUS.INSUFFICIENT_SPACE) {
                                    handleModalLearning(t("RefreshToken"), () => {
                                        window.location.href = "login";
                                    });
                                } else {
                                    if (responseRecords.status === RESPONSE_STATUS.UNAUTHORIZED) {
                                        handleModalLearning(t("ErrorToken"), () => {
                                            setStatusModal(false);
                                        });
                                    }
                                }
                            }
                        });
                } else {
                    if (response.status === RESPONSE_STATUS.INSUFFICIENT_SPACE) {
                        handleModalLearning(t("RefreshToken"), () => {
                            window.location.href = "login";
                        });
                    } else {
                        if (response.status === RESPONSE_STATUS.UNAUTHORIZED) {
                            handleModalLearning(t("ErrorToken"), () => {
                                setStatusModal(false);
                            });
                        }
                    }
                }
            });
    }, []);

    function handleDisplayLessonInformation(e, lessonCurrent) {
        e.preventDefault();
        if (isVisible) {
            setVisible(false);
            return;
        }
        setLesson(lessonCurrent);
        setVisible(true);
    }

    function placeLessonInformation() {
        const sytleLesson = { top: "0px", left: "0px" };
        let lessonInformation = <LessonInformation style={sytleLesson} lesson={lesson} setVisible={setVisible}></LessonInformation>;
        return lessonInformation;
    }

    return (
        <div className="learning-main-container">
            <div className="learning-content-contain">
                <div className="h1-title-black">
                    <h1>{t("LearningTitle")}</h1>
                    <span>{t("LearningDescription")}</span>
                </div>
                <div className="learning-lesson-information">
                    <div className="learning-lessons-content">
                        <ul>
                            {lessons.length > NUMBER.ZERO &&
                                lessons.map((element) => (
                                    <li
                                        onClick={(e) => {
                                            handleDisplayLessonInformation(e, element);
                                        }}
                                        ref={itemRef}
                                    >
                                        <LessonListItem isRecordHistory={lessonRecords.find((history) => history.idLesson === element._id)} lesson={element}></LessonListItem>
                                    </li>
                                ))}
                        </ul>
                        {isVisible ? placeLessonInformation() : null}
                    </div>
                    <div className="learning-lesson-user-information">
                        <div>
                            <span className="color-gray">{t("LearningPointsWon")}</span>
                            <span>{totalPoints(lessonRecords)}</span>
                        </div>
                        <div>
                            <span className="color-gray">{t("LearningLessonCompleted")}</span>
                            <span>{lessonRecords.length}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
