import "./signUp.scss";
import Topbar from "../../../components/topbar/Topbar";
import { useTranslation } from "react-i18next";
import Button from "../../../components/button_application/Button";
import InputInformation from "./InputInformation";
import VerificationCode from "./VerificationCode";
import { Context } from "../../../hooks/Context";
import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function SignUp() {
    const { t } = useTranslation();
    const { isLogged } = useContext(Context);
    const history = useHistory();

    return !isLogged ? (
        <>
            <Topbar>
                <div className="signup-then-login-container">
                    <div className="signup-already-buton-container">
                        <Button styleName="primary-button" text={t("SignUpAlreadyHaveAccountButton")} onClick={() => history.push("/login")}></Button>
                    </div>
                </div>
            </Topbar>
            <main className="signup-main-container">
                <div className="signup-form-container">
                    <InputInformation></InputInformation>
                    <br />
                    <VerificationCode></VerificationCode>
                </div>
            </main>
        </>
    ) : (
        <Redirect exact to={"/"} />
    );
}
