import React from 'react'
import './forum.scss'
import Button from '../../components/Button/Button'
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom'
import ImageInformationAlt from '../../assets/images/ide-02.svg'
import Comment from '../../components/forum/comment/Comment';
import Discussion from '../../components/forum/discussion/Discussion';
import DiscussionListItem from '../../components/forum/discussionlistitem/DiscussionListItem';



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
                                    <Link className="link" to="/adddiscusion">
                                    <Button styleName="primary-button">{t("ButtonCreateDiscussion")}</Button>
                                    </Link>
                                </div>

                            </div>

                            <ul>
                                <li>
                                    <DiscussionListItem></DiscussionListItem>
                                </li>
                                
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="forum-discussion-content">
                    <Discussion></Discussion>
                </div>
            </div>
        </div>

    )
}
