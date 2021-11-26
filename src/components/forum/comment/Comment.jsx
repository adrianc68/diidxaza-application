import React, { useState, useEffect } from "react";
import "./comment.scss";
import Button from "../../../components/Button/Button";
import { useTranslation } from "react-i18next";
import ReportUser from "../../anotheruser/reportuser/ReportUser";
import Modal from "../../modal/Modal";
import AlertConfirmation from "../../alert/AlertConfirmation";
import { useConvertionData } from "../../../hooks/useConvertionData";

export default function Comment({ comment, handleClickDeleteComment, idDiscussion, setModalToken, imagesComments }) {
    const { t } = useTranslation();
    const [statusModal, setStatusModal] = useState(false);
    const [statusModalDelete, setStatusModalDelete] = useState(false);
    const { convertDate } = useConvertionData();

    return (
        <div className="forum-comment">
            {imagesComments !== undefined && <img src={imagesComments.imageComment} className="welcome-information-image" alt={t("WelcomeInformationAlt")}></img>}
            <div className="forum-comment-user-container">
                <div className="forum-comment-user-data">
                    <div>
                        {
                            sessionStorage.getItem("id") === comment.idAccount[0]._id ?
                                <span>{t("UserProfileMe")}</span>
                                :
                                <span>{comment.idAccount[0].name} {comment.idAccount[0].lastname}</span>

                        }
                    </div>
                </div>
                <div className="forum-comment-content">
                    <span>{comment.comment}</span>
                </div>

                <div className="forum-bottom-content">
                    <div className="forum-bottom-date-comment">
                        <span >{t("DiscussionlistitemDate")}</span>
                        <span>{convertDate(comment.dateCreation)}</span>
                    </div>

                    {sessionStorage.getItem("id") == comment.idAccount[0]._id && <div className="forum-comment-button-panel">
                        <div>
                            <Button styleName="dark-blue-button" onClick={() => setStatusModalDelete(true)}>{t("DeleteButton")}</Button>
                        </div>
                    </div>}
                    {sessionStorage.getItem("id") != comment.idAccount[0]._id && <div className="forum-comment-button-panel">
                        <div>
                            <Button styleName="primary-button" onClick={() => setStatusModal(true)}>{t("ButtonReportUser")}</Button>
                        </div>
                    </div>}

                </div>

            </div>
            {statusModal && <Modal title={t("ReportUserTitle")} handleModal={() => setStatusModal(false)} sizeHeight="70" sizeWidth="80">
                <ReportUser account={comment.idAccount[0]} statusModal={statusModal} setStatusModal={setStatusModal} setModalToken={setModalToken}></ReportUser>
            </Modal>}
            {statusModalDelete && <Modal title={t("DeleteComment")} handleModal={() => { setStatusModalDelete(false) }} sizeHeight="20" sizeWidth="35">
                <AlertConfirmation primaryButton={t("ButtonYes")} secondaryButton={t("ButtonNo")} content={t("MessageComment")} setStatusModal={setStatusModalDelete}
                    handlePrimary={(e) => { handleClickDeleteComment(e, comment._id, idDiscussion, setStatusModalDelete) }} />
            </Modal>}
        </div>
    )
}
