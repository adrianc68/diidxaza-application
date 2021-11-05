import React from 'react'
import './forum.scss'
import Button from '../../components/Button/Button'
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom'
import ImageInformationAlt from '../../assets/images/ide-02.svg'
import Comment from '../../components/forum/comment/Comment';



export default function Forum() {
    const { t } = useTranslation();

    return (
        <div className="forum-main-container">
            <div className="forum-content-container">
                <div className="forum-search-container">
                    <div className="form-search-criteria">
                        <h1> {t("ForumSearchCriteriaTitle")} </h1>
                        <div className="form-search-input">
                            <div className="form-search-container-input">
                                <span>{t("ForumSearchCriteriaInput")}</span>
                                <input type="text"></input>
                            </div>
                            <div>
                                <Button styleName="primary-button">{t("ButtonSearch")}</Button>
                            </div>
                        </div>
                        <div className="form-search-buttons">
                            <div>
                                <Button styleName="text-button black-text active" text={t("ForumSearchMostPopular")}></Button>
                            </div>
                            <div>
                                <Button styleName="text-button black-text" text={t("ForumSearchOutstanding")}></Button>
                            </div>
                            <div>
                                <Button styleName="text-button black-text" text={t("ForumSearchNewest")}></Button>
                            </div>
                        </div>
                    </div>
                    <div className="forum-discussion-list-container">
                        <div className="forum-discussion-list">
                            <h1>{t("ForumListDiscussion")}</h1>


                            <div className="forum-create-button-panel">
                                <span>{t("ForumWantToCreateNewDiscussion")}</span>
                                <div>
                                    <Button styleName="primary-button">{t("ButtonCreateDiscussion")}</Button>
                                </div>

                            </div>

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

                </div>
                <div className="forum-discussion-container">
                    <h1>{t("NoAvalaible")}</h1>
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
                    <div className="forum-discussion-forum-comments-container">
                        <div className="forum-discussion-comment-list">
                            <ul>
                                <li>
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
                                </li>
                                <li>
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
                                </li>
                                <li>
                                    <Comment></Comment>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
