import React, { useState, useEffect } from "react";
import "./forum.scss";
import Button from "../../components/Button/Button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Discussion from "../../components/forum/discussion/Discussion";
import DiscussionListItem from "../../components/forum/discussionlistitem/DiscussionListItem";
import { useForum } from "../../hooks/useDiscussionForm";
import AddComment from "../../components/forum/addcomment/AddComment";
import Modal from "../../components/modal/Modal";
import AlertMessage from "../../components/alert/AlertMessage";
import { helpHttp, UrlAPI } from "../../helpers/helpHttp";
import ImageInformationAlt from "../../assets/images/ide-22.svg";

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
    else {
        if (!regexComment.test(comment)) {
            errors.comment = "Error";
        }
    }
    return errors;
};


export default function Forum() {
    const { t } = useTranslation();
    const [discussions, setDiscussions] = useState([]);

    const {
        title,
        loading,
        handleChange,
        handleSubmit,
        handleBlur,
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
        numberComments,
        responseModalForum,
        modalForum,
        setModalForum,
        handleClickDeleteComment,
        modalToken,
        setModalToken,
        handleClickFollow,
        imagesComments,
        setActiveClassFilterButtons,
        removeActiveClassFilterButton,
    } = useForum(validationsForm, validationsFormComment, initialForm, setDiscussions);

    useEffect(() => {
        setActiveClassFilterButtons();
        helpHttp().get(UrlAPI + "discussions", {
            headers: {
                Accept: "application/json",
                "Authorization": sessionStorage.getItem("token")
            },
        }).then((response) => {
            if (response.length > 0) {
                setDiscussions(response);
            } else {
                setDiscussions([]);
            }
        });
    }, []);

    return (
        <div className="forum-main-container">
            <div className="forum-content-container">
                <div className="forum-search-container">
                    <h1>{t("ForumListDiscussion")}</h1>
                    <div className="forum-discussion-list-container">
                        <div className="form-search-criteria">
                            <form onSubmit={handleSubmit}>
                                <div className="form-search-input">
                                    <div className="form-search-container-input">
                                        <span>{t("ForumSearchCriteriaInput")}</span>
                                        <input name="title" type="text" onChange={handleChange} onBlur={handleBlur} value={title} required></input>
                                    </div>
                                    <div>
                                        <Button styleName="primary-button" onClick={removeActiveClassFilterButton} type="submit">{t("ButtonSearch")}</Button>
                                    </div>
                                </div>
                            </form>
                            <div className="form-search-buttons">
                                <div className="forum-button-filter-button">
                                    <Button styleName="text-button black-text" onClick={handleClickPopulars} text={t("ForumSearchMostPopular")}></Button>
                                </div>
                                <div className="forum-button-filter-button" >
                                    <Button styleName="text-button black-text" onClick={handleClickNews} text={t("ForumSearchNewest")}></Button>
                                </div>
                                <div className="forum-button-filter-button">
                                    <Button styleName="text-button black-text" onClick={handleClickFollowing} text={t("ForumSearchOutstanding")}></Button>
                                </div>
                            </div>
                        </div>
                        <div className="forum-discussion-list">
                            <ul>
                                {discussions.length > 0 && discussions.map((element) => (
                                    <li onClick={(e) => { handleClickDiscussion(e, element._id); }}>
                                        <DiscussionListItem discussion={element}></DiscussionListItem>
                                    </li>
                                ))}
                                {loading &&
                                    <div className="no-found-records p-semibold">
                                        <span>{t("NotFoundDiscussions")}</span>
                                    </div>
                                }
                            </ul>
                            <div className="forum-create-button-panel">
                                <span>{t("ForumWantToCreateNewDiscussion")}</span>
                                <div>
                                    <Link className="link" to="/discussion">
                                        <Button styleName="primary-button">{t("ButtonCreateDiscussion")}</Button>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div className="forum-discussion-content">
                    {
                        foundDiscussion === false && loadingDiscussion === false ?
                            <div className="no-found-records">
                                <span>{t("SelectDiscussion")}</span>
                            </div>
                            :
                            foundDiscussion && <Discussion imagesComments={imagesComments} discussion={discussion} numberComments={numberComments} comments={comments} imageAccount={imageAccount} setModalToken={setModalToken} handleClickDeleteComment={handleClickDeleteComment} handleClickFollow={handleClickFollow}>
                                <AddComment handleChangeComment={handleChangeComment} handleSubmitComment={handleSubmitComment} loadingComment={loadingComment}
                                    handleBlurComment={handleBlurComment} formComment={formComment} errorsComment={errorsComment} handleClickComment={handleClickComment}
                                    icon={icon} className={className} responseComment={responseComment} commentLenght={commentLenght} />
                            </Discussion>
                    }


                    {loadingDiscussion &&
                        <div className="not-found-discussion">
                            <h3>{response}</h3>
                            <img src={ImageInformationAlt} alt=""></img>
                        </div>}
                </div>
            </div>
            {modalForum && <Modal handleModal={() => { setModalForum(false); }} sizeHeight="20" sizeWidth="35">
                <AlertMessage content={responseModalForum} handleModal={() => { setModalForum(false); }}></AlertMessage>
            </Modal>}
            {modalToken && <Modal handleModal={() => { window.location.href = "login"; }} sizeHeight="20" sizeWidth="35">
                <AlertMessage content={t("RefreshToken")} handleModal={() => { window.location.href = "login"; }}></AlertMessage>
            </Modal>}
        </div>
    );
}
