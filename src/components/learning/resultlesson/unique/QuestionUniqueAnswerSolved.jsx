
export default function QuestionUniqueAnswerSolved({ question, answers }) {
    return (
        // {/* // <li>
        //     //     {
        //     //         options.map((answer) => {
        //     //             <div className="radiobutton-container">
        //     //                 <input type="radio" id={answer.id} class="radiobutton" disabled="disabled" checked={answer.checked} name="foo" />
        //     //                 <label htmlFor={answanswerers.id}>{answer.title}</label>
        //     //             </div>
        //     //         })
        //     //     }
        //     // </li> */}
        <div className="questionsolved">
            <h3>Como se dice el pasado del antepasado</h3>
            < ul >
                <li className="valid-li" disable="disabled">
                    <div className="checkbox-container">
                        <input type="checkbox" id="1" checked disabled class="checkbox" />
                        <label htmlFor="1">Opcion Multiple 1</label>
                    </div>
                </li>
                <li className="invalid-li">
                    <div className="checkbox-container">
                        <input type="checkbox" id="1" disabled class="checkbox" />
                        <label htmlFor="1">Opcion Multiple 2</label>
                    </div>
                </li>
                <li className="valid-li">
                    <div className="checkbox-container">
                        <input type="checkbox" id="1" disabled class="checkbox" />
                        <label htmlFor="1">Opcion Multiple 3</label>
                    </div>
                </li>
                <li className="invalid-li">
                    <div className="checkbox-container">
                        <input type="checkbox" id="1" disabled checked class="checkbox" />
                        <label htmlFor="1">Opcion Multiple 4</label>
                    </div>
                </li>
            </ul >
        </div>
    )
}