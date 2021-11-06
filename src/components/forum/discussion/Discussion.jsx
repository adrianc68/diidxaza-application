import React from 'react'
import './discussion.scss'
import { Link } from 'react-router-dom'
import ImageInformationAlt from '../../../assets/images/ide-02.svg'
import Comment from '../comment/Comment';
import { useTranslation } from 'react-i18next';
import Button from '../../../components/Button/Button'
import AddComment from '../addcomment/AddComment';


export default function Discussion() {
    const { t } = useTranslation();
    return (
        <div className="forum-discussion-container">
            <h1>¿Como crear los procedimientos de acuerdo a lo estudiado en la primera sección de lo que acontece?</h1>
            <div className="forum-discussion-user-data-container">
                <img src={ImageInformationAlt} className="welcome-information-image" alt={t("WelcomeInformationAlt")}></img>
                <div className="forum-discussion-data">
                    <span> Angel Adrian Camal Garcia </span>
                    <span>Creado el 19 de septiembre del 2021</span>
                </div>
            </div>
            <div className="forum-discussion-description-container">
                <span className="semibold">Descripcion:</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatum facilis eaque cum fugiat illo recusandae nemo error, officiis, porro et aperiam fuga sunt doloremque sequi numquam iste laudantium soluta totam excepturi placeat. Voluptates at itaque magnam repudiandae, nihil delectus minima quisquam dolor ex fugiat error illo porro? Ullam, nihil voluptatum laboriosam ex enim inventore, voluptatem nostrum architecto error, hic a reprehenderit fugit natus esse odit culpa facere magni beatae fuga quae repellendus repellat pariatur perspiciatis? Aliquam voluptatum odit id. Nihil commodi non facere numquam excepturi nisi harum tempora magnam labore? Quisquam at qui nam hic, excepturi neque molestias minima nulla illo ab iste placeat esse repellendus ullam tenetur praesentium nostrum, incidunt expedita molestiae eaque dolorem quis corporis reiciendis beatae. Atque ab vero, tenetur quisquam magni reprehenderit optio doloremque sapiente fugiat sequi iure ipsa vel. Nisi minus maxime, animi atque placeat beatae nobis modi necessitatibus recusandae autem molestiae blanditiis at.</span>

            </div>
            <div className="forum-discussion-forum-button-panel-container">
                <h2>Comentarios (12)</h2>
                <div>
                    <Button styleName="primary-button">{t("ButtonReportUser")}</Button>
                </div>
                <div>
                    <Button styleName="primary-button">{t("ButtonAddComment")}</Button>
                </div>
            </div>
            <div className="forum-child-comme">
            <AddComment/>

            </div>
            <div className="forum-discussion-forum-comments-container">
                <div className="forum-discussion-comment-list">
                    <ul>
                        <li>
                            <Comment></Comment>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
