import React from "react";
import Button from "../../Button/Button";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useRouteMatch } from "react-router-dom";

export default function UserprofileButtonPanelOWU({ handleViewProgress, accountID }) {
    const { t } = useTranslation();
    const { url } = useRouteMatch();

    return (
        <div className="userprofile-button-panel-content">
            {
                accountID === sessionStorage.getItem("id") ?
                    <>
                        <NavLink className="link" to={`${url}/edit`}>
                            <Button styleName="primary-button" text={t("UserProfileButtonPanelEditProfile")} ></Button>
                        </NavLink>
                    </>
                    :
                    null
            }
                <Button styleName="primary-button" text={t("UserProfileButtonPanelCheckProgress")} onClick={() => handleViewProgress()}></Button>
        </div>
    );
}