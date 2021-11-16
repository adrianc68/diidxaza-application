import { React, useEffect, useState } from 'react'
import './userprofile.scss'
import { useTranslation } from "react-i18next";
import UserImageDefault from '../../assets/images/ide-29.svg'
import UserprofileButtonPanelAU from '../../components/anotheruser/userprofileButtonPanel/UserprofileButtonPanelAU';
import UserprofileButtonPanelADM from '../../components/admin/userprofileButtonPanel/UserprofileButtonPanelADM';
import UserprofileButtonPanelOWU from '../../components/ownuser/userprofileButtonPanel/UserprofileButtonPanelOWU';
import UserReports from '../../components/admin/userreports/UserReports';
import DeleteAccount from '../../components/ownuser/DeleteAccount/DeleteAccount';
import BlockUser from '../../components/admin/blockuser/BlockUser';
import UnblockUser from '../../components/admin/unblockuser/UnblockUser';
import CheckProgress from '../../components/ownuser/CheckProgress/CheckProgress';
import Modal from '../../components/modal/Modal';

export default function UserProfile() {
    const { t } = useTranslation();

    const [statusModal, setStatusModal] = useState(false);

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

    return (
        <div className="userprofile-main-container">

            <div className="userprofile-user-details-container">
                <div className="userprofile-user-photo-container">
                    <img src={UserImageDefault} alt={t("WelcomeInformationAlt")}></img>
                </div>
                <div className="userprofile-type-user-container">
                    <div className="type-user-admin">
                        <span>{t("TypeUserAdmin")}</span>
                    </div>
                </div>

                <div className="userprofile-separator-container">
                    <hr />
                    <div className="userprofile-basic-details">
                        <div>
                            <span>nombre</span>
                            <span>Angel Adrian Camal Garcia</span>
                        </div>
                        <div>
                            <span>edad</span>
                            <span>21 <span /><span>{t("UserProfileAge")}</span></span>
                        </div>
                        <div>
                            <span>fecha de nacimiento</span>
                            <span>13 de septiembre de 2000</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="userprofile-user-data-container">
                <div className="userprofile-account-container">
                    <div className="userprofile-account-information">
                        <h2>Angel Adrian Camal Garcia</h2>
                        <p>estaesunaprueba@hotmail.com</p>
                    </div>
                    <div className="userprofile-account-status-information">
                        <span className="status-user-free">{t("UserProfileUserFree")}</span>

                    </div>
                </div>

                <div className="userprofile-button-panel">
                    Botones Vista Administrador
                    <UserprofileButtonPanelADM/>
                    Botones Vista Otro usuario
                    <UserprofileButtonPanelAU />
                    Botones vista Dueño del usuario
                    <UserprofileButtonPanelOWU />
                </div>

                {/* <Modal title="Reportes">
                        <UserReports/>
                    </Modal> */}


                {/* <Modal title="Eliminar cuenta">
                        <DeleteAccount></DeleteAccount>
                    </Modal> */}

                {/* <Modal title="Bloquear Usuario">
                        <BlockUser></BlockUser>
                    </Modal> */}


                {/* <Modal title="Desbloquear Usuario">
                        <UnblockUser></UnblockUser>
                    </Modal> */}

                <div className="userprofile-ranking-information-container">
                    <div>
                        <span>{t("UserProfileTopRanking")}</span>
                        <span>{t("UserProfilePosition")}</span>
                        <span>1</span>
                    </div>
                    <div>
                        <span>{t("UserProfilePointsWon")}</span>
                        <span>1500</span>
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


            </div>




        </div>
    )
}
