import React from 'react'
import './forum.scss'
import Button from '../../components/Button/Button'
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom'
import Discussion from '../../components/forum/discussion/Discussion';
import DiscussionListItem from '../../components/forum/discussionlistitem/DiscussionListItem';
import {useForum} from "../../hooks/useDiscussionForm";
import AddComment from '../../components/forum/addcomment/AddComment';


const initialForm = {
    comment: "", 
    idAccount: sessionStorage.getItem("id"),
    idDiscussion: ""
};

const validationsForm = (title) => {
    let errors = {};
    title = title.trim();
    if (title.length === 0) {
      errors.title = "Error";
    }
    return errors;
};

const validationsFormComment = (comment) => {
    let errors = {};
    comment = comment.trim();
    let regexComment = /^[\wÑñÁáÉéÍíÓóÚúÜü!?¡¿.,# ]{5,600}$/;
    if (comment.length === 0) {
        errors.comment = "Error";
    }
    else{
        if (!regexComment.test(comment)) {
            errors.comment = "Error";
        }
    }
    return errors;
};


export default function Forum() {
    const { t } = useTranslation();

    const {
        title,
        loading,
        handleChange,
        handleSubmit,
        handleBlur,
        discussions,
        handleClickNews,
        handleClickPopulars,
        handleClickFollowing,
        discussion,
        handleClickDiscussion,
        response,
        loadingDiscussion,
        foundDiscussion,
        comments,
        imageAccount,
        handleChangeComment,
        handleSubmitComment,
        handleBlurComment,
        formComment,
        errorsComment,
        handleClickComment,
        loadingComment,
        icon,
        className,
        responseComment,
        commentLenght,
        numberComments
    } = useForum(validationsForm, validationsFormComment,initialForm);

    return (
        <div className="forum-main-container">
            <div className="forum-content-container">
                <div className="forum-search-container">
                    <div className="form-search-criteria">
                        <h1> {t("ForumSearchCriteriaTitle")} </h1>
                        <form onSubmit={handleSubmit}>
                            <div className="form-search-input">
                                <div className="form-search-container-input">
                                    <span>{t("ForumSearchCriteriaInput")}</span>
                                    <input name="title" type="text" onChange={handleChange} onBlur={handleBlur} value={title} required></input>
                                </div>
                                <div>
                                    <Button styleName="primary-button" type="submit">{t("ButtonSearch")}</Button>
                                </div>
                            </div>
                        </form>
                        <div className="form-search-buttons">
                            <div>
                                <Button styleName="text-button black-text" onClick={handleClickPopulars} text={t("ForumSearchMostPopular")}></Button>
                            </div>
                            <div>
                                <Button styleName="text-button black-text" onClick={handleClickNews} text={t("ForumSearchNewest")}></Button>
                            </div>
                            <div>
                                <Button styleName="text-button black-text" onClick={handleClickFollowing} text={t("ForumSearchOutstanding")}></Button>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="forum-discussion-list-container">
                        <div className="forum-discussion-list">
                            <h1>{t("ForumListDiscussion")}</h1>
                            <div className="forum-create-button-panel">
                                <span>{t("ForumWantToCreateNewDiscussion")}</span>
                                <div>
                                    <Link className="link" to="/discussion">
                                        <Button styleName="primary-button">{t("ButtonCreateDiscussion")}</Button>
                                    </Link>
                                </div>

                            </div>
                            <ul>
                                {discussions.length > 0 && discussions.map(element => (
                                    <li onClick={(e) =>{handleClickDiscussion(e,element._id)}}>
                                        <DiscussionListItem discussion={element}></DiscussionListItem>
                                    </li>
                                ))}
                                {loading && <p className="p-semibold">{t("NotFoundRecords")}</p>}
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="forum-discussion-content">
                    {foundDiscussion && <Discussion discussion={discussion} numberComments={numberComments} comments={comments} imageAccount={imageAccount}>
                        <AddComment handleChangeComment={handleChangeComment} handleSubmitComment={handleSubmitComment} loadingComment={loadingComment}
                            handleBlurComment={handleBlurComment} formComment={formComment} errorsComment={errorsComment} handleClickComment={handleClickComment}
                            icon={icon} className={className} responseComment={responseComment} commentLenght={commentLenght}/>
                    </Discussion>}
                </div>
            </div>
        </div>
    )
}
