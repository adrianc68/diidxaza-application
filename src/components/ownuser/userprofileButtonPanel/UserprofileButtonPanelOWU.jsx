import React from "react";
import Button from "../../button/Button";
import { useTranslation } from "react-i18next";
import { useRouteMatch } from "react-router-dom";
import { useHistory } from "react-router";

export default function UserprofileButtonPanelOWU({ handleViewProgress, accountID, showProgress }) {
    const { t } = useTranslation();
    const { url } = useRouteMatch();
    const history = useHistory();

    return (
        <div className="userprofile-button-panel-content">
            {
                accountID === sessionStorage.getItem("id") ?
                    <>
                        <Button styleName="primary-button" text={t("UserProfileButtonPanelEditProfile")} onClick={() => history.push(url + "/edit")} ></Button>
                    </>
                    :
                    null
            }
            <Button styleName="primary-button" text={!showProgress ? t("UserProfileButtonPanelCheckProgress") : t("UserProfileButtonPanelHideProgress")} onClick={() => handleViewProgress()}></Button>
        </div>
    );
}