import React from 'react'
import './signup.scss'
import Topbar from '../../../components/topbar/Topbar'
import { useTranslation } from "react-i18next";
import Button from '../../../components/Button/Button'
import { Link } from 'react-router-dom'
import InputInformation from './InputInformation'
import VerificationCode from './VerificationCode'

export default function SignUp() {
    const { t } = useTranslation();
    
    return (
        <div className="signup-main-container">
            <Topbar>
                <div className="signup-then-login-container">
                    <span>{t("SignUpAlreadyHaveAccount")}</span>
                    <div className="signup-already-buton-container">
                        <Link className="link" to="/login">
                            <Button styleName="primary-button" text={t("SignUpAlreadyHaveAccountButton")}></Button>
                        </Link>
                    </div>
                </div>
            </Topbar>
            <div className="signup-form-container">
                <InputInformation></InputInformation>
                <br/>
                <VerificationCode></VerificationCode>
            </div>
        </div>
    )
}
