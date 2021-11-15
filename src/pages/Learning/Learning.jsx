import React, { useState, useRef } from 'react'
import './learning.scss'
import { useTranslation } from "react-i18next";
import LessonListItem from '../../components/learning/lessonlistitem/LessonListItem';
import LessonInformation from '../../components/learning/lessoninformation/LessonInformation'

export default function Learning() {
    const { t } = useTranslation();

    const [isVisible, setVisible] = useState(false);

    const itemRef = useRef();

    function handleDisplayLessonInformation(e) {
        e.preventDefault();
        console.log(itemRef);
        console.log(itemRef.current.offsetTop);
        console.log(itemRef.current.offsetLeft);
        console.log(itemRef.current.offsetWidth);
        console.log(itemRef.current.offsetHeight);

        if (isVisible) {
            setVisible(false);
            return;
        }
        setVisible(true);
    }

    function placeLessonInformation() {
        const s = {top:'0px', left:'0px'};
        var d = <LessonInformation style={s}></LessonInformation>;
        console.log(d);
        // d.style.position = "absolute";
        // d.style.left = x_pos + "px";
        // d.style.top = y_pos + "px";
        return d;
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
                            <li onClick={handleDisplayLessonInformation} ref={itemRef}>
                                <LessonListItem percentage="35" text="Colores" onClick={handleDisplayLessonInformation}></LessonListItem>

                            </li>

                            <li onClick={handleDisplayLessonInformation} ref={itemRef}>
                                <LessonListItem percentage="35" text="Colores" onClick={handleDisplayLessonInformation}></LessonListItem>
                            </li>
              

                        </ul>
                        {isVisible ? placeLessonInformation() : null}

                    </div>
                    <div className="learning-lesson-user-information">
                        <div>
                            <span>{t("LearningPointsWon")}</span>
                            <span>32423</span>
                        </div>
                        <div>
                            <span>{t("LearningLessonCompleted")}</span>
                            <span>3</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
