import "./logo.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../translations/i18n";
import { IoSchool } from "react-icons/io5/";


export default function DiidxazaLogo(props) {
    const { t } = useTranslation();

    return (
        <div>
            <Link className={props.styleClass} to="/home">
                <IoSchool className="logo-icon"/>
                <span className="logo-name">{t("LogoName")}</span>
            </Link>
        </div>
    )
}
