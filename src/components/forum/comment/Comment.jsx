import React from 'react'
import './comment.scss'
import Button from '../../../components/Button/Button'
import ImageInformationAlt from '../../../assets/images/ide-02.svg'
import { useTranslation } from "react-i18next";


export default function Comment() {
    const { t } = useTranslation();

    return (
        <div className="forum-comment">
            <img src={ImageInformationAlt} className="welcome-information-image" alt={t("WelcomeInformationAlt")}></img>
            <div className="forum-comment-user-data">
                <span> Angel Adrian Camal Garcia </span>
                <span>Creado el 19 de septiembre del 2021</span>
                <div className="forum-comment-content">
                    <span>Lorem ipsum dolo quae repellendus repellat pariatur perspiciatis? Aliquam voluptatum odit id. Nihil commodi non facere numquam excepturi nisi harum tempora magnam labore? Quisquam at qui nam hic, excepturi neque molestias minima nulla illo ab iste placeat esse repellendus ullam tenetur praesentium nostrum, incidunt expedita molestiae eaque dolorem quis corporis reiciendis beatae. Atque ab vero, tenetur quisquam magni reprehenderit optio doloremque sapiente fugiat sequi iure ipsa vel. Nisi minus maxime, animi atque placeat beatae nobis modi necessitatibus recusandae autem molestiae blanditiis at.</span>
                </div>
                <div className="forum-comment-button-panel">
                    <div>
                        <Button styleName="primary-button">{t("ButtonReportUser")}</Button>
                    </div>
                    <div>
                        <Button styleName="primary-button">{t("ButtonAddComment")}</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
