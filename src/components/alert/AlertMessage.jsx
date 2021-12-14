import "./alertMessage.scss";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";

export default function AlertMessage({ content, handleModal }) {
    const { t } = useTranslation();
    return (
        <div className="alert-main-container">
            <div className="alert-content-container">
                <div className="alert-text">
                    <p>{content}</p>
                </div>
                <div className="alert-button-panel">
                    <div>
                        <Button styleName="primary-button dark-blue" text={t("ButtonAccept")} onClick={handleModal}></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
