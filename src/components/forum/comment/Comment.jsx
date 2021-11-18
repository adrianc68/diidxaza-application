import React, { useState, useEffect } from 'react'
import './comment.scss'
import Button from '../../../components/Button/Button'
import ImageInformationAlt from '../../../assets/images/ide-02.svg'
import { useTranslation } from "react-i18next";
import ReportUser from '../../anotheruser/reportuser/ReportUser';
import Modal from '../../modal/Modal';
import { helpHttp, UrlAPI } from "../../../helpers/helpHttp";
import {GetImage} from "../../../hooks/useDiscussionForm";
import AlertConfirmation from "../../alert/AlertConfirmation"

export default function Comment({comment,handleClickDeleteComment,idDiscussion,setModalToken,imagesComments}) {
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
            <img src={imagesComments} className="welcome-information-image" alt={t("WelcomeInformationAlt")}></img>
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
            <Modal title={t("ReportUserTitle")} statusModal={statusModal} handleModal={()=>setStatusModal(false)} sizeHeight="70" sizeWidth="80">
               <ReportUser account={comment.idAccount[0]} statusModal={statusModal} setStatusModal={setStatusModal} setModalToken={setModalToken}></ReportUser>
            </Modal> 
            <Modal title={t("DeleteComment")} statusModal={statusModalDelete} handleModal={()=>{setStatusModalDelete(false)}} sizeHeight="20" sizeWidth="35">
                <AlertConfirmation primaryButton={t("ButtonYes")} secondaryButton={t("ButtonNo")} content={t("MessageComment")} setStatusModal ={setStatusModalDelete}
                handlePrimary={(e)=>{handleClickDeleteComment(e,comment._id,idDiscussion, setStatusModalDelete)}}/>
            </Modal> 
        </div>
    )
}
