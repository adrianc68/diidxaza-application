import React, { useState } from 'react'
import Button from '../../Button/Button'
import { useTranslation } from "react-i18next";
import Modal from '../../../components/modal/Modal';
import BlockUser from '../blockuser/BlockUser';
import UnblockUser from '../unblockuser/UnblockUser';
import UserReports from '../userreports/UserReports';

export default function UserprofileButtonPanelADM() {
    const { t } = useTranslation();
    const [statusModal, setStatusModal] = useState(false);
    const [component, setComponent] = useState({
        sizeHeight: "",
        sizeWidth: "",
        title: "",
        component: <></>,
    });

    const handleModal = (ComponentTagA, sizeHeightA, sizeWidthA, titleA) => {
        const test = {
            sizeHeight: sizeHeightA,
            sizeWidth: sizeWidthA,
            title: titleA,
            object: ComponentTagA,
        };
        setComponent(test);
        setStatusModal(true);
    }

    return (
        <div>
            <div>
                <Button styleName="primary-button" text={t("UserProfileButtonPanelLookReports")} onClick={() => handleModal(<UserReports />, 50, 50, t("UserReportAdminPanelTitle")) } ></Button>
            </div>
            <div>
                <Button styleName="primary-button" text={t("UserProfileButtonPanelUnblockUser")} onClick={() => handleModal(<BlockUser />, 50, 50, t("BlockUserTitle"))} ></Button>
            </div>
            <div>
                <Button styleName="primary-button" text={t("UserProfileButtonPanelBlockUser")} onClick={() => handleModal(<UnblockUser />, 50, 50,t("UnblockUserTitle"))}></Button>
            </div>
            <div>

            </div>
            {
                statusModal && <Modal statusModal={statusModal} setStatusModal={setStatusModal} sizeHeight={component.sizeHeight} sizeWidth={component.sizeWidth} title={component.title}>
                    {component.object}
                </Modal>
            }


        </div>
    )
}
