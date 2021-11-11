import React from 'react'
import './learning.scss'
import { useTranslation } from "react-i18next";
import LessonListItem from '../../components/learning/lessonlistitem/LessonListItem';

export default function Learning() {
    const { t } = useTranslation();

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
                            <li>
                                <LessonListItem percentage="35" text="Colores"></LessonListItem>
                                <LessonListItem percentage="56" text="Adverbios"></LessonListItem>
                                <LessonListItem percentage="75" text="Animales"></LessonListItem>
                                <LessonListItem percentage="99" text="Objetos"></LessonListItem>
                                <LessonListItem percentage="100" text="Sinonimos"></LessonListItem>
                                <LessonListItem percentage="3" text="Conjugaciones"></LessonListItem>
                                <LessonListItem percentage="3" text="Conjugaciones"></LessonListItem>
                                <LessonListItem percentage="3" text="Conjugaciones"></LessonListItem>
                                <LessonListItem percentage="3" text="Conjugaciones"></LessonListItem>
                                <LessonListItem percentage="3" text="Conjugaciones"></LessonListItem>
                                <LessonListItem percentage="35" text="Colores"></LessonListItem>
                                <LessonListItem percentage="56" text="Adverbios"></LessonListItem>
                                <LessonListItem percentage="75" text="Animales"></LessonListItem>
                                <LessonListItem percentage="99" text="Objetos"></LessonListItem>
                                <LessonListItem percentage="100" text="Sinonimos"></LessonListItem>
                                <LessonListItem percentage="3" text="Conjugaciones"></LessonListItem>
                                <LessonListItem percentage="3" text="Conjugaciones"></LessonListItem>
                                <LessonListItem percentage="3" text="Conjugaciones"></LessonListItem>
                                <LessonListItem percentage="3" text="Conjugaciones"></LessonListItem>
                                <LessonListItem percentage="3" text="Conjugaciones"></LessonListItem>
                                <LessonListItem percentage="35" text="Colores"></LessonListItem>
                                <LessonListItem percentage="56" text="Adverbios"></LessonListItem>
                                <LessonListItem percentage="75" text="Animales"></LessonListItem>
                                <LessonListItem percentage="99" text="Objetos"></LessonListItem>
                                <LessonListItem percentage="100" text="Sinonimos"></LessonListItem>
                                <LessonListItem percentage="3" text="Conjugaciones"></LessonListItem>
                                <LessonListItem percentage="3" text="Conjugaciones"></LessonListItem>
                                <LessonListItem percentage="3" text="Conjugaciones"></LessonListItem>
                                <LessonListItem percentage="3" text="Conjugaciones"></LessonListItem>
                                <LessonListItem percentage="3" text="Conjugaciones"></LessonListItem>

                            </li>
                        </ul>
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
