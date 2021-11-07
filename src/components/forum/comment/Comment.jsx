import React from 'react'
import './comment.scss'
import Button from '../../../components/Button/Button'
import ImageInformationAlt from '../../../assets/images/ide-02.svg'
import { useTranslation } from "react-i18next";
import AddComment from '../addcomment/AddComment';


export default function Comment( {children}) {
    const { t } = useTranslation();

    return (
        <div className="forum-comment">
            <img src={ImageInformationAlt} className="welcome-information-image" alt={t("WelcomeInformationAlt")}></img>
            <div className="forum-comment-user-data">
                <span> Angel Adrian Camal Garcia </span>
                <span>Creado el 19 de septiembre del 2021</span>
                <div className="forum-comment-content">
                    <span>Lorem ipsum dolo q id. Nihil at.</span>
                </div>
                <div className="forum-comment-button-panel">
                    <div>
                        <Button styleName="primary-button">{t("ButtonReportUser")}</Button>
                    </div>
                    <div>
                        <Button styleName="primary-button">{t("ButtonAddComment")}</Button>
                    </div>
                </div>
                <div className="forum-comment-child">
                <AddComment/>
                {children}
                </div>

            </div>
        </div>
    )
}
