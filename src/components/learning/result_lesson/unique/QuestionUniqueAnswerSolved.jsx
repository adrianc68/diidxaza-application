import { useTranslation } from "react-i18next";

export default function QuestionUniqueAnswerSolved({ question, answers, answersUser }) {
    const { t } = useTranslation();

    return (
        <fieldset className="questionsolved">
            <legend className="color-gray">{question.question}</legend>
            <ul>
                {answers.length > 0 &&
                    answers.map(
                        (element) =>
                            (element.isValid === true && (
                                <li className="valid-li" disabled>
                                    <div className="radiobutton-container">
                                        {(element.answers === answersUser && <input type="radio" id={element._id} checked disabled class="radiobutton" />) ||
                                            (element.answers !== answersUser && <input type="radio" id={element._id} disabled class="radiobutton" />)}
                                        <label htmlFor={element._id}>{element.answers}</label>
                                    </div>
                                </li>
                            )) ||
                            (element.isValid === false && (
                                <li className="invalid-li">
                                    <div className="radiobutton-container">
                                        {(element.answers === answersUser && <input type="radio" id={element._id} checked disabled class="radiobutton" />) ||
                                            (element.answers !== answersUser && <input type="radio" id={element._id} disabled class="radiobutton" />)}
                                        <label htmlFor={element._id}>{element.answers}</label>
                                    </div>
                                </li>
                            ))
                    )}
            </ul>
        </fieldset>
    );
}
