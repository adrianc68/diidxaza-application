import "./footer.scss";
import { useTranslation } from "react-i18next";
import DiidxazaLogo from "../logo/DiidxazaLogo";
import { Link } from "react-router-dom";
import {BsFacebook, BsTwitter, BsYoutube, BsGithub} from "react-icons/bs";

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
                                <Link className="link" to="/terms">
                                    <span>{t("FooterTerms")}</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="link" to="/privacy">
                                    <span>{t("FooterPrivacy")}</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="link" to="/sitemap">
                                    <span>{t("FooterSiteMap")}</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-bottom-container-social-networks">
                        <div className="footer-bottom-social-networks">
                            <ul>
                                <li>
                                    <Link className="link" to="/facebook">
                                    <BsFacebook/>

                                    </Link>
                                </li>
                                <li>
                                    <Link className="link" to="/twitter">
                                        <BsTwitter/>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link" to="/youtube">
                                        <BsYoutube/>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link" to="/github.com">
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
