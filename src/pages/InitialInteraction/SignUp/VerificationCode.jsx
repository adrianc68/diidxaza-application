import React from 'react'
import './verificationCode.scss'
import { useTranslation } from "react-i18next";
import Button from '../../../components/Button/Button'
import ImageDelivery from '../../../assets/images/ide-34.svg'

export default function VerificationCode() {
    const { t } = useTranslation();

    return (
        <form className="signup-input-verification-container">
            <div className="signup-input-title-container">
                <h1>{t("SignUpVerificationTitle")}</h1>
            </div>
            <div className="signup-container-information">
                <div className="signup-verification-input-description-container">
                    <img src={ImageDelivery}></img>
                    <span>{t("SignUpVerificationDescription")}</span>
                </div>
                <div className="signup-verification-code-container">
                    <label>
                        <div className="signup-verification-code-input">
                            <p className="p-semibold">{t("SignUpVerificationCodeInput")}</p>
                            <input className="input" type="text" />
                        </div>
                        <div className="signup-verification-code-buttons">
                            <Button styleName="secondary-button" text={t("SignUpVerificationCancelButton")}></Button>
                            <Button styleName="primary-button" text={t("SignUpVerificationVerifyButton")}></Button>

                        </div>
                    </label>
                </div>

            </div>

        </form>
    )
}
