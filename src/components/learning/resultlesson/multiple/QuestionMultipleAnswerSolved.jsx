
export default function QuestionMultipleAnswerSolved({ question, answers, answersUser }) {
    return (
        <div className="questionsolved">
            <h3>{question.question}</h3>
            < ul >
                {answers.length > 0 && answers.map((element) => (
                    element.isValid === true && <li className="valid-li" disable="disabled">
                        <div className="checkbox-container">
                            {answersUser.find((elementUser) => elementUser.value === element.answers) != undefined && <input type="checkbox" id={element._id} checked disabled class="checkbox" /> ||
                                answersUser.find((elementUser) => elementUser.value === element.answers) == undefined && <input type="checkbox" id={element._id} disabled class="checkbox" />}
                            <label htmlFor={element._id}>{element.answers}</label>
                        </div>
                    </li> ||

                    element.isValid === false && <li className="invalid-li">
                        <div className="checkbox-container">
                            {answersUser.find((elementUser) => elementUser.value === element.answers) != undefined && <input type="checkbox" id={element._id} checked disabled class="checkbox" /> ||
                                answersUser.find((elementUser) => elementUser.value === element.answers) == undefined && <input type="checkbox" id={element._id} disabled class="checkbox" />}
                            <label htmlFor={element._id}>{element.answers}</label>
                        </div>
                    </li>
                ))}
            </ul >
        </div>
    );
}
