import React, { useState } from 'react'
import Button from '../../Button/Button'
import { useTranslation } from "react-i18next";
import Modal from '../../../components/modal/Modal';
import BlockUser from '../blockuser/BlockUser';
import UnblockUser from '../unblockuser/UnblockUser';
import UserReports from '../userreports/UserReports';

export default function UserprofileButtonPanelADM({ handleModalClick }) {
    const { t } = useTranslation();
    // const [statusModal, setStatusModal] = useState(false);
    // const [component, setComponent] = useState({
    //     sizeHeight: "",
    //     sizeWidth: "",
    //     title: "",
    //     component: <></>,
    // });

    // const handleModal = (ComponentTagA, sizeHeightA, sizeWidthA, titleA) => {
    //     const initialValue = {
    //         sizeHeight: sizeHeightA,
    //         sizeWidth: sizeWidthA,
    //         title: titleA,
    //         object: ComponentTagA,
    //     };
    //     setComponent(initialValue);
    //     setStatusModal(true);
    // }

    return (
        <div className="userprofile-button-panel-content">
            <Button styleName="primary-button" text={t("UserProfileButtonPanelLookReports")} onClick={() => handleModalClick(<UserReports />, 70, 70, t("UserReportAdminPanelTitle"))} ></Button>
            <Button styleName="primary-button" text={t("UserProfileButtonPanelUnblockUser")} onClick={() => handleModalClick(<UnblockUser />, 50, 50, t("UnblockUserTitle"))} ></Button>
            <Button styleName="primary-button" text={t("UserProfileButtonPanelBlockUser")} onClick={() => handleModalClick(<BlockUser />, 50, 50, t("BlockUserTitle"))}></Button>
            {/* {
                statusModal && <Modal statusModal={statusModal} setStatusModal={setStatusModal} sizeHeight={component.sizeHeight} sizeWidth={component.sizeWidth} title={component.title}>
                    {component.object}
                </Modal>
            } */}
        </div>
    )
}
