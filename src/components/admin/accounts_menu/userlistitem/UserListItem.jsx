import "./userListItem.scss";
import Button from "../../../button_application/Button";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import { useContext } from "react";
import { ModalContext } from "../../../../hooks/ModalContext";

export default function UserListItem({ account }) {
    const { t } = useTranslation();
    const history = useHistory();
    const { setStatusModal } = useContext(ModalContext);

    const handleModal = () => {
        setStatusModal(false);
        history.push({
            pathname: "/profile/" + account.username,
            state: {
                id: account._id,
            },
        });
    };

    return (
        <div className="userlistitem-main-container">
            <div className="userlistitem-content">
                <div className="userlistitem-data-content">
                    <div>
                        <span className="color-gray">{t("UserListItemName")}</span>
                        <span>{account.name + " " + account.lastname}</span>
                    </div>
                    <div>
                        <span className="color-gray">{t("UserListItemUsername")}</span>
                        <span>{account.username}</span>
                    </div>
                </div>
                <div className="userlistitem-button-panel">
                    <Button styleName="text-button blue-text" text={t("ButtonReportSeeUsersDetails")} onClick={handleModal}></Button>
                </div>
            </div>
        </div>
    );
}
