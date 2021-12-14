import React, { useEffect, useState } from "react"
import { helpHttp, UrlAPI, UrlEmailApi } from "../../../helpers/helpHttp";
import { getMessageResponseStatus } from "../../../helpers/MessageResponse";
import EmailListItem from "../emailListItem/EmailListItem"
import "./emailinbox.scss"
import { useHistory } from "react-router";
import LoadingScreen from "../../animation/loadingScreen/LoadingScreen"
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function EmailInbox({ typeInbox }) {
    const history = useHistory();
    const { t } = useTranslation();
    const [serverError, setServerError] = useState(null);
    const [emails, setEmails] = useState([]);
    const [isDataLoaded, setLoadedData] = useState(false);

    const fetchEmailData = () => {
        helpHttp().get(UrlAPI + "accounts/" + sessionStorage.getItem("id"), {
            headers: {
                Accept: "application/json",
                "Authorization": sessionStorage.getItem("token")
            }
        }).then((response) => {
            if (response != null) {
                if (response.age != null) {
                    sessionStorage.setItem("email", response.email);
                    fetchInboxEmailData(response.email);
                    return;
                }
                setServerError(getMessageResponseStatus(response));
            }
        });
    };

    const fetchInboxEmailData = (email) => {
        var email_encoded = encodeURIComponent(email);
        helpHttp().get(UrlEmailApi + "emails/" + typeInbox + "/" + email_encoded, {
            headers: {
                Accept: "application/json",
            }
        }).then((response) => {
            if (response != null) {
                if (response.length > 0) {
                    setEmails(response);
                    setLoadedData(true);
                    return;
                }
                setServerError(t("ServerError404"));
            }
        });
    }

    const handleURL = () => {
        var url = null;
        if (typeInbox === "to") {
            url = "inbox";
        } else if (typeInbox === "from") {
            url = "sent";
        }
        return url;
    }

    useEffect(() => {
        if (typeInbox === "to" || typeInbox === "from") {
            fetchEmailData();
        }

        return () => {
            setLoadedData(false);
            setServerError(null);
            setEmails([]);

        }
    }, [history.location.pathname]);

    return (
        isDataLoaded ?
            <ul>
                {
                    emails.length > 0 &&
                    emails.map((element) =>
                        <Link className="emailinbox-navlink" to={"/email/" + (handleURL()) + "/" + encodeURIComponent(element.messageID)}>
                            <EmailListItem email={element} typeInbox={typeInbox}></EmailListItem>
                        </Link>
                    )
                }
            </ul>
            :
            <LoadingScreen></LoadingScreen>
    )
}
