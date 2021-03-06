import "./verificationCode.scss";
import { useTranslation } from "react-i18next";
import Button from "../../../components/button_application/Button";
import ImageDelivery from "../../../assets/images/ide-34.svg";
import "./signUp.scss";
import { useVerificationForm } from "../../../hooks/useAccountForm";

const validationCode = (code) => {
    let errors = {};
    let regexCode = /^[0-9]{6}$/;
    if (!regexCode.test(code)) {
        errors.code = "Error";
    }
    return errors;
};

export default function VerificationCode() {
    const { t } = useTranslation();

    const { code, errors, loading, response, className, handleChange, handleBlur, handleClickSendCode, handleSubmitVerification, icon } = useVerificationForm(validationCode);

    return (
        <form onSubmit={handleSubmitVerification} className="signup-input-verification-container">
            <div className="signup-input-title-container">
                <h1>{t("SignUpVerificationTitle")}</h1>
            </div>
            <div className="signup-container-information">
                <div className="signup-verification-input-description-container">
                    <img src={ImageDelivery} alt={t("AlternativeMessageImageDecorative")}></img>
                    <span>{t("SignUpVerificationDescription")}</span>
                </div>
                <div className="signup-verification-code-container">
                    <label>
                        <div className="signup-verification-code-input">
                            <p className="p-semibold">{t("SignUpVerificationCodeInput")}</p>
                            <input name="code" type="text" onBlur={handleBlur} onChange={handleChange} value={code} required />
                            <div className="system-message-container">
                                {errors.code && <p className="errorInput">{t("ErrorCode")}</p>}
                                {loading && (
                                    <p className={className}>
                                        {icon} {response}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="signup-verification-code-buttons">
                            <Button type="button" styleName="button" text={t("SignUpVerificationSendCodeButton")} onClick={handleClickSendCode}></Button>
                            <Button type="submit" styleName="button background-green" text={t("SignUpVerificationVerifyButton")}></Button>
                        </div>
                    </label>
                </div>
            </div>
        </form>
    );
}
