import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { helpHttp, UrlEmailApi } from "../../../../helpers/helpHttp";
import "./emailcontent.scss";
import { useParams } from "react-router-dom";

export default function EmailContent() {
    const { t } = useTranslation();
    const { id } = useParams();
    const [email, setEmail] = useState(null);

    const fetchContentEmailByID = (idParameter) => {
        let idEncoded = encodeURIComponent(idParameter);
        helpHttp()
            .get(UrlEmailApi + "emails/content/" + idEncoded, {
                headers: {
                    Accept: "application/json",
                },
            })
            .then((response) => {
                setEmail(response);
            });
    };

    useEffect(() => {
        fetchContentEmailByID(id);
    }, []);

    return (
        email !== null && (
            <div className="emailcontent-main-container">
                <div className="emailcontent-content-container">
                    <div className="emailcontent-message-headers">
                        <div className="emailcontent-mh">
                            <span>{t("ToEmail")}</span>
                            <span>{email.to}</span>
                        </div>
                        <div className="emailcontent-mh">
                            <span className="semibold">{t("SubjectEmail")}</span>
                            <span>{email.subject}</span>
                        </div>
                        <div className="emailcontent-mh">
                            <span>{t("FromEmail")}</span>
                            <span>{email.from}</span>
                        </div>
                    </div>
                    <div className="emailcontent-body">
                        <div className="emailcontent-b-content">
                            <span>{email.body}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}
