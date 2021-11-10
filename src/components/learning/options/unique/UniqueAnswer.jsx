import React from 'react'
import './uniqueanswer.scss'
export default function UniqueAnswer() {
    return (
        <form className="uniqueanswer-form">
            <ul>
                <li>
                    <div className="radiobutton-container">
                        <input type="radio" id="1a" class="radiobutton" name="foo" />
                        <label htmlFor="1a">Item opasdfapod aposdkaposdksapo</label>
                    </div>
                </li>
                <li>
                    <div className="radiobutton-container">
                        <input type="radio" id="2b" class="radiobutton" name="foo" />
                        <label htmlFor="2b" >Item 1</label>
                    </div>
                </li>
                <li>
                    <div className="radiobutton-container">
                        <input type="radio" id="3b" class="radiobutton" name="foo" />
                        <label htmlFor="3b" >Item 1</label>
                    </div>
                </li>
                <li>
                    <div className="radiobutton-container">
                        <input type="radio" id="4a" class="radiobutton" name="foo" />
                        <label htmlFor="4a" >Item 1</label>
                    </div>
                </li>
            </ul>
        </form>
    )
}
