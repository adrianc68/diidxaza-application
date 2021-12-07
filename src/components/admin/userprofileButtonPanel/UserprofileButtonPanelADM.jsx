import React from "react";
import Button from "../../Button/Button";
import { useTranslation } from "react-i18next";
import UserReports from "../userreports/UserReports";
import ChangeStatusUser from "../changestatus/ChangeStatusUser";
import { UserType } from "../../../helpers/UserType";
import { AccountStatus } from "../../../helpers/AccountStatus";

export default function UserprofileButtonPanelADM({ handleModal, account, setStatusModal }) {
    const { t } = useTranslation();

    return (
        <div className="userprofile-button-panel-content">
            {
                sessionStorage.getItem("role") === UserType.MANAGER &&
                <Button styleName="primary-button" text={t("UserProfileButtonPanelLookReports")} onClick={() => handleModal(<UserReports username={account.username} image={account.image} />, "700px", "80vw", t("UserReportAdminPanelTitle"))} ></Button>
            }
            {
                sessionStorage.getItem("id") === account._id ?
                    null
                    :
                    account.status === AccountStatus.UNBLOCKED ?
                        <Button styleName="primary-button" text={t("UserProfileButtonPanelBlockUser")} onClick={() => handleModal(<ChangeStatusUser account={account} setStatusModal={setStatusModal} />, "350px", "50vw", t("BlockUserTitle"))}></Button>
                        :
                        <Button styleName="primary-button" text={t("UserProfileButtonPanelUnblockUser")} onClick={() => handleModal(<ChangeStatusUser account={account} setStatusModal={setStatusModal} />, "350px", "50vw", t("UnblockUserTitle"))} ></Button>
            }
        </div>
    );
}
