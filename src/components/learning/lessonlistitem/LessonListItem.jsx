import { React, useEffect } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { Link } from 'react-router-dom'
import './lessonlistitem.scss'

export default function LessonListItem(props) {

    return (
        <div className="lessonlistitem-main-container">
            <div className="lessonlistitem-content">
                <Link className="link" to="/lesson">
                    <CircularProgressbar value={props.percentage} text={props.percentage + "%"} > </CircularProgressbar>
                    <span>{props.text}</span>
                </Link>
            </div>
        </div>
    )
}
