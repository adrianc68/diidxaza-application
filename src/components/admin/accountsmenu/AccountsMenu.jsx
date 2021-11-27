import React, { useEffect, useState } from "react";
import "./accountsmenu.scss";
import Button from "../../../components/Button/Button";
import { useTranslation } from "react-i18next";
import UserListItem from "./userlistitem/UserListItem";
import { helpHttp, UrlAPI } from "../../../helpers/helpHttp";

export default function AccountsMenu() {
    const { t } = useTranslation();
    const [accountsItems, setAccountsItems] = useState([]);
    const [errorFetchData, setErrorFetchData] = useState(false);

    const fetchData = () => {
        helpHttp().get(UrlAPI + "accounts", {
            headers: {
                Accept: "application/json",
                "Authorization": sessionStorage.getItem("token")
            }
        }).then((response) => {
            if (response != null) {
                switch (response.status) {
                    case 404:
                    case 400:
                        setErrorFetchData(true);
                        return;
                }
                setAccountsItems(response);
            }
        }, []);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="accountsmenu-main-container">
            <div className="accountsmenu-content">
                <div className="accountsmenu-search-criteria">
                    <div className="form-search-input">
                        <div className="form-search-container-input">
                            <span>{t("AdminReportInputSearchCriteria")}</span>
                            <input type="text"></input>
                        </div>
                        <div className="form-search-input-button">
                            <Button styleName="primary-button">{t("ButtonSearch")}</Button>
                        </div>
                    </div>
                </div>
                <div className="accountsmenu-reports-list-container">
                    <div className="accountsmenu-discussion-list">
                        <ul>
                            {
                                accountsItems.length > 0 ?
                                    accountsItems.map((element) =>
                                        <li><UserListItem account={element} /></li>
                                    )
                                    :
                                    <div className="no-found-records">
                                        <span>{t("NotFoundRecords")}</span>
                                    </div>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
