import React, { useState, useRef, useEffect} from 'react'
import './learning.scss'
import { useTranslation } from "react-i18next";
import LessonListItem from '../../components/learning/lessonlistitem/LessonListItem';
import LessonInformation from '../../components/learning/lessoninformation/LessonInformation';
import { helpHttp, UrlAPI } from "../../helpers/helpHttp";

const totalPoints = (lessonRecords) => {
    let totalPointsRecord = 0;
    if(lessonRecords.length > 0){
        lessonRecords.map(element => (
            totalPointsRecord = totalPointsRecord+element.pointsObtained
        ))
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
    useEffect(() => {
        helpHttp().get(UrlAPI + "lessons",{
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem("token")
            }
        }).then((response) => {
            if (response.length>0) {
                setLessons(response)
                helpHttp().get(UrlAPI + "lessonRecords/"+sessionStorage.getItem("id"),{
                    headers: {
                        Accept: "application/json",
                        'Content-Type': 'application/json',
                        'Authorization': sessionStorage.getItem("token")
                    }
                }).then((response) => {
                    if (!response.status) {
                        setLessonRecords(response)
                    }
                })
            }
        })
    }, []);

    function handleDisplayLessonInformation(e,lessonCurrent) {
        e.preventDefault();
        if (isVisible) {
            setVisible(false);
            return;
        }
        setLesson(lessonCurrent);
        setVisible(true);
    }

    function placeLessonInformation() {
        const sytleLesson = {top:'0px', left:'0px'};
        var lessonInformation = <LessonInformation style={sytleLesson} lesson={lesson} setVisible={setVisible}></LessonInformation>;
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
                            {lessons.length > 0 && lessons.map(element => (
                                <li onClick={(e)=>{handleDisplayLessonInformation(e,element)}} ref={itemRef}>
                                    <LessonListItem isRecordHistory={lessonRecords.find(history => history.idLesson===element._id)} lesson={element}></LessonListItem>
                                </li>
                            ))}
                        </ul>
                        {isVisible ? placeLessonInformation() : null}
                    </div>
                    <div className="learning-lesson-user-information">
                        <div>
                            <span>{t("LearningPointsWon")}</span>
                            <span>{totalPoints(lessonRecords)}</span>
                        </div>
                        <div>
                            <span>{t("LearningLessonCompleted")}</span>
                            <span>{lessonRecords.length}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
