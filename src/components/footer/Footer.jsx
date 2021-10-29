import React from 'react';
import './footer.scss';
import { useTranslation } from "react-i18next";
import DiidxazaLogo from '../logo/DiidxazaLogo'
import { Link } from 'react-router-dom';
import {BsFacebook, BsTwitter, BsYoutube, BsGithub} from 'react-icons/bs'

export default function Footer() {
    const { t } = useTranslation();

    return (
        <>
            <div className="footer-main-container">
                <div className="footer-bottom-logo-container">
                    <div className="footer-logo-container">
                        <DiidxazaLogo styleClass="logo-black-link"></DiidxazaLogo>
                    </div>
                </div>
                <div className="footer-links-container">
                    <div className="footer-links">

                    </div>
                </div>
                <div className="footer-bottom-container">
                    <div className="footer-bottom-container-documents">
                        <ul>
                            <li>
                                <Link className="link" to="/home">
                                    <span>@ 2021 Diidxaza App</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="link" to="/not-found">
                                    <span>{t("FooterTerms")}</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="link" to="/not-found">
                                    <span>{t("FooterPrivacy")}</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="link" to="/not-found">
                                    <span>{t("FooterSiteMap")}</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-bottom-container-social-networks">
                        <div className="footer-bottom-social-networks">
                            <ul>
                                <li>
                                    <Link className="link" to="/not-found">
                                    <BsFacebook/>

                                    </Link>
                                </li>
                                <li>
                                    <Link className="link" to="/not-found">
                                        <BsTwitter/>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link" to="/not-found">
                                        <BsYoutube/>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link" to="/not-found">
                                        <BsGithub />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
