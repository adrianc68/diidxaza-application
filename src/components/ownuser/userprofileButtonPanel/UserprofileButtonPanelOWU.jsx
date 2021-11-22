import React, { useState, useEffect } from 'react'
import Button from '../../Button/Button'
import { NavLink } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import DeleteAccount from '../DeleteAccount/DeleteAccount';
import { useRouteMatch } from 'react-router-dom'
import { helpHttp, UrlAPI } from '../../../helpers/helpHttp';

export default function UserprofileButtonPanelOWU({ handleModal, accountID }) {
    const { t } = useTranslation();
    const { url } = useRouteMatch();



    return (
        <div className="userprofile-button-panel-content">
            {
                accountID === sessionStorage.getItem("id") ?
                    <>
                        <Button styleName="primary-button" text={t("UserProfileButtonPanelDeleteAccount")} onClick={() => handleModal(<DeleteAccount />, 70, 70, t("UserReportAdminPanelTitle"))} ></Button>
                        <NavLink className="link" to={`${url}/edit`}>
                            <Button styleName="primary-button" text={t("UserProfileButtonPanelEditProfile")} ></Button>
                        </NavLink>
                    </>
                    :
                    null
            }
            <NavLink className="link" to={`${url}/progress`}>
                <Button styleName="primary-button" text={t("UserProfileButtonPanelCheckProgress")} ></Button>
            </NavLink>

        </div>
    )
}