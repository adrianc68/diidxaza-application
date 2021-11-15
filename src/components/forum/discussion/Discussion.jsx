import React, {useState, useEffect} from 'react'
import './discussion.scss'
import Comment from '../comment/Comment';
import {useTranslation} from 'react-i18next';
import Button from '../../../components/Button/Button';
import ReportUser from '../../anotheruser/reportuser/ReportUser';
import Modal from '../../modal/Modal';
import {GetImage} from "../../../hooks/useDiscussionForm";

export default function Discussion({discussion, numberComments, comments, imageAccount, children}) {
    const { t } = useTranslation();
    const [statusModal, setStatusModal] = useState(false);
    /*const {
        imageComment, 
        getImage
    } = useGetImageComment()*/
    /*useEffect(() => {
        getImage()
    }, []);*/
    return (
        <div className="forum-discussion-container">
            <h1>{discussion.title}</h1>
            <div className="forum-discussion-user-data-container">
                <img src={imageAccount} className="welcome-information-image" alt={"AlternativeMessageImageDecorative"}></img>
                <div className="forum-discussion-data">
                    <span>{discussion.idAccount[0].name} {discussion.idAccount[0].lastname}</span>
                    <span>{t("DiscussionlistitemDate")}{discussion.dateCreation}</span>
                    <span>{t("DiscussionTheme")}{discussion.theme}</span>
                </div>
                <div>
                    <Button styleName="dark-blue-button">{t("ButtonFollow")}</Button>
                </div>
            </div>
            <div className="forum-discussion-description-container">
                <span className="semibold">{t("DiscussionComment")}</span>
                <span>{discussion.comment}</span>
            </div>
            <div className="forum-discussion-forum-button-panel-container">
                <h2>{t("DiscussionNumberComment")}{numberComments})</h2>
                {sessionStorage.getItem("id")!=discussion.idAccount[0]._id && <div>
                    <Button styleName="primary-button" onClick= {()=>setStatusModal(true)}>{t("ButtonReportUser")}</Button>
                </div>}
            </div>
            <div className="forum-child-comme">
                {children}
            </div>
            <div className="forum-discussion-forum-comments-container">
                <div className="forum-discussion-comment-list">
                    <ul id="list-comments">
                        {comments.length > 0 && comments.map(element => (
                            <li><Comment comment={element}/></li>
                        ))}
                    </ul>
                </div>
            </div>
            <Modal title={t("ReportUserTitle")} statusModal={statusModal} setStatusModal={setStatusModal}>
               <ReportUser account={discussion.idAccount[0]} statusModal={statusModal} setStatusModal={setStatusModal}></ReportUser>
            </Modal> 
        </div>
    )
}
