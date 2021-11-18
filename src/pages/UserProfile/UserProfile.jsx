import { React, useEffect, useState } from 'react'
import './userprofile.scss'
import { useTranslation } from "react-i18next";
import UserImageDefault from '../../assets/images/ide-29.svg'
import UserprofileButtonPanelAU from '../../components/anotheruser/userprofileButtonPanel/UserprofileButtonPanelAU';
import UserprofileButtonPanelADM from '../../components/admin/userprofileButtonPanel/UserprofileButtonPanelADM';
import UserprofileButtonPanelOWU from '../../components/ownuser/userprofileButtonPanel/UserprofileButtonPanelOWU';
import Modal from '../../components/modal/Modal';

export default function UserProfile() {
    const { t } = useTranslation();


    const convertDate = (date) => {
        var dateString = date.split(['-']);
        var year = dateString[0];
        var month = dateString[1];
        var day = dateString[2];
        var formatDate = new Date(year, month - 1, day);
        var options = { year: 'numeric', month: 'long', day: 'numeric' }
        return (formatDate.toLocaleDateString("es-ES", options));
    }

    const getAge = (date) => {
        var dateString = date.split(['-']);
        var year = dateString[0];
        var month = dateString[1];
        var day = dateString[2];
        var formatDate = new Date(year, month - 1, day);
        var todayDate = new Date();
        var age = todayDate.getFullYear() - year;
        var month = todayDate.getMonth() - month;
        if (month < 0 || (month === 0 && todayDate.getDate() < formatDate.getDate())) {
            age--;
        }
        return age;
    }

    useEffect(() => {
        const tabs = document.querySelectorAll(".userprofile-forum-data-tab");
        const contents = document.querySelectorAll(".content");

        for (let i = 0; i < tabs.length; i++) {
            tabs[i].addEventListener("click", (e) => {
                e.preventDefault();
                for (let j = 0; j < contents.length; j++) {
                    contents[j].classList.remove("content--active");
                }
                for (let jj = 0; jj < tabs.length; jj++) {
                    tabs[jj].classList.remove("tabs--active");
                }
                contents[i].classList.add("content--active");
                tabs[i].classList.add("tabs--active");
            });
        }


    }, []);


    const [statusModal, setStatusModal] = useState(false);
    const [component, setComponent] = useState({
        sizeHeight: "",
        sizeWidth: "",
        title: "",
        component: <></>,
    });

    const handleModal = (ComponentTagA, sizeHeightA, sizeWidthA, titleA) => {
        const initialValue = {
            sizeHeight: sizeHeightA,
            sizeWidth: sizeWidthA,
            title: titleA,
            object: ComponentTagA,
        };
        setComponent(initialValue);
        setStatusModal(true);
    }

    return (
        <div className="userprofile-main-container">

            <div className="userprofile-user-details-container">
                <div className="userprofile-user-photo-container">
                    <img src={UserImageDefault} alt={t("WelcomeInformationAlt")}></img>
                </div>
                <div className="userprofile-type-user-container">
                    {
                        sessionStorage.getItem("role") === "manager" ?
                            <div className="type-user-admin">
                                <span>{t("TypeUserAdmin")}</span>
                            </div>
                            :
                            <div className="type-user-free">
                                <span>{t("TypeUserFree")}</span>
                            </div>

                    }
                </div>

                <div className="userprofile-separator-container">
                    <hr />
                    <div className="userprofile-basic-details">
                        <div>
                            <span>{t("UserProfileName")}</span>
                            <span>{sessionStorage.getItem("name")}</span>
                        </div>
                        <div>
                            <span>{t("UserProfileAge")}</span>
                            <span>{getAge(sessionStorage.getItem("dateBirth"))}<span /><span>{" " + t("UserProfileYears")}</span></span>
                        </div>
                        <div>
                            <span>{t("UserProfileBirthdate")}</span>
                            <span>
                                {convertDate(sessionStorage.getItem("dateBirth"))}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="userprofile-user-data-container">
                <div className="userprofile-account-container">
                    <div className="userprofile-account-information">
                        <h2>{sessionStorage.getItem("name")}</h2>
                        <p>{sessionStorage.getItem("email")}</p>
                    </div>
                    <div className="userprofile-account-status-information">
                        {
                            sessionStorage.getItem("status") === "1" ?
                                <span className="status-user-free">{t("UserProfileUserFree")}</span>
                                :
                                <span className="status-user-banned">{t("UserProfileUserBanned")}</span>
                        }
                    </div>
                </div>
                <div className="userprofile-button-panel-container">
                    <p>{t("UserProfileControlPanel")}</p>
                    {/* Botones Vista Administrador */}
                    <div className="userprofile-button-panel">
                        <UserprofileButtonPanelADM handleModalClick={handleModal} />
                    </div>
                    <div className="userprofile-button-panel">
                        <UserprofileButtonPanelOWU />
                    </div>
                    <div className="userprofile-button-panel">
                        <UserprofileButtonPanelAU />
                    </div>

                    {/* {
                        sessionStorage.getItem("role") === "manager " ?
                        <UserprofileButtonPanelADM />
                        :
                        <UserprofileButtonPanelOWU />
                    } */}
                    {/* Botones Vista Otro usuario */}
                    {/* <UserprofileButtonPanelAU /> */}
                    {/* Botones vista Dueño del usuario */}
                </div>
                <div className="userprofile-ranking-information-container">
                    <div>
                        <span>{t("UserProfileTopRanking")}</span>
                        <span>{t("UserProfilePosition")}</span>
                        <span>1</span>
                    </div>
                    <div>
                        <span>{t("UserProfilePointsWon")}</span>
                        <span>15003453</span>
                        <span>{t("UserProfileUnitPoints")}</span>
                    </div>
                    <div>
                        <span>{t("UserProfileTotalDiscussionsCreated")}</span>
                        <span>13</span>
                        <span>{t("UserProfileCreated")}</span>
                    </div>
                    <div>
                        <span>{t("UserProfileTotalDiscussionesCommented")}</span>
                        <span>135</span>
                        <span>{t("UserProfileCommented")}</span>
                    </div>
                </div>
                <div className="userprofile-forum-data-container">
                    <ul className="userprofile-forum-data-container--tabs">
                        <li className="userprofile-forum-data-tab tabs--active">{t("UserProfileDiscussionsCreated")}</li>
                        <li className="userprofile-forum-data-tab">{t("UserProfileDiscussionsCommented")}</li>
                    </ul>


                    <div className="userprofile-data-container--content">
                        <div className="content content--active">
                            {/*  CONTENT FOR CREATED FORUMS */}
                        </div>
                        <div className="content">
                            {/* CONTENT FOR COMMENTED FORUMS */}
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </div>
                    </div>
                </div>

                {
                    statusModal && <Modal statusModal={statusModal} setStatusModal={setStatusModal} sizeHeight={component.sizeHeight} sizeWidth={component.sizeWidth} title={component.title}>
                        {component.object}
                    </Modal>
                }


            </div>
        </div>
    )
}
