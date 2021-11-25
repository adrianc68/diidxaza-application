import React from 'react'
import './uniqueanswer.scss'
export default function UniqueAnswer({answers, handleChange}) {
    return (
        <form className="uniqueanswer-form">
            <ul>
                {answers.length > 0 && answers.map(element => (
                    <li>
                        <div className="radiobutton-container">
                            <input className="radiobutton" id={element._id} type="radio" value={element.answers} name="answers" onChange={handleChange}/>
                            <label htmlFor={element._id}>{element.answers}</label>
                        </div>
                    </li>
                ))} 
            </ul>
        </form>
    )
}
