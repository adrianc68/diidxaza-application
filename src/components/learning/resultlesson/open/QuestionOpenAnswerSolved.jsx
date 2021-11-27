
export default function QuestionOpenAnswerSolved() {
    return (
        <div className="questionsolved">
            <h3>Cómo fue el pasado si el presente fuera ahora</h3>
            <ul>
                <li className="invalid-li">
                    <div className="openanswer-input-disabled">
                        <div>
                            {/* Insert the correct answer inside the same span */}
                            <span>Respuesta correcta: Hola como estas</span>
                        </div>
                        <input type="text" disabled value="Topa" />
                    </div>
                </li>
            </ul>

        </div>
    );
}
