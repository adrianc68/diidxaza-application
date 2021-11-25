
export default function QuestionMultipleAnswerSolved() {
    return (
        <div className="questionsolved">
            <h3>Como se dice ahora</h3>
            < ul >
                <li className="valid-li">
                    <div className="radiobutton-container">
                        <input type="radio" id="1a" disabled="disabled" checked class="radiobutton" name="foo" />
                        <label htmlFor="1a">Unica opción 1</label>
                    </div>
                </li>
                <li className="invalid-li">
                    <div className="radiobutton-container">
                        <input type="radio" id="2b" disabled="disabled" class="radiobutton" name="foo" />
                        <label htmlFor="2b" >Unica opción 2</label>
                    </div>
                </li>
                <li className="invalid-li">
                    <div className="radiobutton-container">
                        <input type="radio" id="3b" disabled="disabled" class="radiobutton" name="foo" />
                        <label htmlFor="3b" >Unica opción 3</label>
                    </div>
                </li>
                <li className="invalid-li">
                    <div className="radiobutton-container">
                        <input type="radio" id="4a" disabled="disabled" class="radiobutton" name="foo" />
                        <label htmlFor="4a" >Unica opción 4</label>
                    </div>
                </li>
            </ul >
        </div>
    )
}
