import { React, useEffect, useState } from "react";
import "./userprofile.scss";
import { useTranslation } from "react-i18next";
import UserImageDefault from "../../assets/images/ide-29.svg";
import UserprofileButtonPanelADM from "../../components/admin/userprofileButtonPanel/UserprofileButtonPanelADM";
import UserprofileButtonPanelOWU from "../../components/ownuser/userprofileButtonPanel/UserprofileButtonPanelOWU";
import Modal from "../../components/modal/Modal";
import { helpHttp, UrlAPI } from "../../helpers/helpHttp";
import { useConvertionData } from "../../hooks/useConvertionData";
import CheckProgress from "../../components/ownuser/CheckProgress/CheckProgress";

export default function UserProfile({ accountID }) {
    const { t } = useTranslation();
    const { convertDate } = useConvertionData();
    const [statusModal, setStatusModal] = useState(false);
    const [showProgress, setShowProgress] = useState(false);
    const [totalPoints, setTotalPoints] = useState(null);
    const [totalLessons, setTotalLessons] = useState(null);

    const [account, setAccount] = useState({
        age: null,
        birthdate: null,
        email: null,
        username: null,
        status: null,
        role: null,
        name: null,
    });

    const fetchData = () => {
        helpHttp().get(UrlAPI + "accounts/" + accountID, {
            headers: {
                Accept: "application/json",
                "Authorization": sessionStorage.getItem("token")
            }
        }).then((response) => {
            const account = {
                age: response.age,
                birthdate: response.dateBirth,
                email: response.email,
                username: response.username,
                status: response.status,
                role: response.role,
                name: response.name,
            };
            setAccount(account);
        });
    };

    const getTotalPoints = (lessonRecords) => {
        let totalPointsRecord = 0;
        if (lessonRecords.length > 0) {
            lessonRecords.map((element) => (
                totalPointsRecord = totalPointsRecord + element.pointsObtained
            ));
        }
        setTotalPoints(totalPointsRecord);
    };

    const fetchProgressData = () => {
        if (totalLessons == null && totalPoints == null) {
            helpHttp().get(UrlAPI + "lessonRecords/" + accountID, {
                headers: {
                    Accept: "application/json",
                    "Authorization": sessionStorage.getItem("token")
                }
            }).then((response) => {
                setTotalLessons(response.length);
                getTotalPoints(response);
                setShowProgress(!showProgress);
            });
        }
        setShowProgress(!showProgress);

    };

    const handleDiscussionsTab = () => {
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
    };

    const [component, setComponent] = useState({
        sizeHeight: "",
        sizeWidth: "",
        title: "",
        component: <></>,
    });

    const handleViewProgress = () => {
        fetchProgressData();
    };

    const handleModal = (ComponentTagA, sizeHeightA, sizeWidthA, titleA) => {
        const initialValue = {
            sizeHeight: sizeHeightA,
            sizeWidth: sizeWidthA,
            title: titleA,
            object: ComponentTagA,
        };
        setComponent(initialValue);
        setStatusModal(true);
    };

    useEffect(() => {
        handleDiscussionsTab();
        fetchData();
    }, []);

    return (
        <div className="userprofile-main-container">
            <div className="userprofile-user-details-container">
                <div className="userprofile-type-user-container">
                    {
                        account.role === "manager" ?
                            <div className="type-user-admin">
                                <span>{t("TypeUserAdmin")}</span>
                            </div>
                            :
                            <div className="type-user-free">
                                <span>{t("TypeUserFree")}</span>
                            </div>

                    }
                </div>
                <div className="userprofile-user-photo-container">
                    <img src={UserImageDefault} alt={t("WelcomeInformationAlt")}></img>
                </div>
                <hr />
                <div className="userprofile-basic-details">
                    <div>
                        <span>{t("UserProfileName")}</span>
                        <span>{account.name}</span>
                    </div>
                    <div>
                        <span>{t("UserProfileAge")}</span>
                        <span>{account.age}<span /><span>{" " + t("UserProfileYears")}</span></span>
                    </div>
                    <div>
                        <span>{t("UserProfileBirthdate")}</span>
                        <span>
                            {convertDate(account.birthdate)}
                        </span>
                    </div>
                </div>
                <div className="userprofile-account-status-information">
                    {
                        account.status === 1 ?
                            <span className="status-user-free">{t("UserProfileUserFree")}</span>
                            :
                            <span className="status-user-banned">{t("UserProfileUserBanned")}</span>
                    }
                </div>
            </div>
            <div className="userprofile-data-content-contaniner">
                <div className="userprofile-user-data-container">
                    <div className="userprofile-account-container">
                        <div className="userprofile-account-information">
                            <h2>{account.username}</h2>
                            <p>{account.email}</p>
                        </div>

                    </div>
                    <div className="userprofile-button-panel-container">
                        <p>{t("UserProfileControlPanel")}</p>
                        <div className="userprofile-button-panel">
                            <UserprofileButtonPanelADM handleModal={handleModal} accountStatus={account.status} accountID={accountID} username={account.username} />
                        </div>
                        <div className="userprofile-button-panel">
                            <UserprofileButtonPanelOWU handleModal={handleModal} accountID={accountID} handleViewProgress={handleViewProgress} />
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
                            </div>
                        </div>
                    </div>
                    {
                        statusModal && <Modal handleModal={() => setStatusModal(false)} sizeHeight={component.sizeHeight} sizeWidth={component.sizeWidth} title={component.title}>
                            {component.object}
                        </Modal>
                    }
                </div>
                {
                    showProgress &&
                    <div className="userprofile-progress-container">
                        <CheckProgress totalLessons={totalLessons} totalPoints={totalPoints}></CheckProgress>
                    </div>
                }
            </div>
        </div>
    );
}
