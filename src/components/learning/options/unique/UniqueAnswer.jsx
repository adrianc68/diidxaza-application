import { useTranslation } from "react-i18next";
import "./uniqueAnswer.scss";

export default function UniqueAnswer({ answers, handleChange }) {
    const { t } = useTranslation();

    return (
        <fieldset className="uniqueanswer-form">
            <legend className="color-gray">{t("LearningOptionsAvailable")}</legend>
            <ul>
                {answers.length > 0 &&
                    answers.map((element) => (
                        <li>
                            <div className="radiobutton-container">
                                <input className="radiobutton" id={element._id} type="radio" value={element.answers} name="answers" onChange={handleChange} />
                                <label htmlFor={element._id}>{element.answers}</label>
                            </div>
                        </li>
                    ))}
            </ul>
        </fieldset>
    );
}
