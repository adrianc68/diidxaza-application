import React from 'react'
import './verificationCode.scss'
import { useTranslation } from "react-i18next";
import Button from '../../../components/Button/Button'


export default function VerificationCode() {
    const { t } = useTranslation();

    return (
        <form className="signup-input-verification-container">
            <div className="signup-verification-input-description-container">
                <h1>{t("SignUpVerificationTitle")}</h1>
                <span>{t("SignUpVerificationDescription")}</span>
            </div>
            <div className="signup-verification-code-container">
                <label>
                    <div className="signup-verification-code-input">
                        <p>{t("SignUpVerificationCodeInput")}</p>
                        <input className="input" type="text" />
                    </div>
                    <div className="signup-verification-code-buttons">
                        <Button styleName="secondary-button" text={t("SignUpVerificationCancelButton")}></Button>
                        <Button styleName="primary-button" text={t("SignUpVerificationVerifyButton")}></Button>

                    </div>
                </label>
            </div>

        </form>
    )
}
