import React, { useState, useEffect } from 'react'
import './comment.scss'
import Button from '../../../components/Button/Button'
import ImageInformationAlt from '../../../assets/images/ide-02.svg'
import { useTranslation } from "react-i18next";
import ReportUser from '../../anotheruser/reportuser/ReportUser';
import Modal from '../../modal/Modal';
import { helpHttp, UrlAPI } from "../../../helpers/helpHttp";
//import {GetImage} from "../../../hooks/useDiscussionForm";
import BlockUser from "../../admin/blockuser/BlockUser"

export default function Comment(props) {
    const comment = props.comment;
    //const imageComment = props.imageComment;
    const { t } = useTranslation();
    const [statusModal, setStatusModal] = useState(false);
    const [statusModalDelete, setStatusModalDelete] = useState(false);
    //const [imageAccount, setImageAccount] = useState(ImageInformationAlt);
    /*const {
        imageAccount, 
        handleImage
    } = useGetImageComment(comment.idAccount[0].URL)*/
    //handleImage();
    /*const {
        imageComment, 
        getImage
    } = useGetImageComment()
    useEffect(() => {
        getImage()
    }, []);*/
    return (
        <div className="forum-comment">
            <img src={ImageInformationAlt} className="welcome-information-image" alt={t("WelcomeInformationAlt")}></img>
            <div className="forum-comment-user-data">
                <span>{comment.idAccount[0].name} {comment.idAccount[0].lastname}</span>
                <span>{t("DiscussionlistitemDate")}{comment.dateCreation}</span>
                <div className="forum-comment-content">
                    <span>{comment.comment}</span>
                </div>
                {sessionStorage.getItem("id")==comment.idAccount[0]._id && <div className="forum-comment-button-panel">
                    <div>
                        <Button styleName="dark-blue-button" onClick= {()=>setStatusModalDelete(true)}>{t("DeleteButton")}</Button>
                    </div>
                </div>}
                {sessionStorage.getItem("id")!=comment.idAccount[0]._id && <div className="forum-comment-button-panel">
                    <div>
                        <Button styleName="primary-button" onClick= {()=>setStatusModal(true)}>{t("ButtonReportUser")}</Button>
                    </div>
                </div>}
            </div>
            <Modal title={t("ReportUserTitle")} statusModal={statusModal} setStatusModal={setStatusModal} sizeHeight="70" sizeWidth="80">
               <ReportUser account={comment.idAccount[0]} statusModal={statusModal} setStatusModal={setStatusModal}></ReportUser>
            </Modal> 
            <Modal title={t("DeleteComment")} statusModal={statusModalDelete} setStatusModal={setStatusModalDelete} sizeHeight="50" sizeWidth="50">
                <BlockUser></BlockUser>
            </Modal> 

        </div>
    )
}
