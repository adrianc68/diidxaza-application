import React from 'react'
import './multipleanswer.scss'

export default function MultipleAnswer({ answers, handleChange }) {
    return (
        <form className="multipleanswer-form">
            <ul>
                {answers.length > 0 && answers.map(element => (
                    <li>
                        <div className="radiobutton-container">
                            <input className="radiobutton" id={element._id} type="checkbox" value={element.answers} name="answers" onChange={handleChange}/>
                            <label htmlFor={element._id}>{element.answers}</label>
                        </div>
                    </li>
                ))}
            </ul>
        </form>
    )
}
