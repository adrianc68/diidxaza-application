import { useState } from "react";
import "./changeStatusUser.scss";
import Button from "../../button_application/Button";
import { useTranslation } from "react-i18next";
import { helpHttp, UrlAPI } from "../../../helpers/helpHttp";
import { AccountStatus } from "../../../helpers/AccountStatus";
import { getMessageResponseStatus } from "../../../helpers/messageResponse";

export default function ChangeStatusUser({ account, setStatusModal, handleChangeStatusUser }) {
    const { t } = useTranslation();
    const [serverError, setServerError] = useState(null);

    const checkAccountID = () => {
        let isSelfAccount = false;
        if (sessionStorage.getItem("id") === account._id) {
            isSelfAccount = true;
        }
        return isSelfAccount;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!checkAccountID()) {
            const userinformation = {
                _id: account._id,
                status: account.status === AccountStatus.BLOCKED ? AccountStatus.UNBLOCKED : AccountStatus.BLOCKED,
            };
            helpHttp()
                .patch(UrlAPI + "accounts", {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        Authorization: sessionStorage.getItem("token"),
                    },
                    body: userinformation,
                })
                .then((response) => {
                    if (response != null) {
                        if (response.messageHappened) {
                            handleChangeStatusUser();
                            return;
                        }
                        setServerError(getMessageResponseStatus(response));
                    }
                });
        } else {
            setServerError(t("ChangeStatusSelftAccountBlock"));
        }
    };

    return (
        <div className="changestatususer-main-container">
            <div className="changestatususer-content-container">
                {account.status === AccountStatus.UNBLOCKED ? (
                    <div className="changestatususer-text">
                        <h1>{t("BlockUserDescriptionTitle")}</h1>
                        <p>{t("BlockUserDescription")}</p>
                    </div>
                ) : (
                    <div className="changestatususer-text">
                        <h1>{t("UnblockUserDescriptionTitle")}</h1>
                        <p>{t("UnblockUserDescription")}</p>
                    </div>
                )}
                {serverError != null && (
                    <div className="changestatususer-text">
                        <span className="color-red">{serverError}</span>
                    </div>
                )}
                <form className="changestatususer-button-panel" onSubmit={handleSubmit}>
                    <Button
                        styleName="button"
                        text={t("ButtonCancel")}
                        onClick={() => {
                            setStatusModal(false);
                        }}
                    ></Button>
                    <Button styleName="button" text={account.status === AccountStatus.UNBLOCKED ? t("UserProfileButtonPanelBlockUser") : t("UserProfileButtonPanelUnblockUser")} type="submit"></Button>
                </form>
            </div>
        </div>
    );
}
