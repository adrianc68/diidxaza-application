import React from 'react'
import './forum.scss'
import Button from '../../components/Button/Button'
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom'
import ImageInformationAlt from '../../assets/images/ide-02.svg'



export default function Forum() {
    const { t } = useTranslation();

    return (
        <div className="forum-main-container">
            <div className="forum-search-container">
                <div className="form-search-criteria">
                    <h1> Search criteria </h1>
                    <div className="form-search-input">
                        <span>{t("ForumSearchCriteriaInput")}</span>
                        <input type="text"></input>
                        <div>
                            <Button styleName="primary-button">{t("ButtonSearch")}</Button>
                        </div>
                    </div>
                    <div className="form-search-buttons">
                        <div>
                            <Button styleName="primary-button">{t("ForumSearchMostPopular")}</Button>
                        </div>
                        <div>
                            <Button styleName="primary-button">{t("ForumSearchOutstanding")}</Button>
                        </div>
                        <div>
                            <Button styleName="primary-button">{t("ForumSearchNewest")}</Button>
                        </div>
                    </div>
                </div>
                <div className="forum-discussion-list-container">
                    <div className="forum-discussion-list">
                        <h1>Lista de discusiones</h1>
                        <ul>
                            <li>
                                <div><span>Tema - Titulo - Status</span></div>
                                <div><span>Tema - Titulo - Status</span></div>
                                <div><span>Tema - Titulo - Status</span></div>
                                <div><span>Tema - Titulo - Status</span></div>
                                <div><span>Tema - Titulo - Status</span></div>
                                <div><span>Tema - Titulo - Status</span></div>
                                <div><span>Tema - Titulo - Status</span></div>
                                <div><span>Tema - Titulo - Status</span></div>
                                <div><span>Tema - Titulo - Status</span></div>
                                <div><span>Tema - Titulo - Status</span></div>
                                <div><span>Tema - Titulo - Status</span></div>
                                <div><span>Tema - Titulo - Status</span></div>
                                <div><span>Tema - Titulo - Status</span></div>
                                <div><span>Tema - Titulo - Status</span></div>
                                <div><span>Tema - Titulo - Status</span></div>
                                <div><span>Tema - Titulo - Status</span></div>
                                <div><span>Tema - Titulo - Status</span></div>
                                <div><span>Tema - Titulo - Status</span></div>
                                <div><span>Tema - Titulo - Status</span></div>
                                <div><span>Tema - Titulo - Status</span></div>
                                <div><span>Tema - Titulo - Status</span></div>
                                <div><span>Tema - Titulo - Status</span></div>
                                <div><span>Tema - Titulo - Status</span></div>
                                <div><span>Tema - Titulo - Status</span></div>
                                <div><span>Tema - Titulo - Status</span></div>
                                <div><span>Tema - Titulo - Status</span></div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="forum-create-button-panel">
                    <div>
                        <Button styleName="primary-button">{t("ButtonCreateDiscussion")}</Button>
                    </div>

                </div>
            </div>
            <div className="forum-discussion-container">
                <div className="forum-discussion-title-container">
                    <h1>title discussion</h1>
                </div>
                <div className="forum-discussion-user-data-container">
                    <img src={ImageInformationAlt} className="welcome-information-image" alt={t("WelcomeInformationAlt")}></img>                    <div className="forum-discussion-data">
                        <span>Nombre de usuario</span>
                        <span>Creado el 19 de septiembre del 2021</span>
                    </div>
                </div>
                <div className="forum-discussion-description-container">
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nobis rerum maxime, sequi impedit culpa ab, eum harum nihil distinctio assumenda consequatur ducimus laborum voluptatem ullam dolorum quasi officiis vero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit exercitationem voluptas nesciunt quasi maxime doloremque sapiente debitis earum. Nam impedit ullam quae voluptatem quos, incidunt exercitationem optio numquam facilis aperiam!</span>

                </div>
                <div className="forum-discussion-forum-button-panel-container">
                    <div>
                        <Button styleName="primary-button">{t("ButtonReportUser")}</Button>
                    </div>
                    <div>
                        <Button styleName="primary-button">{t("ButtonAddComment")}</Button>
                    </div>
                </div>
                <div className="forum-discussion-forum-comments-container">
                    <div className="forum-discussion-comment-list">
                        <ul>
                            <li>SET COMMENT GROUP CONTRROL </li>
                            <li>SET COMMENT GROUP CONTRROL </li>
                            <li>SET COMMENT GROUP CONTRROL </li>
                            <li>SET COMMENT GROUP CONTRROL </li>
                            <li>SET COMMENT GROUP CONTRROL </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
