import { React, useEffect, useState } from "react";
import "./userProfile.scss";
import { useTranslation } from "react-i18next";
import UserImageDefault from "../../assets/images/ide-29.svg";
import UserprofileButtonPanelADM from "../../components/admin/userprofile_button_panel/UserprofileButtonPanelADM";
import UserprofileButtonPanelOWU from "../../components/own_user/user_profile_button_panel/UserprofileButtonPanelOWU";
import { helpHttp, UrlAPI } from "../../helpers/helpHttp";
import { useConvertionData } from "../../hooks/useConvertionData";
import CheckProgress from "../../components/own_user/check_progress/CheckProgress";
import { getMessageResponseStatus } from "../../helpers/messageResponse";
import { AccountStatus } from "../../helpers/AccountStatus";
import { UserType } from "../../helpers/UserType";
import LoadingScreen from "../../components/animation/loading_screen/LoadingScreen";
import { useHistory } from "react-router";

export default function UserProfile({ accountProps }) {
    const { t } = useTranslation();
    const { convertDate } = useConvertionData();
    const history = useHistory();
    const [showProgress, setShowProgress] = useState(false);
    const [totalPoints, setTotalPoints] = useState(null);
    const [totalLessons, setTotalLessons] = useState(null);
    const [serverError, setServerError] = useState(null);
    const [accountID, setAccountID] = useState(null);
    const [errorServerProgressData, setServerErrorProgressData] = useState(null);
    const [initialfile, setInitialFile] = useState(UserImageDefault);

    const [isDataLoadead, setLoadedData] = useState(false);
    const [account, setAccount] = useState({
        age: null,
        birthdate: null,
        email: null,
        username: null,
        status: null,
        role: null,
        name: null,
        image: null,
    });

    const getImageUser = (urlProp) => {
        if (urlProp !== undefined) {
            const url = {
                URL: urlProp,
            };
            fetch(UrlAPI + "resources", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: sessionStorage.getItem("token"),
                },
                body: JSON.stringify(url),
            }).then((response) => {
                if (response.ok) {
                    response.blob().then((response) => {
                        let objectURL = URL.createObjectURL(response);
                        setInitialFile(objectURL);
                    });
                }
            });
        }
    };

    const fetchData = () => {
        let accountID = accountProps.id;
        setAccountID(accountID);
        helpHttp()
            .get(UrlAPI + "accounts/" + accountID, {
                headers: {
                    Accept: "application/json",
                    Authorization: sessionStorage.getItem("token"),
                },
            })
            .then((response) => {
                if (response != null) {
                    if (response.age != null) {
                        getImageUser();
                        const account = {
                            age: response.age,
                            birthdate: response.dateBirth,
                            email: response.email,
                            username: response.username,
                            status: response.status,
                            role: response.role,
                            name: response.name,
                            _id: response._id,
                            image: initialfile,
                        };
                        setAccount(account);
                        setLoadedData(true);
                        return;
                    }
                    setServerError(getMessageResponseStatus(response));
                }
            });
    };

    const getAndSetTotalPointsFromResponse = (lessonRecords) => {
        let totalPointsRecord = 0;
        if (lessonRecords.length > 0) {
            lessonRecords.map((element) => (totalPointsRecord = totalPointsRecord + element.pointsObtained));
        }
        setTotalPoints(totalPointsRecord);
    };

    const fetchProgressData = () => {
        if (totalLessons == null && totalPoints == null) {
            helpHttp()
                .get(UrlAPI + "lessonRecords/" + accountID, {
                    headers: {
                        Accept: "application/json",
                        Authorization: sessionStorage.getItem("token"),
                    },
                })
                .then((response) => {
                    if (response != null) {
                        if (response.length >= 0) {
                            setTotalLessons(response.length);
                            getAndSetTotalPointsFromResponse(response);
                            setShowProgress(!showProgress);
                            return;
                        }
                        setServerErrorProgressData(getMessageResponseStatus(response));
                    }
                });
        }
        setShowProgress(!showProgress);
    };

    const handleViewProgress = () => {
        fetchProgressData();
    };

    const isNullData = (value) => {
        let isNull = false;
        if (value === null || value === undefined) {
            isNull = true;
        }
        return isNull;
    };

    const checkProfileID = () => {
        let canLookProfile = false;
        let myAccountID = sessionStorage.getItem("id");
        let myRole = sessionStorage.getItem("role");
        if (isNullData(accountProps)) {
            setServerError(t("ErrorIDProps"));
            return canLookProfile;
        }
        if (myAccountID === accountProps.id) {
            canLookProfile = true;
        } else if (myRole === "manager") {
            canLookProfile = true;
        } else {
            setServerError(t("ErrorAnotherProfileWithoutRoleManager"));
        }
        return canLookProfile;
    };

    useEffect(() => {
        if (checkProfileID()) {
            fetchData();
        }

        return () => {
            setLoadedData(false);
            setShowProgress(false);
            setTotalLessons(null);
            setTotalPoints(null);
            setServerError(null);
            setServerErrorProgressData(null);
            setAccountID(null);
            setAccount(null);
        };
    }, [history.location.pathname]);

    return serverError !== null ? (
        <div className="userprofile-server-error-contaniner">
            <h2>{t("errorTitle")}</h2>
            <span>{serverError}</span>
        </div>
    ) : isDataLoadead ? (
        <section className="userprofile-main-container">
            <div className="userprofile-user-details-container">
                <div className="userprofile-type-user-container">
                    {account.role === UserType.MANAGER ? (
                        <div className="type-user-admin">
                            <span>{t("TypeUserAdmin")}</span>
                        </div>
                    ) : (
                        <div className="type-user-free">
                            <span>{t("TypeUserFree")}</span>
                        </div>
                    )}
                </div>
                <div className="userprofile-user-photo-container">
                    <img src={initialfile} alt={t("WelcomeInformationAlt")}></img>
                </div>
                <hr />
                <div className="userprofile-basic-details">
                    <div>
                        <span className="color-gray">{t("UserProfileName")}</span>
                        <span>{account.name}</span>
                    </div>
                    <div>
                        <span className="color-gray">{t("UserProfileAge")}</span>
                        <span>
                            {account.age}
                            <span />
                            <span>{" " + t("UserProfileYears")}</span>
                        </span>
                    </div>
                    <div>
                        <span className="color-gray">{t("UserProfileBirthdate")}</span>
                        <span>{convertDate(account.birthdate)}</span>
                    </div>
                </div>
                <div className="userprofile-account-status-information">
                    {account.status === AccountStatus.UNBLOCKED ? <span className="status-user-free">{t("UserProfileUserFree")}</span> : <span className="status-user-banned">{t("UserProfileUserBanned")}</span>}
                </div>
            </div>
            <div className="userprofile-data-content-contaniner">
                <div className="userprofile-user-data-container">
                    <div className="userprofile-account-container">
                        <div className="userprofile-account-information">
                            <h2>{account.username}</h2>
                            <span className="color-gray">{account.email}</span>
                        </div>
                    </div>
                    <div className="userprofile-button-panel-container">
                        <p>{t("UserProfileControlPanel")}</p>
                        <div className="userprofile-button-panel">
                            <UserprofileButtonPanelADM account={account} />
                        </div>
                        <div className="userprofile-button-panel">
                            <UserprofileButtonPanelOWU accountID={accountID} handleViewProgress={handleViewProgress} showProgress={showProgress} />
                        </div>
                    </div>
                </div>
                {showProgress ? (
                    errorServerProgressData === null ? (
                        <div className="userprofile-progress-container">
                            <CheckProgress totalLessons={totalLessons} totalPoints={totalPoints}></CheckProgress>
                        </div>
                    ) : (
                        <div className="userprofile-progress-container">
                            <span>{errorServerProgressData}</span>
                        </div>
                    )
                ) : null}
            </div>
        </section>
    ) : (
        <LoadingScreen></LoadingScreen>
    );
}
