import React from 'react'
import './userlistitem.scss'
import Button from '../../../Button/Button'
import { useTranslation } from 'react-i18next'

export default function UserListItem() {
    const { t } = useTranslation();
    return (
        <div className="userlistitem-main-container">
            <div className="userlistitem-content">
                <div className="userlistitem-data-content">
                    <div>
                        <span>Nombre completo</span>
                        <span>Josue Medrano Pedro Sanchez</span>
                    </div>

                    <div>
                        <span>Nombre de usuario</span>
                        <span>josuec98</span>
                    </div>
                </div>
                <div className="userlistitem-button-panel">
                    <div>
                        <Button styleName="text-button blue-text" text={t("ButtonReportSeeUsersDetails")}></Button>
                    </div>
                </div>
            </div>

        </div>
    )
}
