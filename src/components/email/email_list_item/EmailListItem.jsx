import React from "react";
import { useTranslation } from "react-i18next";
import { useConvertionData } from "../../../hooks/useConvertionData";
import "./emaillistitem.scss";

export default function EmailListItem({ email, typeInbox }) {
    const { t } = useTranslation();
    const { timeAgoFromNow } = useConvertionData();

    return (
        <li className="emailListItem-main-container" id={email.messageID}>
            <div className="emailli-content-container">
                {typeInbox !== "to" ? (
                    <div className="emailli-emails-data">
                        <span className="semibold">{t("ToEmail")}</span>
                        <span>{email.to}</span>
                    </div>
                ) : (
                    <div className="emailli-emails-data">
                        <span className="semibold">{t("FromEmail")}</span>
                        <span>{email.from}</span>
                    </div>
                )}
                <div className="emailli-subject-data">
                    <span>{email.subject}</span>
                </div>
                <div className="emailli-timeago-data">
                    <span>{t("TimeAgoAgo") + timeAgoFromNow(new Date(email.created).getTime()).replace("$day", t("TimeAgoAgoDay"))}</span>
                </div>
                <div className="emailli-size-data">
                    <span>{email.size} B</span>
                </div>
            </div>
        </li>
    );
}
