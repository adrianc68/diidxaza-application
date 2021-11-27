
export default function QuestionUniqueAnswerSolved({ question, answers, answersUser }) {
    return (
        <div className="questionsolved">
            <h3>{question.question}</h3>
            < ul >
                {answers.length > 0 && answers.map((element) => (
                    element.isValid === true && <li className="valid-li" disable="disabled">
                        <div className="radiobutton-container">
                            {element.answers === answersUser && <input type="radio" id={element._id} checked disabled="disabled" class="radiobutton" /> ||
                                element.answers !== answersUser && <input type="radio" id={element._id} disabled="disabled" class="radiobutton" />}
                            <label htmlFor={element._id}>{element.answers}</label>
                        </div>
                    </li> ||

                    element.isValid === false && <li className="invalid-li">
                        <div className="radiobutton-container">
                            {element.answers === answersUser && <input type="radio" id={element._id} checked disabled="disabled" class="radiobutton" /> ||
                                element.answers !== answersUser && <input type="radio" id={element._id} disabled="disabled" class="radiobutton" />}
                            <label htmlFor={element._id}>{element.answers}</label>
                        </div>
                    </li>
                ))}
            </ul >
        </div>
    );
}