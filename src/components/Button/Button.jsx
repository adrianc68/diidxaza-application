import React from 'react'
import "./primaryButton.scss"
import { useTranslation } from "react-i18next";
import "../../translations/i18n";

export default function Button(props) {
    const { t } = useTranslation();

    return (
        <div>
            <Button className={props.styleName}>
                <span>{t(props.text)}</span>
            </Button>
        </div>
    )
}


