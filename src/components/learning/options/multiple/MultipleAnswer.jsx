import React from 'react'
import './multipleanswer.scss'

export default function MultipleAnswer() {
    return (
        <form className="multipleanswer-form">
            <ul>
                <li>
                    <div className="checkbox-container">
                        <input type="checkbox" id="1" class="checkbox" />
                        <label htmlFor="1">Item 1</label>
                    </div>

                </li>
                <li>
                    <div className="checkbox-container">
                        <input type="checkbox" id="2" class="checkbox" />
                        <label htmlFor="2" class="label-checkbox">Item 1</label>
                    </div>
                </li>
                <li>
                    <div className="checkbox-container">
                        <input type="checkbox" id="3" class="checkbox" />
                        <label htmlFor="3" class="label-checkbox">Item 1</label>
                    </div>
                </li>
                <li>
                    <div className="checkbox-container">
                        <input type="checkbox" id="4" class="checkbox" />
                        <label htmlFor="4" class="label-checkbox">Item 1</label>
                    </div>
                </li>
            </ul>
        </form>
    )
}
