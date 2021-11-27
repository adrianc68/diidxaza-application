import React from "react";
import "./underconstruction.scss";
import ImageAlt from "../../assets/images/ide-43.svg";
import { useTranslation } from "react-i18next";

export default function UnderConstruction() {
    const { t } = useTranslation();
    return (
        <div className="underconstruction-main-container">
            <div className="underconstruction-content">
                <img src={ImageAlt} alt={t("AlternativeMessageImageDecorative")}></img>
                <h1>{t("UnderConstruction")}</h1>
            </div>
        </div>
    );
}
