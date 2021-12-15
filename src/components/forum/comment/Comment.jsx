import React, { useContext } from "react";
import "./comment.scss";
import Button from "../../button_application/Button";
import { useTranslation } from "react-i18next";
import ReportUser from "../../another_user/report_user/ReportUser";
import AlertConfirmation from "../../alert/AlertConfirmation";
import { useConvertionData } from "../../../hooks/useConvertionData";
import { ModalContext } from "../../../hooks/ModalContext";

export default function Comment({ comment, handleClickDeleteComment, idDiscussion, imagesComments }) {
    const { t } = useTranslation();
    const { convertDate } = useConvertionData();
    const { setStatusModal, setComponent } = useContext(ModalContext);

    const handleModal = (ComponentTagA, sizeHeightA, sizeWidthA, titleA) => {
        const initialValue = {
            sizeHeight: sizeHeightA,
            sizeWidth: sizeWidthA,
            title: titleA,
            object: ComponentTagA,
            handleModal: () => {
                setStatusModal(false);
            },
        };
        setComponent(initialValue);
        setStatusModal(true);
    };

    function handleModalReport() {
        handleModal(<ReportUser account={comment.idAccount[0]} setStatusModal={setStatusModal} />, "70", "80", t("ReportUserTitle"));
    }

    function handleModalDelete() {
        handleModal(
            <AlertConfirmation
                primaryButton={t("ButtonYes")}
                secondaryButton={t("ButtonNo")}
                content={t("MessageComment")}
                setStatusModal={setStatusModal}
                handlePrimary={(e) => {
                    handleClickDeleteComment(e, comment._id, idDiscussion, setStatusModal);
                }}
            />,
            "70",
            "80",
            t("DeleteComment")
        );
    }

    return (
        <div className="forum-comment">
            {imagesComments !== undefined && <img src={imagesComments.imageComment} className="welcome-information-image" alt={t("WelcomeInformationAlt")}></img>}
            <div className="forum-comment-user-container">
                <div className="forum-comment-user-data">
                    <div>
                        {sessionStorage.getItem("id") === comment.idAccount[0]._id ? (
                            <span>{t("UserProfileMe")}</span>
                        ) : (
                            <span>
                                {comment.idAccount[0].name} {comment.idAccount[0].lastname}
                            </span>
                        )}
                    </div>
                </div>
                <div className="forum-comment-content">
                    <span>{comment.comment}</span>
                </div>

                <div className="forum-bottom-content">
                    <div className="forum-bottom-date-comment">
                        <span>{t("DiscussionlistitemDate")}</span>
                        <span>{convertDate(comment.dateCreation)}</span>
                    </div>

                    {sessionStorage.getItem("id") === comment.idAccount[0]._id && (
                        <div className="forum-comment-button-panel">
                            <div>
                                <Button styleName="dark-blue-button" onClick={() => handleModalDelete()}>
                                    {t("DeleteButton")}
                                </Button>
                            </div>
                        </div>
                    )}
                    {sessionStorage.getItem("id") !== comment.idAccount[0]._id && (
                        <div className="forum-comment-button-panel">
                            <div>
                                <Button styleName="button" onClick={() => handleModalReport()}>
                                    {t("ButtonReportUser")}
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
