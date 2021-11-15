import { React, useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { NavLink } from 'react-router-dom'
import './lessonlistitem.scss'

export default function LessonListItem(props) {
   
    return (
        <div className="lessonlistitem-main-container">
            <div className="lessonlistitem-content">
                <CircularProgressbar value={props.percentage} text={props.percentage + "%"} > </CircularProgressbar>
                <span>{props.text}</span>
                {/* <LessonInformation></LessonInformation>  */}
            </div>
        </div>
    )
}
