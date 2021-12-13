import "./deleteAccount.scss";
import Button from "../../Button/Button";
import { useTranslation } from "react-i18next";
import ImageInformationAlt from "../../../assets/images/ide-36.svg";

export default function DeleteAccount() {
    const { t } = useTranslation();

    return (
        <div className="deleteaccount-main-container">
            <div className="deleteaccount-content-container">
                <div className="deleteaccount-text">
                    <img src={ImageInformationAlt} alt="Texto alternativo TTT"></img>
                    <h1>{t("DeleteAccountDescriptionTitle")}</h1>
                    <p>{t("DeleteAccountDescription")}</p>
                </div>
                <div className="deleteaccount-button-panel">
                    <Button styleName="primary-button" text={t("ButtonCancel")} ></Button>
                    <Button styleName="primary-button" text={t("ButtonDeleteAccount")} ></Button>
                </div>
            </div>
        </div>
    );
}
