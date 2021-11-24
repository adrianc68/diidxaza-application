import React, { useState } from 'react'
import Button from '../../Button/Button'
import { useTranslation } from "react-i18next";
import UserReports from '../userreports/UserReports';
import ChangeStatusUser from '../changestatus/ChangeStatusUser';

export default function UserprofileButtonPanelADM({ handleModal, accountStatus, accountID }) {
    const { t } = useTranslation();

    return (
        <div className="userprofile-button-panel-content">
            <Button styleName="primary-button" text={t("UserProfileButtonPanelLookReports")} onClick={() => handleModal(<UserReports />, "700px", "80vw", t("UserReportAdminPanelTitle"))} ></Button>
            {
                sessionStorage.getItem("id") === accountID ? null :
                    accountStatus === 1 ?
                        <Button styleName="primary-button" text={t("UserProfileButtonPanelBlockUser")} onClick={() => handleModal(<ChangeStatusUser accountStatus={accountStatus} accountID={accountID} />, "350px", "50vw", t("BlockUserTitle"))}></Button>
                        :
                        <Button styleName="primary-button" text={t("UserProfileButtonPanelUnblockUser")} onClick={() => handleModal(<ChangeStatusUser accountStatus={accountStatus} accountID={accountID} />,"350px", "50vw", t("UnblockUserTitle"))} ></Button>
            }
        </div>
    )
}
