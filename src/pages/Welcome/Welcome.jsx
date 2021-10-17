import React from 'react'
import { School } from "@material-ui/icons"
import './welcome.scss'
import Footer from '../../components/footer/Footer'
import { useTranslation } from "react-i18next";
import "../../translations/i18n";
import { Link } from 'react-router-dom';


export default function Welcome() {
    const { t } = useTranslation();

    return (
        <div className="welcome-main-container">
            <div className="welcome-topbar">
                <div className="welcome-topbar-container">
                    <School className="welcome-topbarIcon" />
                </div>

                <div className="welcome-buttons-register-container">

                    <Link className="link-to" to="/signUp">
                        <button className="welcome-signup-button">Sign Up</button>
                    </Link>

                    <Link className="link-to" to="/login">
                        <button className="welcome-login-button">Login</button>
                    </Link>
                </div>


            </div>

            <div className="welcome-main-information-container">
                <h1>Information Container Hello</h1>
            </div>

            <div className="welcome-problems-information-container">
                <h1>Language Problems</h1>
            </div>

            <div className="welcome-benefits-information-container">
                <h1>Benefits Information</h1>
            </div>

            <div className="welcome-choose-account-type-container">
                <h1>Start choosing your account type free / premium (no available)</h1>
            </div>

            <Footer></Footer>


        </div >
    )
}
