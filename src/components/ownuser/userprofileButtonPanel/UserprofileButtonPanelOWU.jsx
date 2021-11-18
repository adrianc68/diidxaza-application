import React, { useState } from 'react'
import Button from '../../Button/Button'
import { NavLink } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import DeleteAccount from '../DeleteAccount/DeleteAccount';
import Modal from '../../modal/Modal';

export default function UserprofileButtonPanelOWU() {
    const { t } = useTranslation();
    const [statusModal, setStatusModal] = useState(false);
    const [component, setComponent] = useState({
        sizeHeight: "",
        sizeWidth: "",
        title: "",
        component: <></>,
    });

    const handleModal = (ComponentTagA, sizeHeightA, sizeWidthA, titleA) => {
        const initialValue = {
            sizeHeight: sizeHeightA,
            sizeWidth: sizeWidthA,
            title: titleA,
            object: ComponentTagA,
        };
        setComponent(initialValue);
        setStatusModal(true);
    }

    return (
        <div className="userprofile-button-panel-content">
                <Button styleName="primary-button" text={t("UserProfileButtonPanelDeleteAccount")} onClick={() => handleModal(<DeleteAccount/>, 70, 70, t("UserReportAdminPanelTitle"))} ></Button>
            <NavLink className="link" to="/checkprogress">
                <Button styleName="primary-button" text={t("UserProfileButtonPanelCheckProgress")} ></Button>
            </NavLink>
            <NavLink className="link" to="/editprofile">
                <Button styleName="primary-button" text={t("UserProfileButtonPanelEditProfile")} ></Button>
            </NavLink>
            {
                statusModal && <Modal statusModal={statusModal} setStatusModal={setStatusModal} sizeHeight={component.sizeHeight} sizeWidth={component.sizeWidth} title={component.title}>
                    {component.object}
                </Modal>
            }

        </div>
    )
}