import React, { useState } from 'react'
import Button from '../../Button/Button'
import { useTranslation } from "react-i18next";
import BlockUser from '../blockuser/BlockUser';
import UnblockUser from '../unblockuser/UnblockUser';
import UserReports from '../userreports/UserReports';
import ChangeStatusUser from '../changestatus/ChangeStatusUser';

export default function UserprofileButtonPanelADM({ handleModal, accountStatus, accountID }) {
    const { t } = useTranslation();

    return (
        <div className="userprofile-button-panel-content">
            <Button styleName="primary-button" text={t("UserProfileButtonPanelLookReports")} onClick={() => handleModal(<UserReports />, 70, 70, t("UserReportAdminPanelTitle"))} ></Button>
            {
                sessionStorage.getItem("id") === accountID ? null :
                    accountStatus === 1 ?
                        <Button styleName="primary-button" text={t("UserProfileButtonPanelBlockUser")} onClick={() => handleModal(<ChangeStatusUser accountStatus={accountStatus} accountID={accountID} />, 50, 50, t("BlockUserTitle"))}></Button>
                        :
                        <Button styleName="primary-button" text={t("UserProfileButtonPanelUnblockUser")} onClick={() => handleModal(<ChangeStatusUser accountStatus={accountStatus} accountID={accountID} />, 50, 50, t("UnblockUserTitle"))} ></Button>
            }
        </div>
    )
}
