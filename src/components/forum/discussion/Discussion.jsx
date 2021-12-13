import React, { useContext } from "react";
import "./discussion.scss";
import Comment from "../comment/Comment";
import { useTranslation } from "react-i18next";
import Button from "../../Button/Button";
import ReportUser from "../../anotheruser/reportuser/ReportUser";
import { useConvertionData } from "../../../hooks/useConvertionData";
import { ModalContext } from "../../../helpers/ModalContext";

export default function Discussion({ discussion, numberComments, comments, imageAccount, children, handleClickDeleteComment, handleClickFollow, imagesComments }) {
    const { t } = useTranslation();
    const { convertDate } = useConvertionData();
    const { setStatusModal, setComponent } = useContext(ModalContext);

    const handleModal = (ComponentTagA, sizeHeightA, sizeWidthA, titleA) => {
        const initialValue = {
            sizeHeight: sizeHeightA,
            sizeWidth: sizeWidthA,
            title: titleA,
            object: ComponentTagA,
            handleModal: () => { setStatusModal(false)},
        };
        setComponent(initialValue);
        setStatusModal(true);
    };

    function handleModalReport() {
        handleModal(<ReportUser account={discussion.idAccount[0]} setStatusModal={setStatusModal}></ReportUser>, "70", "80", t("ReportUserTitle"));
    }

    return (
        <div className="forum-discussion-container">
            <h1>{discussion.title}</h1>
            <div className="forum-discussion-content-container">
                <div className="forum-discussion-user-data-container">
                    <img src={imageAccount} className="welcome-information-image" alt={"AlternativeMessageImageDecorative"}></img>
                    <div className="forum-discussion-data">
                        <div className="forum-discussion-data-user">
                            {
                                sessionStorage.getItem("id") === discussion.idAccount[0]._id ?
                                    <span>{t("UserProfileMe")}</span>
                                    :
                                    <span>{discussion.idAccount[0].name} {discussion.idAccount[0].lastname}</span>
                            }
                        </div>
                        <div className="forum-discussion-data-discussion">
                            <div>
                                <span>{t("DiscussionlistitemDate")}</span>
                                <span>{convertDate(discussion.dateCreation)}</span>
                            </div>
                            <div>
                                <span>{t("DiscussionTheme")}</span>
                                <span>{discussion.theme}</span>
                            </div>
                        </div>

                    </div>
                    <div>
                        <Button styleName="dark-blue-button" onClick={handleClickFollow}>{t("ButtonFollow")}</Button>
                    </div>
                </div>
                <div className="forum-discussion-description-container">
                    <span className="semibold">{t("DiscussionComment")}</span>
                    <span>{discussion.comment}</span>
                </div>
                <div className="forum-discussion-forum-button-panel-container">
                    <h2>{t("DiscussionNumberComment")}{numberComments})</h2>
                    {sessionStorage.getItem("id") !== discussion.idAccount[0]._id && <div>
                        <Button styleName="primary-button" onClick={() => handleModalReport()}>{t("ButtonReportUser")}</Button>
                    </div>}
                </div>
                <div className="forum-child-comme">
                    {children}
                </div>
                <div className="forum-discussion-forum-comments-container">
                    <div className="forum-discussion-comment-list">
                        <ul id="list-comments">
                            {comments.length > 0 && comments.map((element) => (
                                <li><Comment imagesComments={imagesComments.find((imageElement) => imageElement.id === element._id)} comment={element} handleClickDeleteComment={handleClickDeleteComment} idDiscussion={discussion._id}/></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
