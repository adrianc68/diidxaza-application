import React, { useContext } from "react";
import Button from "../../button_application/Button";
import { useTranslation } from "react-i18next";
import UserReports from "../user_reports/UserReports";
import ChangeStatusUser from "../change_status/ChangeStatusUser";
import { UserType } from "../../../helpers/UserType";
import { AccountStatus } from "../../../helpers/AccountStatus";
import { ModalContext } from "../../../hooks/ModalContext";
import { useHistory } from "react-router";

export default function UserprofileButtonPanelADM({ account }) {
    const { t } = useTranslation();
    const history = useHistory();
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

    const handleChangeStatusUser = () => {
        history.push("/home");
        history.goBack();
        setStatusModal(false);
    };

    const handleModalUserReports = () => {
        let jsx = <UserReports username={account.username} image={account.image} />;
        handleModal(jsx, "700px", "80vw", t("UserReportAdminPanelTitle"));
    };

    const handleModalBlockStatusUser = () => {
        let jsx = <ChangeStatusUser account={account} setStatusModal={setStatusModal} handleChangeStatusUser={handleChangeStatusUser} />;
        handleModal(jsx, "350px", "50vw", t("BlockUserTitle"));
    };

    const handleModalUnblockStatusUser = () => {
        let jsx = <ChangeStatusUser account={account} setStatusModal={setStatusModal} handleChangeStatusUser={handleChangeStatusUser}/>;
        handleModal(jsx, "350px", "50vw", t("UnblockUserTitle"));
    };

    return (
        <div className="userprofile-button-panel-content">
            {sessionStorage.getItem("role") === UserType.MANAGER && <Button styleName="button" text={t("UserProfileButtonPanelLookReports")} onClick={handleModalUserReports}></Button>}
            {sessionStorage.getItem("id") === account._id ? null : account.status === AccountStatus.UNBLOCKED ? (
                <Button styleName="button" text={t("UserProfileButtonPanelBlockUser")} onClick={handleModalBlockStatusUser}></Button>
            ) : (
                <Button styleName="button" text={t("UserProfileButtonPanelUnblockUser")} onClick={handleModalUnblockStatusUser}></Button>
            )}
        </div>
    );
}
