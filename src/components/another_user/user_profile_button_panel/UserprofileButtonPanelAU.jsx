import Button from "../../button_application/Button";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function UserprofileButtonPanelAU() {
    const { t } = useTranslation();

    return (
        <div className="userprofile-button-panel-content">
            <NavLink className="link" to="/checkprogress">
                <Button styleName="button" text={t("UserProfileButonPanelReportUser")}></Button>
            </NavLink>
        </div>
    );
}
