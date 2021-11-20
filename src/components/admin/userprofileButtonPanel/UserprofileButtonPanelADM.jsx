import React, { useState } from 'react'
import Button from '../../Button/Button'
import { useTranslation } from "react-i18next";
import BlockUser from '../blockuser/BlockUser';
import UnblockUser from '../unblockuser/UnblockUser';
import UserReports from '../userreports/UserReports';

export default function UserprofileButtonPanelADM({ handleModal }) {
    const { t } = useTranslation();
    return (
        <div className="userprofile-button-panel-content">
            <Button styleName="primary-button" text={t("UserProfileButtonPanelLookReports")} onClick={() => handleModal(<UserReports />, 70, 70, t("UserReportAdminPanelTitle"))} ></Button>
            <Button styleName="primary-button" text={t("UserProfileButtonPanelUnblockUser")} onClick={() => handleModal(<UnblockUser />, 50, 50, t("UnblockUserTitle"))} ></Button>
            <Button styleName="primary-button" text={t("UserProfileButtonPanelBlockUser")} onClick={() => handleModal(<BlockUser />, 50, 50, t("BlockUserTitle"))}></Button>
        </div>
    )
}
