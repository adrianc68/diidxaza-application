import "./lessonInformation.scss";
import Button from "../../button_application/Button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function LessonInformation({ lesson, setVisible }) {
    const { t } = useTranslation();

    return (
        <div className="lesson-main-container">
            <div className="lesson-indicator-container">
                <div className="lesson-indicator"></div>
            </div>
            <div className="lesson-information-content">
                <div>
                    <span>{t("LearningLessonStatus")}</span>
                    <span>{t("LearningAvailable")}</span>
                </div>
                <div>
                    <span>{t("LearningLessonPointsWon")}</span>
                    <span>{lesson.pointsTotal}</span>
                </div>
            </div>
            <div className="lesson-description-content">
                <span>{lesson.description}</span>
            </div>
            <div className="lesson-button-panel">
                <div>
                    <Button
                        styleName="orange-button"
                        text={t("ButtonCancel")}
                        onClick={(e) => {
                            setVisible(false);
                        }}
                    />
                </div>
                <div>
                    <Link
                        className="link"
                        to={{
                            pathname: "/answers/" + lesson.name,
                            state: {
                                lesson,
                            },
                        }}
                    >
                        <Button styleName="primary-button" text={t("ButtonStartLesson")} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
