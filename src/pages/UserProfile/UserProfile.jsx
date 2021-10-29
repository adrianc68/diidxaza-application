import React from 'react'
import './userprofile.scss'
import ImageInformationAlt from '../../assets/images/ide-02.svg'
import { useTranslation } from "react-i18next";
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'


export default function UserProfile() {
    const { t } = useTranslation();

    return (
        <div className="userprofile-main-container">
            <div className="userprofile-details-main-container">

                <div className="userprofile-user-details-container">
                    <div className="userprofile-user-photo-container">
                        <img src={ImageInformationAlt} alt={t("WelcomeInformationAlt")}></img>

                    </div>
                    <div className="userprofile-type-user-container">
                        <div className="type-user-admin">
                            <span>{t("TypeUserAdmin")}</span>
                        </div>
                    </div>

                    <div className="userprofile-separator-container">
                        <hr />
                        <div className="userprofile-basic-details">
                            <span>NOMBE DE USUARIO MAS LARGO DE LO NORMAL JAJASFASJDFOASDKFSOAFSADFKODSFSKOADFASKOAFDS</span>
                            <span>16 <span>{t("UserProfileAge")}</span></span>
                            <span>FECHA DE NACIMIENTO</span>
                        </div>
                    </div>
                </div>

                <div className="userprofile-user-data-container">
                    <div className="userprofile-account-container">
                        <div className="userprofile-account-information">
                            <span>NOMBRE DE USUARIO MAS LARGO DE LO NORMAL </span>
                            <span>EMAIL DE USUARIO</span>
                        </div>
                        <div className="userprofile-account-status-information">
                            <span className="status-user-free">STATUS</span>
                        </div>
                    </div>

                    <div className="userprofile-button-panel">
                        <Link className="link" to="/deleteaccount">
                            <Button styleName="primary-button" text={t("UserProfileButtonPanelDeleteAccount")} ></Button>
                        </Link>
                        <Link className="link" to="/checkprogress">
                            <Button styleName="primary-button" text={t("UserProfileButtonPanelCheckProgress")} ></Button>
                        </Link>
                        <Link className="link" to="/editprofile">
                            <Button styleName="primary-button" text={t("UserProfileButtonPanelEditProfile")} ></Button>
                        </Link>

                    </div>
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
                    </div>

                    <div className="userprofile-forum-information">
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

                    <div className="userprofile-discussion-for-user-container">
                        <div className="userprofile-discussion-created">
                            <div className="user-profile-discussion-created-title">
                                <h1>{t("UserProfileDiscussionsCreated")}</h1>
                            </div>
                            <ul>
                                <li><span>¿ COMO SE HACEN USO DE LOS VERBOS...? </span></li>
                                <li><span>¿ COMO SE HACEN USO DE LOS VERBOS...? </span></li>
                                <li><span>¿ COMO SE HACEN USO DE LOS VERBOS...? </span></li>
                                <li><span>¿ COMO SE HACEN USO DE LOS VERBOS...? </span></li>
                                <li><span>¿ COMO SE HACEN USO DE LOS VERBOS...? </span></li>
                                <li><span>¿ COMO SE HACEN USO DE LOS VERBOS...? </span></li>
                                <li><span>¿ COMO SE HACEN USO DE LOS VERBOS...? </span></li>
                                <li><span>¿ COMO SE HACEN USO DE LOS VERBOS...? </span></li>
                                <li><span>¿ COMO SE HACEN USO DE LOS VERBOS...? </span></li>
                                <li><span>¿ COMO SE HACEN USO DE LOS VERBOS...? </span></li>
                                <li><span>¿ COMO SE HACEN USO DE LOS VERBOS...? </span></li>
                                <li><span>¿ COMO SE HACEN USO DE LOS VERBOS...? </span></li>
                                <li><span>¿ COMO SE HACEN USO DE LOS VERBOS...? </span></li>

                            </ul>
                        </div>
                        <div className="userprofile-discussion-commented">
                            <div className="userprofile-discussion-commented-title">
                                <h1>{t("UserProfileDiscussionsCommented")}</h1>
                            </div>
                            <ul>
                                <li><span> Uso de los verbos auxiliares zapotecos </span></li>
                                <li><span> Uso de los verbos auxiliares zapotecos </span></li>
                                <li><span> Uso de los verbos auxiliares zapotecos </span></li>
                                <li><span> Uso de los verbos auxiliares zapotecos </span></li>
                                <li><span> Uso de los verbos auxiliares zapotecos </span></li>
                                <li><span> Uso de los verbos auxiliares zapotecos </span></li>
                                <li><span> Uso de los verbos auxiliares zapotecos </span></li>
                                <li><span> Uso de los verbos auxiliares zapotecos </span></li>
                                <li><span> Uso de los verbos auxiliares zapotecos </span></li>
                                <li><span> Uso de los verbos auxiliares zapotecos </span></li>
                                <li><span> Uso de los verbos auxiliares zapotecos </span></li>
                                <li><span> Uso de los verbos auxiliares zapotecos </span></li>
                                <li><span> Uso de los verbos auxiliares zapotecos </span></li>
                                <li><span> Uso de los verbos auxiliares zapotecos </span></li>
                                <li><span> Uso de los verbos auxiliares zapotecos </span></li>
                                <li><span> Uso de los verbos auxiliares zapotecos </span></li>

                            </ul>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
