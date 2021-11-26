import "./changestatususer.scss";
import Button from "../../Button/Button";
import { useTranslation } from "react-i18next";
import { helpHttp, UrlAPI } from "../../../helpers/helpHttp";

export default function ChangeStatusUser({ accountStatus, accountID }) {
    const { t } = useTranslation();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(parseInt(accountStatus));
        const userinformation = {
            _id: accountID,
            status: (accountStatus === 1 ? accountStatus + 1 : accountStatus - 1),
        };

        helpHttp().patch(UrlAPI + "accounts", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Authorization": sessionStorage.getItem("token")
            },
            body: userinformation
        }).then((response) => {
            console.log(response);
        })

    };

    return (
        <div className="changestatususer-main-container">
            <div className="changestatususer-content-container">
                {
                    accountStatus === 1 ?
                        <div className="changestatususer-text">
                            <h1>{t("BlockUserDescriptionTitle")}</h1>
                            <p>{t("BlockUserDescription")}</p>
                        </div>
                        :
                        <div className="changestatususer-text">
                            <h1>{t("UnblockUserDescriptionTitle")}</h1>
                            <p>{t("UnblockUserDescription")}</p>
                        </div>
                }
                <form className="changestatususer-button-panel" onSubmit={handleSubmit}>
                    <Button styleName="primary-button" text={t("ButtonCancel")} ></Button>
                    <Button styleName="primary-button" text={accountStatus === 1 ? t("UserProfileButtonPanelBlockUser") : t("UserProfileButtonPanelUnblockUser")} type="submit"></Button>
                </form>
            </div>
        </div>
    );
}