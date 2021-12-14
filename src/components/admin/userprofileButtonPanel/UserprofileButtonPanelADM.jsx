import React, { useContext } from "react";
import Button from "../../Button/Button";
import { useTranslation } from "react-i18next";
import UserReports from "../userreports/UserReports";
import ChangeStatusUser from "../changestatus/ChangeStatusUser";
import { UserType } from "../../../helpers/UserType";
import { AccountStatus } from "../../../helpers/AccountStatus";
import { ModalContext } from "../../../helpers/ModalContext";

export default function UserprofileButtonPanelADM({ account }) {
    const { t } = useTranslation();
    const { setStatusModal, setComponent } = useContext(ModalContext);

    const handleModal = (ComponentTagA, sizeHeightA, sizeWidthA, titleA) => {
        const initialValue = {
            sizeHeight: sizeHeightA,
            sizeWidth: sizeWidthA,
            title: titleA,
            object: ComponentTagA,
            handleModal: () => {
                setStatusModal(false);
            },
        };
        setComponent(initialValue);
        setStatusModal(true);
    };

    const handleModalUserReports = () => {
        var jsx = <UserReports username={account.username} image={account.image} />;
        handleModal(jsx, "700px", "80vw", t("UserReportAdminPanelTitle"));
    };

    const handleModalBlockStatusUser = () => {
        var jsx = <ChangeStatusUser account={account} setStatusModal={setStatusModal} />;
        handleModal(jsx, "350px", "50vw", t("BlockUserTitle"));
    };

    const handleModalUnblockStatusUser = () => {
        var jsx = <ChangeStatusUser account={account} setStatusModal={setStatusModal} />;
        handleModal(jsx, "350px", "50vw", t("UnblockUserTitle"));
    };

    return (
        <div className="userprofile-button-panel-content">
            {sessionStorage.getItem("role") === UserType.MANAGER && <Button styleName="primary-button" text={t("UserProfileButtonPanelLookReports")} onClick={handleModalUserReports}></Button>}
            {sessionStorage.getItem("id") === account._id ? null : account.status === AccountStatus.UNBLOCKED ? (
                <Button styleName="primary-button" text={t("UserProfileButtonPanelBlockUser")} onClick={handleModalBlockStatusUser}></Button>
            ) : (
                <Button styleName="primary-button" text={t("UserProfileButtonPanelUnblockUser")} onClick={handleModalUnblockStatusUser}></Button>
            )}
        </div>
    );
}
